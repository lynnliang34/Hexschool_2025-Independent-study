import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushMessage } from "../../redux/toastSlice";
import { removeCartDetail, clearCartDetail } from "../../redux/cartSlice";
import axios from "axios";
import ReactLoading from "react-loading";
import { Toast } from "../../components";
import { IconTrash } from "../../assets/Icons";
import React from "react";
import { useForm } from "react-hook-form";
import { getPaymentImgURL } from "../../utils/image-util";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function Checkout() {
  // 1 購物車清單
  const [cart, setCart] = useState({});

  // 螢幕 loading
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  // 取得 Redux 的函式
  const dispatch = useDispatch();

  // 從 Redux store 取得使用者的購物車清單
  const frontendCartList = useSelector((state) => state.cart.cartDetails);

  // 取得購物車列表
  const getCart = async () => {
    try {
      setIsScreenLoading(true);
      const res = await axios.get(`${BASE_URL}/api/${API_PATH}/cart`);
      setCart(res.data.data);
      console.log("後台資料", res.data.data);
    } catch (error) {
      dispatch(
        pushMessage({
          text: `取得購物車列表失敗：${error.message}`,
          status: "failed",
        })
      );
    } finally {
      setIsScreenLoading(false);
    }
  };

  useEffect(() => {
    getCart();

    console.log("前台資料", frontendCartList);
  }, []);

  // 更改後台購物車商品數量
  const putCart = async (cart_id, product_id, qty) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/api/${API_PATH}/cart/${cart_id}`,
        {
          data: {
            product_id: product_id,
            qty: qty,
          },
        }
      );

      getCart();
    } catch (error) {
      dispatch(
        pushMessage({
          text: `更改失敗：${error.response.data.message}`,
          status: "failed",
        })
      );
    }
  };

  // 刪除後台購物車商品數量
  const deleteCartItem = async (cart_id) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/api/${API_PATH}/cart/${cart_id}`
      );

      getCart();
    } catch (error) {
      dispatch(
        pushMessage({
          text: `刪除失敗：${error.response.data.message}`,
          status: "failed",
        })
      );
    }
  };

  // 刪除購物車預約項目
  const handleRemoveCartItem = (product_id, course_id) => {
    // 找前台購物車課程，其後台對應的位置
    const targetProduct = cart.carts?.find(
      (cart) => cart.product_id === product_id
    );

    const targetCartId = targetProduct.id; // 點擊的課程，其後台對應的 cart id
    const targetProductQty = targetProduct.qty; // 點擊的課程，其後台對應的 qty

    // 如果後台數量 > 1，用 put 修改數量
    if (targetProductQty > 1) {
      putCart(targetCartId, product_id, targetProductQty - 1);

      // 如果後台數量 = 1，用 delete 刪除
    } else {
      deleteCartItem(targetCartId);
    }

    // 刪除前台購物車的課程
    dispatch(removeCartDetail(course_id));
    dispatch(
      pushMessage({
        text: "刪除購物車預約項目成功",
        status: "success",
      })
    );
  };

  // 2 選擇優惠券
  const [inputCoupon, setInputCoupon] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState("");

  // 選擇欄
  const handleCouponSelectChange = (e) => {
    const { value } = e.target;
    setSelectedCoupon(value);

    // 若選擇優惠則清空輸入框
    if (value !== "") {
      setInputCoupon("");
    }
  };

  // 輸入欄
  const handleCouponInputChange = (e) => {
    const { value } = e.target;

    setInputCoupon(value);

    // 若輸入框有值，則將 select 重設為 "無"
    if (value) {
      setSelectedCoupon("");
    }
  };

  // 優惠券 API
  const postCoupon = async (couponCode) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/${API_PATH}/coupon`, {
        data: {
          code: couponCode,
        },
      });

      dispatch(
        pushMessage({
          text: `${res.data.message}`,
          status: "success",
        })
      );

      getCart();
    } catch (error) {
      dispatch(
        pushMessage({
          text: `${error.response.data.message}`,
          status: "failed",
        })
      );
    }
  };

  // 兌換優惠券
  const handlePostCoupon = () => {
    const couponCode = inputCoupon ? inputCoupon : selectedCoupon;

    if (!couponCode) {
      dispatch(
        pushMessage({
          text: "請選擇或輸入優惠券",
          status: "failed",
        })
      );
      return;
    }

    postCoupon(couponCode);
  };

  // 3 付款方式
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [mobilePayment, setMobilePayment] = useState(null);
  const [creditCardInfo, setCreditCardInfo] = useState({
    card_number: "",
    expiry_date: "",
    CVC: "",
  });

  // 選擇付款方式，顯示對應區塊
  const handleChangePaymentMethod = (method) => {
    setPaymentMethod(paymentMethod === method ? null : method);
    if (method !== "credit-card") {
      setMobilePayment(null);
    }
  };

  // 選擇電子支付，顯示對應 active 狀態
  const handleChangeMobilePayment = (method) => {
    setMobilePayment(mobilePayment === method ? null : method);
  };

  // 處理信用卡輸入
  const handleCreditCardInfoChange = (e) => {
    const { name } = e.target;
    let value = e.target.value; // 這裡使用 let，而不是直接解構賦值

    // 格式化信用卡號（自動加空格，每 4 位數）
    if (name === "card_number") {
      value = value.replace(/\D/g, ""); // 只允許數字
      value = value.replace(/(\d{4})/g, "$1 ").trim(); // 每 4 位數添加空格
      value = value.substring(0, 19); // 最長 19 字元（16 位數 + 3 個空格）
    }

    // 格式化有效期限 MM/YY
    if (name === "expiry_date") {
      value = value.replace(/\D/g, ""); // 只允許數字
      if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2); // 插入 /
      }
      value = value.substring(0, 5); // 最長 5 字元
    }

    // 限制 CVC 長度（3~4 位數）
    if (name === "CVC") {
      value = value.replace(/\D/g, "").substring(0, 4); // 只允許數字，最多 4 位
    }

    // 更新狀態
    setCreditCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 4 發票選項

  // 驗證表單
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      invoiceType: "", // 預設值為空
      electronicInvoice: "",
      donationInvoice: "",
    },
  });

  const invoiceType = watch("invoiceType"); // 監聽發票類型
  const electronicInvoice = watch("electronicInvoice"); // 監聽電子發票類別
  const donationInvoice = watch("donationInvoice"); // 監聽捐贈發票類別

  // 送出表單
  const onSubmit = (data) => {
    if (!paymentMethod) {
      dispatch(
        pushMessage({
          text: "請選擇付款方式",
          status: "failed",
        })
      );

      return;
    }

    // 初始資料
    const postData = {
      user: {
        name: data.name,
        email: data.email,
        tel: data.tel,
        address: data.address,
      },
      payment: {
        paymentMethod: paymentMethod, // 使用傳入的 paymentMethod
        mobilePayment: paymentMethod === "mobile-payment" ? mobilePayment : "", // 如果是手機支付，則設定 mobilePayment
        creditCardInfo:
          paymentMethod === "credit-card"
            ? {
                CVC: creditCardInfo.CVC,
                card_number: creditCardInfo.card_number,
                expiry_date: creditCardInfo.expiry_date,
              }
            : {
                // 如果是信用卡支付，則必須填寫信用卡資訊
                CVC: "",
                card_number: "",
                expiry_date: "",
              },
      },
      invoice: {
        invoiceType: data.invoiceType,
        electronicInvoice: data.electronicInvoice,
        mobile_barcode: data.mobile_barcode,
        citizen_digital_Certificate: data.citizen_digital_Certificate,
        tax_ID_number: data.tax_ID_number,
        receipt_title: data.receipt_title,
        company_address: data.company_address,
        company_postal_code: data.company_postal_code,
        donationInvoice: data.donationInvoice,
      },
    };

    // 根據 invoiceType 清理欄位
    const clearFields = {
      electronic: [
        "tax_ID_number",
        "receipt_title",
        "company_address",
        "company_postal_code",
        "donationInvoice",
        "mobile_barcode",
        "citizen_digital_Certificate",
      ],
      GUI_number: [
        "electronicInvoice",
        "mobile_barcode",
        "citizen_digital_Certificate",
        "donationInvoice",
      ],
      donation: [
        "electronicInvoice",
        "mobile_barcode",
        "citizen_digital_Certificate",
        "tax_ID_number",
        "receipt_title",
        "company_address",
        "company_postal_code",
      ],
    };

    // 清除不需要的欄位
    clearFields[data.invoiceType]?.forEach((field) => {
      postData.invoice[field] = "";
    });

    // 根據電子發票的選項進行更細部的處理
    if (data.invoiceType === "electronic") {
      if (data.electronicInvoice === "citizen-digital-certificate") {
        postData.invoice.citizen_digital_Certificate =
          data.citizen_digital_Certificate;
        postData.invoice.mobile_barcode = "";
      } else if (data.electronicInvoice === "mobile_barcode") {
        postData.invoice.mobile_barcode = data.mobile_barcode;
        postData.invoice.citizen_digital_Certificate = "";
      }
    }

    checkout(postData);
  };

  // 提交表單
  const handleAllSubmit = () => {
    handleSubmit(onSubmit)();
  };

  // 結帳
  const checkout = async (data) => {
    try {
      setIsScreenLoading(true);
      const res = await axios.post(`${BASE_URL}/api/${API_PATH}/order`, {
        data: data,
      });

      getCart();
      dispatch(clearCartDetail()); //重置前台購物車

      dispatch(
        pushMessage({
          text: `成功送出訂單`,
          status: "success",
        })
      );

      reset();
      setInputCoupon("");
      setSelectedCoupon("");
      setPaymentMethod(null);
      setMobilePayment(null);
      setCreditCardInfo({
        card_number: "",
        expiry_date: "",
        CVC: "",
      });
    } catch (error) {
      dispatch(
        pushMessage({
          text: `結帳失敗：${error.response.data.message}`,
          status: "failed",
        })
      );
    } finally {
      setIsScreenLoading(false);
    }
  };

  // 5 訂單明細

  // 數字加千分位逗號
  const addThousandths = (x) => new Intl.NumberFormat("en-US").format(x);

  return (
    <>
      <div className="container mt-4 mb-20 mt-lg-20 mb-lg-36">
        {/*1 購物車 */}
        <div className="mb-8 mb-lg-20">
          <div className="checkout-title mb-4 mb-lg-10">
            <h1 className="fs-2 fs-lg-0 text-primary">
              1 <span className="fs-3 fs-lg-1 ms-2">購物車</span>
            </h1>
          </div>

          {/*手機版購物清單 */}
          <ul className="list-unstyled mb-32 d-md-none">
            {frontendCartList.map((item, index) => (
              <li
                className={`cart-list-item p-2 ${
                  frontendCartList.length - 1 === 1 ? "mb-3" : ""
                }`}
                key={item.course_id}
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="cart-list-img rounded me-4"
                      src={item.img}
                      alt=""
                    />

                    <div className="me-4">
                      <p className="mb-1">{item.title}</p>
                      <p className="mb-1">{item.date}</p>
                      <p className="mb-1">{item.time}</p>
                      <p>NT$ {item.price}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="border-0 bg-transparent"
                    onClick={() =>
                      handleRemoveCartItem(item.product_id, item.course_id)
                    }
                  >
                    <IconTrash className={"cart-trash"} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/*電腦版購物清單 */}
          <div className="table-responsive">
            <table className="cart-list-table align-middle text-center d-none d-md-block">
              <thead>
                <tr>
                  <th>課程名稱</th>
                  <th>日期</th>
                  <th>時段</th>
                  <th>小計</th>
                  <th>刪除</th>
                </tr>
              </thead>
              <tbody>
                {frontendCartList.map((item) => (
                  <React.Fragment key={item.course_id}>
                    <tr className="cart-table-spacing"></tr>
                    <tr className="cart-table-item">
                      <td>
                        <div className="d-flex justify-content-center align-items-center">
                          <img
                            className="cart-list-img rounded"
                            src={item.img}
                            alt=""
                          />
                          <p className="text-start text-truncate">
                            {item.title}
                          </p>
                        </div>
                      </td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>NT$ {item.price}</td>
                      <td>
                        <button
                          type="button"
                          className="border-0 bg-transparent"
                          onClick={() =>
                            handleRemoveCartItem(
                              item.product_id,
                              item.course_id
                            )
                          }
                        >
                          <IconTrash className={"cart-trash"} />
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/*2 選擇優惠券 */}
        <div className="mb-8 mb-lg-20">
          <div className="checkout-title mb-4 mb-lg-10">
            <h2 className="fs-2 fs-lg-0 text-primary">
              2 <span className="fs-3 fs-lg-1 ms-2">選擇優惠券</span>
            </h2>
          </div>
          <form id="discount">
            <div className="d-flex flex-column flex-md-row">
              <select
                className="form-select checkout-input mb-3 mb-md-0 me-md-2 me-lg-6"
                aria-label="Default select example"
                value={selectedCoupon}
                onChange={handleCouponSelectChange}
              >
                <option value="">無</option>
                <option value="MoveJoy9">促銷活動 9 折</option>
              </select>

              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  className="form-control checkout-input w-50 me-2 me-lg-6"
                  id="couponInput"
                  value={inputCoupon}
                  onChange={handleCouponInputChange}
                  placeholder="請輸入優惠券"
                />
                <button
                  type="button"
                  className="btn btn-primary checkout-btn text-white w-50"
                  onClick={handlePostCoupon}
                >
                  兌換優惠券
                </button>
              </div>
            </div>
          </form>
        </div>

        {/*3 選擇付款方式 */}
        <div className="mb-8 mb-lg-20">
          <div className="checkout-title mb-4 mb-lg-10">
            <h2 className="fs-2 fs-lg-0 text-primary">
              3 <span className="fs-3 fs-lg-1 ms-2">選擇付款方式</span>
            </h2>
          </div>

          <form id="payment" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex mb-3 mb-lg-6">
              <button
                type="button"
                className={`btn btn-outline-primary checkout-btn btn-w-credit-card me-2 me-lg-6 ${
                  paymentMethod === "credit-card" ? "active" : ""
                }`}
                onClick={() => handleChangePaymentMethod("credit-card")}
              >
                信用卡
              </button>
              <button
                type="button"
                className={`btn btn-outline-primary checkout-btn btn-w-mobile-payment ${
                  paymentMethod === "mobile-payment" ? "active" : ""
                }`}
                onClick={() => handleChangePaymentMethod("mobile-payment")}
              >
                行動支付
              </button>
            </div>

            {paymentMethod === "credit-card" && (
              <div className="credit-card d-flex flex-column flex-md-row">
                <div className="credit-card-number me-md-2 me-lg-6">
                  <label className="form-label checkout-label mb-1 mb-lg-2">
                    信用卡卡號<span className="text-primary ms-1">*</span>
                  </label>
                  <input
                    className={`form-control checkout-input mb-3 mb-md-0 ${
                      errors.card_number && "is-invalid"
                    }`}
                    type="tel"
                    {...register("card_number", {
                      required: "必填",
                      pattern: {
                        value: /^\d{4} \d{4} \d{4} \d{4}$/,
                        message: "格式錯誤",
                      },
                    })}
                    inputMode="numeric"
                    placeholder="**** **** **** ****"
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      value = value
                        .replace(/(\d{4})/g, "$1 ")
                        .trim()
                        .substring(0, 19);
                      setValue("card_number", value);
                    }}
                  />
                  {errors.card_number && (
                    <p className="text-danger">{errors.card_number.message}</p>
                  )}
                </div>
                <div className="credit-card-info d-flex justify-content-between">
                  <div className="w-50 me-2 me-lg-6">
                    <label className="form-label checkout-label mb-1 mb-lg-2">
                      有效期限
                    </label>
                    <input
                      className={`form-control checkout-input  ${
                        errors.expiry_date && "is-invalid"
                      }`}
                      type="text"
                      {...register("expiry_date", {
                        required: "必填",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                          message: "格式錯誤",
                        },
                      })}
                      inputMode="numeric"
                      maxLength="5"
                      placeholder="MM/YY"
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length >= 2)
                          value = value.slice(0, 2) + "/" + value.slice(2);
                        setValue("expiry_date", value.substring(0, 5));
                      }}
                    />
                    {errors.expiry_date && (
                      <p className="text-danger">
                        {errors.expiry_date.message}
                      </p>
                    )}
                  </div>
                  <div className="w-50 me-2 me-lg-6">
                    <label className="form-label checkout-label mb-1 mb-lg-2">
                      辨識碼
                    </label>
                    <input
                      className={`form-control checkout-input  ${
                        errors.CVC && "is-invalid"
                      }`}
                      type="tel"
                      {...register("CVC", {
                        required: "必填",
                        pattern: {
                          value: /^\d{3,4}$/,
                          message: "格式錯誤",
                        },
                      })}
                      inputMode="numeric"
                      maxLength="4"
                      placeholder="CVC/CVV"
                      onChange={(e) => {
                        let value = e.target.value
                          .replace(/\D/g, "")
                          .substring(0, 4);
                        setValue("CVC", value);
                      }}
                    />
                    {errors.CVC && (
                      <p className="text-danger">{errors.CVC.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "mobile-payment" && (
              <div className="mobile-payment d-flex mb-3 mb-lg-6 ">
                <button
                  type="button"
                  className={`btn btn-mobile-payment me-2 me-lg-6 ${
                    mobilePayment === "Line-pay" ? "active" : ""
                  }`}
                  onClick={() => handleChangeMobilePayment("Line-pay")}
                >
                  <img
                    className="mobile-payment-img"
                    src={getPaymentImgURL('Line Pay.png')}
                    alt="Line Pay"
                  />
                </button>
                <button
                  type="button"
                  className={`btn btn-mobile-payment me-2 me-lg-6 ${
                    mobilePayment === "JKO-pay" ? "active" : ""
                  }`}
                  onClick={() => handleChangeMobilePayment("JKO-pay")}
                >
                  <img
                    className="mobile-payment-img"
                    src={getPaymentImgURL('JKO Pay.png')}
                    alt="JKO Pay"
                  />
                </button>
              </div>
            )}
          </form>
        </div>

        {/*4 發票選項 */}
        <div className="mb-8 mb-lg-20">
          <div className="mb-4 mb-lg-10">
            <div className="checkout-title mb-1 mb-lg-2">
              <h2 className="fs-2 fs-lg-0 text-primary">
                4 <span className="fs-3 fs-lg-1 ms-2">發票選項</span>
              </h2>
            </div>
            <p className="fs-7 fs-lg-6 text-neutral-1">
              以下資訊只用於開立發票，並不會在其他頁面顯示。發票一經開立後不可更改，請確認資訊是否都填寫正確喔！（
              <span className="text-primary">*</span>為必填欄位）
            </p>
          </div>

          <form id="invoice" onSubmit={handleSubmit(onSubmit)}>
            {/*帶入上次結帳資料 */}
            <button
              type="button"
              className="btn btn-outline-primary checkout-btn last-checkout-information mb-3 mb-lg-6"
            >
              帶入上次結帳資料
            </button>

            {/*第一行輸入欄 */}
            <div className="d-md-flex justify-content-between mb-3 mb-md-6">
              {/*姓名 */}
              <div className="w-100 me-2 me-lg-6 mb-3 mb-md-0">
                <label
                  htmlFor="checkoutNameInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  姓名<span className="text-primary ms-1">*</span>
                </label>
                <input
                  {...register("name", {
                    required: "姓名必填",
                  })}
                  className={`form-control checkout-input ${
                    errors.name && "is-invalid"
                  }`}
                  id="checkoutNameInput"
                  type="text"
                  placeholder="請輸入真實姓名"
                />

                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>

              {/*電子信箱 */}
              <div className="w-100">
                <label
                  htmlFor="checkoutEmailInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  聯絡用電子信箱<span className="text-primary ms-1">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email 必填",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email 格式錯誤",
                    },
                  })}
                  className={`form-control checkout-input ${
                    errors.email && "is-invalid"
                  }`}
                  id="checkoutEmailInput"
                  type="text"
                  placeholder="請輸入電子信箱"
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/*第二行輸入欄 */}
            <div className="d-md-flex justify-content-between mb-3 mb-md-6">
              {/* 電話 */}
              <div className="w-100 me-2 me-lg-6 mb-3 mb-md-0">
                <label
                  htmlFor="checkoutPhoneInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  電話<span className="text-primary ms-1">*</span>
                </label>
                <input
                  {...register("tel", {
                    required: "電話必填",
                    pattern: {
                      value: /^(?:02\d{8}|04\d{8}|0[3-8]\d{7}|09\d{8})$/,
                      message: "格式錯誤",
                    },
                  })}
                  className={`form-control checkout-input ${
                    errors.tel && "is-invalid"
                  }`}
                  id="checkoutPhoneInput"
                  type="tel"
                  placeholder="請輸入電話"
                />

                {errors.tel && (
                  <p className="text-danger">{errors.tel.message}</p>
                )}
              </div>

              {/* 地址 */}
              <div className="w-100">
                <label
                  htmlFor="checkoutAddressInput"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  地址<span className="text-primary ms-1">*</span>
                </label>
                <input
                  {...register("address", {
                    required: "地址必填",
                  })}
                  className={`form-control checkout-input ${
                    errors.address && "is-invalid"
                  }`}
                  id="checkoutAddressInput"
                  type="text"
                  placeholder="請輸入地址"
                />
                {errors.address && (
                  <p className="text-danger">{errors.address.message}</p>
                )}
              </div>
            </div>

            {/*第三行輸入欄 */}
            <div className="d-md-flex justify-content-between mb-3 mb-md-6">
              {/*發票類型 */}
              <div className="w-100 me-2 me-lg-6 mb-3 mb-md-0">
                <label
                  htmlFor="typeOfInvoice"
                  className="form-label checkout-label mb-1 mb-lg-2"
                >
                  發票類型<span className="text-primary ms-1">*</span>
                </label>
                <select
                  {...register("invoiceType", { required: "請選擇發票類型" })}
                  className={`form-select checkout-input ${
                    errors.invoiceType && "is-invalid"
                  }`}
                  id="typeOfInvoice"
                  aria-label="Default select example"
                >
                  <option disabled value="">
                    請選擇
                  </option>
                  <option value="electronic">電子發票</option>
                  <option value="GUI_number">統編發票</option>
                  <option value="donation">捐贈發票</option>
                </select>
                {errors.invoiceType && (
                  <p className="text-danger mb-1">
                    {errors.invoiceType.message}
                  </p>
                )}
                <p
                  className={`invoice-note fs-7 fs-md-6 text-neutral-1 mt-1 mt-lg-2 ${
                    errors.invoiceType && "d-none"
                  }`}
                >
                  如需開立統編，請選擇統編發票
                </p>
              </div>

              {/*電子發票 */}
              {invoiceType === "" && (
                <div className="electronic-invoice invoice-section w-100 d-flex align-items-end mb-md-7 mb-lg-8">
                  <select
                    className="form-select checkout-input"
                    defaultValue=""
                    disabled
                  >
                    <option disabled value="">
                      請選擇
                    </option>
                    <option value="citizen-digital-certificate">
                      自然人憑證條碼
                    </option>
                    <option value="mobile-barcode">手機條碼</option>
                  </select>
                </div>
              )}
              {invoiceType === "electronic" && (
                <div className="electronic-invoice invoice-section w-100 mb-md-7 mb-lg-8">
                  <label
                    htmlFor="typeOfElectronic"
                    className="form-label checkout-label mb-1 mb-lg-2"
                  >
                    載具類型<span className="text-primary ms-1">*</span>
                  </label>
                  <select
                    {...register("electronicInvoice", {
                      required: "請選擇載具類別",
                    })}
                    className={`form-select checkout-input ${
                      errors.electronicInvoice && "is-invalid"
                    }`}
                    id="typeOfElectronic"
                  >
                    <option disabled value="">
                      請選擇
                    </option>
                    <option value="citizen-digital-certificate">
                      自然人憑證條碼
                    </option>
                    <option value="mobile-barcode">手機條碼</option>
                  </select>
                  {errors.electronicInvoice && (
                    <p className="text-danger">
                      {errors.electronicInvoice.message}
                    </p>
                  )}
                </div>
              )}

              {/*統編條碼 */}
              {invoiceType === "GUI_number" && (
                <>
                  <div className="government-uniform-invoice invoice-section w-100 me-2 me-lg-6 mb-3 mb-md-0">
                    <label
                      htmlFor="taxIdNumberInput"
                      className="form-label checkout-label mb-1 mb-lg-2"
                    >
                      統一編號<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      {...register("tax_ID_number", {
                        required: "請輸入統一編號",
                        pattern: {
                          value: /^\d{8}$/,
                          message: "統編須為 8 碼數字",
                        },
                      })}
                      className={`form-control checkout-input ${
                        errors.tax_ID_number && "is-invalid"
                      }`}
                      type="text"
                      id="taxIdNumberInput"
                      placeholder="送出後無法更改，請務必確認"
                    />
                    {errors.tax_ID_number && (
                      <p className="text-danger">
                        {errors.tax_ID_number.message}
                      </p>
                    )}
                  </div>
                  <div className="government-uniform-invoice invoice-section w-100">
                    <label
                      htmlFor="receiptTitleInput"
                      className="form-label checkout-label mb-1 mb-lg-2"
                    >
                      發票抬頭<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      {...register("receipt_title", {
                        required: "請輸入發票抬頭",
                      })}
                      className={`form-control checkout-input ${
                        errors.receipt_title && "is-invalid"
                      }`}
                      type="text"
                      id="receiptTitleInput"
                      placeholder="送出後無法更改，請務必確認"
                    />
                    {errors.receipt_title && (
                      <p className="text-danger">
                        {errors.receipt_title.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/*捐贈發票 */}
              {invoiceType === "donation" && (
                <div className="donation-invoice invoice-section w-100  mb-md-7 mb-lg-8">
                  <label
                    htmlFor="donationInvoice"
                    className="form-label checkout-label mb-1 mb-lg-2"
                  >
                    載具類型<span className="text-primary ms-1">*</span>
                  </label>
                  <select
                    {...register("donationInvoice", {
                      required: "請選擇捐贈單位",
                    })}
                    className={`form-select checkout-input ${
                      errors.donationInvoice && "is-invalid"
                    }`}
                    id="donationInvoice"
                  >
                    <option disabled value="">
                      請選擇
                    </option>
                    <option value="2468">
                      社團法人中華民國老人福利關懷協會（2468）
                    </option>
                    <option value="13579">陽光社會福利基金會（13579）</option>
                    <option value="25885">
                      財團法人伊甸社會福利基金會（25885）
                    </option>
                    <option value="input-donation-code">輸入捐贈碼</option>
                  </select>
                  {errors.donationInvoice && (
                    <p className="text-danger">
                      {errors.donationInvoice.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/*第四行輸入欄 */}
            <div className="d-md-flex justify-content-between">
              {/*載具類別 */}
              {(invoiceType === "" || invoiceType === "electronic") &&
                electronicInvoice === "" && (
                  <div className="electronic-invoice invoice-section w-100">
                    <label
                      htmlFor="carrierTypeInput"
                      className="form-label checkout-label mb-1 mb-lg-2"
                    >
                      載具類別<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      className="form-control checkout-input"
                      id="carrierTypeInput"
                      type="text"
                      placeholder="請輸入載具"
                      disabled
                    />
                  </div>
                )}

              {invoiceType === "electronic" &&
                electronicInvoice === "citizen-digital-certificate" && (
                  <div className="electronic-invoice invoice-section w-100">
                    <label
                      htmlFor="citizenDigitalCertificate"
                      className="form-label checkout-label mb-1 mb-lg-2"
                    >
                      自然人憑證條碼<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      id="citizenDigitalCertificate"
                      {...register("citizen_digital_Certificate", {
                        required: "請輸入憑證碼",
                        pattern: {
                          value: /^[A-Z]{2}\d{14}$/,
                          message:
                            "憑證碼格式錯誤，應為 2 碼大寫字母 + 14 碼數字",
                        },
                      })}
                      className={`form-control checkout-input ${
                        errors.citizen_digital_Certificate && "is-invalid"
                      }`}
                      type="text"
                      placeholder="請輸入憑證碼，由2碼大寫字母加上14碼數字組成"
                    />
                    {errors.citizen_digital_Certificate && (
                      <p className="text-danger">
                        {errors.citizen_digital_Certificate.message}
                      </p>
                    )}
                  </div>
                )}

              {invoiceType === "electronic" &&
                electronicInvoice === "mobile-barcode" && (
                  <div className="electronic-invoice invoice-section w-100">
                    <label
                      htmlFor="mobileBarcode"
                      className="form-label checkout-label mb-1 mb-lg-2"
                    >
                      手機條碼<span className="text-primary ms-1">*</span>
                    </label>
                    <input
                      {...register("mobile_barcode", {
                        required: "請輸入手機條碼",
                        pattern: {
                          value: /^\/[A-Za-z0-9]{7}$/,
                          message: "手機條碼格式錯誤，應為 / 開頭共 8 碼英數字",
                        },
                      })}
                      className={`form-control checkout-input ${
                        errors.mobile_barcode && "is-invalid"
                      }`}
                      type="tel"
                      id="mobileBarcode"
                      placeholder="請輸入手機條碼，/ 開頭共8碼"
                    />
                    {errors.mobile_barcode && (
                      <p className="text-danger">
                        {errors.mobile_barcode.message}
                      </p>
                    )}
                  </div>
                )}

              {/*公司地址 */}
              {invoiceType === "GUI_number" && (
                <div className="government-uniform-invoice invoice-section w-100">
                  <div className="d-md-flex justify-content-between mb-3 mb-md-6">
                    {/*地址  */}
                    <div className="w-100 me-2 me-lg-6 mb-3 mb-md-0">
                      <label
                        htmlFor="companyAddressInput"
                        className="form-label checkout-label mb-1 mb-lg-2"
                      >
                        公司地址<span className="text-primary ms-1">*</span>
                      </label>
                      <input
                        {...register("company_address", {
                          required: "請輸入公司地址",
                        })}
                        className={`form-control checkout-input ${
                          errors.company_address && "is-invalid"
                        }`}
                        type="text"
                        id="companyAddressInput"
                        placeholder="請輸入公司地址"
                      />
                      {errors.company_address && (
                        <p className="text-danger">
                          {errors.company_address.message}
                        </p>
                      )}
                    </div>

                    {/*郵遞區號 */}
                    <div className="w-100 mb-3 mb-md-0">
                      <label
                        htmlFor="companyPostalCodeInput"
                        className="form-label checkout-label mb-1 mb-lg-2"
                      >
                        郵遞區號<span className="text-primary ms-1">*</span>
                      </label>
                      <input
                        {...register("company_postal_code", {
                          required: "請輸入郵遞區號",
                          pattern: {
                            value: /^\d{3}(\d{2}|\d{3})?$/, // 允許 3 位數 或 3 + 2 位數 或 3 + 3 位數
                            message: "郵遞區號必須是 3 或 3+2 或 3+3 位數字",
                          },
                        })}
                        className={`form-control checkout-input ${
                          errors.company_postal_code && "is-invalid"
                        }`}
                        id="companyPostalCodeInput"
                        type="text"
                        placeholder="請輸入郵遞區號"
                      />
                      {errors.company_postal_code && (
                        <p className="text-danger">
                          {errors.company_postal_code.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/*輸入捐贈碼 */}
              {invoiceType === "donation" &&
                donationInvoice === "input-donation-code" && (
                  <div className="invoice-section donation-invoice-section w-100">
                    <input
                      {...register("donationCode", {
                        required: "請輸入捐贈碼",
                      })}
                      className={`form-control checkout-input ${
                        errors.donationCode && "is-invalid"
                      }`}
                      placeholder="輸入捐贈碼"
                    />
                    {errors.donationCode && (
                      <p className="text-danger">
                        {errors.donationCode.message}
                      </p>
                    )}
                  </div>
                )}
            </div>
          </form>
        </div>

        {/*5 訂單明細 */}
        <div className="mb-8 mb-lg-20">
          <div className="checkout-title mb-4 mb-lg-10">
            <h2 className="fs-2 fs-lg-0 text-primary">
              5 <span className="fs-3 fs-lg-1 ms-2">訂單明細</span>
            </h2>
          </div>

          {/*欄位名稱 */}
          <div className="cart-order-header mb-3 mb-lg-5">
            <h3 className="f-order-header">課程明細</h3>
            <h3 className="f-order-header">價格</h3>
          </div>

          {/*選購清單 */}
          <div className="cart-order">
            {frontendCartList.map((item) => (
              <div
                className="cart-order-item f-order-item"
                key={item.course_id}
              >
                <div className="d-flex flex-column flex-md-row">
                  <p className="order-class-name text-truncate me-md-10">
                    {item.title}
                  </p>
                  <div className="d-flex">
                    <p className="me-2 me-md-10">{item.date}</p>
                    <p>{item.time}</p>
                  </div>
                </div>
                <p>NT${item.price}</p>
              </div>
            ))}
          </div>

          {/*小計 */}
          <div className="cart-order-subtotal">
            <div className="d-flex flex-column align-items-end">
              <p className="mb-2">
                <span className="me-5">小計</span>共
                <span className="text-primary mx-1 mx-lg-2">
                  {frontendCartList.length}
                </span>
                堂課程
              </p>
              <p>
                NT$
                <span className="text-primary ms-1 ms-lg-2">
                  {addThousandths(cart?.total)}
                </span>
              </p>
            </div>
          </div>

          {/*折扣 */}
          <div className="cart-order-discount">
            <p>
              <span className="me-5">優惠折扣</span>NT$
              <span className="text-primary mx-1 mx-lg-2">
                {addThousandths(cart?.final_total - cart?.total)}
              </span>
            </p>
          </div>

          {/*付款金額 */}
          <div className="cart-order-payment">
            <p>
              <span className="me-5">本訂單須付款金額</span>NT$
              <span className="text-primary mx-1 mx-lg-2">
                {addThousandths(cart?.final_total)}
              </span>
            </p>
          </div>
        </div>

        {/*確認付款 */}
        <div className="text-center">
          <button
            className={`btn btn-primary text-white confirm-payment-btn ${
              cart.carts?.length > 0 || "disabled"
            }`}
            type="button"
            onClick={handleAllSubmit}
          >
            確認付款
          </button>
        </div>
      </div>

      {/* Loading */}
      {isScreenLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.3)",
            zIndex: 999,
          }}
        >
          <ReactLoading
            type="spokes"
            color="#84CCC9"
            width="4rem"
            height="4rem"
          />
        </div>
      )}

      <Toast />
    </>
  );
}
