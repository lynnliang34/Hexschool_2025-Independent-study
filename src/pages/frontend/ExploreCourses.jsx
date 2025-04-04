import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import ReactLoading from 'react-loading';
import { getAreasImgURL, getImageURL} from "../../utils/image-util";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ExploreCourses() {
    // 選擇的分類(預設運動保健)
    const [category , setCategory] = useState('運動保健');

    // 點選導覽列的課程分類對應探索頁課程分類標籤：
        const location = useLocation();
        // 使用 useMemo 來確保 CATEGORY_MAP 只被創建一次
        const CATEGORY_MAP =useMemo(()=>({
            'sport' : '運動保健',
            'mind' : '心理成長',
            'skills' : '生活技能',
            'community' : '社區活動'
        }),[]);// 空依賴陣列表示這個物件只會被創建一次
        
        // 對應分類標籤的id
        const [activeTab, setActiveTab] = useState('pills-home-tab');
        // 根據hash設置category和activeTab:
        useEffect(() => {
            const hash = location.hash.substring(1); 
                //從 location 對象中取得 URL 的 hash 部分（# 後面的部分）
                // .substring(1) 是為了去除 hash 值前面的 # 符號
            if (hash && CATEGORY_MAP[hash]) {
                // 檢查有＃及CATEGORY_MAP中有＃
                setCategory(CATEGORY_MAP[hash]);
                // 如果 hash 是 sport，CATEGORY_MAP[hash] 會是 運動保健，然後將 category 設為 運動保健
                switch(hash) {
                    case 'sport':
                        setActiveTab('pills-home-tab');
                        break;
                    case 'mind':
                        setActiveTab('pills-mind-tab');
                        break;
                    case 'community':
                        setActiveTab('pills-community-tab');
                        break;
                    case 'skills':
                        setActiveTab('pills-skills-tab');
                        break;
                    default:
                        setActiveTab('pills-home-tab');
                }
                // 每個 case 對應一個分類的 hash 值，並設置相應的標籤 ID
                // 如果 hash 是 mind，則設置活動標籤為 pills-psycho-tab
            }
        }, [location,CATEGORY_MAP]); //監聽URL變化
    
    // 依照課程分類取得課程：
        function CategoryCourse({category}) {
            // 儲存課程資料
            const [course, setCourse] = useState([]);
            // 讀取中狀態
            const [isLoading, setIsLoading] = useState(false);

            useEffect(()=>{
                const getCourse = async() =>{
                    setIsLoading(true);
                    try{
                        const response = await axios.get(`${BASE_URL}/api/${API_PATH}/products`,{
                            params:{
                                category
                            }
                        });

                        setCourse(response.data.products);
                    }
                    catch(err){
                        console.dir(err);
                        alert('取得課程失敗');
                    }
                    finally{
                        setIsLoading(false);
                    }
                }
                getCourse();
            },[category]);
            //分類變更時重新取得課程

            return(
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-lg-6 gy-3 gy-lg-10">
                    {
                    isLoading ?
                    (<ReactLoading className="mx-auto my-30" type={'spokes'} color={'#84CCC9'} height={'100px'} width={'100px'} />
                    ): 
                    course.length > 0 ? 
                    (course.map((courseData)=>{
                        return(
                        <div className="col" key={courseData.id}>
                            <div className="card px-2 pt-2 bg-primary-2 border-0 h-100">
                                <img src={courseData.imageUrl} 
                                className="rounded card-img"
                                    alt="straighten" />
                                <div className="card-body px-0 pb-2">
                                    <h2
                                        className="card-title text-primary border border-primary rounded-5px d-inline-block p-2 mb-3">
                                        {courseData.title}
                                    </h2>
                                    <p className="card-text fs-4 up-to-2-lines">
                                        {courseData.description}
                                    </p>
                                </div>
                                <div className="card-footer bg-primary-2 border-0 d-flex px-0">
                                    {/* 注意：連結開頭無前置/表示相對於當前路徑的相對路徑，網址會變成explore-courses/course-detail/id */}
                                    <Link to={`/course-detail/${courseData.id}`}
                                        className="btn btn-outline-dark bg-white fs-7 d-flex ms-auto align-items-center py-lg-2">
                                        了解更多
                                        <span className="material-symbols-outlined ms-2">
                                            chevron_right
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        )
                        })
                    ):
                    (<div className="col">
                        <h1 className="text-secondary text-nowrap my-10">目前無此分類課程</h1>
                    </div>)
                    }
                </div>
            )
        }
        const imageUrl = getImageURL('explore_other_areas', 'music.png');
        console.log("生成的圖片 URL:", imageUrl);
        console.log("import.meta.url:", import.meta.url);

    return (<>
    <div className="container py-3 pt-lg-0 pb-lg-8 px-lg-15 mt-4 mb-6 my-lg-20">
        <div className="text-center">
            <h1 className="fs-3 fs-lg-0">探索課程</h1>
            <hr className="my-3 my-lg-8" />
            <h2 className="fs-5 fs-lg-1">豐富生活體驗，開啟人生新篇章</h2>
        </div>
    </div>

    <section className="explore-courses mb-20 mb-lg-36">
        <div className="container">
            <ul className="nav nav-pills mb-2 d-flex flex-wrap justify-content-start" id="pills-tab" role="tablist">
                <li className="nav-item col-6 col-lg-auto pe-2 pe-lg-0 pb-2" role="presentation">
                    <button 
                        className={`nav-link fs-3 fw-bold w-100 ${activeTab === 'pills-home-tab' ? 'active' : ''}`}  
                        id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home " type="button" role="tab" aria-controls="pills-home"
                        aria-selected={activeTab === 'pills-home-tab'}
                        onClick={()=>{
                            setCategory('運動保健');
                            setActiveTab('pills-home-tab');
                            window.history.replaceState(null, '', '/explore-courses#sport');
                        }}
                        >運動保健</button>
                </li>
                <li className="nav-item col-6 col-lg-auto ps-2 pe-lg-2" role="presentation">
                    <button 
                        className={`nav-link fs-3 fw-bold w-100 ${activeTab === 'pills-mind-tab' ? 'active' : ''}`} 
                        id="pills-mind-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-mind" type="button" role="tab" aria-controls="pills-mind"
                        aria-selected={activeTab === 'pills-mind-tab'}
                        onClick={()=>{
                            setCategory('心理成長');
                            setActiveTab('pills-mind-tab');
                            window.history.replaceState(null, '', '/explore-courses#mind');}}
                        >心理成長</button>
                </li>
                <li className="nav-item col-6 col-lg-auto  pe-2 pe-lg-0" role="presentation">
                <button 
                        className={`nav-link fs-3 fw-bold w-100 ${activeTab === 'pills-skills-tab' ? 'active' : ''}`} 
                        id="pills-mind-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-mind" type="button" role="tab" aria-controls="pills-mind"
                        aria-selected={activeTab === 'pills-skills-tab'}
                        onClick={()=>{
                            setCategory('生活技能');
                            setActiveTab('pills-skills-tab');
                            window.history.replaceState(null, '', '/explore-courses#skills');}}
                        >生活技能</button>
                </li>
                <li className="nav-item col-6 col-lg-auto ps-2" role="presentation">
                <button 
                        className={`nav-link fs-3 fw-bold w-100 ${activeTab === 'pills-community-tab' ? 'active' : ''}`} 
                        id="pills-mind-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-mind" type="button" role="tab" aria-controls="pills-mind"
                        aria-selected={activeTab === 'pills-community-tab'}
                        onClick={()=>{
                            setCategory('社區活動');
                            setActiveTab('pills-community-tab');
                            window.history.replaceState(null, '', '/explore-courses#community');}}
                        >社區活動</button>
                </li>
            </ul>

            {/* 課程分頁內容 */}
            <div className="tab-content">
                <CategoryCourse category={category} />
            </div>

            <div className="mt-10 pb-6 pb-lg-10 ">
                <div className="position-relative decoLine"></div>
                <h3 className="fs-lg-1 mt-2 mt-lg-4">探索其他領域</h3>
            </div>

            <div className="other-areas container">
                <ul className="button-list row ps-0 gx-4 gy-3">
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('music.png')})`}}>音樂</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('language.png')})`}}>語言</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('photography.png')})`}}>攝影</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('art.png')})`}}>藝術</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('design.png')})`}}>設計</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('humanities.png')})`}}>人文</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('marketing.png')})`}}>行銷</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('program.png')})`}}>程式</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('investment.png')})`}}>投資理財</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('job-skills.png')})`}}>職場技能</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('handmade.png')})`}}>手做</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: `url(${getAreasImgURL('life-style.png')})`}}>生活品味</button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
    );
}
