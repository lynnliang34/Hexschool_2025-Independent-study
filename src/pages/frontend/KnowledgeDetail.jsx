import { Link } from "react-router";
import { getImageURL } from "../../utils/image-util";

export default function KnowledgeDetail() {
  return (
    <>
      <div className="container py-3 pt-lg-0 pb-lg-8 px-lg-15 mt-4 mb-6 my-lg-20">
        <h1 className="fs-3 fs-lg-1 mb-1 mb-lg-4">銀髮族必備三大營養素!</h1>

        <p className="fs-7 fs-lg-5 text-secondary-2 mb-3 mb-lg-5">
          2024/8/14
          <span className="ms-4">作者：許政榆</span>
          <span className="ms-4">
            <Link>#飲食</Link>
          </span>
        </p>
        <img
          src={getImageURL("omega-3-food-sources-omega-6-yellow-top-view.png")}
          alt=""
          className="rounded mb-5 mb-lg-10"
        />
        <p className="fs-6 fs-lg-4">
          銀髮族飲食需掌握「三好一巧」的原則，才會吃得好與健康。 <br />
          為建立高齡族群正確營養觀念，廖淑芬建議以「三好一巧」原則： <br />
          <br />
          「吃得下」：調整烹調方式及食物質地，協助高齡者吞咬，像是滷牛肉時加入木瓜、鳳梨，利用水果酵素協助肉質軟化，更好入口，而台灣人較愛吃豬肉，也可多搭配豆腐、豆乾、雞蛋、雞肉，補充豐富蛋白質。
          <br />
          <br />
          「吃得夠」：若長者無慢性病或特殊情況，建議少量多餐、能吃盡量吃，達到一日所需熱量與營養。
          <br />
          <br />
          「吃得對」：每天吃足6大類食物，包括全穀根莖類、豆蛋肉魚類、油脂類、蔬菜類、水果類、低脂乳品類，也建議每天應攝取高營養密度的食物，如深綠色蔬菜、瘦肉、魚類、黃豆製品、低脂牛奶或乳製品等，且要避免高糖、高脂食物，每日應喝1500cc的水，攝取充足水分。
          <br />
          <br />
          「吃得巧」：可選擇較軟食材、運用小量擺盤、添加天然調味料等增添料理風味，家人、親友陪伴用餐，也能提升長者飲食動機。
          <br />
          <br />
          三大營養素「醣類」、「蛋白質」、「脂質」分配要適宜。
          <br />
          蛋白質可維持肌肉組織、免疫功能、促進傷口癒合等，除了選擇高優質蛋白質食物，也要留意健康脂肪含量
          <br />
          <br />
          ．醣類是提供熱量的主要來源，食物來源像是米飯、麵製品、南瓜、地瓜等全穀根莖類，建議可攝取糙米飯等未精緻過的高纖食物，可攝取更豐富膳食纖維、維生素、礦物質，不過有肥胖、高血糖、高三酸甘油脂血症長者，應控制份量。
          <br />
          <br />
          ．蛋白質建議選擇優先順序為豆類、魚類與海鮮、禽肉、畜肉、蛋類。長者代謝膽固醇功能下降，不建議常吃內臟、蝦蟹卵等食物高膽固醇食物，蛋黃1週建議攝取2至3份。
          <br />
          <br />
          ．脂質可產生飽足感、協助部分脂溶性衛生素吸收，不過攝取過多恐引發高血脂症、肥胖，建議家禽肉去皮再吃，烹調以植物油取代豬油。
          <br />
          <br />
        </p>
      </div>
    </>
  );
}
