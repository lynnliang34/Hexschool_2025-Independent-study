import axios from "axios";
import { Modal } from "bootstrap";
import { useEffect, useState, useRef,  } from "react";
import { ArticleModalNew } from "../../components";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function AdminKnowledgeNew(){
  const [ articleList, setArticleList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  // modal用
  const formModalRef = useRef(null);
  const formModalInstance = useRef(null);
  

  const getAllArticle = async()=>{
    setIsLoading(true);
    try{
      const res = await axios.get(`${BASE_URL}/api/${API_PATH}/admin/articles`,{
        page:1
      });
      setArticleList(res.data.articles)
    }
    catch(err){
      console.error('獲取文章列表失敗', err);
    }
    setIsLoading(false);
  };

  useEffect(()=>{
    getAllArticle();
    console.log(articleList);
  },[])

  // 文章Modal
  useEffect(()=>{
    formModalInstance.current = new Modal(formModalRef.current);

    // 清理函數：組件卸載時銷毀 modal 實例
    return () => {
      if (formModalInstance.current) {
        formModalInstance.current.dispose();
      }
    };
  },[])

  const showModal= () => {
    if (formModalInstance.current){
      formModalInstance.current.show();
    }
  }

  const hideModal= () => {
    if (formModalInstance.current){
      formModalInstance.current.hide();
    }
  }

  return (<>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mb-5 d-flex justify-content-between">
            <h1 className="text-secondary">後台知識分享-練習</h1>
            <button type="button" 
            className="btn btn-secondary-2 text-white"
            onClick={showModal}>建立新的文章</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>文章名稱</th>
                <th>發布日期</th>
                <th>是否發布</th>
                <th>編輯 / 刪除</th>
              </tr>
            </thead>
            <tbody>
              {articleList.map((article)=>(
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{new Date(article.create_at* 1000).toLocaleDateString()}</td>
                <td>{article.isPublic ? <span className="text-secondary">已發布</span>: '未發布'}</td>
                <td>
                  <button type="button" className="edit-product-btn">
                  <i className="bi bi-pencil-square fs-4"></i>
                  </button>
                  <button type="button" className="edit-product-btn">
                  <i className="bi bi-trash3-fill fs-4"></i>
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <ArticleModalNew 
      formModalRef={formModalRef}
      hideModal={hideModal}
    />
    </>);
}