import { Link, useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios"; 
import { useSelector, useDispatch } from "react-redux";
import { setPreviousPage } from "../../redux/userSlice";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function CourseDetail() {
    // 課程id
    const { id } = useParams();
    // 儲存課程資料
    const [course, setCourse] = useState({});
    // 取得指定id課程資料
    useEffect(()=>{
        const getCourse = async()=>{
            try{
                const response = await axios.get(`${BASE_URL}/api/${API_PATH}/product/${id}`)
                setCourse(response.data.product);
            }
            catch(err){
                alert('資料取得失敗');
            }
        };
        getCourse();
    },[id]); // 課程id變化時重新取得資料


    // 從Redux store取得使用者的登入狀態（true 或 false）
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    // 從 React Router 的 useNavigate hook 取得，用於頁面導航
    const navigate = useNavigate();
    // 從 useDispatch hook 取得，用於發送 actions 到 Redux store
    const dispatch = useDispatch();
    // 處理預約課程按鈕點擊（登入後返回此頁）
    const handleBookCourse = () =>{
        // 判斷是否已登入
        if(isAuthenticated){
            // 如果已登入，導向預約課程頁面
            navigate("/schedule-courses")
        }
        else{
            // 如果用戶未登入，先儲存目標頁面到 Redux
            dispatch(setPreviousPage("/schedule-courses"));
            // 然後導航到登入頁面
            navigate("/login");
        }
    }

    return (<>
        {/* <!-- section1 --> */}
        <div className="container">
            {/* <!-- 分隔線 --> */}
            <picture>
                <source
                srcSet="./images/dividers/divider-sm.png"
                media="(max-width: 576px)"
                className="mt-4 mb-2"
                />
                <img
                src="./images/dividers/divider-lg.png"
                alt=""
                className="d-lg-none"
                />
            </picture>

            <h1 className="fs-3 fs-lg-1 mt-lg-12">{course.title}</h1>
                <p className="fs-7 fs-lg-5 mt-2 mt-lg-4">
                    {course.description}
                </p>

            {/* <!-- 手機版課程介紹 --> */}
            <div className="d-lg-none border border-secondary rounded my-6 p-2">
                <h2 className="fs-4 text-secondary mb-2">{course.category}</h2>
                <img
                src={course.imageUrl}
                alt=""
                className="object-fit-cover rounded-20 course-img mb-2"
                />
                {/* 判斷課程內容是否存在，存在才渲染畫面 */}
                {course?.content &&(<p className="fs-7 mb-2">
                1.課程時長:{course.content.class_duration}<br />
                2.上課時間:{course.content.class_time}<br />
                3.適用年齡:{course.content.suitable_age}<br />
                4.身體狀況要求:{course.content.physical_requirements}<br />
                5.場地與設備:{course.content.venue_and_equipment}
                </p>)}
                <button 
                onClick={handleBookCourse}
                className="btn btn-secondary course-btn text-white">
                預約課程
                    <svg
                        className="course-arrow"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M3.72973 1L9 6L3.72973 11L2.5 9.83333L6.54054 6L2.5 2.16667L3.72973 1Z"
                        fill="white"
                        />
                    </svg>
                </button>
            </div>

            {/* <!-- 電腦版課程介紹 --> */}
            <div className="d-none d-lg-block my-10 pb-15">
                <div className="row">
                    <div className="col-7">
                        <h2 className="fs-1 text-secondary vertical-rl course-label text-nowrap">
                        {course.category}
                        </h2>
                        <img
                        src={course.imageUrl}
                        alt=""
                        className="object-fit-cover rounded-20 course-lg-img"
                        />
                    </div>
                    {course?.content && (<div className="col-5">
                        <div className="course-info py-5 px-6">
                        <p className="fs-5 mb-1">
                            <span className="fw-bold">1.課程時長:</span>{course.content.class_duration}<br />
                            <span className="fw-bold">2.上課時間:</span>{course.content.class_time} <br />
                            <span className="fw-bold">3.適用年齡:</span>{course.content.suitable_age}<br />
                            <span className="fw-bold">4.身體狀況要求:</span>{course.content.physical_requirements}<br />
                            <span className="fw-bold">5.場地與設備:</span>{course.content.venue_and_equipment}
                        </p>
                        <div className="d-flex justify-content-end">
                            <Link 
                            onClick={handleBookCourse}
                            className="btn btn-secondary course-btn text-white fs-4">
                            預約課程
                            <svg
                                className="course-arrow"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M3.72973 1L9 6L3.72973 11L2.5 9.83333L6.54054 6L2.5 2.16667L3.72973 1Z"
                                fill="white"
                                />
                            </svg>
                            </Link>
                        </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>

        {/* <!-- section2 --> */}
        <div className="container">
            {/* <!-- 分隔線 --> */}
            <picture>
                <source
                srcSet="./images/dividers/divider-sm.png"
                media="(max-width: 576px)"
                />
                <img
                src="./images/dividers/divider-lg.png"
                alt=""
                className="mt-6 mt-lg-10 mb-2 mb-lg-4"
                />
            </picture>

            {/* <!-- 標題 --> */}
            <div className="mb-6 mb-lg-10">
                {/* <!-- 手機版  --> */}
                <div className="d-lg-none">
                    <h2 className="fs-3">產品特色</h2>
                </div>
                {/* <!-- 電腦版 --> */}
                <div className="d-none d-lg-block">
                    <h2 className="fs-1">探索其他領域</h2>
                    <p className="fs-5 mt-2 mt-lg-4">
                        提供低衝擊性、個性化且包含全面身體素質訓練的運動計劃,並由專業人員指導,促進健康與社交互動。
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-primary-2 py-5 pb-lg-0">
            <div className="container">
                {/* <!-- 特色介紹 --> */}
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col mb-6 mb-lg-0 ps-lg-13 position-relative">
                        <h3 className="fs-3 fs-lg-1 text-primary vertical-rl features-label">
                        低衝擊性設計
                        </h3>
                        <img
                            src="./images/workout-home-old-woman-with-hands-waist.png"
                            alt=""
                            className="object-fit-cover features-img"
                        />
                        <p className="d-lg-none fs-5 features-text">
                            運動形式溫和，對關節和肌肉的壓力較小,並且預防傷。適合年長者進行鍛鍊
                        </p>
                        <p className="d-none d-lg-block fs-5 vertical-rl features-lg-text">
                            運動形式溫和，<br />
                            對關節和肌肉的壓力較小，並<br />
                            且預防損傷。適合年長者進行鍛鍊
                        </p>
                    </div>
                    <div className="col mt-lg-30 ps-lg-13 pb-lg-24 position-relative">
                        <h3 className="fs-3 fs-lg-1 text-primary vertical-rl features-label">
                            靈活的強度調整
                        </h3>
                        <img
                            src="./images/side-view-man-running-gym.png"
                            alt=""
                            className="object-fit-cover features-img"
                        />
                        <p className="d-lg-none fs-5 features-text">
                            運動形式溫和，對關節和肌肉的壓力較小,並且預防傷。適合年長者進行鍛鍊
                        </p>
                        <p className="d-none d-lg-block fs-5 vertical-rl features-lg-text">
                            運動強度可根據個人，<br />
                            健康狀況和體能水平進行調整<br />
                            讓每位參與者都能獲得運動益處。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- section3 --> */}
        <div className="container">
            {/* <!-- 分隔線 --> */}
            <picture>
                <source
                    srcSet="./images/dividers/divider-sm.png"
                    media="(max-width: 576px)"
                />
                <img
                    src="./images/dividers/divider-lg.png"
                    alt=""
                    className="mt-6 mt-lg-10 mb-2 mb-lg-4"
                />
            </picture>

            <h1 className="fs-3 fs-lg-1">服務內容</h1>
            <div className="row row-cols-1 row-cols-lg-3 my-6 my-lg-10">
                <div className="col position-relative mb-6 mb-lg-0">
                    <h3 className="fs-2 text-secondary-2 vertical-rl service-label">
                        有 氧 步 行 團 體
                    </h3>
                    <div className="position-relative mb-2 mb-lg-6">
                        <div className="top-left-decoration"></div>
                        <div className="service-img-overlay">
                            <img
                                src="./images/Exclude.png"
                                alt=""
                                className="object-fit-cover service-img"
                            />
                        </div>
                        <div className="bottom-right-decoration"></div>
                    </div>
                    <p className="fs-5 bg-secondary-1 rounded service-text p-4">
                        組織參與者在公園或社區內進行30分鐘的有氧步行活動,活動強度適中,步伐穩定,適合不同體能狀況的長者。這種有氧運動不僅有助於提升心肺功能,還能促進全身血液循環,並結合社交互動,讓參與者在輕鬆愉快的氛圍中保持健康。
                    </p>
                </div>
                <div className="col position-relative mb-6 mb-lg-0">
                    <h3 className="fs-2 text-secondary-2 vertical-rl service-label">
                        有 氧 舞 蹈 課 程
                    </h3>
                    <div className="position-relative mb-2 mb-lg-6">
                        <div className="top-left-decoration"></div>
                        <div className="service-img-overlay">
                            <img
                                src="./images/Exclude-1-1.png"
                                alt=""
                                className="object-fit-cover service-img"
                            />
                        </div>
                        <div className="bottom-right-decoration"></div>
                    </div>
                    <p className="fs-5 bg-secondary-1 rounded service-text p-4">
                        設計輕鬆愉快的有氧舞蹈課程,結合簡單易學的舞蹈動作和輕快的音樂,讓參與者在愉悅的氛圍中進行有氧運動。這些課程有助於提升心肺功能,增強節奏感與協調性,同時還能改善平衡能力,適合各種健康狀況的長者參與。
                    </p>
                </div>
                <div className="col position-relative">
                    <h3 className="fs-2 text-secondary-2 vertical-rl service-label">
                        有 氧 運 動 教 育
                    </h3>
                    <div className="position-relative mb-2 mb-lg-6">
                        <div className="top-left-decoration"></div>
                        <div className="service-img-overlay">
                            <img
                                src="./images/Exclude-2.png"
                                alt=""
                                className="object-fit-cover service-img"
                            />
                        </div>
                        <div className="bottom-right-decoration"></div>
                    </div>
                    <p className="fs-5 bg-secondary-1 rounded service-text p-4">
                        通過專業講座和實際演示,教授參與者有氧運動的基本概念、正確姿勢和呼吸方法,幫助他們理解有氧運動的重要性。這些教育活動旨在提高參與者對有氧運動的認識,鼓勵他們將有氧運動融入日常生活,以維持長期健康。
                    </p>
                </div>
            </div>
        </div>

        {/* <!-- section4 --> */}
        <div className="container">
        {/* <!-- 分隔線 --> */}
        <picture>
            <source
            srcSet="./images/dividers/divider-sm.png"
            media="(max-width: 576px)"
            />
            <img
            src="./images/dividers/divider-lg.png"
            alt=""
            className="mt-6 mt-lg-10 mb-2 mb-lg-4"
            />
        </picture>

        <h1 className="fs-3 fs-lg-1 mb-6 mb-lg-10">師資陣容</h1>
        <div className="row row-cols-1 row-cols-lg-4 mb-20 mb-lg-36">
            <div className="col mb-6 mb-lg-0">
                <div className="card teacher-card p-2 px-lg-7 py-lg-3">
                    <div
                    className="d-flex flex-lg-column align-items-center align-items-lg-start"
                    >
                    <div
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <img
                        src="./images/Teachers/Hui-Zhen Lin.png"
                        className="teacher-img mb-1 mb-lg-2"
                        alt="..."
                        />
                        <h5
                        className="align-self-lg-start fs-6 fs-lg-3 text-primary mb-1 mb-lg-2"
                        >
                        林慧珍
                        </h5>
                    </div>
                    <p className="fs-7 fs-lg-6 ms-5 ms-lg-0">
                        1. 健康管理碩士學位 <br />
                        2. 15年運動指導經驗 <br />
                        3. 專長於老年人運動 <br />
                        4. 認證瑜伽和伸展教練 <br />
                        5. 擅長設計個性化運動計劃
                    </p>
                    </div>
                </div>
            </div>
            <div className="col mb-6 mb-lg-0">
                <div className="card teacher-card p-2 px-lg-7 py-lg-3">
                    <div
                    className="d-flex flex-lg-column align-items-center align-items-lg-start"
                    >
                    <div
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <img
                        src="./images/Teachers/Wei-Ming Zhang.png"
                        className="teacher-img mb-1 mb-lg-2"
                        alt="..."
                        />
                        <h5
                        className="align-self-lg-start fs-6 fs-lg-3 text-primary mb-1 mb-lg-2"
                        >
                        張偉明
                        </h5>
                    </div>
                    <p className="fs-7 fs-lg-6 ms-5 ms-lg-0">
                        1. 運動科學本科學位 <br />
                        2. 10年健身教學經驗 <br />
                        3. 資深重訓與有氧專家 <br />
                        4. 認證體能訓練教練 <br />
                        5. 多次參與健康推廣活動 <br />
                    </p>
                    </div>
                </div>
            </div>
            <div className="col mb-6 mb-lg-0">
                <div className="card teacher-card p-2 px-lg-7 py-lg-3">
                    <div
                    className="d-flex flex-lg-column align-items-center align-items-lg-start"
                    >
                    <div
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <img
                        src="./images/Teachers/Mei-Lan Li.png"
                        className="teacher-img mb-1 mb-lg-2"
                        alt="..."
                        />
                        <h5
                        className="align-self-lg-start fs-6 fs-lg-3 text-primary mb-1 mb-lg-2"
                        >
                        李美蘭
                        </h5>
                    </div>
                    <p className="fs-7 fs-lg-6 ms-5 ms-lg-0">
                        1. 運動健康專業碩士 <br />
                        2. 12年老年人健康指導經驗 <br />
                        3. 認證普拉提和柔軟操教練 <br />
                        4. 擅長設計舒適的運動程序 <br />
                        5. 擁有多項心理健康輔導資格 <br />
                    </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card teacher-card p-2 px-lg-7 py-lg-3">
                    <div
                    className="d-flex flex-lg-column align-items-center align-items-lg-start"
                    >
                    <div
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <img
                        src="./images/Teachers/Zhi-Qiang Wang.png"
                        className="teacher-img mb-1 mb-lg-2"
                        alt="..."
                        />
                        <h5
                        className="align-self-lg-start fs-6 fs-lg-3 text-primary mb-1 mb-lg-2"
                        >
                        王志強
                        </h5>
                    </div>
                    <p className="fs-7 fs-lg-6 ms-5 ms-lg-0">
                        1. 運動生理學碩士學位 <br />
                        2. 8年運動指導與健康管理經驗 <br />
                        3. 專長於功能性訓練和姿勢矯正 <br />
                        4. 認證運動心理學教練 <br />
                        5. 曾擔任多個運動健康研討會講者 <br />
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    </>
    );
}