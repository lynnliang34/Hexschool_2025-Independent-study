import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ReactLoading from 'react-loading';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ExploreCourses() {
    // 選擇的分類(預設運動保健)
    const [category , setCategory] = useState('運動保健');
    
    // 依照課程分類取得課程
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
                (<div className="col">
                    <ReactLoading type={'spokes'} color={'#84CCC9'} height={'20%'} width={'20%'} />
                </div>): 
                course.length > 0 ? 
                (course.map((courseData)=>{
                    return(
                    <div className="col" key={courseData.id}>
                        <div className="card px-2 pt-2 bg-primary-2 border-0">
                            <img src={courseData.imageUrl} 
                            className="rounded"
                                alt="straighten" />
                            <div className="card-body px-0 pb-2">
                                <h2
                                    className="card-title text-primary border border-primary rounded-5px d-inline-block p-2 mb-3">
                                    {courseData.title}
                                </h2>
                                <p className="card-text fs-4 mb-3 up-to-2-lines">
                                    {courseData.description}
                                </p>
                                <div className="d-flex">
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
                    </div>
                    )
                    })
                ):
                (<div className="col">
                    <h1 className="text-secondary my-10">目前無此分類課程</h1>
                </div>)
                }
            </div>
        )
    }


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
                    <button className="nav-link fs-3 fw-bold w-100 active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home " type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true"
                        onClick={()=>setCategory('運動保健')}
                        >運動保健</button>
                </li>
                <li className="nav-item col-6 col-lg-auto ps-2 pe-lg-2" role="presentation">
                    <button className="nav-link fs-3 fw-bold w-100 " id="pills-psycho-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-psycho" type="button" role="tab" aria-controls="pills-psycho"
                        aria-selected="false"
                        onClick={()=>setCategory('心理成長')}
                        >心理成長</button>
                </li>
                <li className="nav-item col-6 col-lg-auto  pe-2 pe-lg-0" role="presentation">
                    <button className="nav-link fs-3 fw-bold w-100" id="pills-community-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-community" type="button" role="tab" aria-controls="pills-community"
                        aria-selected="false"
                        onClick={()=>setCategory('社區活動')}
                        >社區活動</button>
                </li>
                <li className="nav-item col-6 col-lg-auto ps-2" role="presentation">
                    <button className="nav-link fs-3 fw-bold w-100" id="pills-skills-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-skills" type="button" role="tab" aria-controls="pills-skills"
                        aria-selected="false"
                        onClick={()=>setCategory('生活技能')}
                        >生活技能</button>
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
                            style={{backgroundImage: 'url(/images/explore-other-areas/music.png)'}}>音樂</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/language.png)'}}>語言</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/photography.png)'}}>攝影</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/art.png)'}}>藝術</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/design.png)'}}>設計</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/humanities.png)'}}>人文</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/marketing.png)'}}>行銷</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/program.png)'}}>程式</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/investment.png)'}}>投資理財</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/job-skills.png)'}}>職場技能</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/handmade.png)'}}>手做</button>
                    </li>
                    <li className="col-4 col-md-3 col-lg-2">
                        <button
                            className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                            style={{backgroundImage: 'url(/images/explore-other-areas/life-style.png)'}}>生活品味</button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
    );
}
