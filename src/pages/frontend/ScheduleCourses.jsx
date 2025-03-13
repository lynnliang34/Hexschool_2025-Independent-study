import axios from "axios";
import { useState,useEffect  } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setselectedProductId } from "../../redux/userSlice";
import { addCartDetail } from "../../redux/cartSlice";

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

    const dispatch = useDispatch();
    

// 抓全部課程資料
    useEffect(()=>{
        const getAllCourse = async ()=>{
            try{
                const response = await axios.get(`${BASE_URL}/api/${API_PATH}/products/all`);
                setAllCourses(response.data.products);
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
    }

    // 操作按教練按鈕儲存名稱
    const handleTeacherSelect = (teacherName) =>{
        setSelectedTeacher(teacherName);
        console.log(selectedCourse);
        console.log(teacherSchedules);
    }

    // 操作按課程時段存timeslot資料
    const handleTimeSlotSeclect = (slot)=>{
        setSelectedTimeSlot(slot);
        console.log(selectedTimeSlot);
    }

    // 操作表單提交
    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            // 將資料存到redux
            dispatch(addCartDetail({
                product_id: id,
                course_id: selectedTimeSlot.course_id,
                title: selectedCourse.title,
                price: selectedCourse.price,
                teacher: selectedTeacher,
                date: selectedTimeSlot.date,
                time: selectedTimeSlot.time
            }))

            // 打包購物車POST API參數
            const requestData ={
                data: {
                    product_id: id,
                    qty: 1,
                }
            }

            // POST API
            const res = await axios.post(`${BASE_URL}/api/${API_PATH}/cart`,requestData);
            
            alert(res.data.success);
        }
        catch(err){
            alert('預約失敗',err);
        }
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
                            return(
                            <div className="col" key={item.id}>
                            <button 
                            onClick={()=>handleCourseSelect(item.id)}
                            type="button" 
                            className={`btn btn-primary fs-5 w-100 ${id === item.id ? 'active':''}`}>{item.title}</button>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }

    // 選擇教練元件
    function TeacherSelection(){
        if (!selectedCourse?.timeSlots) {
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
                <div className="row row-cols-3 row-cols-md-4 g-3 btnStyle">
                    {uniqueTeachers.map((teacher)=>{
                        return( 
                            <div className="col" key={teacher}>
                            <button 
                            onClick={()=>handleTeacherSelect(teacher)}
                            type="button" 
                            className={`btn btn-primary fs-5 w-100 ${selectedTeacher === teacher ? 'active':''}`}>{teacher}</button>
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
        if (!selectedTeacher) {
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
                <div className="datePicker my-10 row row-cols-3 row-cols-md-4 g-3 btnStyle">
                    
                    {teacherDates.map((slot, index) => (
                    <div key={index} className="col">
                        <div className={`border-0 btn btn-primary text-white d-flex ${selectedTimeSlot === slot ? 'active' : ''}`}>
                            <input 
                            type="checkbox" 
                            className="btn-check"
                            name="timeSlot" 
                            id={`slot-${index}`}
                            onChange={()=> handleTimeSlotSeclect(slot)}
                            checked={selectedTimeSlot === slot}
                            />
                            <label htmlFor={`slot-${index}`} className="ms-2 fs-5 w-100">
                            {slot.date} {slot.time}
                            </label>
                        </div>
                    </div>
                    ))}
                    
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
                type="submit" 
                className="btn btn-secondary text-white fs-4">送出</button>
        </div>
        </form>
    </main>
    </>)
}