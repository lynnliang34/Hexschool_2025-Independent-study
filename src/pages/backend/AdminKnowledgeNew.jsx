import axios from "axios";
import ReactLoading from "react-loading";
import { Modal } from "bootstrap";
import { useEffect, useState, useRef,  } from "react";
import { ArticleModalNew, DelArticleModalNew } from "../../components";
import { pushMessage } from "../../redux/toastSlice";
import { useDispatch } from "react-redux";
import Toast from "../../components/Toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function AdminKnowledgeNew(){
  const [ articleList, setArticleList ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ pageData, setPageData ] = useState({});
  const [ pageNumbers, setPageNumbers] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  // modal用
  const formModalRef = useRef(null);
  const formModalInstance = useRef(null);
  // 編輯文章modal用
  const [modalMode, setModalMode] = useState('create');
  const [editArticle, setEditArticle] = useState(null);
  // 刪除確認modal用
  const deleteModalRef = useRef(null);
  const deleteModalInstance = useRef(null);
  const [articleId, setArticleId] = useState(null);
  // toast
  const dispatch = useDispatch();

  const getAllArticle = async()=>{
    setIsLoading(true);
    try{
      const res = await axios.get(`${BASE_URL}/api/${API_PATH}/admin/articles`,{
        params:{
          page:currentPage
        }
      });
      console.log(res.data);
      setArticleList(res.data.articles)
      setPageData(res.data.pagination);
    }
    catch(err){
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
  },[currentPage])

  useEffect(()=>{
    console.log(articleList);
    console.log(editArticle);
    console.log(modalMode);
    console.log(pageData);
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
      dispatch(
        pushMessage({
          text:'獲取文章資料失敗',
          status:'failed'
        })
      )
    }
    setModalMode('edit');
    showModal();
  }

  // 刪除文章Modal
  const showDeleteModal = (id) => {
    setArticleId(id);
    deleteModalInstance.current.show();
  }
  const hideDeleteModal = () => {
    deleteModalInstance.current.hide();
  }

  // 切分頁
  const handlePageChange = (e) =>{
    e.preventDefault();
    if(pageData.has_pre){
      setCurrentPage(currentPage-1);
    }else if(pageData.has_next){
      setCurrentPage(currentPage+1);
    }
  }

  // 顯示分頁數字
  useEffect(()=>{
    if(pageData.total_pages){
      const newNumbers = [];
      for ( let i = 1; i <= pageData.total_pages; i++){
        newNumbers.push(i);
      }
      setPageNumbers(newNumbers);
    }
  },[pageData])


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
                  onClick={()=>showDeleteModal(article.id)}>
                  <i className="bi bi-trash3-fill fs-4"></i>
                  </button>
                </td>
              </tr>
              )))
              }
            </tbody>
          </table>

          <div className="d-flex justify-content-center mt-5">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className={`page-link text-secondary ${pageData.has_pre ? '' : 'disabled'}`} href="#" aria-label="Previous"
                  onClick={(e)=>handlePageChange(e)}>
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {pageNumbers.map((num)=>(
                  <li className={`page-item ${num === currentPage ? 'active':''}`} key={num}>
                    <a className="page-link text-secondary" href="#"
                    onClick={(e)=>{
                      e.preventDefault();
                      setCurrentPage(num);
                    }}>{num}</a>
                    </li>
                ))}
                <li className="page-item">
                  <a className={`page-link text-secondary ${pageData.has_next ? '' : 'disabled'}`} href="#" aria-label="Next"
                  onClick={(e)=>handlePageChange(e)}>
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
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

    <DelArticleModalNew
      deleteModalRef={deleteModalRef}
      deleteModalInstance={deleteModalInstance}
      hideDeleteModal={hideDeleteModal}
      articleId={articleId}
      getAllArticle={getAllArticle}
      />

    <Toast/>
    </>);
}