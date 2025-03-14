import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination, CouponModal } from "../../components";
import ReactLoading from "react-loading";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

// Modal 初始狀態
const defaultModalState = {
  title: "",
  percent: 100,
  discount: 0,
  due_date: 0,
  code: "",
  is_enabled: 1,
};

export default function AdminCoupons() {
  // 存放產品列表的狀態
  const [couponList, setCouponList] = useState([]);

  // 螢幕 loading
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  // 獲取產品列表
  // 向後端 API 取得產品列表，並更新 couponList
  const getCoupons = async (page = 1) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/${API_PATH}/admin/coupons?page=${page}`
      );
      setCouponList(
        res.data.coupons.map((coupon) => ({
          ...coupon,
          discount: 0, // 如果沒有 discount，設為 0
        }))
      );
      console.log(res.data.coupons);
      setPageInfo(res.data.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  // 檢查登入狀態
  // 驗證使用者是否已登入，如果登入成功，則載入產品列表。
  const checkIsLogin = async () => {
    try {
      setIsScreenLoading(true);
      await axios.post(`${BASE_URL}/api/user/check`);
      await getCoupons();

      setIsScreenLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // 初始掛載時檢查登入
  // 當元件掛載時，從 cookie 取得 token，設置 Authorization，並檢查是否已登入。
  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    axios.defaults.headers.common["Authorization"] = token;

    checkIsLogin();
  }, []);

  //  ——————— 加入產品 Modal ———————

  // 記錄當前 Modal 是 "create" 還是 "edit"
  const [modalMode, setmodalMode] = useState(null);

  // 產品 Modal 狀態是開或關
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

  // 刪除產品 Modal 狀態是開或關
  const [isDelCouponModalOpen, setIsDelCouponModalOpen] = useState(false);

  // 打開產品 Modal
  const handleOpenCouponModal = (mode, coupon) => {
    setmodalMode(mode);

    switch (mode) {
      // mode === "create" 時，設置空白的產品表單
      case "create":
        setTempCoupon(defaultModalState);
        break;

      // mode === "edit" 時，載入選中的產品資料
      case "edit":
        setTempCoupon(coupon);
        break;

      default:
        break;
    }

    setIsCouponModalOpen(true);
  };

  // 打開刪除產品 Modal
  const handleOpenDelCouponModal = (coupon) => {
    setTempCoupon(coupon);

    setIsDelCouponModalOpen(true);
  };

  const [tempCoupon, setTempCoupon] = useState(defaultModalState);

  // 分頁狀態
  const [pageInfo, setPageInfo] = useState({});

  // 換頁功能
  const handlePageChange = (page) => {
    getCoupons(page);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between mb-5">
              <h1 className="fw-bold text-secondary">優惠券列表</h1>
              <button
                onClick={() => handleOpenCouponModal("create")}
                type="button"
                className="btn btn-secondary-2 text-white"
              >
                建立新的優惠券
              </button>
            </div>
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">優惠券名稱</th>
                  <th scope="col">打折</th>
                  <th scope="col">折扣(元)</th>
                  <th scope="col">是否啟用</th>
                  <th scope="col">編輯 / 刪除</th>
                </tr>
              </thead>
              <tbody>
                {couponList.map((coupon) => (
                  <tr key={coupon.title}>
                    <th scope="row">{coupon.title}</th>
                    <td>{coupon.percent}</td>
                    <td>{coupon.discount}</td>
                    <td>
                      {coupon.is_enabled ? (
                        <span className="text-success">啟用</span>
                      ) : (
                        <span>未啟用</span>
                      )}
                    </td>
                    <td>
                      <div className="btn-group">
                        <button
                          onClick={() => handleOpenCouponModal("edit", coupon)}
                          type="button"
                          className="edit-product-btn"
                        >
                          <i className="bi bi-pencil-square fs-4"></i>
                        </button>
                        <button
                          onClick={() => handleOpenDelCouponModal(coupon)}
                          type="button"
                          className="edit-product-btn"
                        >
                          <i className="bi bi-trash3-fill fs-4"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
      </div>

      {isScreenLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.3)",
            zIndex: 999,
          }}
        >
          <ReactLoading
            type="spokes"
            color="black"
            width="4rem"
            height="4rem"
          />
        </div>
      )}

      <CouponModal
        modalMode={modalMode}
        tempCoupon={tempCoupon}
        isOpen={isCouponModalOpen}
        setIsOpen={setIsCouponModalOpen}
        getCoupons={getCoupons}
        page={pageInfo.current_page}
      />
      {/* 
      <DelCouponModal
        tempCoupon={tempCoupon}
        isOpen={isDelCouponModalOpen}
        setIsOpen={setIsDelCouponModalOpen}
        getCoupons={getCoupons}
        page={pageInfo.current_page}
      /> */}
    </>
  );
}
