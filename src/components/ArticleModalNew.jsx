import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form"


export default function ArticleModalNew({
  formModalRef,
  hideModal,
}){

  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
    getValues,
    setValue
  } = useForm({
    defaultValues:{
      author: "",
      create_at: 0,
      description: "",
      image: null,
      imageURL: "",
      isPublic: false,
      tag: [],
      title: "",
      content:"",
    }
  });

  const tagList = ["運動","飲食","養身","醫療","癌症","居家"];

  // 監聽上傳圖片
  const watchImage = useWatch({
    control,
    name: "image",
  })
  // 監聽預覽圖片網址
  const watchImageURL = useWatch({
    control,
    name: "imageURL",
  })

  useEffect(()=>{
    if(watchImage instanceof File){
      const url = URL.createObjectURL(watchImage);
      setValue("imageURL",url);
    }
    console.log('watchImage',watchImage);
    console.log('imageURL',getValues("imageURL"));
  },[watchImage])
  

  const handleFormSubmit = (formData) =>{
    // 處理表單（轉整API需要的格式）
    const processedData ={
      data:{
        title: formData.title,
        description: formData.description,
        image: formData.image,
        tag: formData.tag
      },
      create_at: Date.parse(formData.create_at) /1000,
      // 處理日期（DOM取得的是日期字串，轉回時間戳）
      author: formData.author,
      isPublic: formData.isPublic,
      content: formData.content
    }
    console.log(processedData);
  }

  const handleImageUpload = (e) => {
    setValue("image", e.target.files[0]);
    console.log(getValues("image"));
    return e.target.files[0];
  };

  return(
  <div ref={formModalRef} className="modal" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                    圖片上傳 (限JPG、JPEG、PNG格式)
                  </label>
                  <input type="file"
                  accept=".jpg,.jpeg,.png"
                  className="form-control"
                  id="fileInput"
                  onChange={(e)=>handleImageUpload(e)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="primary-image" className="form-label">
                    主圖預覽
                  </label>
                    <input
                      type="text"
                      id="primary-image"
                      className="form-control"
                      placeholder="請輸入圖片連結"
                      {...register("imageURL")}
                    />
                  <img
                    src={watchImageURL || "https://fakeimg.pl/600x300/?text=No Image"}
                    alt="image preview"
                    className="img-fluid mt-2 rounded"
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
                      id="title"
                      type="text"
                      className="form-control"
                      placeholder="請輸入文章名稱"
                      {...register("title")}
                    />
                  </div>

                  <div className="col-6 mb-2">
                    <label htmlFor="author" className="form-label">
                      作者<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      id="author"
                      type="text"
                      className="form-control"
                      placeholder="請輸入作者名字"
                      {...register("author")}
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="create_at" className="form-label">
                      發布日
                    </label>
                    <input
                      type="date"
                      id="create_at"
                      className="form-control"
                      placeholder="請輸入發布日"
                      {...register("create_at")}
                    />
                  </div>

                  <div className="col-12">
                    <h6 className="mb-2">標籤</h6>
                    {tagList.map((tag) => (
                      <div className="form-check form-check-inline" key={tag}>
                        <label htmlFor="tag" className="form-label">
                          {tag}
                        </label>
                        <input
                          id="tag"
                          type="checkbox"
                          value={tag}
                          {...register("tag")}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="description" className="form-label">
                        文章描述
                      </label>
                      <textarea
                        id="description"
                        className="form-control"
                        rows={4}
                        placeholder="請輸入文章描述"
                        {...register("description")}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="content" className="form-label">
                        文章內容
                      </label>
                      <textarea
                        id="content"
                        className="form-control"
                        rows={20}
                        placeholder="請輸入文章內容"
                        {...register("content")}
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
                type="checkbox"
                className="form-check-input"
                id="isEnabled"
                {...register("isPublic")}
              />
              <label className="form-check-label" htmlFor="isEnabled">
                是否發布
              </label>
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary-2"
              onClick={hideModal}
            >
              取消
            </button>
            <button
              type="submit"
              className="btn btn-outline-danger"
            >
              確認
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}