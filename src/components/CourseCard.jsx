import { Link } from "react-router";

const CourseCard = ({ course }) => {
  return (
    <div className="col">
      <div className="card px-2 pt-2 bg-primary-2 border-0 h-100">
        <img
          src={course.imageUrl}
          className="rounded course-card-img"
          alt="straighten"
        />
        <div className="card-body px-0 pb-2">
          <h2 className="card-title text-primary border border-primary rounded-5px d-inline-block p-2 mb-3">
            {course.title}
          </h2>
          <p className="card-text fs-4 up-to-2-lines">{course.description}</p>
        </div>
        <div className="card-footer bg-primary-2 border-0 d-flex px-0">
          {/* 注意：連結開頭無前置/表示相對於當前路徑的相對路徑，網址會變成explore-courses/course-detail/id */}
          <Link
            to={`/course-detail/${course.id}`}
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
};

export default CourseCard;
