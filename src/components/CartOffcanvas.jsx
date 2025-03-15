import { Link } from "react-router"

export default function CartOffcanvas({cartOffcanvasRef,closeCartOffcanvas, cartDetails}) {

    return (<>
        <div class="cart-offcanvas offcanvas offcanvas-start" data-bs-scroll="true" 
        data-bs-backdrop="ture" 
        tabindex="-1"  aria-labelledby="offcanvasScrollingLabel" 
        ref={cartOffcanvasRef}>
            <div class="offcanvas-header bg-primary-1">
                <h4 class="offcanvas-title fw-bold" id="offcanvasScrollingLabel">購物車</h4>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div class="offcanvas-body bg-primary-1 d-flex flex-column justify-content-between">
            <ol className="cart-list">
                {cartDetails && cartDetails.length>0 ? (
                    cartDetails?.map((detail)=>{
                    return (
                    <li className="py-2 text-secondary-2">
                        <h5 className="text-secondary-2">{detail.title}</h5>
                        <p >{detail.date}</p>
                        <p>{detail.time}</p>
                        <p>NT$ {detail.price}</p>
                    </li>
                    )})
                ):(
                    <p>購物車是空的，去選課吧！</p>)
                }
            </ol>
            <Link type="button" 
                    class="btn btn-primary fs-4 text-white link-btn" 
                    to="/checkout"
                    onClick={closeCartOffcanvas}>
                前往結帳
            </Link>
            </div>
        </div>
</> )
}