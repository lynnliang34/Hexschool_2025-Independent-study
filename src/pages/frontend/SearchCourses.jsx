import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function SearchCourses() {
  const courses = useSelector((state) => state.filteredCourses.filteredCourses); // 從 Redux store 取得篩選後課程

  return (
    <>
      <div className="container py-3 pt-lg-0 pb-lg-8 px-lg-15 mt-4 mb-6 mt-lg-20">
        <div className="text-center">
          <h1 className="fs-3 fs-lg-0">搜尋課程</h1>
          <hr className="my-3 my-lg-8" />
        </div>
      </div>
      <div className="container mb-lg-35">
        {courses.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-lg-6 gy-3 gy-lg-10">
            {courses.map((courseData) => {
              return (
                <div className="col" key={courseData.id}>
                  <div className="card px-2 pt-2 bg-primary-2 border-0 h-100">
                    <img
                      src={courseData.imageUrl}
                      className="rounded card-img"
                      alt="straighten"
                    />
                    <div className="card-body px-0 pb-2">
                      <h2 className="card-title text-primary border border-primary rounded-5px d-inline-block p-2 mb-3">
                        {courseData.title}
                      </h2>
                      <p className="card-text fs-4 up-to-2-lines">
                        {courseData.description}
                      </p>
                    </div>
                    <div className="card-footer bg-primary-2 border-0 d-flex px-0">
                      <Link
                        to={`/course-detail/${courseData.id}`}
                        className="learn-more-H-lg d-flex ms-auto align-items-center py-lg-2"
                      >
                        了解更多
                        <span className="material-symbols-outlined ms-2">
                          chevron_right
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className="text-secondary text-center">查無相符的課程</h1>
        )}
      </div>
    </>
  );
}
