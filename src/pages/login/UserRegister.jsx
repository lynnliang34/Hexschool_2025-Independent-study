import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { Logo, Toast } from "../../components";

// 環境變數
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function UserRegister() {
  // 從 Redux store 取得使用者是否已登入的狀態
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // 存放註冊時的帳號與密碼
  const [account, setAccount] = useState({
    email: "",
    password: "",
    reconfirm_password: "",
  });

  // 處理帳號輸入，更新 account 狀態
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary-2">
        <div className="d-flex align-items-center">
          <Link to="/">
            <Logo className={"login-logo me-1"} />
          </Link>
          <h1 className="mt-5 mb-7 me-1">註冊會員</h1>
        </div>

        <form className="d-flex flex-column gap-3 ">
          <div className="form-floating mb-1">
            <input
              name="email"
              value={account.email}
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-1">
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
          <div className="form-floating mb-4">
            <input
              name="reconfirm_password"
              value={account.reconfirm_password}
              onChange={handleInputChange}
              type="password"
              className="form-control"
              id="reconfirm_password"
              placeholder="reconfirm_password"
            />
            <label htmlFor="reconfirm_password">Reconfirm Password</label>
          </div>
          {isAuthenticated ? (
            <button className="btn btn-outline-primary disabled">已登入</button>
          ) : (
            <button className="btn btn-primary text-white ">註冊</button>
          )}
        </form>
        <p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
      </div>

      <Toast />
    </>
  );
}
