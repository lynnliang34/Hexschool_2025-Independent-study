export default function ScheduleCourses() {
    return(<>
    <main class="scheduleCourse">
        <form class="container">
            <div class="d-flex mt-15">
                {/* <!-- 表單標題 --> */}
                <h4 class="fs-1">1</h4>
                <div class="w-100 mt-4 ms-5">
                    <h4 class="fs-4 mb-3">選擇課程</h4>
                    <hr class="mb-5" />

                    {/* <!-- 課程選項 --> */}
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 btnStyle">
                        <div class="col">
                            <button type="button" class="btn btn-primary fs-5 w-100">樂齡晨間操</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary fs-5 w-100">樂齡晨間操</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary fs-5 w-100">樂齡晨間操</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary fs-5 w-100" disabled>樂齡晨間操</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex mt-15">
                {/* <!-- 表單標題 --> */}
                <h4 class="fs-1">2</h4>
                <div class="w-100 mt-4 ms-5">
                    <h4 class="fs-4 mb-3">選擇教練</h4>
                    <hr class="mb-5" />

                    {/* <!-- 教練選項 --> */}
                    <div class="row row-cols-3 row-cols-md-4 g-3 btnStyle">
                        <div class="col">
                            <button type="button" class="btn btn-primary fs-5 w-100">李建雄</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary fs-5 w-100">林淑儀</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary fs-5 w-100">陳志強</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary fs-5 w-100">李美華</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex mt-15 mb-20">
                {/* <!-- 表單標題 --> */}
                <h4 class="fs-1 ">3</h4>
                <div class="w-100 mt-4 ms-5">
                    <h4 class="fs-4 mb-3">選擇日期、時段</h4>
                    <hr class="mb-5" />

                    {/* <!-- 日期、時段選項 --> */}
                    <div>
                        <div class="datePicker my-10">
                            {/* <!-- <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> --> */}
                            <p>顯示選擇的日期時段</p>
                        </div>

                        <div class="bg-primary-2 px-lg-20 py-8 mb-8">
                            <div
                                class="monthSwitch d-flex justify-content-between align-items-center mx-3 mx-md-8 mb-8">
                                <button type="button" class="btn btn-primary rounded-pill fs-5 text-primary-2">
                                    <i class="bi bi-chevron-left"></i></button>
                                <h4 class="fw-bold">2025/3</h4>
                                <button type="button" class="btn btn-primary rounded-pill fs-5 text-primary-2">
                                    <i class="bi bi-chevron-right"></i></button>
                            </div>

                            <div class="timeSelect">
                                <div class="row mx-auto text-center gy-3 fs-6 fs-lg-4 fw-bold mb-5">
                                    <div class="col">
                                        <h4>日</h4>
                                        <p>3/9</p>
                                        <div class="d-flex flex-column text-center mt-5 mb-5">
                                            <button type="button" class="btn fs-6 fs-lg-4" disabled>7:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">8:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">9:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">10:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">11:00</button>
                                        </div>

                                        <div class="d-flex flex-column text-center">

                                            <button type="button" class="btn fs-6 fs-lg-4">13:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">14:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">15:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">16:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">17:00</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>一</h4>
                                        <p>3/10</p>

                                        <div class="d-flex flex-column text-center mt-5 mb-5">
                                            <button type="button" class="btn fs-6 fs-lg-4" disabled>7:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">8:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">9:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">10:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">11:00</button>
                                        </div>

                                        <div class="d-flex flex-column text-center">
                                            <button type="button" class="btn fs-6 fs-lg-4">13:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">14:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">15:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">16:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">17:00</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>二</h4>
                                        <p>3/11</p>
                                        <div class="d-flex flex-column text-center mt-5 mb-5">
                                            <button type="button" class="btn fs-6 fs-lg-4" disabled>7:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">8:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">9:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">10:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">11:00</button>
                                        </div>

                                        <div class="d-flex flex-column text-center">
                                            <button type="button" class="btn fs-6 fs-lg-4">13:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">14:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">15:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">16:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">17:00</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>三</h4>
                                        <p>3/12</p>
                                        <div class="d-flex flex-column text-center mt-5 mb-5">
                                            <button type="button" class="btn fs-6 fs-lg-4" disabled>7:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">8:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">9:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">10:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">11:00</button>
                                        </div>

                                        <div class="d-flex flex-column text-center">
                                            <button type="button" class="btn fs-6 fs-lg-4">13:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">14:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">15:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">16:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">17:00</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>四</h4>
                                        <p>3/13</p>
                                        <div class="d-flex flex-column text-center mt-5 mb-5">
                                            <button type="button" class="btn fs-6 fs-lg-4" disabled>7:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">8:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">9:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">10:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">11:00</button>
                                        </div>

                                        <div class="d-flex flex-column text-center">
                                            <button type="button" class="btn fs-6 fs-lg-4">13:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">14:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">15:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">16:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">17:00</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>五</h4>
                                        <p>3/14</p>
                                        <div class="d-flex flex-column text-center mt-5 mb-5">
                                            <button type="button" class="btn fs-6 fs-lg-4" disabled>7:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">8:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">9:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">10:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">11:00</button>
                                        </div>

                                        <div class="d-flex flex-column text-center">
                                            <button type="button" class="btn fs-6 fs-lg-4">13:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">14:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">15:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">16:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">17:00</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>六</h4>
                                        <p>3/15</p>
                                        <div class="d-flex flex-column text-center mt-5 mb-5">
                                            <button type="button" class="btn fs-6 fs-lg-4" disabled>7:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">8:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">9:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">10:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">11:00</button>
                                        </div>

                                        <div class="d-flex flex-column text-center">
                                            <button type="button" class="btn fs-6 fs-lg-4">13:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">14:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">15:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">16:00</button>
                                            <button type="button" class="btn fs-6 fs-lg-4">17:00</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="formSubmit d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary text-white fs-4">送出</button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    </main>
    </>)
}