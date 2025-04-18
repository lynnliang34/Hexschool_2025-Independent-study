import axios from "axios";
import 'chart.js/auto';
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
// Pie props doc:https://react-chartjs-2.js.org/components/pie

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function AdminDashboard() {
  const [ orders, setOrders ] = useState([]);

  useEffect(()=>{
    const getOrders = async() => {
    try{
      const res = await axios.get(`${BASE_URL}/api/${API_PATH}/orders`);
      setOrders(res.data.orders);
    }
    catch(err){
      console.log(err.message);
    }
  };
  getOrders();
  },[]);

  const categoryNum= [ 0,0,0,0 ];

    orders.forEach((order) => {
      // 取出訂單內每一筆產品的ID後遍例（因為ID是隨機的）
      Object.keys(order.products).forEach((key) => {
        // 依照ID取出對應的產品資料
        const product = order.products[key];
        // 檢查有沒有存在且是否包含category
        if(product.product && product.product.category){
          const category = product.product.category;
          // 根據對應的目錄增加數量
          if(category === '運動保健'){
            categoryNum[0] += 1;
          }else if(category === '心靈成長'){
            categoryNum[1] += 1;
          }else if(category === '社區活動'){
            categoryNum[2] += 1;
          }else if(category === '生活技能'){
            categoryNum[3] += 1;
          }
        }
      })
    });

  const chartData ={
    labels: ["運動保健", "心靈成長", "社區活動", "生活技能"],
    datasets: [
      {
        label: "訂單總數",
        backgroundColor: [
          "rgba(210,234,245,1)",
          "rgba(255,204,188,1)",
          "rgba(45,142,164,1)",
          "rgba(255,171,145,1)"],
        hoverBackgroundColor: [
          "rgba(210,234,245,0.7)",
          "rgba(255,204,188,0.7)",
          "rgba(45,142,164,0.7)",
          "rgba(255,171,145,0.7)"],
        data: categoryNum,
        borderColor:"rgba(246,244,233,1)",
      },
    ] 
  };

  const chartOptions ={
    plugins:{
      legend:{
        labels:{
          font:{
            size:16,
          },
          colors:"rgba(72,72,72,1)"
        }
      }
    }
  }

  const total = orders.reduce((sum,item)=>sum + item.total, 0);
  // sum是累加器，初始值設0，item是每一筆訂單，每一輪都將total加至sum
  
  return (
    <div className="container">
      <h1 className="fw-bold text-secondary">後台首頁</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-6">
        <div className="col mb-6">
          <div className="bg-primary-2 rounded-20 h-100">
            <h2 className="fs-1 p-6">學員人數</h2>
            <div className=" text-end p-6">
              <p className="fs-1 text-primary-2">Students</p>
              <p className="fs-0">123</p>
            </div>
          </div>
        </div>
        <div className="col mb-6">
          <div className="bg-primary-2 rounded-20 h-100">
            <h2 className="fs-1 p-6">課程訂單數</h2>
            <div className=" text-end p-6">
              <p className="fs-1 text-primary-2">Orders</p>
              <p className="fs-0">{orders.length}</p>
            </div>
          </div>
        </div>
        <div className="col mb-6">
          <div className="bg-primary-2 rounded-20 h-100">
            <h2 className="fs-1 p-6">營業額</h2>
            <div className=" text-end p-6">
              <p className="fs-1">NT$</p>
              <p className="fs-0">{total}</p>
            </div>
          </div>
        </div>
        <div className="col mb-6">
          <div className="bg-primary-2 rounded-20 h-100">
          <h2 className="p-6">訂單課程類別分佈</h2>
            <div className="p-6 pt-0">
              <Pie className="mx-auto" data={chartData} options={chartOptions}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
