import axios from "axios";
import ReactLoading from "react-loading";
import { Modal } from "bootstrap";
import { useEffect, useState, useRef,  } from "react";
import { ArticleModalNew } from "../../components";
import { pushMessage } from "../../redux/toastSlice";
import { useDispatch } from "react-redux";
import Toast from "../../components/Toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function AdminKnowledgeNew(){
  const [ articleList, setArticleList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  // modal用
  const formModalRef = useRef(null);
  const formModalInstance = useRef(null);
  // 編輯文章modal用
  const [modalMode, setModalMode] = useState('create');
  const [editArticle, setEditArticle] = useState(null);
  // toast
  const dispatch = useDispatch();

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
      dispatch(
        pushMessage({
          text:'獲取文章列表失敗',
          status:'failed'
        })
      )
    }
    setIsLoading(false);
    
  };

  useEffect(()=>{
    getAllArticle();
  },[])

  useEffect(()=>{
    console.log(articleList);
    console.log(editArticle);
    console.log(modalMode);
  },[articleList,editArticle,modalMode])

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

    setTimeout(()=>{
      setEditArticle(null);
      setModalMode('create');
    },300);
  }

  const handleCreateArticle = () => {
    setModalMode('create');
    showModal();
  }
  // 取得指定文章資料並開啟編輯modal
  const handleEditArticle = async(id) => {
    try{
      const article = await axios.get(`${BASE_URL}/api/${API_PATH}/admin/article/${id}`);
      setEditArticle(article.data.article);
    }
    catch(err){
      console.error('獲取文章失敗', err);
    }
    setModalMode('edit');
    showModal();
  }

  // 刪除文章
  const handleDeleteArticle = async(id) => {
    try{
      await axios.delete(`${BASE_URL}/api/${API_PATH}/admin/article/${id}`);
      getAllArticle();
    }
    catch(err){
      console.error('刪除文章失敗', err);
    }
  }

  return (<>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mb-5 d-flex justify-content-between">
            <h1 className="text-secondary">後台知識分享</h1>
            <button type="button" 
            className="btn btn-secondary-2 text-white"
            onClick={handleCreateArticle}>建立新的文章</button>
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
              {isLoading?
              (<tr>
                <td colSpan="4" className="text-center">
                  <ReactLoading className="mx-auto my-30" type={'spokes'} color={'#84CCC9'} height={'80px'} width={'80px'} />
                </td>
              </tr>)
              :
              (articleList.map((article)=>(
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{new Date(article.create_at* 1000).toLocaleDateString()}</td>
                <td>{article.isPublic ? <span className="text-secondary">已發布</span>: '未發布'}</td>
                <td>
                  <button type="button" className="edit-product-btn"
                  onClick={()=>handleEditArticle(article.id)}>
                  <i className="bi bi-pencil-square fs-4"></i>
                  </button>
                  <button type="button" className="edit-product-btn"
                  onClick={()=>handleDeleteArticle(article.id)}>
                  <i className="bi bi-trash3-fill fs-4"></i>
                  </button>
                </td>
              </tr>
              )))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <ArticleModalNew 
      formModalRef={formModalRef}
      hideModal={hideModal}
      getAllArticle={getAllArticle}
      modalMode={modalMode}
      editArticle={editArticle}
    />

    <Toast/>
    </>);
}