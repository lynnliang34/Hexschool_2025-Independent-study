import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Modal } from "bootstrap";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function CouponModal({
  modalMode,
  tempCoupon,
  isOpen,
  setIsOpen,
  getCoupons,
  page,
}) {
  // 避免更改到 tempCoupon
  const [modalData, setModalData] = useState(tempCoupon);

  // 轉換日期格式
  const formatTimestampToDate = (timestamp) => {
    if (!timestamp || timestamp === 0) return ""; // 預設沒有日期時顯示空字串
    const date = new Date(timestamp * 1000);
    return date.toISOString().split("T")[0]; // 轉 YYYY-MM-DD
  };

  // tempCoupon 更新時，也更新 modalData (編輯優惠券時帶資料)
  useEffect(() => {
    setModalData({
      ...tempCoupon,
      due_date: formatTimestampToDate(tempCoupon.due_date),
    });
  }, [tempCoupon]);

  // 控制優惠券新增/編輯的 Modal
  const couponModalRef = useRef(null);

  // 初始化 Bootstrap Modal，關閉時不會自動加背景遮罩。
  useEffect(() => {
    new Modal(couponModalRef.current, {
      backdrop: false,
    });
  }, []);

  // 打開優惠券 Modal
  useEffect(() => {
    if (isOpen) {
      const modalInstance = Modal.getInstance(couponModalRef.current);
      modalInstance.show();
    }
  }, [isOpen]);

  // 關閉優惠券 Modal
  const handleCloseCouponModal = () => {
    const modalInstance = Modal.getInstance(couponModalRef.current);
    modalInstance.hide();
    setIsOpen(false);
  };

  // 優惠券表單輸入處理
  const handleModalInputChange = (e) => {
    const { value, name, checked, type } = e.target;

    setModalData({
      ...modalData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 新增優惠券
  const createCoupon = async () => {
    console.log(modalData);
    try {
      await axios.post(`${BASE_URL}/api/${API_PATH}/admin/coupon`, {
        data: {
          ...modalData,
          percent: Number(modalData.percent),
          discount: Number(modalData.discount),
          due_date: modalData.due_date
            ? new Date(modalData.due_date).getTime() / 1000
            : 0, // 如果是空，設為 0
          is_enabled: modalData.is_enabled ? 1 : 0,
        },
      });
    } catch (error) {
      alert(error.response.data.message.join("、"));
    }
  };

  // 編輯優惠券
  const updateCoupon = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/${API_PATH}/admin/coupon/${modalData.id}`,
        {
          data: {
            ...modalData,
            percent: Number(modalData.percent),
            discount: Number(modalData.discount),
            due_date: modalData.due_date
              ? new Date(modalData.due_date).getTime() / 1000
              : 0, // 如果是空，設為 0
            is_enabled: modalData.is_enabled ? 1 : 0,
          },
        }
      );
    } catch (error) {
      console.error("更新優惠券失敗:", error);
      alert("更新優惠券失敗");
    }
  };

  // 編輯優惠券確認鈕
  const handleUpdateCoupon = async () => {
    const apiCall = modalMode === "create" ? createCoupon : updateCoupon;

    try {
      await apiCall();
      getCoupons(page);
      handleCloseCouponModal();
    } catch (error) {
      console.error("更新優惠券失敗:", error);
      alert("更新優惠券失敗");
    }
  };

  return (
    <div
      ref={couponModalRef}
      id="couponModal"
      className="modal"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content border-0 shadow">
          <div className="modal-header border-bottom">
            <h5 className="modal-title fs-4">
              {modalMode === "create" ? "新增優惠券" : "編輯優惠券"}
            </h5>
            <button
              onClick={handleCloseCouponModal}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            <div className="row g-4">
              <div className="col">
                <div className="row g-3 mb-5">
                  <div className="col-lg-6">
                    <label htmlFor="title" className="form-label">
                      優惠券名稱<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      value={modalData.title}
                      onChange={handleModalInputChange}
                      name="title"
                      id="title"
                      type="text"
                      className="form-control"
                      placeholder="請輸入優惠券名稱"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="code" className="form-label">
                      優惠碼<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      value={modalData.code}
                      onChange={handleModalInputChange}
                      name="code"
                      id="code"
                      type="text"
                      className="form-control"
                      placeholder="請設定優惠碼"
                    />
                  </div>
                </div>

                <div className="row g-3 mb-5">
                  <div className="col-6">
                    <label htmlFor="percent" className="form-label">
                      打折<span className="text-primary ms-1">*</span>
                    </label>
                    <select
                      value={modalData.percent}
                      onChange={handleModalInputChange}
                      name="percent"
                      id="percent"
                      type="text"
                      className="form-select"
                    >
                      <option disabled value="">
                        請選擇折數
                      </option>
                      <option value="100">無</option>
                      <option value="90">9折</option>
                      <option value="80">8折</option>
                      <option value="70">7折</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="discount" className="form-label">
                      折扣 (元)
                    </label>
                    <input
                      value={modalData.discount}
                      onChange={handleModalInputChange}
                      name="discount"
                      id="discount"
                      type="number"
                      className="form-control"
                      placeholder="請設定折扣多少元"
                    />
                  </div>
                </div>

                <div className="row g-3 mb-5">
                  <div className="col-6">
                    <div className="mb-6">
                      <label htmlFor="due_date" className="form-label">
                        到期日
                      </label>
                      <input
                        type="date"
                        id="due_date"
                        name="due_date"
                        className="form-control"
                        value={modalData.due_date}
                        onChange={handleModalInputChange}
                        placeholder="請輸入到期日"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer border-top bg-light">
            <div className="form-check me-5">
              <input
                checked={modalData.is_enabled}
                onChange={handleModalInputChange}
                name="is_enabled"
                type="checkbox"
                className="form-check-input"
                id="isEnabled"
              />
              <label className="form-check-label" htmlFor="isEnabled">
                是否啟用
              </label>
            </div>
            <button
              onClick={handleCloseCouponModal}
              type="button"
              className="btn btn-outline-secondary-2"
            >
              取消
            </button>
            <button
              onClick={handleUpdateCoupon}
              type="button"
              className="btn btn-outline-danger"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouponModal;
