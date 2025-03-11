export default function Checkout() {
  return (
    <>
      <div className="container mt-4 mb-20 mt-lg-20 mb-lg-36">
        {/*1 購物車 */}
        <div className="mb-8 mb-lg-20">
          <div className="checkout-title mb-4 mb-lg-10">
            <h1 className="fs-2 fs-lg-0 text-primary">
              1 <span className="fs-3 fs-lg-1 ms-2">購物車</span>
            </h1>
          </div>

          {/*手機版購物清單 */}
          <ul className="list-unstyled mb-32 d-md-none">
            <li className="cart-list-item p-2 mb-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    className="cart-list-img rounded me-4"
                    src="/assets/images/healthy-couple-performing-exercising-yoga-mat-home 2.png"
                    alt=""
                  />

                  <div className="me-4">
                    <p className="mb-1">輕鬆有氧運動</p>
                    <p className="mb-1">2024/12/12</p>
                    <p className="mb-1">15：00</p>
                    <p>NT$ 500</p>
                  </div>
                </div>

                <a href="#">
                  <div>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.41125 2.74516C7.59671 2.5597 7.84823 2.45552 8.1105 2.45552H11.8883C12.1506 2.45552 12.4021 2.5597 12.5875 2.74516C12.773 2.93061 12.8772 3.18214 12.8772 3.44441V4.43311H7.12161V3.44441C7.12161 3.18214 7.2258 2.93061 7.41125 2.74516ZM6.20295 6.23311L6.22161 6.2333L6.24028 6.23311H13.7585L13.7772 6.2333L13.7958 6.23311H15.7105V18.5555C15.7105 18.8178 15.6063 19.0693 15.4209 19.2548C15.2354 19.4402 14.9839 19.5444 14.7216 19.5444H5.27717C5.0149 19.5444 4.76337 19.4402 4.57792 19.2548C4.39247 19.0693 4.28828 18.8178 4.28828 18.5555V6.23311H6.20295ZM5.32161 4.43311V3.44441C5.32161 2.70475 5.61544 1.99538 6.13846 1.47236C6.66148 0.949346 7.37084 0.655518 8.1105 0.655518H11.8883C12.6279 0.655518 13.3373 0.949346 13.8603 1.47236C14.3833 1.99538 14.6772 2.70475 14.6772 3.44441V4.43311H18.4996C18.9967 4.43311 19.3996 4.83605 19.3996 5.33311C19.3996 5.83016 18.9967 6.23311 18.4996 6.23311H17.5105V18.5555C17.5105 19.2952 17.2167 20.0045 16.6937 20.5276C16.1706 21.0506 15.4613 21.3444 14.7216 21.3444H5.27717C4.53751 21.3444 3.82815 21.0506 3.30513 20.5276C2.78211 20.0045 2.48828 19.2952 2.48828 18.5555V6.23311H1.49961C1.00255 6.23311 0.599609 5.83016 0.599609 5.33311C0.599609 4.83605 1.00255 4.43311 1.49961 4.43311H5.32161ZM8.11045 9.15552C8.60751 9.15552 9.01045 9.55846 9.01045 10.0555V15.7222C9.01045 16.2192 8.60751 16.6222 8.11045 16.6222C7.61339 16.6222 7.21045 16.2192 7.21045 15.7222V10.0555C7.21045 9.55846 7.61339 9.15552 8.11045 9.15552ZM12.7883 10.0555C12.7883 9.55846 12.3853 9.15552 11.8883 9.15552C11.3912 9.15552 10.9883 9.55846 10.9883 10.0555V15.7222C10.9883 16.2192 11.3912 16.6222 11.8883 16.6222C12.3853 16.6222 12.7883 16.2192 12.7883 15.7222V10.0555Z"
                        fill="#E79776"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </li>
            <li className="cart-list-item p-2 mb-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    className="cart-list-img rounded me-4"
                    src="/assets/images/senior-women-doing-yoga-exercises-gym-yoga-mats.png"
                    alt=""
                  />

                  <div className="me-4">
                    <p className="mb-1">柔軟度與伸展課程</p>
                    <p className="mb-1">2024/12/20</p>
                    <p className="mb-1">20：00</p>
                    <p>NT$ 500</p>
                  </div>
                </div>

                <a href="#">
                  <div>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.41125 2.74516C7.59671 2.5597 7.84823 2.45552 8.1105 2.45552H11.8883C12.1506 2.45552 12.4021 2.5597 12.5875 2.74516C12.773 2.93061 12.8772 3.18214 12.8772 3.44441V4.43311H7.12161V3.44441C7.12161 3.18214 7.2258 2.93061 7.41125 2.74516ZM6.20295 6.23311L6.22161 6.2333L6.24028 6.23311H13.7585L13.7772 6.2333L13.7958 6.23311H15.7105V18.5555C15.7105 18.8178 15.6063 19.0693 15.4209 19.2548C15.2354 19.4402 14.9839 19.5444 14.7216 19.5444H5.27717C5.0149 19.5444 4.76337 19.4402 4.57792 19.2548C4.39247 19.0693 4.28828 18.8178 4.28828 18.5555V6.23311H6.20295ZM5.32161 4.43311V3.44441C5.32161 2.70475 5.61544 1.99538 6.13846 1.47236C6.66148 0.949346 7.37084 0.655518 8.1105 0.655518H11.8883C12.6279 0.655518 13.3373 0.949346 13.8603 1.47236C14.3833 1.99538 14.6772 2.70475 14.6772 3.44441V4.43311H18.4996C18.9967 4.43311 19.3996 4.83605 19.3996 5.33311C19.3996 5.83016 18.9967 6.23311 18.4996 6.23311H17.5105V18.5555C17.5105 19.2952 17.2167 20.0045 16.6937 20.5276C16.1706 21.0506 15.4613 21.3444 14.7216 21.3444H5.27717C4.53751 21.3444 3.82815 21.0506 3.30513 20.5276C2.78211 20.0045 2.48828 19.2952 2.48828 18.5555V6.23311H1.49961C1.00255 6.23311 0.599609 5.83016 0.599609 5.33311C0.599609 4.83605 1.00255 4.43311 1.49961 4.43311H5.32161ZM8.11045 9.15552C8.60751 9.15552 9.01045 9.55846 9.01045 10.0555V15.7222C9.01045 16.2192 8.60751 16.6222 8.11045 16.6222C7.61339 16.6222 7.21045 16.2192 7.21045 15.7222V10.0555C7.21045 9.55846 7.61339 9.15552 8.11045 9.15552ZM12.7883 10.0555C12.7883 9.55846 12.3853 9.15552 11.8883 9.15552C11.3912 9.15552 10.9883 9.55846 10.9883 10.0555V15.7222C10.9883 16.2192 11.3912 16.6222 11.8883 16.6222C12.3853 16.6222 12.7883 16.2192 12.7883 15.7222V10.0555Z"
                        fill="#E79776"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </li>
            <li className="cart-list-item p-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    className="cart-list-img rounded me-4"
                    src="/assets/images/healthy-couple-performing-exercising-yoga-mat-home 2.png"
                    alt=""
                  />

                  <div className="me-4">
                    <p className="mb-1">強力重訓課程</p>
                    <p className="mb-1">2024/12/22</p>
                    <p className="mb-1">09：00</p>
                    <p>NT$ 500</p>
                  </div>
                </div>

                <a href="#">
                  <div>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.41125 2.74516C7.59671 2.5597 7.84823 2.45552 8.1105 2.45552H11.8883C12.1506 2.45552 12.4021 2.5597 12.5875 2.74516C12.773 2.93061 12.8772 3.18214 12.8772 3.44441V4.43311H7.12161V3.44441C7.12161 3.18214 7.2258 2.93061 7.41125 2.74516ZM6.20295 6.23311L6.22161 6.2333L6.24028 6.23311H13.7585L13.7772 6.2333L13.7958 6.23311H15.7105V18.5555C15.7105 18.8178 15.6063 19.0693 15.4209 19.2548C15.2354 19.4402 14.9839 19.5444 14.7216 19.5444H5.27717C5.0149 19.5444 4.76337 19.4402 4.57792 19.2548C4.39247 19.0693 4.28828 18.8178 4.28828 18.5555V6.23311H6.20295ZM5.32161 4.43311V3.44441C5.32161 2.70475 5.61544 1.99538 6.13846 1.47236C6.66148 0.949346 7.37084 0.655518 8.1105 0.655518H11.8883C12.6279 0.655518 13.3373 0.949346 13.8603 1.47236C14.3833 1.99538 14.6772 2.70475 14.6772 3.44441V4.43311H18.4996C18.9967 4.43311 19.3996 4.83605 19.3996 5.33311C19.3996 5.83016 18.9967 6.23311 18.4996 6.23311H17.5105V18.5555C17.5105 19.2952 17.2167 20.0045 16.6937 20.5276C16.1706 21.0506 15.4613 21.3444 14.7216 21.3444H5.27717C4.53751 21.3444 3.82815 21.0506 3.30513 20.5276C2.78211 20.0045 2.48828 19.2952 2.48828 18.5555V6.23311H1.49961C1.00255 6.23311 0.599609 5.83016 0.599609 5.33311C0.599609 4.83605 1.00255 4.43311 1.49961 4.43311H5.32161ZM8.11045 9.15552C8.60751 9.15552 9.01045 9.55846 9.01045 10.0555V15.7222C9.01045 16.2192 8.60751 16.6222 8.11045 16.6222C7.61339 16.6222 7.21045 16.2192 7.21045 15.7222V10.0555C7.21045 9.55846 7.61339 9.15552 8.11045 9.15552ZM12.7883 10.0555C12.7883 9.55846 12.3853 9.15552 11.8883 9.15552C11.3912 9.15552 10.9883 9.55846 10.9883 10.0555V15.7222C10.9883 16.2192 11.3912 16.6222 11.8883 16.6222C12.3853 16.6222 12.7883 16.2192 12.7883 15.7222V10.0555Z"
                        fill="#E79776"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          {/*電腦版購物清單 */}
          <div className="table-responsive">
            <table className="cart-list-table align-middle text-center d-none d-md-block">
              <thead>
                <tr>
                  <th>課程名稱</th>
                  <th>日期</th>
                  <th>時段</th>
                  <th>小計</th>
                  <th>刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr className="cart-table-spacing"></tr>
                <tr className="cart-table-item">
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        className="cart-list-img rounded"
                        src="/assets/images/Rectangle 2111.png"
                        alt=""
                      />
                      <p className="text-truncate">輕鬆有氧運動</p>
                    </div>
                  </td>
                  <td>2024/12/12</td>
                  <td>15：00</td>
                  <td>NT$ 500</td>
                  <td>
                    <a href="#">
                      <div>
                        <svg
                          className="cart-trash"
                          viewBox="0 0 84 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.6857 6.24189C37.9948 5.9328 38.414 5.75916 38.8512 5.75916H45.1475C45.5846 5.75916 46.0038 5.9328 46.3129 6.24189C46.622 6.55097 46.7956 6.97019 46.7956 7.4073V9.05514H37.203V7.4073C37.203 6.97019 37.3767 6.55097 37.6857 6.24189ZM35.6719 12.0551C35.6823 12.0553 35.6926 12.0555 35.703 12.0555C35.711 12.0555 35.7189 12.0554 35.7268 12.0553C35.7292 12.0552 35.7317 12.0552 35.7341 12.0551H48.2645C48.2749 12.0553 48.2852 12.0555 48.2956 12.0555C48.3017 12.0555 48.3077 12.0554 48.3138 12.0553C48.3181 12.0553 48.3224 12.0552 48.3267 12.0551H51.5178V32.5925C51.5178 33.0296 51.3442 33.4488 51.0351 33.7579C50.726 34.067 50.3068 34.2406 49.8697 34.2406H34.1289C33.6918 34.2406 33.2726 34.067 32.9635 33.7579C32.6544 33.4488 32.4808 33.0296 32.4808 32.5925V12.0551H35.6719ZM34.203 9.05514V7.4073C34.203 6.17454 34.6927 4.99226 35.5644 4.12057C36.4361 3.24887 37.6184 2.75916 38.8512 2.75916H45.1475C46.3802 2.75916 47.5625 3.24887 48.4342 4.12057C49.3059 4.99226 49.7956 6.17454 49.7956 7.4073V9.05514H56.1663C56.9948 9.05514 57.6663 9.72671 57.6663 10.5551C57.6663 11.3836 56.9948 12.0551 56.1663 12.0551H54.5178V32.5925C54.5178 33.8253 54.0281 35.0075 53.1564 35.8792C52.2847 36.7509 51.1025 37.2406 49.8697 37.2406H34.1289C32.8962 37.2406 31.7139 36.7509 30.8422 35.8792C29.9705 35.0075 29.4808 33.8253 29.4808 32.5925V12.0551H27.833C27.0046 12.0551 26.333 11.3836 26.333 10.5551C26.333 9.72671 27.0046 9.05514 27.833 9.05514H34.203ZM38.8511 16.9258C39.6795 16.9258 40.3511 17.5974 40.3511 18.4258V27.8703C40.3511 28.6987 39.6795 29.3703 38.8511 29.3703C38.0226 29.3703 37.3511 28.6987 37.3511 27.8703V18.4258C37.3511 17.5974 38.0226 16.9258 38.8511 16.9258ZM46.6475 18.4258C46.6475 17.5974 45.9759 16.9258 45.1475 16.9258C44.319 16.9258 43.6475 17.5974 43.6475 18.4258V27.8703C43.6475 28.6987 44.319 29.3703 45.1475 29.3703C45.9759 29.3703 46.6475 28.6987 46.6475 27.8703V18.4258Z"
                          />
                        </svg>
                      </div>
                    </a>
                  </td>
                </tr>
                <tr className="cart-table-spacing"></tr>
                <tr className="cart-table-item">
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        className="cart-list-img rounded"
                        src="/assets/images/Rectangle 2103.png"
                        alt=""
                      />
                      <p className="text-truncate">柔軟度與伸展課程</p>
                    </div>
                  </td>
                  <td>2024/12/20</td>
                  <td>20：00</td>
                  <td>NT$ 500</td>
                  <td>
                    <a href="#">
                      <div>
                        <svg
                          className="cart-trash"
                          viewBox="0 0 84 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.6857 6.24189C37.9948 5.9328 38.414 5.75916 38.8512 5.75916H45.1475C45.5846 5.75916 46.0038 5.9328 46.3129 6.24189C46.622 6.55097 46.7956 6.97019 46.7956 7.4073V9.05514H37.203V7.4073C37.203 6.97019 37.3767 6.55097 37.6857 6.24189ZM35.6719 12.0551C35.6823 12.0553 35.6926 12.0555 35.703 12.0555C35.711 12.0555 35.7189 12.0554 35.7268 12.0553C35.7292 12.0552 35.7317 12.0552 35.7341 12.0551H48.2645C48.2749 12.0553 48.2852 12.0555 48.2956 12.0555C48.3017 12.0555 48.3077 12.0554 48.3138 12.0553C48.3181 12.0553 48.3224 12.0552 48.3267 12.0551H51.5178V32.5925C51.5178 33.0296 51.3442 33.4488 51.0351 33.7579C50.726 34.067 50.3068 34.2406 49.8697 34.2406H34.1289C33.6918 34.2406 33.2726 34.067 32.9635 33.7579C32.6544 33.4488 32.4808 33.0296 32.4808 32.5925V12.0551H35.6719ZM34.203 9.05514V7.4073C34.203 6.17454 34.6927 4.99226 35.5644 4.12057C36.4361 3.24887 37.6184 2.75916 38.8512 2.75916H45.1475C46.3802 2.75916 47.5625 3.24887 48.4342 4.12057C49.3059 4.99226 49.7956 6.17454 49.7956 7.4073V9.05514H56.1663C56.9948 9.05514 57.6663 9.72671 57.6663 10.5551C57.6663 11.3836 56.9948 12.0551 56.1663 12.0551H54.5178V32.5925C54.5178 33.8253 54.0281 35.0075 53.1564 35.8792C52.2847 36.7509 51.1025 37.2406 49.8697 37.2406H34.1289C32.8962 37.2406 31.7139 36.7509 30.8422 35.8792C29.9705 35.0075 29.4808 33.8253 29.4808 32.5925V12.0551H27.833C27.0046 12.0551 26.333 11.3836 26.333 10.5551C26.333 9.72671 27.0046 9.05514 27.833 9.05514H34.203ZM38.8511 16.9258C39.6795 16.9258 40.3511 17.5974 40.3511 18.4258V27.8703C40.3511 28.6987 39.6795 29.3703 38.8511 29.3703C38.0226 29.3703 37.3511 28.6987 37.3511 27.8703V18.4258C37.3511 17.5974 38.0226 16.9258 38.8511 16.9258ZM46.6475 18.4258C46.6475 17.5974 45.9759 16.9258 45.1475 16.9258C44.319 16.9258 43.6475 17.5974 43.6475 18.4258V27.8703C43.6475 28.6987 44.319 29.3703 45.1475 29.3703C45.9759 29.3703 46.6475 28.6987 46.6475 27.8703V18.4258Z"
                          />
                        </svg>
                      </div>
                    </a>
                  </td>
                </tr>
                <tr className="cart-table-spacing"></tr>
                <tr className="cart-table-item">
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        className="cart-list-img rounded"
                        src="/assets/images/healthy-couple-performing-exercising-yoga-mat-home 1.png"
                        alt=""
                      />
                      <p className="text-truncate">強力重訓課程</p>
                    </div>
                  </td>
                  <td>2024/12/12</td>
                  <td>09：00</td>
                  <td>NT$ 500</td>
                  <td>
                    <a href="#">
                      <div>
                        <svg
                          className="cart-trash"
                          viewBox="0 0 84 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.6857 6.24189C37.9948 5.9328 38.414 5.75916 38.8512 5.75916H45.1475C45.5846 5.75916 46.0038 5.9328 46.3129 6.24189C46.622 6.55097 46.7956 6.97019 46.7956 7.4073V9.05514H37.203V7.4073C37.203 6.97019 37.3767 6.55097 37.6857 6.24189ZM35.6719 12.0551C35.6823 12.0553 35.6926 12.0555 35.703 12.0555C35.711 12.0555 35.7189 12.0554 35.7268 12.0553C35.7292 12.0552 35.7317 12.0552 35.7341 12.0551H48.2645C48.2749 12.0553 48.2852 12.0555 48.2956 12.0555C48.3017 12.0555 48.3077 12.0554 48.3138 12.0553C48.3181 12.0553 48.3224 12.0552 48.3267 12.0551H51.5178V32.5925C51.5178 33.0296 51.3442 33.4488 51.0351 33.7579C50.726 34.067 50.3068 34.2406 49.8697 34.2406H34.1289C33.6918 34.2406 33.2726 34.067 32.9635 33.7579C32.6544 33.4488 32.4808 33.0296 32.4808 32.5925V12.0551H35.6719ZM34.203 9.05514V7.4073C34.203 6.17454 34.6927 4.99226 35.5644 4.12057C36.4361 3.24887 37.6184 2.75916 38.8512 2.75916H45.1475C46.3802 2.75916 47.5625 3.24887 48.4342 4.12057C49.3059 4.99226 49.7956 6.17454 49.7956 7.4073V9.05514H56.1663C56.9948 9.05514 57.6663 9.72671 57.6663 10.5551C57.6663 11.3836 56.9948 12.0551 56.1663 12.0551H54.5178V32.5925C54.5178 33.8253 54.0281 35.0075 53.1564 35.8792C52.2847 36.7509 51.1025 37.2406 49.8697 37.2406H34.1289C32.8962 37.2406 31.7139 36.7509 30.8422 35.8792C29.9705 35.0075 29.4808 33.8253 29.4808 32.5925V12.0551H27.833C27.0046 12.0551 26.333 11.3836 26.333 10.5551C26.333 9.72671 27.0046 9.05514 27.833 9.05514H34.203ZM38.8511 16.9258C39.6795 16.9258 40.3511 17.5974 40.3511 18.4258V27.8703C40.3511 28.6987 39.6795 29.3703 38.8511 29.3703C38.0226 29.3703 37.3511 28.6987 37.3511 27.8703V18.4258C37.3511 17.5974 38.0226 16.9258 38.8511 16.9258ZM46.6475 18.4258C46.6475 17.5974 45.9759 16.9258 45.1475 16.9258C44.319 16.9258 43.6475 17.5974 43.6475 18.4258V27.8703C43.6475 28.6987 44.319 29.3703 45.1475 29.3703C45.9759 29.3703 46.6475 28.6987 46.6475 27.8703V18.4258Z"
                          />
                        </svg>
                      </div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/*2 選擇優惠券 */}
        <div className="mb-8 mb-lg-20">
          <div className="checkout-title mb-4 mb-lg-10">
            <h2 className="fs-2 fs-lg-0 text-primary">
              2 <span className="fs-3 fs-lg-1 ms-2">選擇優惠券</span>
            </h2>
          </div>
          <form id="discount">
            <div className="d-flex flex-column flex-md-row">
              <select
                className="form-select checkout-input mb-3 mb-md-0 me-md-2 me-lg-6"
                aria-label="Default select example"
              >
                <option value="">無</option>
                <option value="-25">新會員折扣 25 元</option>
                <option value="-150">生日禮金 150 元</option>
                <option value="-100">促銷活動折扣 100 元</option>
              </select>

              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  className="form-control checkout-input w-50 me-2 me-lg-6"
                  id="discountInput"
                  placeholder="請輸入優惠券"
                />
                <button className="btn btn-primary checkout-btn text-white w-50">
                  兌換優惠券
                </button>
              </div>
            </div>
          </form>
        </div>

        {/*3 選擇付款方式 */}
        <div className="mb-8 mb-lg-20">
          <div className="checkout-title mb-4 mb-lg-10">
            <h2 className="fs-2 fs-lg-0 text-primary">
              3 <span className="fs-3 fs-lg-1 ms-2">選擇付款方式</span>
            </h2>
          </div>

          <form id="payment">
            <div className="d-flex mb-3 mb-lg-6">
              <button className="btn btn-outline-primary checkout-btn btn-w-credit-card me-2 me-lg-6">
                信用卡
              </button>
              <button className="btn btn-outline-primary checkout-btn btn-w-mobile-payment">
                行動支付
              </button>
            </div>

            {/*信用卡 */}
            <div className="credit-card d-flex flex-column flex-md-row d-none">
              <div className="credit-card-number me-md-2 me-lg-6">
                <label
                  htmlFor="creditCardNumberInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  信用卡卡號<span className="text-primary ms-1">*</span>
                </label>
                <input
                  className="form-control checkout-input mb-3 mb-md-0"
                  id="creditCardNumberInput"
                  type="tel"
                  name="card-number"
                  inputMode="numeric"
                  pattern="[0-9\s]{13,19}"
                  maxLength="19"
                  placeholder="**** **** **** ****"
                />
              </div>
              <div className="credit-card-info d-flex justify-content-between">
                <div className="w-50 me-2 me-lg-6">
                  <label
                    htmlFor="cardExpiryDateInput"
                    className="form-label checkout-label mb-1 mb-lg-2"
                  >
                    有效期限
                  </label>
                  <input
                    className="form-control checkout-input"
                    id="cardExpiryDateInput"
                    type="text"
                    name="expiry-date"
                    inputMode="numeric"
                    pattern="(0[1-9]|1[0-2])\/\d{2}"
                    maxLength="5"
                    placeholder="MM / YY"
                  />
                </div>
                <div className="w-50 me-2 me-lg-6">
                  <label
                    htmlFor="CVCInput"
                    className="form-label checkout-label mb-1 mb-lg-2"
                  >
                    辨識碼
                  </label>
                  <input
                    className="form-control checkout-input"
                    id="CVCInput"
                    type="tel"
                    name="CVC"
                    inputMode="numeric"
                    pattern="\d{3,4}"
                    maxLength="4"
                    placeholder="CVC/CVV"
                  />
                </div>
              </div>
            </div>

            {/*行動支付 */}
            <div className="mobile-payment d-flex mb-3 mb-lg-6 d-none">
              <button className="btn btn-mobile-payment me-2 me-lg-6">
                <img
                  className="mobile-payment-img"
                  src="/assets/images/payment/Line Pay.png"
                  alt=""
                />
              </button>
              <button className="btn btn-mobile-payment">
                <img
                  className="mobile-payment-img"
                  src="/assets/images/payment/JKO Pay.png"
                  alt=""
                />
              </button>
            </div>
          </form>
        </div>

        {/*4 發票選項 */}
        <div className="mb-8 mb-lg-20">
          <div className="mb-4 mb-lg-10">
            <div className="checkout-title mb-1 mb-lg-2">
              <h2 className="fs-2 fs-lg-0 text-primary">
                4 <span className="fs-3 fs-lg-1 ms-2">發票選項</span>
              </h2>
            </div>
            <p className="fs-7 fs-lg-6 text-neutral-1">
              以下資訊只用於開立發票，並不會在其他頁面顯示。發票一經開立後不可更改，請確認資訊是否都填寫正確喔！（
              <span className="text-primary">*</span>為必填欄位）
            </p>
          </div>

          <form id="invoice">
            {/*帶入上次結帳資料 */}
            <button className="btn btn-outline-primary checkout-btn last-checkout-information mb-3 mb-lg-6">
              帶入上次結帳資料
            </button>

            {/*第一行輸入欄 */}
            <div className="d-md-flex justify-content-between mb-3 mb-md-6">
              {/*姓名 */}
              <div className="w-100 me-2 me-lg-6 mb-3 mb-md-0">
                <label
                  htmlFor="checkoutNameInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  姓名<span className="text-primary ms-1">*</span>
                </label>
                <input
                  className="form-control checkout-input"
                  id="checkoutNameInput"
                  type="text"
                  name="checkout-name"
                  placeholder="請輸入真實姓名"
                />
              </div>

              {/*電子信箱 */}
              <div className="w-100">
                <label
                  htmlFor="checkoutEmailInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  聯絡用電子信箱<span className="text-primary ms-1">*</span>
                </label>
                <input
                  className="form-control checkout-input"
                  id="checkoutEmailInput"
                  type="text"
                  name="checkout-email"
                  placeholder="請輸入電子信箱"
                />
              </div>
            </div>

            {/*第二行輸入欄 */}
            <div className="d-md-flex justify-content-between mb-3 mb-md-6">
              {/*發票類型 */}
              <div className="w-100 me-2 me-lg-6 mb-3 mb-md-0">
                <label
                  htmlFor="typeOfInvoice"
                  className="form-label mb-1 mb-lg-2"
                >
                  發票類型<span className="text-primary ms-1">*</span>
                </label>
                <select
                  className="form-select"
                  id="typeOfInvoice"
                  aria-label="Default select example"
                >
                  <option disabled value="">
                    請選擇
                  </option>
                  <option value="electronic">電子發票</option>
                  <option value="GUI-number">統編發票</option>
                  <option value="donation">捐贈發票</option>
                </select>
                <p className="invoice-note fs-7 fs-md-6 text-neutral-1 mt-1 mt-lg-2">
                  如需開立統編，請選擇統編發票
                </p>
              </div>

              {/*電子發票 */}
              <div className="electronic-invoice invoice-section w-100 d-flex align-items-end mb-md-7 mb-lg-8">
                <select
                  className="form-select checkout-input"
                  id="electronicInvoiceSelect"
                  aria-label="Default select example"
                  disabled
                >
                  <option disabled value="">
                    請選擇
                  </option>
                  <option value="natural-person-barcode">自然人憑證條碼</option>
                  <option value="cell-phone-barcode">手機條碼</option>
                </select>
              </div>

              {/*統編條碼 */}
              <div className="government-uniform-invoice invoice-section w-100 me-2 me-lg-6 mb-3 mb-md-0 d-none">
                <label
                  htmlFor="taxIdNumberInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  統一編號<span className="text-primary ms-1">*</span>
                </label>
                <input
                  className="form-control checkout-input"
                  id="taxIdNumberInput"
                  type="tel"
                  inputMode="numeric"
                  name="tax-ID-number"
                  maxLength="8"
                  placeholder="送出後無法更改，請務必確認"
                />
              </div>
              <div className="government-uniform-invoice invoice-section w-100 d-none">
                <label
                  htmlFor="receiptTitleInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  發票抬頭<span className="text-primary ms-1">*</span>
                </label>
                <input
                  className="form-control checkout-input"
                  id="receiptTitleInput"
                  type="text"
                  name="receipt-title"
                  placeholder="送出後無法更改，請務必確認"
                />
              </div>

              {/*捐贈發票 */}
              <div className="donation-invoice invoice-section w-100 d-flex align-items-end d-none">
                <select
                  className="form-select checkout-input"
                  id="donationInvoiceSelect"
                  aria-label="Default select example"
                >
                  <option disabled value="">
                    請選擇
                  </option>
                  <option value="2468">
                    社團法人中華民國老人福利關懷協會（2468）
                  </option>
                  <option value="13579">陽光社會福利基金會（13579）</option>
                  <option value="25885">
                    財團法人伊甸社會福利基金會（25885）
                  </option>
                  <option value="input-donation-code">輸入捐贈碼</option>
                </select>
              </div>
            </div>

            {/*第三行輸入欄 */}
            <div className="d-md-flex justify-content-between">
              {/*載具類別 */}
              <div className="electronic-invoice invoice-section w-100">
                <label
                  htmlFor="carrierTypeInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  載具類別<span className="text-primary ms-1">*</span>
                </label>
                <input
                  className="form-control checkout-input"
                  id="carrierTypeInput"
                  type="text"
                  placeholder="請輸入載具"
                  disabled
                />
              </div>

              {/*公司地址 */}
              <div className="government-uniform-invoice invoice-section w-100 d-none">
                <div className="d-md-flex justify-content-between mb-3 mb-md-6">
                  {/*地址  */}
                  <div className="w-100 me-2 me-lg-6 mb-3 mb-md-0">
                    <label
                      htmlFor="companyAddressInput"
                      className="form-label checkout-label mb-1 mb-lg-2"
                    >
                      公司地址<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      className="form-control checkout-input"
                      id="companyAddressInput"
                      type="text"
                      name="company-address"
                      placeholder="請輸入公司地址"
                    />
                  </div>

                  {/*郵遞區號 */}
                  <div className="w-100 d-flex align-items-end">
                    <input
                      className="form-control checkout-input"
                      id="companyPostalCodeInput"
                      type="text"
                      name="company-postal-code"
                      placeholder="請輸入郵遞區號"
                    />
                  </div>
                </div>
              </div>

              {/*輸入捐贈碼 */}
              <div className="invoice-section donation-invoice-section w-100 d-none">
                <input
                  className="form-control checkout-input"
                  id="donationInvoiceInput"
                  type="text"
                  placeholder="輸入捐贈碼"
                />
              </div>
            </div>
          </form>
        </div>

        {/*5 訂單明細 */}
        <div className="mb-8 mb-lg-20">
          <div className="checkout-title mb-4 mb-lg-10">
            <h2 className="fs-2 fs-lg-0 text-primary">
              5 <span className="fs-3 fs-lg-1 ms-2">訂單明細</span>
            </h2>
          </div>

          {/*欄位名稱 */}
          <div className="cart-order-header mb-3 mb-lg-5">
            <h3 className="f-order-header">課程明細</h3>
            <h3 className="f-order-header">價格</h3>
          </div>

          {/*選購清單 */}
          <div className="cart-order">
            <div className="cart-order-item f-order-item">
              <div className="d-flex flex-column flex-md-row">
                <p className="order-class-name text-truncate me-md-10">
                  輕鬆有氧運動
                </p>
                <div className="d-flex">
                  <p className="me-2 me-md-10">2024/12/18</p>
                  <p>15：00</p>
                </div>
              </div>
              <p>NT$500</p>
            </div>
            <div className="cart-order-item f-order-item">
              <div className="d-flex flex-column flex-md-row">
                <p className="order-class-name text-truncate me-md-10">
                  柔軟度與伸展課程
                </p>
                <div className="d-flex">
                  <p className="me-2 me-md-10">2024/12/20</p>
                  <p>20：00</p>
                </div>
              </div>
              <p>NT$500</p>
            </div>
            <div className="cart-order-item f-order-item">
              <div className="d-flex flex-column flex-md-row">
                <p className="order-class-name text-truncate me-md-10">
                  強力重訓課程
                </p>
                <div className="d-flex">
                  <p className="me-2 me-md-10">2024/12/22</p>
                  <p>09：00</p>
                </div>
              </div>
              <p>NT$500</p>
            </div>
          </div>

          {/*小計 */}
          <div className="cart-order-subtotal">
            <div className="d-flex flex-column align-items-end">
              <p className="mb-2">
                <span className="me-5">小計</span>共
                <span className="text-primary mx-1 mx-lg-2">3</span>堂課程
              </p>
              <p>
                NT$<span className="text-primary ms-1 ms-lg-2">1,500</span>
              </p>
            </div>
          </div>

          {/*折扣 */}
          <div className="cart-order-discount">
            <p>
              <span className="me-5">優惠折扣</span>NT$
              <span className="text-primary mx-1 mx-lg-2">-25</span>
            </p>
          </div>

          {/*付款金額 */}
          <div className="cart-order-payment">
            <p>
              <span className="me-5">本訂單須付款金額</span>NT$
              <span className="text-primary mx-1 mx-lg-2">1,475</span>
            </p>
          </div>
        </div>

        {/*確認付款 */}
        <div className="text-center">
          <button
            className="btn btn-primary text-white confirm-payment-btn"
            type="submit"
          >
            確認付款
          </button>
        </div>
      </div>
    </>
  );
}
