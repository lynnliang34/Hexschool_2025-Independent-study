export default function About() {
  return (
    <>
      {/*section1*/}
      <div className="container py-3 py-lg-0 mt-4 mb-6 my-lg-20">
        <div className="text-center">
          <h1 className="fs-3 fs-lg-0 fw-lg-900">關於愉運</h1>
          <hr className="my-3 mt-lg-10 mb-lg-8" />
          <h2 className="fs-6 fs-lg-2 fw-500-lg-700 mb-3 mb-lg-5">
            HOW WE TREAT THE CUSTOMERS, <br />
            HOW WE TREAT THE TEAM MEMEBERS
          </h2>
          <h2 className="fs-6 fs-lg-2 fw-500-lg-700">
            愉運生活空間的每位夥伴都致力於透過運動，
            <br className="d-md-none" />
            幫助大家提升身心健康，
            <br className="d-none d-md-block d-lg-none d-xl-block" />
            並在運動中感受愉悅與
            <br className="d-md-none" />
            舒適，實現全方位的安康生活。
          </h2>
        </div>
      </div>

      {/*section2*/}
      <div className="container">
        {/*手機版介紹*/}
        <div className="d-lg-none">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-6">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="about-slogan border border-secondary-2 rounded">
                  <h5 className="text-secondary-2 mb-1">Everyone Different</h5>
                  <h5 className="text-secondary-2">根據個人狀態量身打造</h5>
                </div>
                <div
                  className="about-bg bg-secondary-1 rounded px-5 pt-13 pb-3"
                  style={{
                    backgroundImage: "url(./images/about/about-1.png)",
                  }}
                ></div>
              </div>
            </div>
            <div className="col mb-6">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="about-slogan border border-primary rounded">
                  <h5 className="text-primary mb-1">Anything Possible</h5>
                  <h5 className="text-primary">教練專業橫跨各領域</h5>
                </div>
                <div
                  className="about-bg bg-primary-2 rounded px-5 pt-13 pb-3"
                  style={{
                    backgroundImage: "url(./images/about/about-2.png)",
                  }}
                ></div>
              </div>
            </div>
            <div className="col mb-6">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="about-slogan border border-secondary-2 rounded">
                  <h5 className="text-secondary-2 mb-1">Train Harder</h5>
                  <h5 className="text-secondary-2">有要求的訓練過程</h5>
                </div>
                <div
                  className="about-bg bg-secondary-1 rounded px-5 pt-13 pb-3"
                  style={{
                    backgroundImage: "url(./images/about/about-3.png)",
                  }}
                ></div>
              </div>
            </div>
            <div className="col mb-6">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="about-slogan border border-primary rounded">
                  <h5 className="text-primary mb-1">Seek Truth</h5>
                  <h5 className="text-primary">持續不斷地追求創新</h5>
                </div>
                <div
                  className="about-bg bg-primary-2 rounded px-5 pt-13 pb-3"
                  style={{
                    backgroundImage: "url(./images/about/about-4.png)",
                  }}
                ></div>
              </div>
            </div>
            <div className="col mb-6">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="about-slogan border border-secondary-2 rounded">
                  <h5 className="text-secondary-2 mb-1">Make Believe</h5>
                  <h5 className="text-secondary-2">社區支持與學員見證</h5>
                </div>
                <div
                  className="about-bg bg-secondary-1 rounded px-5 pt-13 pb-3"
                  style={{
                    backgroundImage: "url(./images/about/about-5.png)",
                  }}
                ></div>
              </div>
            </div>
            <div className="col mb-20">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="about-slogan border border-primary rounded">
                  <h5 className="text-primary mb-1">Be Flexible</h5>
                  <h5 className="text-primary">舒適的學習環境與氛圍</h5>
                </div>
                <div
                  className="about-bg bg-primary-2 rounded px-5 pt-13 pb-3"
                  style={{
                    backgroundImage: "url(./images/about/about-6.png)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/*電腦版介紹*/}
        <div className="d-none d-lg-block">
          <div className="mb-10">
            <div
              className="about-lg-bg about-lg-bg-left bg-secondary-1 rounded ms-auto"
              style={{
                backgroundImage: "url(./images/about/about-1.png)",
              }}
            >
              <div className="about-lg-slogan about-slogan-left border border-secondary-2 rounded">
                <h2 className="fs-xl-1 text-secondary-2 mb-1">
                  Everyone Different
                </h2>
                <h2 className="fs-xl-1 text-secondary-2">
                  根據個人狀態量身打造
                </h2>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div
              className="about-lg-bg about-lg-bg-right bg-primary-2 rounded me-auto"
              style={{
                backgroundImage: "url(./images/about/about-2.png)",
              }}
            >
              <div className="about-lg-slogan about-slogan-right border border-primary rounded">
                <h2 className="fs-xl-1 text-primary mb-1">Anything Possible</h2>
                <h2 className="fs-xl-1 text-primary">教練專業橫跨各領域</h2>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div
              className="about-lg-bg about-lg-bg-left bg-secondary-1 rounded ms-auto"
              style={{
                backgroundImage: "url(./images/about/about-3.png)",
              }}
            >
              <div className="about-lg-slogan about-slogan-left border border-secondary-2 rounded">
                <h2 className="fs-xl-1 text-secondary-2 mb-1">Train Harder</h2>
                <h2 className="fs-xl-1 text-secondary-2">有要求的訓練過程</h2>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div
              className="about-lg-bg about-lg-bg-right bg-primary-2 rounded me-auto"
              style={{
                backgroundImage: "url(./images/about/about-4.png)",
              }}
            >
              <div className="about-lg-slogan about-slogan-right border border-primary rounded">
                <h2 className="fs-xl-1 text-primary mb-1">Seek Truth</h2>
                <h2 className="fs-xl-1 text-primary">持續不斷地追求創新</h2>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div
              className="about-lg-bg about-lg-bg-left bg-secondary-1 rounded ms-auto"
              style={{
                backgroundImage: "url(./images/about/about-5.png)",
              }}
            >
              <div className="about-lg-slogan about-slogan-left border border-secondary-2 rounded">
                <h2 className="fs-xl-1 text-secondary-2 mb-1">Make Believe</h2>
                <h2 className="fs-xl-1 text-secondary-2">社區支持與學員見證</h2>
              </div>
            </div>
          </div>
          <div className="mb-36">
            <div
              className="about-lg-bg about-lg-bg-right bg-primary-2 rounded me-auto"
              style={{
                backgroundImage: "url(./images/about/about-6.png)",
              }}
            >
              <div className="about-lg-slogan about-slogan-right border border-primary rounded">
                <h2 className="fs-xl-1 text-primary mb-1">Be Flexible</h2>
                <h2 className="fs-xl-1 text-primary">舒適的學習環境與氛圍</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
