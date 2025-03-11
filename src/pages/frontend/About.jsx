const aboutItems = [
  {
    title: "Everyone Different",
    subtitle: "根據個人狀態量身打造",
    img: "./images/about/about-1.png",
    colorClass: "secondary-2",
    bgColorClass: "secondary-1",
  },
  {
    title: "Anything Possible",
    subtitle: "教練專業橫跨各領域",
    img: "./images/about/about-2.png",
    colorClass: "primary",
    bgColorClass: "primary-2",
  },
  {
    title: "Train Harder",
    subtitle: "有要求的訓練過程",
    img: "./images/about/about-3.png",
    colorClass: "secondary-2",
    bgColorClass: "secondary-1",
  },
  {
    title: "Seek Truth",
    subtitle: "持續不斷地追求創新",
    img: "./images/about/about-4.png",
    colorClass: "primary",
    bgColorClass: "primary-2",
  },
  {
    title: "Make Believe",
    subtitle: "社區支持與學員見證",
    img: "./images/about/about-5.png",
    colorClass: "secondary-2",
    bgColorClass: "secondary-1",
  },
  {
    title: "Be Flexible",
    subtitle: "舒適的學習環境與氛圍",
    img: "./images/about/about-6.png",
    colorClass: "primary",
    bgColorClass: "primary-2",
  },
];

const AboutItem = ({
  title,
  subtitle,
  img,
  colorClass,
  bgColorClass,
  isDesktop,
}) => {
  return isDesktop ? (
    <div className="mb-10">
      <div
        className={`about-lg-bg about-lg-bg-${
          colorClass === "primary" ? "right" : "left"
        } bg-${bgColorClass} rounded ${
          colorClass === "primary" ? "me-auto" : "ms-auto"
        }`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          className={`about-lg-slogan about-slogan-${
            colorClass === "primary" ? "right" : "left"
          } border border-${colorClass} rounded`}
        >
          <h2 className={`fs-xl-1 text-${colorClass} mb-1`}>{title}</h2>
          <h2 className={`fs-xl-1 text-${colorClass}`}>{subtitle}</h2>
        </div>
      </div>
    </div>
  ) : (
    <div className="col mb-6 d-flex flex-column justify-content-center align-items-center">
      <div className={`about-slogan border border-${colorClass} rounded`}>
        <h5 className={`text-${colorClass} mb-1`}>{title}</h5>
        <h5 className={`text-${colorClass}`}>{subtitle}</h5>
      </div>
      <div
        className={`about-bg bg-${bgColorClass} rounded px-5 pt-13 pb-3`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

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
        {/* 手機版介紹 */}
        <div className="d-lg-none">
          <div className="row row-cols-1 row-cols-md-2">
            {aboutItems.map((item, index) => (
              <AboutItem key={index} {...item} isDesktop={false} />
            ))}
          </div>
        </div>
        {/* 電腦版介紹 */}
        <div className="d-none d-lg-block">
          {aboutItems.map((item, index) => (
            <AboutItem key={index} {...item} isDesktop={true} />
          ))}
        </div>
      </div>
    </>
  );
}
