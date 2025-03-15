import { LogoSlogan } from "../components";
import {
  IconFB,
  IconLine,
  IconInstagram,
  IconHome,
  IconPhone,
  IconMail,
  IconTopArrow,
} from "../assets/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container position-relative d-flex flex-column flex-lg-row justify-content-center align-items-center pt-11 pt-lg-30">
        {/*Logo & 社群*/}
        <div className="mb-6 mb-lg-0">
          {/*logo svg*/}
          <a href="index.html " className="mb-4">
            <LogoSlogan className={"logo"} />
          </a>

          {/*social icons*/}
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com/" target="_blank">
              <IconFB className={"social-icon me-4"} />
            </a>
            <a href="https://line.me/tw/" target="_blank">
              <IconLine className={"social-icon me-4"} />
            </a>
            <a href="https://www.instagram.com/?hl=zh-tw_" target="_blank">
              <IconInstagram className={"social-icon"} />
            </a>
          </div>
        </div>

        {/*聯絡我們*/}
        <div className="ms-lg-46">
          <h3 className="text-secondary-2 fs-5 fs-lg-3 mb-2 mb-lg-4">
            聯絡我們
          </h3>
          <address className="d-flex flex-column">
            <div className="d-flex align-items-center mb-2 mb-lg-4">
              <IconHome className={"contact-icon me-2"} />
              <p className="text-secondary-2 fs-6 fs-lg-4">
                地址: 新北市永康區光復路二段168號
              </p>
            </div>
            <div className="address-link d-flex align-items-center mb-2 mb-lg-4">
              <IconPhone className={"contact-icon me-2"} />
              <a className="fs-6 fs-lg-4" href="tel:+886-2-2934-5678">
                電話:(02) 2934-5678
              </a>
            </div>
            <div className="address-link d-flex align-items-center">
              <IconMail className={"contact-icon me-2"} />
              <a
                className="fs-6 fs-lg-4"
                href="mailto:handlewithcare@gmail.com"
              >
                E-mail: handlewithcare@gmail.com
              </a>
            </div>
          </address>
        </div>

        {/*回到最上方箭頭*/}
        <button type="button" className="to-top border-0" onClick={scrollToTop}>
          <IconTopArrow className={"top-arrow"} />
        </button>
      </div>
    </footer>
  );
}
