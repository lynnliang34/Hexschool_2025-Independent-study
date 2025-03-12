// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const API_PATH = import.meta.env.VITE_API_PATH;

// // 取得課程列表 (createAsyncThunk用於處理非同步請求)
// export const fetchCourses = createAsyncThunk(
//     'courses/fetchCourses',
//         // 這是 thunk 的類型前綴（type prefix），用於生成三種 action 類型：
//         // courses/fetchCourses/pending（請求開始時）
//         // courses/fetchCourses/fulfilled（請求成功時）
//         // courses/fetchCourses/rejected（請求失敗時）
//     async(_,{rejectWithValue})=>{
//         // thunk的主要執行函式，會接受兩個參數，第一個是傳給thunk的參數（_表示不使用），
//         // 第二個是從thunk中解構出的方法，用於在錯誤情況下返回自定義的值。
//         console.log('開始請求')
//         try{
//             const response = await axios.get(`${BASE_URL}/api/${API_PATH}/products/all`);
//             console.log(response.data.products);
//             return response.data.products;
//             // 返回的值會變成thunk裡面fulfilled action的payload
//         }
//         catch(err){
//             return rejectWithValue(err.response.data);
//             // 返回的值會變成thunk裡面rejected action的payload
//         }
//     }
// );


// // 課程預約的slice
// const scheduleSlice = createSlice({
//     // slice的名稱，用於生成action type的前綴
//     name:'schedule',

//     // slice的初始狀態，一個屬性代表一個狀態
//     initialState:{
//         courses:[], // 課程列表
//         selectedCourse: null, // 用戶選擇的課程選項
//         selectedTeacher: null, 
//         selectedDate: null,
//         selectedTime: null,
//         status: 'idle', // 非同步請求狀態：'idle'閒置 | 'loading' | 'succeeded' | 'failed'
//         error: null // 存錯誤訊息
//     },

//     reducers:{
//         // 選課程
//     //     selectCourse(state,action){
//     //         // 修改前面初始值狀態
//     //         state.selectedCourse = action.payload;
//     //         // 重置後續選項
//     //         state.selectedTeacher = null;
//     //         state.selectedDate = null;
//     //         state.selectedTime = null;
//     //     },
//     //     // 選老師
//     //     selectTeacher(state,action){
//     //         state.selectedTeacher = action.payload;
//     //         state.selectedDate = null;
//     //         state.selectedTime = null;
//     //     },
//     //     // 選日期時間
//     //     selectDateTime(state,action){
//     //         state.selectedDate = action.payload.date;
//     //         state.selectedTime = action.payload.time;
//     //     },
//     //     // 重置選項
//     //     resetSelection(state,action){
//     //         state.selectedCourse = null;
//     //         state.selectedTeacher = null;
//     //         state.selectedDate = null;
//     //         state.selectedTime = null;
//     //     }
//     // },
//     // extraReducers: (builder) => {
//     //     builder
//     //     .addCase(fetchCourses.pending, (state) => {
//     //         state.status = 'loading';
//     //     })
//     //     .addCase(fetchCourses.fulfilled, (state, action) => {
//     //         state.status = 'succeeded';
//     //         // 根據is_enabled篩選可用課程
//     //         state.courses = action.payload.filter(course => course.is_enabled === 1);
//     //     })
//     //     .addCase(fetchCourses.rejected, (state, action) => {
//     //         state.status = 'failed';
//     //         state.error = action.payload || 'Failed to fetch courses';
//     //     });
//     }
// });


// export const { selectCourse, selectTeacher, selectDateTime, resetSelection } = scheduleSlice.actions;
// export default scheduleSlice.reducer;