import { useState } from "react";
import { Link } from "react-router";

const headerMenuItems = [
  {
    title: "關於我們",
    link: "/about",
    subItems: [
      { title: "師資", link: "/about#teachers" },
      { title: "交通資訊", link: "/about#transport" },
    ],
  },
  {
    title: "探索課程",
    link: "/explore-courses",
    subItems: [
      { title: "運動保健", link: "/explore-courses#sport" },
      { title: "心靈成長", link: "/explore-courses#mind" },
      { title: "生活技能", link: "/explore-courses#skills" },
      { title: "社區活動", link: "/explore-courses#community" },
    ],
  },
  {
    title: "知識分享",
    link: "/knowledge-sharing",
    subItems: [
      { title: "運動", link: "/knowledge-sharing#sport" },
      { title: "飲食", link: "/knowledge-sharing#food" },
      { title: "養生", link: "/knowledge-sharing#health" },
      { title: "醫療", link: "/knowledge-sharing#medical" },
      { title: "癌症", link: "/knowledge-sharing#cancer" },
      { title: "居家", link: "/knowledge-sharing#home" },
    ],
  },
  {
    title: "活動照片",
    link: "/photos",
    subItems: [
      { title: "講座", link: "/photos#lecture" },
      { title: "社團", link: "/photos#club" },
      { title: "運動會", link: "/photos#sportsevent" },
    ],
  },
];

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
