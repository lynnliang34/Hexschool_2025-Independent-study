import axios from "axios";
import { useState,useEffect, use } from "react"
import { useLocation, useParams } from "react-router";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ScheduleCourses() {
    // 接收預約頁id
    const location = useLocation();
    const id = location.state?.courseId;
    console.log(id);
    // 所有課程資料
    const [ allCourses, setAllCourses ] = useState([]);
    // 選定課程資料
    const [ selectedCourse, setSelectedCourse ] = useState([]);
    // 選定課程ID(預設為前一頁選擇之id)
    const [ selectedId, setSelectedId] = useState(id);
    // 選定老師
    const [ selectedTeacher, setSelectedTeacher] = useState(null);
    // 老師課表
    const [ teacherSchedules, setTeacherSchedules] = useState({});
    // 選定的時段
    const [ selectedTimeSlot, setSelectedTimeSlot ] = useState({});


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
                if(!selectedId)return;

                const response = await axios.get(`${BASE_URL}/api/${API_PATH}/product/${selectedId}`)
                setSelectedCourse(response.data.product);
            }
            catch(err){
                alert('資料取得失敗');
            }
        };
        getIdCourse();
    },[selectedId]); // 課程id變化時重新取得資料


    // 操作按課程切換課程id（儲存點擊按鈕id
    const handleCourseSelect = (id) =>{
        setSelectedId(id);
        // console.log(`selectedId:${selectedId}`)
        // console.log({selectedCourse})
    }

    // 操作按教練按鈕儲存名稱
    const handleTeacherSelect = (teacherName) =>{
        setSelectedTeacher(teacherName);
    }

    // 操作按課程時段存timeslot資料
    const handleTimeSlotSeclect = (slot)=>{
        setSelectedTimeSlot(slot);
    }

    // 操作表單提交
    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            // 打包購物車POST API參數
            const requestData ={
                data: {
                    product_id: selectedId,
                    qty: 1,
                    selectedTimeSlot: [selectedTimeSlot]
                }
            }

            // POST API
            const res = await axios.post(`${BASE_URL}/api/${API_PATH}/cart`,requestData);
            
            alert('res.data.success');
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
            schedules[teacher] = selectedCourse.timeSlots.filter(slot => 
            slot.teacher === teacher
            ).map(slot => ({
            date: slot.date,
            time: slot.time,
            course_id: slot.course_id
            }));
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
                            className={`btn btn-primary fs-5 w-100 ${selectedId === item.id ? 'active':''}`}>{item.title}</button>
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
                            <div className="col">
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
                <div>
                    <div className="datePicker my-10">
                        <div className="available-slots">
                            {teacherDates.map((slot, index) => (
                            <div key={index} className="slot-item p-2 border rounded mb-2">
                                <input 
                                type="radio" 
                                name="timeSlot" 
                                id={`slot-${index}`}
                                onChange={()=> handleTimeSlotSeclect(slot)}
                                checked={selectedTimeSlot === slot}
                                />
                                <label htmlFor={`slot-${index}`} className="ms-2">
                                {slot.date} {slot.time}
                                </label>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="bg-primary-2 px-lg-20 py-8 mb-8">
                        <div
                            className="monthSwitch d-flex justify-content-between align-items-center mx-3 mx-md-8 mb-8">
                            <button type="button" className="btn btn-primary rounded-pill fs-5 text-primary-2">
                                <i className="bi bi-chevron-left"></i></button>
                            <h4 className="fw-bold">2025/3</h4>
                            <button type="button" className="btn btn-primary rounded-pill fs-5 text-primary-2">
                                <i className="bi bi-chevron-right"></i></button>
                        </div>

                        <div className="timeSelect">
                            <div className="row mx-auto text-center gy-3 fs-6 fs-lg-4 fw-bold mb-5">
                                <div className="col">
                                    <h4>日</h4>
                                    <p>3/9</p>
                                    <div className="d-flex flex-column text-center mt-5 mb-5">
                                        <button type="button" className="btn fs-6 fs-lg-4" disabled>7:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">8:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">9:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">10:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">11:00</button>
                                    </div>

                                    <div className="d-flex flex-column text-center">

                                        <button type="button" className="btn fs-6 fs-lg-4">13:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">14:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">15:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">16:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">17:00</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <h4>一</h4>
                                    <p>3/10</p>

                                    <div className="d-flex flex-column text-center mt-5 mb-5">
                                        <button type="button" className="btn fs-6 fs-lg-4" disabled>7:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">8:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">9:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">10:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">11:00</button>
                                    </div>

                                    <div className="d-flex flex-column text-center">
                                        <button type="button" className="btn fs-6 fs-lg-4">13:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">14:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">15:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">16:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">17:00</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <h4>二</h4>
                                    <p>3/11</p>
                                    <div className="d-flex flex-column text-center mt-5 mb-5">
                                        <button type="button" className="btn fs-6 fs-lg-4" disabled>7:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">8:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">9:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">10:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">11:00</button>
                                    </div>

                                    <div className="d-flex flex-column text-center">
                                        <button type="button" className="btn fs-6 fs-lg-4">13:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">14:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">15:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">16:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">17:00</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <h4>三</h4>
                                    <p>3/12</p>
                                    <div className="d-flex flex-column text-center mt-5 mb-5">
                                        <button type="button" className="btn fs-6 fs-lg-4" disabled>7:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">8:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">9:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">10:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">11:00</button>
                                    </div>

                                    <div className="d-flex flex-column text-center">
                                        <button type="button" className="btn fs-6 fs-lg-4">13:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">14:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">15:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">16:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">17:00</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <h4>四</h4>
                                    <p>3/13</p>
                                    <div className="d-flex flex-column text-center mt-5 mb-5">
                                        <button type="button" className="btn fs-6 fs-lg-4" disabled>7:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">8:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">9:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">10:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">11:00</button>
                                    </div>

                                    <div className="d-flex flex-column text-center">
                                        <button type="button" className="btn fs-6 fs-lg-4">13:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">14:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">15:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">16:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">17:00</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <h4>五</h4>
                                    <p>3/14</p>
                                    <div className="d-flex flex-column text-center mt-5 mb-5">
                                        <button type="button" className="btn fs-6 fs-lg-4" disabled>7:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">8:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">9:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">10:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">11:00</button>
                                    </div>

                                    <div className="d-flex flex-column text-center">
                                        <button type="button" className="btn fs-6 fs-lg-4">13:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">14:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">15:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">16:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">17:00</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <h4>六</h4>
                                    <p>3/15</p>
                                    <div className="d-flex flex-column text-center mt-5 mb-5">
                                        <button type="button" className="btn fs-6 fs-lg-4" disabled>7:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">8:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">9:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">10:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">11:00</button>
                                    </div>

                                    <div className="d-flex flex-column text-center">
                                        <button type="button" className="btn fs-6 fs-lg-4">13:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">14:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">15:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">16:00</button>
                                        <button type="button" className="btn fs-6 fs-lg-4">17:00</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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