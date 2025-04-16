import { useSelector } from "react-redux";
import { CourseCard } from "../../components";

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
            {courses.map((course) => {
              return <CourseCard key={course.id} course={course} />;
            })}
          </div>
        ) : (
          <h1 className="text-secondary text-center">查無相符的課程</h1>
        )}
      </div>
    </>
  );
}
