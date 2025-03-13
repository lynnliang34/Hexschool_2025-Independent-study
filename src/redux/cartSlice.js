import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 存訂單資料
    cartDatails:[],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers:{
        // 加入訂單資料
        addCartDetail:(state, action)=>{
            
            // 確認購物車有沒有重複的課(有重複為true)
            const isDuplicate = state.cartDatails.some(
                (detail)=>{
                    return detail.course_id === action.payload.course_id;
                }
            )
            // .some() 是 JavaScript 陣列的一個方法，用來測試陣列中是否至少有一個元素通過了指定的測試函數。如果有元素通過測試，它就返回 true；否則返回 false。
            // array.some((element, index, array) => {}

            if(isDuplicate === false){
                state.cartDatails.push({
                    ...action.payload
                })
            }
        },

        // 刪除購物車指定資料
            //.filter保留回傳為true的資料
            // （傳入要刪的id為false）
        removeCartDetail:(state,action)=>{
            state.cartDatails = state.cartDatails.filter(detail=>detail.course_id !== action.payload)
        },

        // 清空購物車資料
        clearCartDetail:(state,action)=>{
            state.cartDatails = [];
        }
    }
})


export const { addCartDetail, removeCartDetail, clearCartDetail } = cartSlice.actions;

export default cartSlice.reducer;