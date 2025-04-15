import { useState } from "react";
import { Link } from "react-router";
import { Logo } from "../../components";

export default function UserLogin() {
  // 存放登入時的帳號與密碼
  const [account, setAccount] = useState({
    username: "",
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

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary-2">
        <Link to="/">
          <Logo className={"login-logo"} />
        </Link>
        <h1 className="mt-5 mb-7">忘記密碼</h1>

        <form className="d-flex flex-column gap-3 login-input-w">
          <div className="form-floating mb-4">
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

          <button className="btn btn-primary text-white mx-10">重設密碼</button>
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
        </p>
      </div>
    </>
  );
}
