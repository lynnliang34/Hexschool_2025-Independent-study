import axios from "axios";
import { Modal } from "bootstrap";
import { useEffect } from "react";
import { pushMessage } from "../redux/toastSlice";
import { useDispatch } from "react-redux";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function DelArticleModalNew({
  deleteModalRef,
  deleteModalInstance,
  hideDeleteModal,
  articleId,
  getAllArticle,
}){
  const dispatch = useDispatch();

  // modal實例
  useEffect(()=>{
    deleteModalInstance.current = new Modal(deleteModalRef.current);

    return ()=>{
      if(deleteModalInstance.current){
        deleteModalInstance.current.dispose();
      }
    }
  },[])

  // 刪除文章delete API
  const handleDeleteArticle = async(id) => {
    try{
      await axios.delete(`${BASE_URL}/api/${API_PATH}/admin/article/${id}`);
      getAllArticle();
      hideDeleteModal();
      dispatch(
        pushMessage({
          text:'刪除文章成功',
          status:'success'
        })
      )
    }
    catch(err){
      dispatch(
        pushMessage({
          text:'刪除文章失敗',
          status:'failed'
        })
      )
    }
  }


    return(
      <div ref={deleteModalRef} className="modal fade" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">刪除確認</h5>
              <button type="button" className="btn-close" aria-label="Close"
              onClick={hideDeleteModal}
                ></button>
            </div>
            <div className="modal-body">
              <p>確定要刪除這篇文章嗎？此操作無法復原。</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary-2"
              onClick={hideDeleteModal}
                >
                取消
              </button>
              <button type="button" className="btn btn-outline-danger"
              onClick={()=>handleDeleteArticle(articleId)}>
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}