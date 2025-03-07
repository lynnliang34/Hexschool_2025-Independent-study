import { useState } from "react";
import { Link } from "react-router";
import headerMenuItems from "../routes/headerMenuItems";

export default function HeaderSidebarMenu() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {headerMenuItems.map((item, index) => (
        <div className="modal-link mb-6" key={index}>
          {/* 標題區塊 */}
          <div className="modal-link-h d-flex align-items-center">
            {/* 主連結 */}
            <Link className="modal-link-1" to={item.link || "#"}>
              {item.title}
            </Link>

            {/* 展開箭頭按鈕 */}
            {item.subItems && (
              <button
                className="modal-arrow-link px-4"
                onClick={() => toggleMenu(index)}
                aria-label="Toggle submenu"
              >
                <svg
                  className={`modal-link-arrow transition-transform ${
                    openIndex === index ? "" : "rotate"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 7.45946L12 18L2 7.45946L4.33333 5L12 13.0811L19.6667 5L22 7.45946Z" />
                </svg>
              </button>
            )}
          </div>

          {/* 子選單 */}
          {item.subItems && (
            <div
              className={`modal-link-1ist ${
                openIndex === index ? "" : "d-none"
              }`}
            >
              {item.subItems.map((subItem, subIndex) => (
                <Link key={subIndex} className="modal-link-2" to={subItem.link}>
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
