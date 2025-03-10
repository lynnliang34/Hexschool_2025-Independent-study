import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Modal } from "bootstrap";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function ProductModal({
  modalMode,
  tempProduct,
  isOpen,
  setIsOpen,
  getProducts,
}) {
  // 避免更改到 tempProduct
  const [modalData, setModalData] = useState(tempProduct);

  // tempProduct 更新時，也更新 modalData (編輯產品時帶資料)
  useEffect(() => {
    setModalData({ ...tempProduct });
  }, [tempProduct]);

  // 控制產品新增/編輯的 Modal
  const productModalRef = useRef(null);

  // 初始化 Bootstrap Modal，關閉時不會自動加背景遮罩。
  useEffect(() => {
    new Modal(productModalRef.current, {
      backdrop: false,
    });
  }, []);

  // 打開產品 Modal
  useEffect(() => {
    if (isOpen) {
      const modalInstance = Modal.getInstance(productModalRef.current);
      modalInstance.show();
    }
  }, [isOpen]);

  // 關閉產品 Modal
  const handleCloseProductModal = () => {
    const modalInstance = Modal.getInstance(productModalRef.current);
    modalInstance.hide();
    setIsOpen(false);
  };

  // 產品表單輸入處理
  const handleModalInputChange = (e) => {
    const { value, name, checked, type } = e.target;

    if (type === "checkbox") {
      setModalData({
        ...modalData,
        [name]: checked, // 更新 checkbox 在根層的值
      });
    } else {
      setModalData({
        ...modalData,
        content: {
          ...modalData.content,
          [name]: value, // 更新 content 中的對應欄位
        },
      });
    }
  };

  // 新增產品
  const createProduct = async () => {
    try {
      await axios.post(`${BASE_URL}/api/${API_PATH}/admin/product`, {
        data: {
          ...modalData,
          origin_price: Number(modalData.origin_price),
          price: Number(modalData.price),
          is_enabled: modalData.is_enabled ? 1 : 0,
        },
      });
    } catch (error) {
      alert("新增產品失敗");
    }
  };

  // 編輯產品
  const updateProduct = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/${API_PATH}/admin/product/${modalData.id}`,
        {
          data: {
            ...modalData,
            origin_price: Number(modalData.origin_price),
            price: Number(modalData.price),
            is_enabled: modalData.is_enabled ? 1 : 0,
          },
        }
      );
    } catch (error) {
      alert("更新產品失敗");
    }
  };

  // 編輯產品確認鈕
  const handleUpdateProduct = async () => {
    const apiCall = modalMode === "create" ? createProduct : updateProduct;

    try {
      await apiCall();
      getProducts();
      handleCloseProductModal();
    } catch (error) {
      alert("更新產品失敗");
    }
  };

  // 處理圖片輸入
  const handleImageChange = (e, index) => {
    const { value } = e.target;

    const newImages = [...modalData.imagesUrl];

    newImages[index] = value;

    setModalData({
      ...modalData,
      imagesUrl: newImages,
    });
  };

  // 新增圖片
  const handleAddImage = () => {
    const newImages = [...modalData.imagesUrl, ""];

    setModalData({
      ...modalData,
      imagesUrl: newImages,
    });
  };

  // 刪除圖片
  const handleRemoveImage = () => {
    const newImages = [...modalData.imagesUrl];

    newImages.pop();

    setModalData({
      ...modalData,
      imagesUrl: newImages,
    });
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
      setModalData({ ...modalData, imageUrl: uploadedImageUrl });
    } catch (error) {
      alert("上傳圖片失敗");
    }
  };

  return (
    <div
      ref={productModalRef}
      id="productModal"
      className="modal"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content border-0 shadow">
          <div className="modal-header border-bottom">
            <h5 className="modal-title fs-4">
              {modalMode === "create" ? "新增課程" : "編輯課程"}
            </h5>
            <button
              onClick={handleCloseProductModal}
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
                      value={modalData.imageUrl}
                      onChange={handleModalInputChange}
                      name="imageUrl"
                      type="text"
                      id="primary-image"
                      className="form-control"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <img
                    src={modalData.imageUrl}
                    alt={modalData.title}
                    className="img-fluid"
                  />
                </div>

                {/* 副圖 */}
                <div className="border border-2 border-dashed rounded-3 p-3">
                  {modalData.imagesUrl?.map((image, index) => (
                    <div key={index} className="mb-2">
                      <label
                        htmlFor={`imagesUrl-${index + 1}`}
                        className="form-label"
                      >
                        副圖 {index + 1}
                      </label>
                      <input
                        value={image}
                        onChange={(e) => handleImageChange(e, index)}
                        id={`imagesUrl-${index + 1}`}
                        type="text"
                        placeholder={`圖片網址 ${index + 1}`}
                        className="form-control mb-2"
                      />
                      {image && (
                        <img
                          src={image}
                          alt={`副圖 ${index + 1}`}
                          className="img-fluid mb-2"
                        />
                      )}
                    </div>
                  ))}

                  <div className="btn-group w-100">
                    {modalData.imagesUrl.length < 5 &&
                      modalData.imagesUrl[modalData.imagesUrl.length - 1] !==
                        "" && (
                        <button
                          onClick={handleAddImage}
                          className="btn btn-outline-primary btn-sm w-100"
                        >
                          新增圖片
                        </button>
                      )}

                    {modalData.imagesUrl.length > 0 && (
                      <button
                        onClick={handleRemoveImage}
                        className="btn btn-outline-danger btn-sm w-100"
                      >
                        取消圖片
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    標題<span className="text-primary ms-1">*</span>
                  </label>
                  <input
                    value={modalData.title}
                    onChange={handleModalInputChange}
                    name="title"
                    id="title"
                    type="text"
                    className="form-control"
                    placeholder="請輸入標題"
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <label htmlFor="category" className="form-label">
                      分類<span className="text-primary ms-1">*</span>
                    </label>
                    <select
                      value={modalData.category}
                      onChange={handleModalInputChange}
                      name="category"
                      id="category"
                      type="text"
                      className="form-select"
                    >
                      <option disabled defaultValue="">
                        請選擇分類
                      </option>
                      <option value="運動保健">運動保健</option>
                      <option value="心理成長">心理成長</option>
                      <option value="社區活動">社區活動</option>
                      <option value="生活技能">生活技能</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="unit" className="form-label">
                        單位<span className="text-primary ms-1">*</span>
                      </label>
                      <select
                        value={modalData.unit}
                        onChange={handleModalInputChange}
                        name="unit"
                        id="unit"
                        type="text"
                        className="form-select"
                      >
                        <option disabled defaultValue="">
                          請選擇單位
                        </option>
                        <option value="堂">堂</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <label htmlFor="origin_price" className="form-label">
                      原價
                    </label>
                    <input
                      value={modalData.origin_price}
                      onChange={handleModalInputChange}
                      name="origin_price"
                      id="origin_price"
                      type="number"
                      className="form-control"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="price" className="form-label">
                      售價
                    </label>
                    <input
                      value={modalData.price}
                      onChange={handleModalInputChange}
                      name="price"
                      id="price"
                      type="number"
                      className="form-control"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    課程描述
                  </label>
                  <textarea
                    value={modalData.description}
                    onChange={handleModalInputChange}
                    name="description"
                    id="description"
                    className="form-control"
                    rows={4}
                    placeholder="請輸入課程描述"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="class_duration" className="form-label">
                    課程時長
                  </label>
                  <input
                    type="text"
                    id="class_duration"
                    name="class_duration"
                    className="form-control"
                    value={modalData.content.class_duration}
                    onChange={handleModalInputChange}
                    placeholder="請輸入課程時長"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="class_time" className="form-label">
                    上課時間
                  </label>
                  <input
                    type="text"
                    id="class_time"
                    name="class_time"
                    className="form-control"
                    value={modalData.content.class_time}
                    onChange={handleModalInputChange}
                    placeholder="請輸入上課時間"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="suitable_age" className="form-label">
                    適用年齡
                  </label>
                  <input
                    type="text"
                    id="suitable_age"
                    name="suitable_age"
                    className="form-control"
                    value={modalData.content.suitable_age}
                    onChange={handleModalInputChange}
                    placeholder="請輸入適用年齡"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="physical_requirements" className="form-label">
                    身體狀況要求
                  </label>
                  <input
                    type="text"
                    id="physical_requirements"
                    name="physical_requirements"
                    className="form-control"
                    value={modalData.content.physical_requirements}
                    onChange={handleModalInputChange}
                    placeholder="請輸入身體狀況要求"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="venue_and_equipment" className="form-label">
                    場地與設備
                  </label>
                  <input
                    type="text"
                    id="venue_and_equipment"
                    name="venue_and_equipment"
                    className="form-control"
                    value={modalData.content.venue_and_equipment}
                    onChange={handleModalInputChange}
                    placeholder="請輸入場地與設備"
                  />
                </div>

                <div className="form-check">
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
              </div>
            </div>
          </div>

          <div className="modal-footer border-top bg-light">
            <button
              onClick={handleCloseProductModal}
              type="button"
              className="btn btn-outline-secondary-2"
            >
              取消
            </button>
            <button
              onClick={handleUpdateProduct}
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

export default ProductModal;
