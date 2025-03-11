function Pagination({ pageInfo, handlePageChange }) {
  const page = pageInfo.current_page;

  return (
    <div className="d-flex justify-content-center mt-5">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${!pageInfo.has_pre && "disabled"}`}>
            <a
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page - 1);
              }}
              className="page-link"
              href="#"
            >
              上一頁
            </a>
          </li>

          {Array.from({ length: pageInfo.total_pages }).map((_, index) => (
            <li
              className={`page-item ${page === index + 1 && "active"}`}
              key={index}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
                className="page-link"
                href="#"
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li className={`page-item ${!pageInfo.has_next && "disabled"}`}>
            <a
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page + 1);
              }}
              className="page-link"
              href="#"
            >
              下一頁
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
