import { getImageURL } from "../../utils/image-util.js";
import { IndexSwiper, ExploreNav, HomeSpeechBubble, HomeBannerLogo, HomeNews } from "../../components";

export default function Index(){
  return(
    <main className="index">
      {/* <!-- banner --> */}
      <section className="indexBanner"
        style={{backgroundImage: `url(${getImageURL('happy-elderly-couple-sitting-tropical-beach-back-view.png')})`}}>
        <div className="container">
            <h3 className="fs-lg-0 text-white">
            {/* <!-- logo svg --> */}
            <HomeBannerLogo />
            <br/>
            Move with Joy,<br/>
            Handle with Care
            </h3>
        </div>
      </section>
      {/* <!-- 推薦課程 --> */}
      <section className="news">
        <HomeNews />
      </section>
      {/* <!-- 精選課程 --> */}
      <section className="featureCourses mb-6 mb-lg-10">
        {/* <!-- 裝飾線及精選課程標題 --> */}
        <div className="container pb-6 pb-lg-10 ">
            <div className="position-relative decoLine"></div>
            <h3 className="fs-lg-1 mt-2 mt-lg-4">精選課程</h3>
        </div>
        {/* <!-- 課程卡片 --> */}
        <div className="bg-primary-1">
          <div className="container py-2 py-lg-5">
            <div className="row g-2 g-lg-6">
              {/* <!-- 左側 --> */}
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12 position-relative">
                    <ExploreNav 
                      categoryKey="sport"
                      className="stretched-link"
                    >
                    <div
                        className="cardTitle position-absolute vertical-rl bg-primary-1 py-2 ps-4 py-lg-5 ps-lg-5 rounded rounded-bottom-right-0">
                        <h3 className="lh-1 me-0 ms-0 fs-lg-1 text-primary">運動保健</h3>
                    </div>
                    <div className="cardText position-absolute bottom-0 bg-primary-1 rounded rounded-bottom-right-0">
                        <p className="me-0 ms-0 fs-5 text-neutral-1">
                        教授如何透過運動維護、促進健康，並且預防損傷。
                        </p>
                    </div>
                    <div
                        className="ms-0 my-9 ms-lg-10 mt-lg-13 mb-lg-24 ps-2 ps-lg-3 pt-2 pt-lg-3 border border-primary rounded-20 border-end-0 border-bottom-0">
                        <img className="rounded-20 img-fluid" src={getImageURL('senior-people-doing-cardio.png')}
                        alt="senior-people-doing-cardio" />
                    </div>
                    </ExploreNav>
                  </div>
                  <div className="col-12 position-relative">
                  <ExploreNav 
                      categoryKey="skills"
                      className="stretched-link"
                    >
                    <div
                        className="cardTitle position-absolute  vertical-rl bg-primary-1 py-2 ps-4 py-lg-5 ps-lg-5 rounded rounded-bottom-right-0">
                        <h3 className="lh-1 me-0 ms-0 fs-lg-1 text-primary">生活技能</h3>
                    </div>
                    <div className="cardText position-absolute bottom-0 bg-primary-1 rounded rounded-bottom-right-0">
                        <p className="me-0 ms-0 fs-5 text-neutral-1">
                        鼓勵銀髮族學習新知，保持活力和社會聯繫。
                        </p>
                    </div>
                    <div
                        className="ms-0 my-9 ms-lg-10 mt-lg-13 mb-lg-24 ps-2 ps-lg-3 pt-2 pt-lg-3 border border-primary rounded-20 border-end-0 border-bottom-0">
                        <img className="rounded-20 img-fluid"
                        src={getImageURL('man-using-mobile-phone-while-sitting-table (1).png')}
                        alt="man-using-mobile-phone-while-sitting-table" />
                    </div>
                    </ExploreNav>
                  </div>
                </div>
              </div>
              {/* <!-- 右側 --> */}
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12 position-relative mt-0 mt-lg-30">
                    <ExploreNav 
                      categoryKey="mind"
                      className="stretched-link"
                    >
                      <div
                      className="cardTitle position-absolute vertical-rl bg-primary-1 py-2 ps-4 py-lg-5 ps-lg-5 rounded rounded-bottom-right-0">
                        <h3 className="lh-1 me-0 ms-0 fs-lg-1 text-primary">心靈成長</h3>
                      </div>
                      <div className="cardText position-absolute bottom-0 bg-primary-1 rounded rounded-bottom-right-0">
                        <p className="me-0 ms-0 fs-5 text-neutral-1">
                          引導學生去探索自我、增強心理韌性及提升情感智慧。
                      </p>
                      </div>
                      <div
                      className="ms-0 my-9 ms-lg-10 mt-lg-13 mb-lg-24 ps-2 ps-lg-3 pt-2 pt-lg-3 border border-primary rounded-20 border-end-0 border-bottom-0">
                        <img className="rounded-20 img-fluid"
                          src={getImageURL('senior-elderly-man-reading-book-drinking-mug-coffee-garden.png')}
                          alt="senior-elderly-man-reading-book-drinking-mug-coffee-garden.png"/>
                      </div>
                    </ExploreNav>
                  </div>
                  <div className="col-12 position-relative">
                    <ExploreNav 
                        categoryKey="community"
                        className="stretched-link"
                      >
                      <div
                      className="cardTitle position-absolute vertical-rl bg-primary-1 py-2 ps-4 py-lg-5 ps-lg-5 rounded rounded-bottom-right-0">
                        <h3 className="lh-1 me-0 ms-0 fs-lg-1 text-primary">社區活動</h3>
                      </div>
                      <div className="cardText position-absolute bottom-0 bg-primary-1 rounded rounded-bottom-right-0">
                        <p className="me-0 ms-0 fs-5 text-neutral-1">
                          鼓勵多社交互動，增強社區參與感，豐富晚年生活。
                        </p>
                      </div>
                      <div
                      className="ms-0 my-9 ms-lg-10 mt-lg-13 mb-lg-24 ps-2 ps-lg-3 pt-2 pt-lg-3 border border-primary rounded-20 border-end-0 border-bottom-0">
                        <img className="rounded-20 img-fluid" src={getImageURL('17925.png')}alt="athletic-senior-people"/>
                      </div>
                    </ExploreNav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 知識分享 --> */}
      <section className="knowledgeSharing">
        {/* <!-- 裝飾線及精選課程標題 --> */}
        <div className="container pb-6 pb-lg-10 ">
            <div className="position-relative decoLine"></div>
            <h3 className="fs-lg-1 mt-2 mt-lg-4">知識分享</h3>
        </div>
        <div className="container">
          {/* <!-- 課程卡片 --> */}
          <div className="row gy-3 gx-lg-12 mb-6">
            <div className="col-lg-4 position-relative">
                <div className="cardTitle position-absolute top-0 end-0 vertical-rl bg-white p-4 rounded">
                <h3 className="lh-1 me-0 ms-0 fs-lg-2 text-primary">飲食健康</h3>
                </div>
                <div className="pt-lg-6 pe-lg-8 pb-2 pb-md-24">
                <img className="cardImg rounded img-fluid d-block mx-auto"
                    src={getImageURL('salad-with-tomatoes-cheese-bowl-wooden-table-with-green-healthy-ingredients-healthy-food-concept.png')}
                    alt="salad-with-tomatoes-cheese-bowl-wooden-table-with-green-healthy-ingredients-healthy-food-concept"/>
                </div>
              {/* <!-- 手機版卡片文字 --> */}
                <div className="bg-white mb-2 d-blcok d-md-none">
                <h5 className="text-primary mb-2">銀髮族必備三大營養素!</h5>
                <p className="fs-6 text-neutral-1 up-to-2-lines px-1">
                    為了不讓自己被年齡束縛，無論是50歲以上的熟齡族，還是超過65歲的銀髮族，每日三餐應正確攝取營養，為自己打造黃金營養力。營養師建議，熟齡族應注重均衡飲食，攝取足夠的蛋白質、纖維、維生素和礦物質，特別是鈣質與維生素D，以維護骨骼健康。避免高糖、高鹽、高脂食物，多選擇新鮮蔬果、全穀類和優質蛋白。這樣才能維持活力，延緩衰老，讓身體更健康、更有活力。
                </p>
                </div>
                <div className="d-flex flex-row-reverse border-bottom border-primary d-block d-md-none">
                <a href="#" className="learn-more-mobile text-primary fs-7 d-flex align-items-center mb-2">閱讀更多<svg
                    className="moreIcon" width="19" height="10" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7.45946L12 18L2 7.45946L4.33333 5L12 13.0811L19.6667 5L22 7.45946Z" fill="#E79776" />
                    </svg>
                </a>
                </div>
              {/* <!-- 電腦版卡片文字 --> */}
                <div
                className="cardText position-absolute bottom-0 bg-white rounded-20 rounded-top-left-0 d-none d-md-block vertical-rl p-5">
                <h6 className="text-primary ms-2 me-0">銀髮族必備三大營養素!</h6>
                <p className="fs-7 text-neutral-1 up-to-6-lines pt-7 ms-2 me-0">
                    為了不讓自己被年齡束縛，無論是50歲以上的熟齡族，還是超過65歲的銀髮族，每日三餐應正確攝取營養，為自己打造黃金營養力。營養師建議，熟齡族應注重均衡飲食，攝取足夠的蛋白質、纖維、維生素和礦物質，特別是鈣質與維生素D，以維護骨骼健康。避免高糖、高鹽、高脂食物，多選擇新鮮蔬果、全穀類和優質蛋白。這樣才能維持活力，延緩衰老，讓身體更健康、更有活力。
                </p>
                <a href="#" className="learn-more-H mt-auto">閱讀更多<svg className="moreIcon mt-2" width="19" height="10"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7.45946L12 18L2 7.45946L4.33333 5L12 13.0811L19.6667 5L22 7.45946Z" fill="#484848" />
                    </svg>
                </a>
                </div>
            </div>
            <div className="col-lg-4 position-relative">
                <div className="cardTitle position-absolute top-0 end-0 vertical-rl bg-white p-4 rounded">
                <h3 className="lh-1 me-0 ms-0 fs-lg-2 text-primary">運動保健</h3>
                </div>
                <div className="pt-lg-6 pe-lg-8 pb-2 pb-md-24">
                <img className="cardImg rounded img-fluid d-block mx-auto" src={getImageURL('2148247158.png')}
                    style={{objectPosition: 'right'}} alt="older-running"/>
                </div>
              {/* <!-- 手機版卡片文字 --> */}
            <div className="bg-white mb-2 d-blcok d-md-none">
                <h5 className="text-primary mb-2">銀髮族在家運動簡單4招</h5>
                <p className="fs-6 text-neutral-1 up-to-2-lines px-1">
                    老化是持續且不可逆的過程，但透過運動可以提高長輩的肌耐力及平衡協調，預防身體功能衰退，減少生理上的病痛，並提升心理健康與生活品質，進而促進長壽與自主生活能力。規律的運動不僅有助於改善心血管健康，還能增強免疫力，降低罹患慢性疾病的風險。長輩可以選擇適合自己的運動，如散步、太極、游泳或瑜伽，這不僅有助於身體機能的維持，還能增加社交機會，帶來身心愉悅的生活體驗。
                </p>
            </div>
            <div className="d-flex flex-row-reverse border-bottom border-primary d-block d-md-none">
                <a href="#" className="learn-more-mobile text-primary fs-7 d-flex align-items-center mb-2">閱讀更多<svg
                    className="moreIcon" width="19" height="10" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7.45946L12 18L2 7.45946L4.33333 5L12 13.0811L19.6667 5L22 7.45946Z" fill="#E79776" />
                    </svg>
                </a>
            </div>
              {/* <!-- 電腦版卡片文字 --> */}
            <div
                className="cardText position-absolute bottom-0 bg-white rounded-20 rounded-top-left-0 d-none d-md-block vertical-rl p-5">
                <h6 className="text-primary ms-2 me-0">銀髮族在家運動簡單4招</h6>
                <p className="fs-7 text-neutral-1 up-to-6-lines pt-7 ms-2 me-0">
                    老化是持續且不可逆的過程，但透過運動可以提高長輩的肌耐力及平衡協調，預防身體功能衰退，減少生理上的病痛，並提升心理健康與生活品質，進而促進長壽與自主生活能力。規律的運動不僅有助於改善心血管健康，還能增強免疫力，降低罹患慢性疾病的風險。長輩可以選擇適合自己的運動，如散步、太極、游泳或瑜伽，這不僅有助於身體機能的維持，還能增加社交機會，帶來身心愉悅的生活體驗。
                </p>
                <a href="#" className="learn-more-H mt-auto">閱讀更多<svg className="moreIcon mt-2" width="19" height="10"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7.45946L12 18L2 7.45946L4.33333 5L12 13.0811L19.6667 5L22 7.45946Z" fill="#484848" />
                    </svg>
                </a>
            </div>
            </div>
            <div className="col-lg-4 position-relative">
            <div className="cardTitle position-absolute top-0 end-0 vertical-rl bg-white p-4 rounded">
                <h3 className="lh-1 me-0 ms-0 fs-lg-2 text-primary">心靈成長</h3>
            </div>
                <div className="pt-lg-6 pe-lg-8 pb-2 pb-md-24">
                <img className="cardImg cardImgPosition rounded img-fluid d-block mx-auto" src={getImageURL('13878.png')}
                    alt="salad-with-tomatoes-cheese-bowl-wooden-table-with-green-healthy-ingredients-healthy-food-concept"/>
            </div>
              {/* <!-- 手機版卡片文字 --> */}
            <div className="bg-white mb-2 d-blcok d-md-none">
                <h5 className="text-primary mb-2">做六件事銀髮生活更快樂</h5>
                <p className="fs-6 text-neutral-1 up-to-2-lines px-1">
                    老年人是憂鬱情緒甚至憂鬱症的好發族群，這與多種因素息息相關。除了體質上的改變，身體病痛、慢性疾病的纏身讓老年人感到無力與疲憊，加上孤獨感的增加，特別是在喪偶或子女不常探訪的情況下，情緒更容易低落。此外，退休後失去工作帶來的成就感，家庭及社會支持的減少，也會加劇這種情緒波動。缺乏有效的情感交流與心理支持，讓許多長輩陷入憂鬱的惡性循環，影響身心健康。
                </p>
            </div>
            <div className="d-flex flex-row-reverse border-bottom border-primary d-block d-md-none">
                <a href="#" className="learn-more-mobile text-primary fs-7 d-flex align-items-center mb-2">閱讀更多<svg
                    className="moreIcon" width="19" height="10" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7.45946L12 18L2 7.45946L4.33333 5L12 13.0811L19.6667 5L22 7.45946Z" fill="#E79776" />
                    </svg>
                </a>
            </div>
              {/* <!-- 電腦版卡片文字 --> */}
            <div
                className="cardText position-absolute bottom-0 bg-white rounded-20 rounded-top-left-0 d-none d-md-block vertical-rl p-5">
                <h6 className="text-primary ms-2 me-0">做六件事銀髮生活更快樂</h6>
                <p className="fs-7 text-neutral-1 up-to-6-lines pt-7 ms-2 me-0">
                    老年人是憂鬱情緒甚至憂鬱症的好發族群，這與多種因素息息相關。除了體質上的改變，身體病痛、慢性疾病的纏身讓老年人感到無力與疲憊，加上孤獨感的增加，特別是在喪偶或子女不常探訪的情況下，情緒更容易低落。此外，退休後失去工作帶來的成就感，家庭及社會支持的減少，也會加劇這種情緒波動。缺乏有效的情感交流與心理支持，讓許多長輩陷入憂鬱的惡性循環，影響身心健康。
                </p>
                <a href="#" className="learn-more-H mt-auto">閱讀更多<svg className="moreIcon mt-2" width="19" height="10"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7.45946L12 18L2 7.45946L4.33333 5L12 13.0811L19.6667 5L22 7.45946Z" fill="#484848" />
                    </svg>
                </a>
            </div>
            </div>
        </div>
        </div>
      </section>
      {/* <!-- 學員分享 --> */}
      <section className="studentComment">
        {/* <!-- 裝飾線及精選課程標題 --> */}
        <div className="container mb-lg-10">
            <div className="position-relative decoLine"></div>
            <h3 className="fs-lg-1 mt-2 mt-lg-4">學員分享</h3>
        </div>
        {/* <!-- 學員分享對話框 --> */}
        <HomeSpeechBubble />
      </section>
      {/* <!-- 課程照片Swiper --> */}
      <IndexSwiper />
    </main>
  )
}