import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Modal } from "bootstrap";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function ArticleModal({
  modalMode,
  tempArticle,
  isOpen,
  setIsOpen,
  getArticles,
  page,
}) {
  // 避免更改到 tempArticle
  const [modalData, setModalData] = useState(tempArticle);

  // 轉換日期格式
  const formatTimestampToDate = (timestamp) => {
    if (!timestamp || timestamp === 0) return ""; // 預設沒有日期時顯示空字串
    const date = new Date(timestamp * 1000);
    return date.toISOString().split("T")[0]; // 轉 YYYY-MM-DD
  };

  // 取得 article 對應的 content
  const getArticleContect = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/${API_PATH}/admin/article/${tempArticle.id}`
      );

      setModalData({
        ...tempArticle,
        create_at: formatTimestampToDate(tempArticle.create_at),
        content: res.data.article.content,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // tempArticle 更新時，也更新 modalData (編輯文章時帶資料)
  useEffect(() => {
    getArticleContect();
  }, [tempArticle]);

  // 控制文章新增/編輯的 Modal
  const articleModalRef = useRef(null);

  // 初始化 Bootstrap Modal，關閉時不會自動加背景遮罩。
  useEffect(() => {
    new Modal(articleModalRef.current, {
      backdrop: false,
    });
  }, []);

  // 打開文章 Modal
  useEffect(() => {
    if (isOpen) {
      const modalInstance = Modal.getInstance(articleModalRef.current);
      modalInstance.show();
    }
  }, [isOpen]);

  // 關閉文章 Modal
  const handleCloseArticleModal = () => {
    const modalInstance = Modal.getInstance(articleModalRef.current);
    modalInstance.hide();
    setIsOpen(false);
  };

  // 文章表單輸入處理
  const handleModalInputChange = (e) => {
    const { value, name, checked, type } = e.target;
    if (name === "tag") {
      const tags = value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      setModalData({
        ...modalData,
        tag: tags,
      });
    } else {
      setModalData({
        ...modalData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  // 新增文章
  const createArticle = async () => {
    console.log(modalData);
    try {
      await axios.post(`${BASE_URL}/api/${API_PATH}/admin/article`, {
        data: {
          ...modalData,

          create_at: modalData.create_at
            ? new Date(modalData.create_at).getTime() / 1000
            : 0, // 如果是空，設為 0
        },
      });
    } catch (error) {
      alert(error.response.data.message.join("、"));
    }
  };

  // 編輯文章
  const updateArticle = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/${API_PATH}/admin/article/${modalData.id}`,
        {
          data: {
            ...modalData,

            create_at: modalData.create_at
              ? new Date(modalData.create_at).getTime() / 1000
              : 0, // 如果是空，設為 0
          },
        }
      );
    } catch (error) {
      console.error("更新文章失敗:", error);
      alert("更新文章失敗");
    }
  };

  // 編輯文章確認鈕
  const handleUpdateArticle = async () => {
    const apiCall = modalMode === "create" ? createArticle : updateArticle;

    try {
      await apiCall();
      getArticles(page);
      handleCloseArticleModal();
    } catch (error) {
      console.error("更新文章失敗:", error);
      alert("更新文章失敗");
    }
  };

  // 圖片上傳
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file-to-upload", file);

    try {
      const res = await axios.post(
        `${BASE_URL}/api/${API_PATH}/admin/upload`,
        formData
      );

      const uploadedImageUrl = res.data.imageUrl;
      setModalData({ ...modalData, image: uploadedImageUrl });
    } catch (error) {
      console.error("上傳圖片失敗:", error);
      alert("上傳圖片失敗");
    }
  };

  return (
    <div
      ref={articleModalRef}
      id="articleModal"
      className="modal"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content border-0 shadow">
          <div className="modal-header border-bottom">
            <h5 className="modal-title fs-4">
              {modalMode === "create" ? "新增文章" : "編輯文章"}
            </h5>
            <button
              onClick={handleCloseArticleModal}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="mb-5">
                  <label htmlFor="fileInput" className="form-label">
                    圖片上傳
                  </label>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    className="form-control"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="primary-image" className="form-label">
                    主圖
                  </label>
                  <div className="input-group">
                    <input
                      value={modalData.image}
                      onChange={handleModalInputChange}
                      name="image"
                      type="text"
                      id="primary-image"
                      className="form-control"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <img
                    src={
                      modalData.image
                        ? modalData.image
                        : "https://fakeimg.pl/400x300/"
                    }
                    alt={modalData.title}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="row g-3 mb-5">
                  <div className="col-12 mb-2">
                    <label htmlFor="title" className="form-label">
                      文章名稱<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      value={modalData.title}
                      onChange={handleModalInputChange}
                      name="title"
                      id="title"
                      type="text"
                      className="form-control"
                      placeholder="請輸入文章名稱"
                    />
                  </div>

                  <div className="col-6 mb-2">
                    <label htmlFor="author" className="form-label">
                      作者<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      value={modalData.author}
                      onChange={handleModalInputChange}
                      name="author"
                      id="author"
                      type="text"
                      className="form-control"
                      placeholder="請輸入作者名字"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="create_at" className="form-label">
                      發布日
                    </label>
                    <input
                      type="date"
                      id="create_at"
                      name="create_at"
                      className="form-control"
                      value={modalData.create_at}
                      onChange={handleModalInputChange}
                      placeholder="請輸入發布日"
                    />
                  </div>

                  <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="tag" className="form-label">
                        標籤（以逗號分隔）
                        <span className="text-primary ms-1">*</span>
                      </label>
                      <input
                        value={modalData.tag.join(", ")}
                        onChange={handleModalInputChange}
                        name="tag"
                        id="tag"
                        type="text"
                        className="form-control"
                        placeholder="請輸入標籤，例如：運動, 飲食, 養身"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="description" className="form-label">
                        文章描述
                      </label>
                      <textarea
                        value={modalData.description}
                        onChange={handleModalInputChange}
                        name="description"
                        id="description"
                        className="form-control"
                        rows={4}
                        placeholder="請輸入文章描述"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="content" className="form-label">
                        文章內容
                      </label>
                      <textarea
                        value={modalData.content}
                        onChange={handleModalInputChange}
                        name="content"
                        id="content"
                        className="form-control"
                        rows={20}
                        placeholder="請輸入文章內容"
                      ></textarea>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="modal-footer border-top bg-light">
            <div className="form-check me-5">
              <input
                checked={modalData.isPublic}
                onChange={handleModalInputChange}
                name="isPublic"
                type="checkbox"
                className="form-check-input"
                id="isEnabled"
              />
              <label className="form-check-label" htmlFor="isEnabled">
                是否發布
              </label>
            </div>
            <button
              onClick={handleCloseArticleModal}
              type="button"
              className="btn btn-outline-secondary-2"
            >
              取消
            </button>
            <button
              onClick={handleUpdateArticle}
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

export default ArticleModal;
