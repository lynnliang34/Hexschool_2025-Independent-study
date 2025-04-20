import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Pagination, ArticleModal, DelArticleModal } from "../../components";
import ReactLoading from "react-loading";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

// Modal 初始狀態
const defaultModalState = {
  title: "",
  description: "",
  image: "",
  tag: ["運動", "飲食", "養身", "醫療", "癌症", "居家"],
  create_at: 0,
  author: "",
  isPublic: false,
  content: "",
};

export default function AdminKnowledges() {
  // 存放文章列表的狀態
  const [articleList, setArticleList] = useState([]);

  // 螢幕 loading
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  // 分頁狀態
  const [pageInfo, setPageInfo] = useState({});

  // 換頁功能
  const handlePageChange = (page) => {
    getArticles(page);
  };

  // 轉換日期格式
  const formatTimestampToDate = (timestamp) => {
    if (!timestamp || timestamp === 0) return ""; // 預設沒有日期時顯示空字串
    const date = new Date(timestamp * 1000);
    return date.toISOString().split("T")[0]; // 轉 YYYY-MM-DD
  };

  // 獲取文章列表
  // 向後端 API 取得文章列表，並更新 articleList
  const getArticles = useCallback(async (page = 1) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/${API_PATH}/admin/articles?page=${page}`
      );

      setArticleList(res.data.articles);
      console.log(res.data.articles);
      setPageInfo(res.data.pagination);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // 檢查登入狀態
  // 驗證使用者是否已登入，如果登入成功，則載入文章列表。
  const checkIsLogin = useCallback(async () => {
    try {
      setIsScreenLoading(true);
      await axios.post(`${BASE_URL}/api/user/check`);
      await getArticles();

      setIsScreenLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [getArticles]);

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

  //  ——————— 加入 Modal ———————

  // 記錄當前 Modal 是 "create" 還是 "edit"
  const [modalMode, setmodalMode] = useState(null);

  // 文章 Modal 狀態是開或關
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  // 刪除文章 Modal 狀態是開或關
  const [isDelArticleModalOpen, setIsDelArticleModalOpen] = useState(false);

  // 打開文章 Modal
  const handleOpenArticleModal = (mode, article) => {
    setmodalMode(mode);

    switch (mode) {
      // mode === "create" 時，設置空白的文章表單
      case "create":
        setTempArticle(defaultModalState);
        break;

      // mode === "edit" 時，載入選中的文章資料
      case "edit":
        setTempArticle(article);
        break;

      default:
        break;
    }

    setIsArticleModalOpen(true);
  };

  // 打開刪除文章 Modal
  const handleOpenDelArticleModal = (article) => {
    setTempArticle(article);

    setIsDelArticleModalOpen(true);
  };

  const [tempArticle, setTempArticle] = useState(defaultModalState);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between mb-5">
              <h1 className="fw-bold text-secondary">後台知識分享</h1>
              <button
                onClick={() => handleOpenArticleModal("create")}
                type="button"
                className="btn btn-secondary-2 text-white"
              >
                建立新的文章
              </button>
            </div>
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">文章名稱</th>
                  <th scope="col">發布日期</th>

                  <th scope="col">是否發布</th>

                  <th scope="col">編輯 / 刪除</th>
                </tr>
              </thead>
              <tbody>
                {articleList.map((article) => (
                  <tr key={article.id}>
                    <th scope="row">{article.title}</th>
                    <td>{formatTimestampToDate(article.create_at)}</td>

                    <td>
                      {article.isPublic ? (
                        <span className="text-secondary">發布</span>
                      ) : (
                        <span>未發布</span>
                      )}
                    </td>

                    <td>
                      <div className="btn-group">
                        <button
                          onClick={() =>
                            handleOpenArticleModal("edit", article)
                          }
                          type="button"
                          className="edit-product-btn"
                        >
                          <i className="bi bi-pencil-square fs-4"></i>
                        </button>
                        <button
                          onClick={() => handleOpenDelArticleModal(article)}
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

      <ArticleModal
        modalMode={modalMode}
        tempArticle={tempArticle}
        isOpen={isArticleModalOpen}
        setIsOpen={setIsArticleModalOpen}
        getArticles={getArticles}
        page={pageInfo.current_page}
      />

      <DelArticleModal
        tempArticle={tempArticle}
        isOpen={isDelArticleModalOpen}
        setIsOpen={setIsDelArticleModalOpen}
        getArticles={getArticles}
        page={pageInfo.current_page}
      />
    </>
  );
}
