import { useEffect, useState } from "react";
import { IconSearch } from "../assets/Icons";

export default function HeaderSearchBar() {
  const [isVisible, setIsVisible] = useState(false);

  // 點擊放大鏡，顯示或隱藏搜尋框
  const toggleSearch = () => {
    setIsVisible(!isVisible);
  };

  // 點擊外部隱藏搜尋框
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isVisible && // 搜尋框有顯示
        !e.target.closest(".search-form") && // 點擊不在 .search-form 裡面
        !e.target.closest(".search-icon") // 點擊不在 .search-icon 裡面
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      {/* <!-- 圖示 --> */}
      <button className="search-icon d-lg-none" onClick={toggleSearch}>
        <IconSearch className="search-svg" />
      </button>
      {/* <!-- 搜尋框 --> */}
      <div className={`search-form d-lg-none ${isVisible ? "" : "d-none"}`}>
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
            <IconSearch className={"search-color"} />
          </div>
        </div>
      </div>
    </>
  );
}
