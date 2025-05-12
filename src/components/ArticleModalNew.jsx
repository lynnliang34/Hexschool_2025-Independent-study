

export default function ArticleModalNew({
  formModalRef,
  hideModal
}){

  return(
  <div ref={formModalRef} className="modal" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">新增文章</h5>
          <button type="button" className="btn-close" aria-label="Close"
          onClick={hideModal}></button>
        </div>
        <div className="modal-body p-4">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="mb-5">
                <label className="form-label"
                htmlFor="fileInput">
                  圖片上傳
                </label>
                <input type="file"
                accept=".jpg,.jpeg,.png"
                className="form-control"
                id="fileInput"/>
              </div>
              <div className="mb-4">
                <label htmlFor="primary-image" className="form-label">
                  主圖
                </label>
                <div className="input-group">
                  <input
                    value=""
                    name="image"
                    type="text"
                    id="primary-image"
                    className="form-control"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <img
                  src=""
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            
            <div className="col-md-8">
            <div className="row g-3 mb-5">
                <div className="col-12 mb-2">
                  <label htmlFor="title" className="form-label">
                    文章名稱<span className="text-primary ms-1">*</span>
                  </label>
                  <input
                    value=""
                    name="title"
                    id="title"
                    type="text"
                    className="form-control"
                    placeholder="請輸入文章名稱"
                  />
                </div>

                <div className="col-6 mb-2">
                  <label htmlFor="author" className="form-label">
                    作者<span className="text-primary ms-1">*</span>
                  </label>
                  <input
                    value=""
                    name="author"
                    id="author"
                    type="text"
                    className="form-control"
                    placeholder="請輸入作者名字"
                  />
                </div>
                <div className="col-6 mb-2">
                  <label htmlFor="create_at" className="form-label">
                    發布日
                  </label>
                  <input
                    type="date"
                    id="create_at"
                    name="create_at"
                    className="form-control"
                    value=""
                    placeholder="請輸入發布日"
                  />
                </div>

                <div className="col-12">
                  <div className="mb-2">
                    <label htmlFor="tag" className="form-label">
                      標籤（以逗號分隔）
                      <span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      value=""
                      name="tag"
                      id="tag"
                      type="text"
                      className="form-control"
                      placeholder="請輸入標籤，例如：運動, 飲食, 養身"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-2">
                    <label htmlFor="description" className="form-label">
                      文章描述
                    </label>
                    <textarea
                      value=""
                      name="description"
                      id="description"
                      className="form-control"
                      rows=""
                      placeholder="請輸入文章描述"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-2">
                    <label htmlFor="content" className="form-label">
                      文章內容
                    </label>
                    <textarea
                      value=""
                      name="content"
                      id="content"
                      className="form-control"
                      rows={20}
                      placeholder="請輸入文章內容"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer border-top bg-light">
        <div className="form-check me-5">
            <input
              name="isPublic"
              type="checkbox"
              className="form-check-input"
              id="isEnabled"
            />
            <label className="form-check-label" htmlFor="isEnabled">
              是否發布
            </label>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary-2"
          >
            取消
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}