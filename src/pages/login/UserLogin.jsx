import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import { Logo } from "../../components";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function UserLogin() {
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

      dispatch(loginUser({ name: account.username }));
      navigate("/profile");
    } catch (error) {
      alert(`登入失敗：${error.message}`);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary-2">
      <div className="d-flex align-items-center">
        <Link to="/">
          <Logo className={"login-logo me-1"} />
        </Link>
        <h1 className="mt-5 mb-7 me-1">會員登入</h1>
      </div>

      <form onSubmit={handleLogin} className="d-flex flex-column gap-3 ">
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
          <label htmlFor="username">Email address</label>
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
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-primary text-white">登入</button>
      </form>
      <p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
    </div>
  );
}
