import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import ReactLoading from 'react-loading';
import { getAreasImgURL, getImageURL} from "../../utils/image-util";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ExploreCourses() {
  // 選擇的分類(預設運動保健)
  const [category , setCategory] = useState('運動保健');
  // 對應分類標籤的id
  const [activeTab, setActiveTab] = useState('pills-home-tab');

  // 點選導覽列的課程分類對應探索頁課程分類標籤：
  const location = useLocation();
  const navigate = useNavigate();

  // 使用 useMemo 來確保 CATEGORY_MAP 只被創建一次
  const CATEGORY_MAP =useMemo(()=>({
    'sport' : '運動保健',
    'mind' : '心理成長',
    'skills' : '生活技能',
    'community' : '社區活動'
  }),[]);// 空依賴陣列表示這個物件只會被創建一次
  
  // 點選分類時,更新分類和對應的標籤以及網址
  function handleTabClick(categoryKey,tabId){
    setCategory(CATEGORY_MAP[categoryKey]);
    setActiveTab(tabId);
    // 使用navigate更新URL
    navigate(`/explore-courses#${categoryKey}`);
  }

  // 從URL獲取分類
  useEffect(() => {
    // 從URL中獲取hash值（不包含#號）
    // 如果 URL 是 http://example.com/explore-courses#sport，則 location.hash 的值是 #sport。replace('#', '') 方法移除掉 # 符號，只留下純文字部分 sport。
    const hash = location.hash.replace('#', '');
    
    if (hash && CATEGORY_MAP[hash]) {
      setCategory(CATEGORY_MAP[hash]);
      
      // 設置對應的標籤ID
      const tabMap = {
          'sport': 'pills-home-tab',
          'mind': 'pills-mind-tab',
          'skills': 'pills-skills-tab',
          'community': 'pills-community-tab'
      };
      
      setActiveTab(tabMap[hash] || 'pills-home-tab');
    }
    }, [location, CATEGORY_MAP]);
  
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
                                  className="learn-more-H-lg d-flex ms-auto align-items-center py-lg-2">
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

  // 分類選項
  const tabData = [
    {
      key: 'sport', 
      title: '運動保健', 
      tabId: 'pills-home-tab',
      className: 'pe-2 pe-lg-0 pb-2' 
    },
    { 
      key: 'mind', 
      title: '心理成長', 
      tabId: 'pills-mind-tab',
      className: 'ps-2 pe-lg-2' 
    },
    { 
      key: 'skills', 
      title: '生活技能', 
      tabId: 'pills-skills-tab',
      className: 'pe-2 pe-lg-0' 
    },
    { 
      key: 'community', 
      title: '社區活動', 
      tabId: 'pills-community-tab',
      className: 'ps-2' 
    }
  ]

  // 其他領域選項
  const areaData = [
    {
      title: '音樂',
      img: 'music.png',
    },
    {
      title: '語言',
      img: 'language.png',
    },
    {
      title: '攝影',
      img: 'photography.png',
    },
    {
      title: '藝術',
      img: 'art.png',
    },
    {
      title: '設計',
      img: 'design.png',
    },
    {
      title: '人文',
      img: 'humanities.png',
    },
    {
      title: '行銷',
      img: 'marketing.png',
    },
    {
      title: '程式',
      img: 'program.png',
    },
    {
      title: '投資理財',
      img: 'investment.png',
    },
    {
      title: '職場技能',
      img: 'job-skills.png',
    },
    {
      title: '手做',
      img: 'handmade.png',
    },
    {
      title: '生活品味',
      img: 'life-style.png',
    }
      ]

  const imageUrl = getImageURL('explore_other_areas', 'music.png');
  // console.log("生成的圖片 URL:", imageUrl);
  // console.log("import.meta.url:", import.meta.url);

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
        {tabData.map((tab)=>{
          return(
            <li className={`nav-item col-6 col-lg-auto ${tab.className}`} role="presentation"
            key={tab.key}>
              <button 
                  className={`nav-link fs-3 fw-bold w-100 ${activeTab === tab.tabId ? 'active' : ''}`}  
                  id="pills-home-tab" data-bs-toggle="pill"
                  data-bs-target={`#${tab.tabId.replace('-tab','')}`} 
                  type="button" role="tab" aria-controls={tab.tabId.replace('-tab','')}
                  aria-selected={activeTab === tab.tabId}
                  onClick={() => handleTabClick(tab.key, tab.tabId)}
                  >{tab.title}</button>
          </li>
          )
        })}
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
              {areaData.map((item,index)=>{
                return(
                  <li key={index} className="col-4 col-md-3 col-xl-2">
                  <button
                      className="btn btn-custom fs-6 fs-lg-2 fw-bold text-neutral-1 text-align border-0 rounded"
                      style={{backgroundImage: `url(${getAreasImgURL(item.img)})`}}>{item.title}</button>
                  </li>)
              })}
          </ul>
      </div>
    </div>
  </section>
  </>
  );
}
