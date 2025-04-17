import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router"
import { removeCartDetail } from "../redux/cartSlice";
import { pushMessage } from "../redux/toastSlice";
import { useState, useEffect, useCallback } from "react";
import { IconTrash } from "../../src/assets/Icons";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function CartOffcanvas({cartOffcanvasRef,closeCartOffcanvas}) {
    // const [ backCartCourse, setBackCartCourse ] = useState([]);
    const [ isCartEmpty, setIsCartEmpty ] = useState(true); // 新增購物車是否為空的狀態
    const dispatch = useDispatch();
    const cartDetails = useSelector((state) => state.cart.cartDetails);

    // 取得後台購物車清單
    const getBackCart = useCallback(async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/${API_PATH}/cart`);
            const cartsData = res.data.data.carts;
            
            // 檢查購物車是否為空
            setIsCartEmpty(cartsData.length === 0);
            
            return cartsData; // 返回獲取的數據
        } catch (error) {
            setIsCartEmpty(true); // 發生錯誤時假設購物車為空
            dispatch(
                pushMessage({
                    text: `取得購物車列表失敗：${error.message}`,
                    status: "failed",
                })
            );
            return []; // 失敗時返回空數組
        }
    },[dispatch]);
    
    useEffect(() => {
        getBackCart();
    }, [getBackCart,cartDetails]);

    // 當前台購物車數據變化時也刷新後台數據
    useEffect(() => {
        getBackCart();
    }, [getBackCart,cartDetails]);

    // 每次側邊欄打開時也刷新後台數據
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.target.classList.contains('show')) {
                    // 側邊欄被打開時刷新數據
                    getBackCart();
                }
            });
        });
        
        if (cartOffcanvasRef && cartOffcanvasRef.current) {
            observer.observe(cartOffcanvasRef.current, { 
                attributes: true, 
                attributeFilter: ['class'] 
            });
        }
        
        return () => {
            observer.disconnect();
        };
    }, [getBackCart,cartOffcanvasRef]);

     // 更改後台購物車商品數量
    const putCartQty = async (cart_id, product_id, qty) => {
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
            await getBackCart(); // 更新後台購物車數據
        } catch (error) {
            dispatch(
                pushMessage({
                    text: `更改失敗：${error.response.data.message}`,
                    status: "failed",
                })
            );
        }
    };

   // 刪除後台購物車商品
    const deleteCartItem = async (cart_id) => {
    try {
        const res = await axios.delete(
            `${BASE_URL}/api/${API_PATH}/cart/${cart_id}`
        );

            await getBackCart(); // 更新後台購物車數據
        
    } catch (error) {
        dispatch(
            pushMessage({
                text: `刪除失敗：${error.response.data.message}`,
                status: "failed",
            })
        );
    }
};

// 刪除購物車課程
const handleRemoveCartItem = async (course_id, product_id) => {
    // 首先獲取最新的後台購物車數據
    const latestCarts = await getBackCart();
    
    // 找前台購物車課程，其後台對應的位置
    const targetProduct = latestCarts.find(cart => cart.product_id === product_id);

    if (targetProduct) {
        const targetCartId = targetProduct.id; // 點擊的課程，其後台對應的 cart id
        const targetProductQty = targetProduct.qty; // 點擊的課程，其後台對應的 qty

        // 如果後台數量 > 1，用 put 修改數量
        if (targetProductQty > 1) {
            await putCartQty(targetCartId, product_id, targetProductQty - 1);
        // 如果後台數量 = 1，用 delete 刪除
        } else {
            await deleteCartItem(targetCartId);
        }
    } else {
        console.log(`找不到匹配的購物車項目，product_id=${product_id}`);
    }

    // 刪除前台購物車的課程
    dispatch(removeCartDetail(course_id));
    dispatch(
        pushMessage({
            text: "刪除購物車課程成功",
            status: "success",
        })
    );
}

// 處理結帳按鈕點擊
const handleCheckout = async(e) => {
    // 在進行判斷前先刷新購物車數據，確保數據是最新的
    await getBackCart();
    closeCartOffcanvas();
    if (isCartEmpty) {
        e.preventDefault(); // 阻止預設行為
        
        dispatch(
            pushMessage({
                text: "購物車內沒有商品，無法結帳",
                status: "failed",
            })
        );
    } 
}

    return (<>
        <div className="cart-offcanvas offcanvas offcanvas-start" data-bs-scroll="true" 
        data-bs-backdrop="true" 
        tabIndex="-1"  aria-labelledby="offcanvasScrollingLabel" 
        ref={cartOffcanvasRef}>
            <div className="offcanvas-header bg-primary-1">
                <h4 className="offcanvas-title fw-bold" id="offcanvasScrollingLabel">購物車</h4>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={closeCartOffcanvas}></button>
            </div>
            <hr />
            <div className="offcanvas-body bg-primary-1 d-flex flex-column justify-content-between">
            <ol className="cart-list px-0">
                {cartDetails && cartDetails.length>0 ? (
                    cartDetails?.map((detail,index)=>{
                    return (
                    <li  className="py-2 text-secondary-2 d-flex justify-content-between"
                        key={detail.course_id}>
                        <div className="">
                        <h6 className="cart-item-title text-secondary-2 fs-md-5"><span>{index+1}. </span>{detail.title}</h6>
                        <p className="ms-5 fw-bold">{detail.date}</p>
                        <p className="ms-5 fw-bold">{detail.time}</p>
                        <p className="ms-5 fw-bold">NT$ {detail.price}</p>
                        </div>
                        <button type="button" className="btn-remove" 
                                onClick={() => handleRemoveCartItem(detail.course_id, detail.product_id)} >
                            <IconTrash className="cart-trash" /></button>
                    </li>
                    )})
                ):(
                    <p>購物車是空的，去選課吧！</p>)
                }
            </ol>
            <Link type="button" 
                    className="btn btn-primary fs-5 fs-md-4 text-white link-btn" 
                    to={isCartEmpty ? '#' : '/checkout'}
                    onClick={handleCheckout}>
                前往結帳
            </Link>
            </div>
        </div>
</> )
}