import axios from "axios";
import { useState,useEffect  } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setselectedProductId } from "../../redux/userSlice";
import { addCartDetail } from "../../redux/cartSlice";
import { Toast } from "../../components";
import { pushMessage } from "../../redux/toastSlice";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ScheduleCourses() {
    const id = useSelector((state)=> state.user.selectedProductId);
    // 所有課程資料
    const [ allCourses, setAllCourses ] = useState([]);
    // 選定課程資料
    const [ selectedCourse, setSelectedCourse ] = useState([]);
    // 選定老師
    const [ selectedTeacher, setSelectedTeacher] = useState(null);
    // 老師課表
    const [ teacherSchedules, setTeacherSchedules] = useState({});
    // 選定的時段
    const [ selectedTimeSlot, setSelectedTimeSlot ] = useState({});
    // btn active
    const [ btnActive, setBtnActive ] = useState(id);

    const dispatch = useDispatch();
    

// 抓全部課程資料
    useEffect(()=>{
        const getAllCourse = async ()=>{
            try{
                const response = await axios.get(`${BASE_URL}/api/${API_PATH}/products/all`);
                setAllCourses(response.data.products);

                                
                // 檢查是否有課程時段
                const hasTimeSlots = response.data.products.some(product => 
                    product.timeSlots && product.timeSlots.length > 0
                );
                
                if (!hasTimeSlots) {
                    dispatch(pushMessage({
                        text: '目前沒有課程',
                        status: 'failed'
                    }));
                }
            }
            catch(err){
                alert('資料取得失敗');
            }
        }
        getAllCourse();
    },[]);

// 抓詳細選取的課程的資料
    useEffect(()=>{
        const getIdCourse = async()=>{
            try{
                if(!id)return;

                const response = await axios.get(`${BASE_URL}/api/${API_PATH}/product/${id}`)
                setSelectedCourse(response.data.product);
            }
            catch(err){
                alert('資料取得失敗');
            }
        };
        getIdCourse();
    },[id]); // 課程id變化時重新取得資料


    // 操作按課程切換課程id（儲存點擊按鈕id)
    const handleCourseSelect = (id) =>{
        dispatch(setselectedProductId(id));
        setBtnActive(id);
    }

    // 操作按教練按鈕儲存名稱
    const handleTeacherSelect = (teacherName, e) => {
        if (e) e.preventDefault();
        
        // 保存當前捲動位置
        const scrollPosition = window.scrollY;
        
        // 設置狀態
        setSelectedTeacher(teacherName);
        
        // 在下一個事件循環中恢復捲動位置
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 0);
    }

    // 操作按課程時段存timeslot資料
    const handleTimeSlotSeclect = (slot,e)=>{
        if (e) e.preventDefault();
        
        // 保存當前捲動位置
        const scrollPosition = window.scrollY;

        setSelectedTimeSlot(slot);
        // console.log(selectedTimeSlot);
        // 在下一個事件循環中恢復捲動位置
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 0);
    }

    // 當選定課程變化時，處理教練資料
    useEffect(() => {
        if (selectedCourse?.timeSlots) {
        // 獲取不重複的教練列表
            // new Set(...) 創建一個 Set 物件，自動去除重複值
            // [...new Set(...)] 將 Set 轉換回陣列
        const uniqueTeachers = [...new Set(selectedCourse.timeSlots.map(slot => slot.teacher))];
        // console.log(uniqueTeachers);
        
        // 建立每位教練的課程時間表
        const schedules = {}; //存每位教練的時間表
        uniqueTeachers.forEach(teacher => {
            schedules[teacher] = selectedCourse.timeSlots
            .filter(slot => slot.teacher === teacher)
            .map(slot => ({
            date: slot.date,
            time: slot.time,
            course_id: slot.course_id
            }))
            .sort((a, b) => {
                // 先比較日期
                const dateComparison = new Date(a.date) - new Date(b.date);
                if (dateComparison !== 0) return dateComparison;
                
                // 如果日期相同，再比較時間（localeCompare() 是字串的內建方法，用於比較兩個字串的順序）
                return a.time.localeCompare(b.time);
            });
        });
        
        setTeacherSchedules(schedules);
        setSelectedTeacher(null); // 重設選定的教練     
        }
    }, [selectedCourse]);

    // 從 Redux 獲取購物車資料
    const cartDetails = useSelector(state => state.cart.cartDatails);

    // 使用 useEffect 監視購物車資料變化
    useEffect(() => {
        console.log('購物車資料已更新:', cartDetails);
        console.log(selectedCourse);
        
    }, [cartDetails]);

    // 操作表單提交
    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            // 判斷全部選項都有選
            if(!selectedCourse || !selectedTeacher || !selectedTimeSlot){
                dispatch(pushMessage({
                    text:`請選擇完整資料`,
                    status: "failed"
                }));
                return;
            }

            //判斷現在選的跟redux清單內的course_id有沒有重複(重複為true)
            const isDupicate = cartDetails.some(
                (item) => item.course_id === selectedTimeSlot.course_id
            );

            // 重複直接返回，不做後續動作
            if(isDupicate){
                dispatch(pushMessage({
                    text:`購物車已有此課程`,
                    status: "failed"
                }));
                
                return; 
            }

            // 將資料存到redux
            const reduxCourseDetail= dispatch(addCartDetail({
                product_id: id,
                course_id: selectedTimeSlot.course_id,
                title: selectedCourse.title,
                price: selectedCourse.price,
                teacher: selectedTeacher,
                date: selectedTimeSlot.date,
                time: selectedTimeSlot.time,
                img: selectedCourse.imageUrl
            }))
            console.log(reduxCourseDetail);
            

            // 打包購物車POST API參數
            const requestData ={
                data: {
                    product_id: id,
                    qty: 1
                }
            }

            // POST API
            const res = await axios.post(`${BASE_URL}/api/${API_PATH}/cart`,requestData);

            if(res.data.success){
                dispatch(pushMessage({
                    text:`課程已添加到購物車`,
                    status: "success"
                }))

                // 成功後重置所有選擇狀態
                setBtnActive(null);          // 重置課程選擇的 active 狀態
                setSelectedTeacher(null);    // 重置教練選擇
                setSelectedTimeSlot({});     // 重置時段選擇
            }else{
                dispatch(pushMessage({
                    text: `添加失敗: ${res.data.message || '未知錯誤'}`,
                    status: "failed"
                }))
            }
            
        }
        catch(err){
            dispatch(pushMessage({
                text: `添加失敗: ${res.data.message || '未知錯誤'}`,
                status: "failed"
            }))
        }


    }

    

    // 課程選擇元件
    function CourseSelection(){
        return(
            <div className="d-flex mt-15">
                {/* <!-- 表單標題 --> */}
                <h4 className="fs-1">1</h4>
                <div className="w-100 mt-4 ms-5">
                    <h4 className="fs-4 mb-3">選擇課程</h4>
                    <hr className="mb-5" />

                    {/* <!-- 課程選項 --> */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 btnStyle">
                        {allCourses.map((item)=>{
                            const isSlotInCourse = !item.timeSlots;
                            return(
                            <div className="col" key={item.id}>
                            <button 
                            onClick={()=>handleCourseSelect(item.id)}
                            type="button" 
                            className={`btn btn-primary fs-5 w-100 ${btnActive === item.id ? 'active':''} ${isSlotInCourse ? 'disabled':''}`}>{item.title}</button>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }

    // 選擇教練元件
    function TeacherSelection(){
        if (!selectedCourse?.timeSlots || 
            !selectedCourse.timeSlots.some(slot => 
                slot.course_id.trim() !== "" && 
                slot.date.trim() !== "" && 
                slot.teacher.trim() !== "" && 
                slot.time.trim() !== ""
            )|| !btnActive) {
            return (
                <div className="d-flex mt-15">
                <h4 className="fs-1">2</h4>
                <div className="w-100 mt-4 ms-5">
                    <h4 className="fs-4 mb-3">選擇教練</h4>
                    <hr className="mb-5" />
                    <p>請先選擇課程</p>
                </div>
                </div>
            );
        }

        // 獲取不重複的教練列表
        const uniqueTeachers = [...new Set(selectedCourse.timeSlots.map(slot => slot.teacher))];

        return(
        <div className="d-flex mt-15">
            {/* <!-- 表單標題 --> */}
            <h4 className="fs-1">2</h4>
            <div className="w-100 mt-4 ms-5">
                <h4 className="fs-4 mb-3">選擇教練</h4>
                <hr className="mb-5" />

                {/* <!-- 教練選項 --> */}
                <div className="row row-cols-md-2 row-cols-lg-4 g-3 btnStyle">
                    {uniqueTeachers.map((teacher)=>{
                        return( 
                            <div className="col" key={teacher}>
                            <button 
                            onClick={(e)=>handleTeacherSelect(teacher,e)}
                            type="button" 
                            className={`btn btn-primary fs-5 w-100 ${selectedTeacher === teacher ? 'active':''}`}
                            >{teacher}</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        )
    }

    // 選擇日期元件
    function DateTimeSelection(){
        if (!selectedTeacher || !selectedCourse.timeSlots || selectedCourse.timeSlots.length === 0) {
            return (
                <div className="d-flex mt-15 mb-20">
                <h4 className="fs-1">3</h4>
                <div className="w-100 mt-4 ms-5">
                    <h4 className="fs-4 mb-3">選擇日期、時段</h4>
                    <hr className="mb-5" />
                    <p>請先選擇教練</p>
                </div>
                </div>
            );
        }
    
        // 獲取該教練的所有上課日期和時間
        const teacherDates = teacherSchedules[selectedTeacher] || [];

        return(
        <div className="d-flex mt-15 mb-20">
            {/* <!-- 表單標題 --> */}
            <h4 className="fs-1 ">3</h4>
            <div className="w-100 mt-4 ms-5">
                <h4 className="fs-4 mb-3">選擇日期、時段</h4>
                <hr className="mb-5" />

                {/* <!-- 日期、時段選項 --> */}
                <div className="datePicker row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 btnStyle">
                    
                    {teacherDates.map((slot, index) => {
                        // 檢查這個時段是否已經在購物車中
                        const isSlotInCart = cartDetails?.some(item => item.course_id === slot.course_id);

                        return(
                    <div key={index} className="col">
                        <div className={`border-0 btn btn-primary text-white d-flex ${selectedTimeSlot === slot ? 'active' : ''} ${isSlotInCart ? 'disabled':''}`}
                        >
                            <input 
                            type="checkbox" 
                            className="btn-check"
                            name="timeSlot" 
                            id={`slot-${index}`}
                            onChange={(e)=> handleTimeSlotSeclect(slot,e)}
                            checked={selectedTimeSlot === slot}
                            />
                            <label htmlFor={`slot-${index}`} className="ms-2 fs-5 w-100">
                            {slot.date} {slot.time}
                            </label>
                        </div>
                        {isSlotInCart ? <h5 className="text-secondary"> 已經在購物車囉~</h5> : ''}
                    </div>
                    )})}
                    
                </div>
            </div>
        </div>
        )
    }



    return(<>
    <main className="scheduleCourse">
        <form className="container">
        <CourseSelection />
        <TeacherSelection />
        <DateTimeSelection />
        
        <div className="formSubmit d-flex justify-content-center mb-15">
            <button
                onClick={handleSubmit} 
                type="button" 
                className="btn btn-secondary text-white fs-4">加入購物車</button>
        </div>
        </form>
    </main>

    <Toast />
    </>)
}