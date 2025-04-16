import { Link } from "react-router";

export default function SearchCourses() {
  return (
    <>
      <div className="container py-3 pt-lg-0 pb-lg-8 px-lg-15 mt-4 mb-6 mt-lg-20">
        <div className="text-center">
          <h1 className="fs-3 fs-lg-0">搜尋課程</h1>
          <hr className="my-3 my-lg-8" />
        </div>
      </div>
      <div className="container mb-lg-35">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-lg-6 gy-3 gy-lg-10">
          <div className="col">
            <div className="card px-2 pt-2 bg-primary-2 border-0 h-100">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/movewithjoy/1742219909625.png"
                className="rounded card-img"
                alt="straighten"
              />
              <div className="card-body px-0 pb-2">
                <h2 className="card-title text-primary border border-primary rounded-5px d-inline-block p-2 mb-3">
                  樂齡晨間操
                </h2>
                <p className="card-text fs-4 up-to-2-lines">
                  動作簡單易學，幫助提高靈活性、增強體力，促進身心健康，活力迎接每一天。
                </p>
              </div>
              <div className="card-footer bg-primary-2 border-0 d-flex px-0">
                <Link className="learn-more-H-lg d-flex ms-auto align-items-center py-lg-2">
                  了解更多
                  <span className="material-symbols-outlined ms-2">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card px-2 pt-2 bg-primary-2 border-0 h-100">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/movewithjoy/1742219909625.png"
                className="rounded card-img"
                alt="straighten"
              />
              <div className="card-body px-0 pb-2">
                <h2 className="card-title text-primary border border-primary rounded-5px d-inline-block p-2 mb-3">
                  樂齡晨間操
                </h2>
                <p className="card-text fs-4 up-to-2-lines">
                  動作簡單易學，幫助提高靈活性、增強體力，促進身心健康，活力迎接每一天。
                </p>
              </div>
              <div className="card-footer bg-primary-2 border-0 d-flex px-0">
                <Link className="learn-more-H-lg d-flex ms-auto align-items-center py-lg-2">
                  了解更多
                  <span className="material-symbols-outlined ms-2">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card px-2 pt-2 bg-primary-2 border-0 h-100">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/movewithjoy/1742219909625.png"
                className="rounded card-img"
                alt="straighten"
              />
              <div className="card-body px-0 pb-2">
                <h2 className="card-title text-primary border border-primary rounded-5px d-inline-block p-2 mb-3">
                  樂齡晨間操
                </h2>
                <p className="card-text fs-4 up-to-2-lines">
                  動作簡單易學，幫助提高靈活性、增強體力，促進身心健康，活力迎接每一天。
                </p>
              </div>
              <div className="card-footer bg-primary-2 border-0 d-flex px-0">
                <Link className="learn-more-H-lg d-flex ms-auto align-items-center py-lg-2">
                  了解更多
                  <span className="material-symbols-outlined ms-2">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
