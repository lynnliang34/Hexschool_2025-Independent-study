import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../redux/adminSlice";
import { Logo, Toast } from "../../components";
import { pushMessage } from "../../redux/toastSlice";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function UserLogin() {
  // 從 Redux store 取得管理者是否已登入的狀態
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);

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
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/admin/signin`, account);
      const { token, expired } = res.data;

      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      axios.defaults.headers.common["Authorization"] = token;

      dispatch(loginAdmin({ name: account.username }));
      navigate("/admin");
    } catch (error) {
      dispatch(
        pushMessage({
          text: `登入失敗：${error.message}`,
          status: "failed",
        })
      );
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-secondary-1">
        <Link to="/">
          <Logo className={"login-logo"} />
        </Link>
        <h1 className="mt-5 mb-7">後台登入</h1>

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
              className="form-control"
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
            <button className="btn btn-outline-secondary-2 disabled mx-10">
              已登入
            </button>
          ) : (
            <button className="btn btn-secondary-2 text-white mx-10">
              登入
            </button>
          )}
        </form>
        <p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
      </div>

      <Toast />
    </>
  );
}
