import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router"
import { removeCartDetail } from "../redux/cartSlice";
import { pushMessage } from "../redux/toastSlice";
import { useState, useEffect } from "react";
import { IconTrash } from "../../src/assets/Icons";



export default function CartOffcanvas({cartOffcanvasRef,closeCartOffcanvas}) {
    const dispatch = useDispatch();
    const cartDetails = useSelector((state) => state.cart.cartDetails);
    
    const handleRemoveCartItem = (id) => {
        dispatch(removeCartDetail(id));

        dispatch(
            pushMessage({
            text: "刪除購物車課程成功",
            status: "success",
            })
        );
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
                                onClick={()=>handleRemoveCartItem(detail.course_id)} >
                            <IconTrash className="cart-trash" /></button>
                    </li>
                    )})
                ):(
                    <p>購物車是空的，去選課吧！</p>)
                }
            </ol>
            <Link type="button" 
                    className="btn btn-primary fs-5 fs-md-4 text-white link-btn" 
                    to="/checkout"
                    onClick={closeCartOffcanvas}>
                前往結帳
            </Link>
            </div>
        </div>
</> )
}