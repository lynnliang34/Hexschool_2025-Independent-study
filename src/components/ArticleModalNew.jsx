import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form"
import ReactLoading from "react-loading";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ArticleModalNew({
  formModalRef,
  hideModal,
  getAllArticle,
  modalMode,
  editArticle
}){
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
    getValues,
    setValue,
    reset
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

  // 編輯模式
  useEffect(()=>{
    if(modalMode === 'edit' && editArticle){
      setValue("author",editArticle.author);
      // 時間戳轉回日期字串
      const date = new Date(editArticle.create_at*1000).toISOString().split('T')[0];
      setValue("create_at",date)
      setValue("description",editArticle.description)
      setValue("image",editArticle.image)
      setValue("imageURL",editArticle.image)
      setValue("isPublic",editArticle.isPublic)
      setValue("tag",editArticle.tag)
      setValue("title",editArticle.title)
      setValue("content",editArticle.content)
    }else if(modalMode === 'create'){
      reset();
    }
  },[modalMode,editArticle])

  const tagList = ["運動","飲食","養身","醫療","癌症","居家","其他"];

  const [isImgLoading, setIsImgLoading] = useState(false);

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
    if(watchImageURL instanceof File){
      const url = URL.createObjectURL(watchImageURL);
      setValue("imageURL",url);

      console.log('imageURL',getValues("imageURL"));
      // URL.createObjectURL() 會在內存中創建一個指向文件的引用，如果不釋放會造成內存洩漏
      return () =>{
        URL.revokeObjectURL(url);
      }
    }
  },[watchImage])
  
  const handleImageUpload = async(e) => {
    setIsImgLoading(true);
    try{
      setValue("imageURL",e.target.files[0]);
      // 圖片File轉FormData才能傳API
      const formData = new FormData();
      formData.append("file-to-upload", e.target.files[0]);

      const res = await axios.post(`${BASE_URL}/api/${API_PATH}/admin/upload`,formData);
      setValue("image",res.data.imageUrl);
      console.log('上傳圖片成功',res);
    }
    catch(err){
      console.log('上傳圖片失敗',err);
    }
    console.log(getValues("image"));
    setIsImgLoading(false);
    return e.target.files[0];
  };

  // 表單POST API
  const handleDataPost = async (processedData) =>{
    try{
      const res = await axios.post(`${BASE_URL}/api/${API_PATH}/admin/article`, processedData)
      console.log('上傳文章成功',res);
      hideModal();
      getAllArticle();
    }
    catch(err){
      console.log('上傳文章失敗：',err.response.data.message);
    }
  }

  // 表單PUT API
  const handleDataPut = async (processedData) => {
    try{
      const res = await axios.put(`${BASE_URL}/api/${API_PATH}/admin/article/${editArticle.id}`, processedData)
      console.log('更新文章成功',res);
      hideModal();
      getAllArticle();
    }
    catch(err){
      console.log('更新文章失敗：',err.response.data.message);
    }
  }
  
  const handleFormSubmit = (formData) =>{
    // 處理表單（轉整API需要的格式）
    const processedData = {
      data:{
        title: formData.title,
        description: formData.description,
        image: formData.image,
        tag: formData.tag,
        create_at: Date.parse(formData.create_at) /1000,
        // 處理日期（DOM取得的是日期字串，轉回時間戳）
        author: formData.author,
        isPublic: formData.isPublic,
        content: formData.content
      }
    }
    console.log(processedData);

    if(modalMode === 'create'){
      handleDataPost(processedData);}
    else if(modalMode === 'edit'){
      handleDataPut(processedData);
    }
  }


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
                    圖片上傳 
                    <small className="text-muted ms-2">(限JPG、JPEG、PNG格式且最大3MB)</small>
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
                    {isImgLoading ? 
                    <div className="text-center mt-2">
                      <ReactLoading className="mx-auto my-30" type={'spokes'} color={'#84CCC9'} height={'50px'} width={'50px'} />
                    </div>
                    :
                      <img
                        src={watchImageURL || "https://fakeimg.pl/600x300/?text=No Image"}
                        alt="image preview"
                        className="img-fluid mt-2 rounded"
                      />
                    }
                </div>
              </div>
              
              <div className="col-md-8">
              <div className="row g-3 mb-5">
                  <div className="col-12 mb-2">
                    <label htmlFor="title" className="form-label">
                      文章名稱<span className="text-primary ms-1">*{errors?.title && errors?.title?.message}</span>
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="form-control"
                      placeholder="請輸入文章名稱"
                      {...register("title",{
                        required:{
                          value:true,
                          message:"必填"
                        },
                        minLength:{
                          value:2,
                          message:"至少二字"
                        },
                        maxLength:{
                          value:20,
                          message:"最多二十字"
                        }
                      })}
                    />
                  </div>

                  <div className="col-6 mb-2">
                    <label htmlFor="author" className="form-label">
                      作者<span className="text-primary ms-1">*{errors?.author && errors?.author?.message}</span>
                    </label>
                    <input
                      id="author"
                      type="text"
                      className="form-control"
                      placeholder="請輸入作者名字"
                      {...register("author",{
                        required:{
                          value:true,
                          message:"必填"
                        },
                        maxLength:{
                          value:20,
                          message:"最多二十字"
                        }
                      })}
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="create_at" className="form-label">
                      發布日<span className="text-primary ms-1">*{errors?.create_at && errors?.create_at?.message}</span>
                    </label>
                    <input
                      type="date"
                      id="create_at"
                      className="form-control"
                      placeholder="請輸入發布日"
                      {...register("create_at",{
                        required:{
                          value:true,
                          message:"必填"
                        }
                      })}
                    />
                  </div>

                  <div className="col-12">
                    <h6 className="mb-2">標籤
                      <span className="text-primary fw-normal">*{errors?.tag && errors?.tag?.message}</span>
                      </h6>
                    {tagList.map((tag,index) => (
                      <div className="form-check form-check-inline" key={tag}>
                        <label htmlFor={index} className="form-label">
                          {tag}
                        </label>
                        <input
                          id={index}
                          type="checkbox"
                          value={tag}
                          {...register("tag",{
                            required:{
                              value:true,
                              message:"至少選擇一項"
                            }
                          })}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="description" className="form-label">
                        文章描述<span className="text-primary ms-1">*{errors?.description && errors?.description?.message}</span>
                      </label>
                      <textarea
                        id="description"
                        className="form-control"
                        rows={4}
                        placeholder="請輸入文章描述"
                        {...register("description",{
                          required:{
                            value:true,
                            message:"必填"
                          },
                          minLength:{
                            value:10,
                            message:"至少十字"
                          },
                          maxLength:{
                            value:100,
                            message:"最多一百字"
                          }
                        })}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="content" className="form-label">
                        文章內容<span className="text-primary ms-1">*{errors?.content && errors?.content?.message}</span>
                      </label>
                      <textarea
                        id="content"
                        className="form-control"
                        rows={20}
                        placeholder="請輸入文章內容"
                        {...register("content",{
                          required:{
                            value:true,
                            message:"必填"
                          },
                          minLength:{
                            value:300,
                            message:"至少三百字"
                          },
                          maxLength:{
                            value:1500,
                            message:"最多一千五百字"
                          }
                        })}
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