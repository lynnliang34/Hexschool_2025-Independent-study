import axios from "axios";
import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function DelCouponModal({ tempCoupon, isOpen, setIsOpen, getCoupons, page }) {
  // 控制刪除優惠券的 Modal
  const delCouponModalRef = useRef(null);

  // 初始化 Bootstrap Modal，關閉時不會自動加背景遮罩。
  useEffect(() => {
    new Modal(delCouponModalRef.current, {
      backdrop: false,
    });
  }, []);

  // 打開刪除優惠券 Modal
  useEffect(() => {
    if (isOpen) {
      const modalInstance = Modal.getInstance(delCouponModalRef.current);
      modalInstance.show();
    }
  }, [isOpen]);

  // 關閉刪除優惠券 Modal
  const handleCloseDelCouponModal = () => {
    const modalInstance = Modal.getInstance(delCouponModalRef.current);
    modalInstance.hide();
    setIsOpen(false);
  };

  // 刪除優惠券
  const deleteCoupon = async () => {
    try {
      await axios.delete(
        `${BASE_URL}/api/${API_PATH}/admin/coupon/${tempCoupon.id}`,
        {
          data: {
            ...tempCoupon,
            percent: Number(tempCoupon.percent),
            discount: Number(tempCoupon.discount),
            due_date: tempCoupon.due_date
              ? new Date(tempCoupon.due_date).getTime() / 1000
              : 0, // 如果是空，設為 0
            is_enabled: tempCoupon.is_enabled ? 1 : 0,
          },
        }
      );
    } catch (error) {
      console.error("刪除優惠券失敗:", error);
      alert("刪除優惠券失敗");
    }
  };

  // 刪除優惠券確認鈕
  const handleDeleteCoupon = async () => {
    try {
      await deleteCoupon();
      getCoupons(page);
      handleCloseDelCouponModal();
    } catch (error) {
      console.error("刪除優惠券失敗:", error);
      alert("刪除優惠券失敗");
    }
  };

  return (
    <div
      ref={delCouponModalRef}
      className="modal fade"
      id="delProductModal"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">刪除優惠券</h1>
            <button
              onClick={handleCloseDelCouponModal}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            你是否要刪除
            <span className="text-danger fw-bold">{tempCoupon.title}</span>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleCloseDelCouponModal}
              type="button"
              className="btn btn-outline-secondary-2"
            >
              取消
            </button>
            <button
              onClick={handleDeleteCoupon}
              type="button"
              className="btn btn-outline-danger"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelCouponModal;
