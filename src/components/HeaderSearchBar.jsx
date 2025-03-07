export default function HeaderSearchBar() {
  return (
    <>
      {/* <!-- 圖示 --> */}
      <button data-bs-auto-close="outside" className="search-icon d-lg-none">
        <div>
          <svg
            className="search-svg"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_94_4564)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0833 7.75C10.5855 7.75 7.75 10.5855 7.75 14.0833C7.75 17.5811 10.5855 20.4167 14.0833 20.4167C17.5811 20.4167 20.4167 17.5811 20.4167 14.0833C20.4167 10.5855 17.5811 7.75 14.0833 7.75ZM5.75 14.0833C5.75 9.48096 9.48096 5.75 14.0833 5.75C18.6857 5.75 22.4167 9.48096 22.4167 14.0833C22.4167 18.6857 18.6857 22.4167 14.0833 22.4167C9.48096 22.4167 5.75 18.6857 5.75 14.0833Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5553 18.5553C18.9459 18.1648 19.579 18.1648 19.9696 18.5553L23.9571 22.5428C24.3476 22.9334 24.3476 23.5665 23.9571 23.9571C23.5665 24.3476 22.9334 24.3476 22.5428 23.9571L18.5553 19.9696C18.1648 19.579 18.1648 18.9459 18.5553 18.5553Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_94_4564">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
      {/* <!-- 搜尋框 --> */}
      <div className="search-form d-lg-none d-none">
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
      </div>
    </>
  );
}
