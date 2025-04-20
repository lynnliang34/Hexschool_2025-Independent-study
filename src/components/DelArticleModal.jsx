import axios from "axios";
import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function DelArticleModal({
  tempArticle,
  isOpen,
  setIsOpen,
  getArticles,
  page,
}) {
  // 控制刪除文章的 Modal
  const delArticleModalRef = useRef(null);

  // 初始化 Bootstrap Modal，關閉時不會自動加背景遮罩。
  useEffect(() => {
    new Modal(delArticleModalRef.current, {
      backdrop: false,
    });
  }, []);

  // 打開刪除文章 Modal
  useEffect(() => {
    if (isOpen) {
      const modalInstance = Modal.getInstance(delArticleModalRef.current);
      modalInstance.show();
    }
  }, [isOpen]);

  // 關閉刪除文章 Modal
  const handleCloseDelArticleModal = () => {
    const modalInstance = Modal.getInstance(delArticleModalRef.current);
    modalInstance.hide();
    setIsOpen(false);
  };

  // 刪除文章
  const deleteArticle = async () => {
    try {
      await axios.delete(
        `${BASE_URL}/api/${API_PATH}/admin/article/${tempArticle.id}`
      );
    } catch (error) {
      console.error("刪除文章失敗:", error);
      alert("刪除文章失敗");
    }
  };

  // 刪除文章確認鈕
  const handleDeleteArticle = async () => {
    try {
      await deleteArticle();
      getArticles(page);
      handleCloseDelArticleModal();
    } catch (error) {
      console.error("刪除文章失敗:", error);
      alert("刪除文章失敗");
    }
  };

  return (
    <div
      ref={delArticleModalRef}
      className="modal fade"
      id="delProductModal"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">刪除文章</h1>
            <button
              onClick={handleCloseDelArticleModal}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            你是否要刪除
            <span className="text-danger fw-bold">{tempArticle.title}</span>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleCloseDelArticleModal}
              type="button"
              className="btn btn-outline-secondary-2"
            >
              取消
            </button>
            <button
              onClick={handleDeleteArticle}
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

export default DelArticleModal;
