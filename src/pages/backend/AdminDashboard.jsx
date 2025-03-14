export default function AdminDashboard() {
  return (
    <div className="container">
      <h1 className="fw-bold text-secondary">後台首頁</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-6">
        <div className="col mb-6">
          <div className="bg-primary-2 rounded-20 h-100">
            <h2 className="fs-1 p-6">學員人數</h2>
            <div className=" text-end p-6">
              <p className="fs-1 text-primary-2">Students</p>
              <p className="fs-0">123</p>
            </div>
          </div>
        </div>
        <div className="col mb-6">
          <div className="bg-primary-2 rounded-20 h-100">
            <h2 className="fs-1 p-6">課程訂單數</h2>
            <div className=" text-end p-6">
              <p className="fs-1 text-primary-2">Orders</p>
              <p className="fs-0">123</p>
            </div>
          </div>
        </div>
        <div className="col mb-6">
          <div className="bg-primary-2 rounded-20 h-100">
            <h2 className="fs-1 p-6">營業額</h2>
            <div className=" text-end p-6">
              <p className="fs-1">NT$</p>
              <p className="fs-0">123,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
