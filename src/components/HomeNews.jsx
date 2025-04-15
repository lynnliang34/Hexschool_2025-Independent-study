import { useEffect, useState } from "react";
import { Link } from "react-router";
import ReactLoading from 'react-loading';
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function HomeNews() {
  const [ products, setProducts ] = useState([]);
  const [ featured, setfeatured ] = useState(null); // 篩選出主打課程
  const [ lastest, setLastest ] = useState(null); // 篩選出最新活動
  const [ popular, setPopular ] = useState(null); // 篩選出熱門課程
    // 取得課程資料
  useEffect(()=>{
    const getProduct = async()=>{
      try{
        const res =await axios.get(`${BASE_URL}/api/${API_PATH}/products/all`);
        setProducts(res.data.products);
      }
      catch(err){
        console.log(err);
      }
    }
    getProduct();
    // console.log(products);
  },[]);

  useEffect(()=>{
    const isFeatured = products.filter((item)=> item.is_featured === 1);
    // console.log(isEnable);
    setfeatured(isFeatured[0]); //只取第一筆資料
    // console.log(featured);
    const isPopular = products.filter((item)=> item.is_popular === 1);
    setPopular(isPopular[0]);
    const isLastest = products.filter((item)=> item.is_lastest === 1);
    setLastest(isLastest[0]);
  },[products]);

  return (
    <div className="container pt-7 pb-6 pb-lg-10">
      {/* <!-- 課程卡片 --> */}
      <div className="row gy-2 gy-lg-0">
        {featured || popular || lastest ? (<>
          <div className="col-lg-4 position-relative">
            <Link to={`/course-detail/${featured.id}`} className="courseLink stretched-link w-100">
              <div
                  className="cardText position-absolute top-0 vertical-rl bg-white pt-5 pb-3 ps-4 rounded rounded-bottom-right-0">
                  <h3 className="cardTitle lh-1 me-0 ms-3 fs-lg-2 text-primary">主打課程</h3>
                  <p className="cardContent mt-9 lh-1 mx-0 fs-5 fs-lg-4 text-nowrap">{featured.title}</p>
              </div>
              <div className="overflow-hidden mt-14 rounded">
                  <img className="img-fluid rounded w-100" src={featured.imageUrl}
                  alt="athletic-senior-woman" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4 position-relative">
            <Link to={`/course-detail/${popular.id}`} className="courseLink stretched-link w-100">
              <div
                  className="cardText position-absolute top-0 vertical-rl bg-white pt-5 pb-3 ps-4 rounded rounded-bottom-right-0">
                  <h3 className="cardTitle lh-1 me-0 ms-3 fs-lg-2 text-primary">熱門課程</h3>
                  <p className="cardContent mt-9 lh-1 mx-0 fs-5 fs-lg-4 text-nowrap">{popular.title}</p>
              </div>
              <div className="overflow-hidden mt-14 rounded">
                  <img className="img-fluid rounded w-100" src={popular.imageUrl}
                  alt="grandparents-working-out-gym" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4 position-relative">
            <Link to={`/course-detail/${lastest.id}`} className="courseLink stretched-link w-100">
              <div
                  className="cardText position-absolute top-0 vertical-rl bg-white pt-5 pb-3 ps-4 rounded rounded-bottom-right-0">
                  <h3 className="cardTitle lh-1 me-0 ms-3 fs-lg-2 text-primary">最新活動</h3>
                  <p className="cardContent mt-9 lh-1 mx-0 fs-5 fs-lg-4 text-nowrap">{lastest.title}</p>
              </div>
              <div className="overflow-hidden mt-14 rounded">
                  <img className="img-fluid rounded w-100" src={lastest.imageUrl} />
              </div>
            </Link>
          </div></>):(
          <ReactLoading className="mx-auto my-30" type={'spokes'} color={'#84CCC9'} height={'100px'} width={'100px'} />)}
      </div>
    </div>
  );
}