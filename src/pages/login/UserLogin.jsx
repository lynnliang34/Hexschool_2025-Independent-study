import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import { Logo, Toast } from "../../components";
import { pushMessage } from "../../redux/toastSlice";
import { clearCartDetail } from "../../redux/cartSlice";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function UserLogin() {
  // 從 Redux store 取得使用者是否已登入的狀態
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // 存放登入時的帳號與密碼
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  // 處理帳號輸入
  // 更新 account 狀態，讓使用者輸入帳號密碼時即時更新
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  // 登入功能
  // 發送登入請求，成功後將 token 存入 cookie，並設置全域的 Authorization 標頭，然後獲取產品列表。
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const previousPage = useSelector((state) => state.user.previousPage);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/admin/signin`, account);
      const { token, expired } = res.data;

      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      axios.defaults.headers.common["Authorization"] = token;

      resetCart(); // 重置後台購物車
      dispatch(clearCartDetail()); //重置前台購物車

      dispatch(loginUser({ name: account.username }));
      navigate(previousPage, { replace: true }); // 返回點擊登入的頁面
    } catch (error) {
      dispatch(
        pushMessage({
          text: `登入失敗：${error.message}`,
          status: "failed",
        })
      );
    }
  };

  // 清空購物車
  const deleteCartAll = async () => {
    try {
      await axios.delete(`${BASE_URL}/api/${API_PATH}/carts`);
      console.log("清空後台購物車");
    } catch (error) {
      console.error(error);
    }
  };

  // 重置後台購物車
  const resetCart = async () => {
    try {
      // 取得購物車
      const res = await axios.get(`${BASE_URL}/api/${API_PATH}/cart`);
      const cartLength = res.data.data.carts.length;

      // 如果購物車有商品才清空
      if (cartLength) {
        deleteCartAll();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary-2">
        <Link to="/">
          <Logo className={"login-logo"} />
        </Link>
        <h1 className="mt-5 mb-7">會員登入</h1>

        <form
          onSubmit={handleLogin}
          className="d-flex flex-column gap-3 login-input-w"
        >
          <div className="form-floating mb-1">
            <input
              name="username"
              value={account.username}
              onChange={handleInputChange}
              type="email"
              className="form-control "
              id="username"
              placeholder="name@example.com"
            />
            <label htmlFor="username">電子信箱</label>
          </div>
          <div className="form-floating mb-4">
            <input
              name="password"
              value={account.password}
              onChange={handleInputChange}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <label htmlFor="password">密碼</label>
          </div>
          {isAuthenticated ? (
            <button className="btn btn-outline-primary disabled  mx-10">
              已登入
            </button>
          ) : (
            <button className="btn btn-primary text-white mx-10">登入</button>
          )}
        </form>
        <p className="mt-5 mb-3 fs-7">
          沒有帳號？
          <Link to="/register">
            <span className="login-links">註冊去</span>
          </Link>
          <span className="mx-1"> | </span>
          <Link to="/">
            <span className="login-links">回首頁</span>
          </Link>
          <span className="mx-1"> | </span>
          <Link to="/">
            <span className="login-links">忘記密碼</span>
          </Link>
        </p>
      </div>

      <Toast />
    </>
  );
}
