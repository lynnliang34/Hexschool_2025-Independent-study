import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Pagination, ProductModal, DelProductModal } from "../../components";
import ReactLoading from "react-loading";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

// Modal 初始狀態
const defaultModalState = {
  imageUrl: "",
  title: "",
  category: "",
  unit: "",
  origin_price: "",
  price: "",
  description: "",
  content: {
    class_duration: "",
    class_time: "",
    suitable_age: "",
    physical_requirements: "",
    venue_and_equipment: "",
  },
  timeSlots: [
    {
      course_id: "",
      teacher: "",
      date: "",
      time: "",
      signed_up_users: [],
    },
  ],
  is_enabled: 0,
  is_featured: 0,
  is_lastest: 0,
  is_popular: 0,
  imagesUrl: [""],
};

export default function AdminCourses() {
  // 存放產品列表的狀態
  const [productList, setProductList] = useState([]);

  // 螢幕 loading
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  // 獲取產品列表
  // 向後端 API 取得產品列表，並更新 productList
  const getProducts = useCallback(async (page = 1) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/${API_PATH}/admin/products?page=${page}`
      );
      setProductList(
        res.data.products.map((product) => ({
          ...product,
          imagesUrl: product.imagesUrl || [], // 如果沒有 imagesUrl，設為空陣列
          timeSlots: product.timeSlots || [
            {
              course_id: "",
              teacher: "",
              date: "",
              time: "",
              signed_up_users: [],
            },
          ], // 如果沒有 timeSlots，設為陣列物件資料
          is_featured: product.is_featured || 0,
          is_lastest: product.is_lastest || 0,
          is_popular: product.is_popular || 0,
        }))
      );
      setPageInfo(res.data.pagination);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // 檢查登入狀態
  // 驗證使用者是否已登入，如果登入成功，則載入產品列表。
  const checkIsLogin = useCallback(async () => {
    try {
      setIsScreenLoading(true);
      await axios.post(`${BASE_URL}/api/user/check`);
      await getProducts();

      setIsScreenLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [getProducts]);

  // 初始掛載時檢查登入
  // 當元件掛載時，從 cookie 取得 token，設置 Authorization，並檢查是否已登入。
  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    axios.defaults.headers.common["Authorization"] = token;

    checkIsLogin();
  }, [checkIsLogin]);

  //  ——————— 加入產品 Modal ———————

  // 記錄當前 Modal 是 "create" 還是 "edit"
  const [modalMode, setmodalMode] = useState(null);

  // 產品 Modal 狀態是開或關
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // 刪除產品 Modal 狀態是開或關
  const [isDelProductModalOpen, setIsDelProductModalOpen] = useState(false);

  // 打開產品 Modal
  const handleOpenProductModal = (mode, product) => {
    setmodalMode(mode);

    switch (mode) {
      // mode === "create" 時，設置空白的產品表單
      case "create":
        setTempProduct(defaultModalState);
        break;

      // mode === "edit" 時，載入選中的產品資料
      case "edit":
        setTempProduct(product);
        break;

      default:
        break;
    }

    setIsProductModalOpen(true);
  };

  // 打開刪除產品 Modal
  const handleOpenDelProductModal = (product) => {
    setTempProduct(product);

    setIsDelProductModalOpen(true);
  };

  const [tempProduct, setTempProduct] = useState(defaultModalState);

  // 分頁狀態
  const [pageInfo, setPageInfo] = useState({});

  // 換頁功能
  const handlePageChange = (page) => {
    getProducts(page);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between mb-5">
              <h1 className="fw-bold text-secondary">課程列表</h1>
              <button
                onClick={() => handleOpenProductModal("create")}
                type="button"
                className="btn btn-secondary-2 text-white"
              >
                建立新的課程
              </button>
            </div>
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">課程名稱</th>
                  <th scope="col">原價</th>
                  <th scope="col">售價</th>
                  <th scope="col">是否啟用</th>
                  <th scope="col">主打</th>
                  <th scope="col">熱門</th>
                  <th scope="col">最新</th>
                  <th scope="col">編輯 / 刪除</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => (
                  <tr key={product.id}>
                    <th scope="row">{product.title}</th>
                    <td>{product.origin_price}</td>
                    <td>{product.price}</td>
                    <td>
                      {product.is_enabled ? (
                        <span className="text-secondary">啟用</span>
                      ) : (
                        <span>未啟用</span>
                      )}
                    </td>
                    <td>
                      {product.is_featured ? (
                        <span className="text-primary">
                          <i class="bi bi-star-fill"></i>
                        </span>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td>
                      {product.is_popular ? (
                        <span className="text-primary">
                          <i class="bi bi-star-fill"></i>
                        </span>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td>
                      {product.is_lastest ? (
                        <span className="text-primary">
                          <i class="bi bi-star-fill"></i>
                        </span>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td>
                      <div className="btn-group">
                        <button
                          onClick={() =>
                            handleOpenProductModal("edit", product)
                          }
                          type="button"
                          className="edit-product-btn"
                        >
                          <i className="bi bi-pencil-square fs-4"></i>
                        </button>
                        <button
                          onClick={() => handleOpenDelProductModal(product)}
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

      <ProductModal
        modalMode={modalMode}
        tempProduct={tempProduct}
        isOpen={isProductModalOpen}
        setIsOpen={setIsProductModalOpen}
        getProducts={getProducts}
        page={pageInfo.current_page}
      />

      <DelProductModal
        tempProduct={tempProduct}
        isOpen={isDelProductModalOpen}
        setIsOpen={setIsDelProductModalOpen}
        getProducts={getProducts}
        page={pageInfo.current_page}
      />
    </>
  );
}
