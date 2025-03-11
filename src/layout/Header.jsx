import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setPreviousPage, logoutUser } from "../redux/userSlice";
import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";
import {
  HeaderSearchBar,
  HeaderSidebarMenu,
  HeaderNavbar,
  LogoSlogan,
} from "../components";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Header() {
  const dispatch = useDispatch(); // 取得 Redux 的 dispatch 函式
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // 從 Redux store 取得使用者是否已登入的狀態

  const menuModalRef = useRef(null); // Modal 要引用的參考 DOM 元素
  const menuModal = useRef(null); // 儲存 Modal 物件的引用

  const navigate = useNavigate(); // React Router 的導航函式
  const location = useLocation();

  const handleToLogin = () => {
    dispatch(setPreviousPage(location.pathname)); // 記錄當前頁面
  };

  // 登出功能
  const handleLogout = () => {
    // 1. 關閉 Modal (適用手機版選單)
    closeMenuModal();

    // 2. 導航到首頁
    navigate("/");

    // 3. 延遲執行登出 API，確保 UI 變更優先
    setTimeout(() => {
      axios
        .post(`${BASE_URL}/logout`) // 發送登出請求
        .then(() => {
          dispatch(logoutUser()); // 觸發 Redux action，清除登入狀態
          alert("登出成功"); // 提示使用者登出成功
        })
        .catch(() => {
          alert("登出失敗"); // 提示使用者登出失敗
        });
    }, 100);
  };

  // menuModal 設定
  useEffect(() => {
    // 初始化 Bootstrap Modal，將 menuModalRef 綁定到 modal 實例
    menuModal.current = new Modal(menuModalRef.current);
  }, []);

  // 打開選單 Modal
  const openMenuModal = () => {
    menuModal.current.show();
  };

  // 關閉選單 Modal
  const closeMenuModal = () => {
    menuModal.current.hide();
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* Logo*/}
              <Link className="me-lg-5 me-xl-10" to="/">
                <LogoSlogan className={"logo"} />
              </Link>
              {/* 手機版*/}
              <div className="d-flex">
                {/* search*/}
                <HeaderSearchBar />

                {/* list*/}
                <button className="list d-lg-none" onClick={openMenuModal}>
                  <i className="bi bi-list"></i>
                </button>
              </div>

              {/* 手機版 modal*/}
              <div
                className="modal fade"
                ref={menuModalRef}
                tabIndex="-1"
                aria-labelledby="menuModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog h-100">
                  <div className="modal-content h-100">
                    <div className="modal-body">
                      <div className="ms-12">
                        {/* 會員頭像 */}

                        {isAuthenticated ? (
                          <Link
                            className="provile-link mb-6"
                            to="#"
                            onClick={closeMenuModal}
                          >
                            <div>
                              <svg
                                className="provile-photo"
                                viewBox="0 0 46 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M22.9999 3.83325C12.4327 3.83325 3.83325 12.4327 3.83325 22.9999C3.83325 28.3538 6.09492 33.5033 10.0369 37.1194C10.0496 37.1321 10.0624 37.1449 10.0752 37.1513C13.6083 40.3841 18.1955 42.1666 22.9999 42.1666C27.8044 42.1666 32.3916 40.3841 35.9246 37.1513C35.9374 37.1513 35.9502 37.1321 35.963 37.1194C39.9049 33.5033 42.1666 28.3538 42.1666 22.9999C42.1666 12.4327 33.5671 3.83325 22.9999 3.83325ZM22.9999 11.781C26.6544 11.781 29.6252 14.7583 29.6252 18.4063C29.6252 22.0544 26.6544 25.0316 22.9999 25.0316C19.3455 25.0316 16.3746 22.0608 16.3746 18.4063C16.3746 14.7519 19.3455 11.781 22.9999 11.781ZM35.0941 36.1738C35.011 36.2505 34.928 36.3271 34.8449 36.391C31.5802 39.298 27.3827 40.8888 22.9999 40.8888C18.6171 40.8888 14.4196 39.298 11.1549 36.391C11.0719 36.3271 10.9888 36.2505 10.9058 36.1738C10.6119 35.9055 10.3244 35.6244 10.056 35.3369C11.2571 30.213 15.8635 26.4819 21.243 26.4819H24.7569C30.1363 26.4819 34.7427 30.213 35.9438 35.3369C35.6755 35.6244 35.388 35.9055 35.0941 36.1738Z" />
                              </svg>
                            </div>
                          </Link>
                        ) : (
                          <></>
                        )}

                        {/* 頁面清單 */}
                        <HeaderSidebarMenu />

                        <div className="d-flex">
                          {isAuthenticated ? (
                            <Link
                              className="modal-link-3 logout-link"
                              onClick={() => {
                                handleLogout();
                              }}
                              disabled={!isAuthenticated} // 禁止連點
                            >
                              登出
                            </Link>
                          ) : (
                            <>
                              <Link
                                className="modal-link-3 register-link me-2"
                                to="/register"
                                onClick={closeMenuModal}
                              >
                                註冊
                              </Link>
                              <Link
                                className="modal-link-3 login-link"
                                to="/login"
                                onClick={closeMenuModal}
                              >
                                登入
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 電腦版*/}
              <div className="d-none d-lg-block w-100">
                <div className="d-flex justify-content-between align-items-center">
                  {/* 搜尋框 */}
                  <div className="position-relative">
                    <form>
                      <input
                        className="search"
                        type="search"
                        placeholder="搜尋有氧課程"
                        aria-label="Search"
                      />
                    </form>
                    <div className="search-icon-lg position-absolute">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_94_4564)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0833 7.75C10.5855 7.75 7.75 10.5855 7.75 14.0833C7.75 17.5811 10.5855 20.4167 14.0833 20.4167C17.5811 20.4167 20.4167 17.5811 20.4167 14.0833C20.4167 10.5855 17.5811 7.75 14.0833 7.75ZM5.75 14.0833C5.75 9.48096 9.48096 5.75 14.0833 5.75C18.6857 5.75 22.4167 9.48096 22.4167 14.0833C22.4167 18.6857 18.6857 22.4167 14.0833 22.4167C9.48096 22.4167 5.75 18.6857 5.75 14.0833Z"
                            fill="#484848"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5553 18.5553C18.9459 18.1648 19.579 18.1648 19.9696 18.5553L23.9571 22.5428C24.3476 22.9334 24.3476 23.5665 23.9571 23.9571C23.5665 24.3476 22.9334 24.3476 22.5428 23.9571L18.5553 19.9696C18.1648 19.579 18.1648 18.9459 18.5553 18.5553Z"
                            fill="#484848"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_94_4564">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* 導覽列 */}
                  <div className="d-flex align-items-center">
                    <HeaderNavbar />

                    <ul className="navbar-nav">
                      {isAuthenticated ? (
                        <>
                          <li className="nav-item me-xl-2">
                            <Link
                              className="nav-link-3 provile-link"
                              to="/checkout"
                            >
                              <svg
                                className="provile-photo"
                                viewBox="0 0 46 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M22.9999 3.83325C12.4327 3.83325 3.83325 12.4327 3.83325 22.9999C3.83325 28.3538 6.09492 33.5033 10.0369 37.1194C10.0496 37.1321 10.0624 37.1449 10.0752 37.1513C13.6083 40.3841 18.1955 42.1666 22.9999 42.1666C27.8044 42.1666 32.3916 40.3841 35.9246 37.1513C35.9374 37.1513 35.9502 37.1321 35.963 37.1194C39.9049 33.5033 42.1666 28.3538 42.1666 22.9999C42.1666 12.4327 33.5671 3.83325 22.9999 3.83325ZM22.9999 11.781C26.6544 11.781 29.6252 14.7583 29.6252 18.4063C29.6252 22.0544 26.6544 25.0316 22.9999 25.0316C19.3455 25.0316 16.3746 22.0608 16.3746 18.4063C16.3746 14.7519 19.3455 11.781 22.9999 11.781ZM35.0941 36.1738C35.011 36.2505 34.928 36.3271 34.8449 36.391C31.5802 39.298 27.3827 40.8888 22.9999 40.8888C18.6171 40.8888 14.4196 39.298 11.1549 36.391C11.0719 36.3271 10.9888 36.2505 10.9058 36.1738C10.6119 35.9055 10.3244 35.6244 10.056 35.3369C11.2571 30.213 15.8635 26.4819 21.243 26.4819H24.7569C30.1363 26.4819 34.7427 30.213 35.9438 35.3369C35.6755 35.6244 35.388 35.9055 35.0941 36.1738Z" />
                              </svg>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link-3 logout-link"
                              onClick={() => {
                                navigate("/"); // 先導航
                                handleLogout(); // 再登出
                              }}
                              disabled={!isAuthenticated} // 禁止連點
                            >
                              登出
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="nav-item me-xl-2">
                            <Link
                              className="nav-link-3 register-link"
                              to="/register"
                            >
                              註冊
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link-3 login-link"
                              to="/login"
                              onClick={handleToLogin}
                            >
                              登入
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* 購物車 */}
        {isAuthenticated ? (
          <div className="position-fixed cart-link-circle">
            <Link className="nav-link-3 cart-link" to="/checkout">
              <i className="bi bi-cart-fill mt-3 me-1 position-relative">
                <span
                  className="position-absolute cart-number translate-middle badge rounded-pill"
                  style={{ fontSize: "10px" }}
                >
                  3<span className="visually-hidden">purchase quantity</span>
                </span>
              </i>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
