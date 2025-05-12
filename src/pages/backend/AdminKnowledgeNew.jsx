export default function AdminKnowledgeNew(){
  return (<>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mb-5 d-flex justify-content-between">
            <h1 className="text-secondary">後台知識分享-練習</h1>
            <button type="button" className="btn btn-secondary-2 text-white">建立新的文章</button>
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
              <tr>
                <td>文章名稱</td>
                <td>發布日期</td>
                <td>是否發布</td>
                <td>編輯 / 刪除</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>);
}