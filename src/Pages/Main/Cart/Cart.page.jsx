function Cart() {
   return (
      <div className={"pt-32 container mx-auto sm:pt-36 lg:pt-16"}>
         <h1 className={"text-3xl text-gray-700 font-bold my-4"}>سبد خرید</h1>
         <hr className={"my-4 border-gray-400"} />
         <div className={"flex max-w-full relative pb-4 items-start"}>
            {/* ---------------------------------- List ---------------------------------- */}
            <div className={"flex-1 flex-grow"} style={{ maxWidth: "calc(100% - 408px)" }}>
               <div className="flex flex-col gap-4 items-stretch">
                  {/* ---------------------------------- Card ---------------------------------- */}
                  <div className={"rounded-lg bg-white text-gray-800 p-0 overflow-hidden shadow-lg"}>
                     <div className="flex gap-12 items-center p-2">
                        {/* Image */}
                        <div className="w-20 h-20">
                           <img className={"w-full h-full object-cover object-center"} src="" alt="" />
                        </div>
                        {/* Tilte & Subtitle  */}
                        <div className={"flex-grow"}>
                           <h3 className={"text-2xl bold"}>product name</h3>
                           <h4 className={"text-base text-gray-500"}>subtitle</h4>
                        </div>
                        {/* Counter */}
                        <div className={`relative text-xl text-white leading-none rounded-2xl overflow-hidden w-28 h-8 bg-blue-500 flex`}>
                           <button className={"font-bold pr-3 w-1/2 text-right"}>+</button>
                           <span className={"transform -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2"}>1</span>
                           <button className={"font-bold pl-3 w-1/2 text-left"}>-</button>
                        </div>
                        {/* ---------------------------------- Price --------------------------------- */}
                        <div className="text-xl pl-8"><span className={""}>10000</span> <span className={"text-gray-600"}>تومان</span></div>
                     </div>
                  </div>
                  <div className={"rounded-lg bg-white text-gray-800 p-0 overflow-hidden shadow-lg"}>
                     <div className="flex gap-12 items-center p-2">
                        <div className="w-20 h-20">
                           <img className={"w-full h-full object-cover object-center"} src="" alt="" />
                        </div>
                        <div className={"flex-grow"}>
                           <h3 className={"text-2xl bold"}>product name</h3>
                           <h4 className={"text-base text-gray-500"}>subtitle</h4>
                        </div>
                        <div className={`relative text-xl text-white bg-blue-500 leading-none rounded-2xl overflow-hidden w-28 h-8 flex`}>
                           <button className={"font-bold pr-3 w-1/2 text-right"}>+</button>
                           <span className={"transform -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 text-gray-100"}>3</span>
                           <button className={"font-bold pl-3 w-1/2 text-left"}>-</button>
                        </div>
                        {/* ---------------------------------- Price --------------------------------- */}
                        <div className="text-xl pl-8"><span className={""}>10000</span> <span className={"text-gray-600"}>تومان</span></div>
                     </div>
                  </div>
                  <div className={"rounded-lg bg-white text-gray-800 p-0 overflow-hidden shadow-lg"}>
                     <div className="flex gap-12 items-center p-2">
                        <div className="w-20 h-20">
                           <img className={"w-full h-full object-cover object-center"} src="" alt="" />
                        </div>
                        <div className={"flex-grow"}>
                           <h3 className={"text-2xl bold"}>product name</h3>
                           <h4 className={"text-base text-gray-500"}>subtitle</h4>
                        </div>
                        <div className={`relative text-xl text-white leading-none rounded-2xl overflow-hidden w-28 h-8 bg-blue-500 flex`}>
                           <button className={"font-bold pr-3 w-1/2 text-right"}>+</button>
                           <span className={"transform -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2"}>1</span>
                           <button className={"font-bold pl-3 w-1/2 text-left"}>-</button>
                        </div>
                        {/* ---------------------------------- Price --------------------------------- */}
                        <div className="text-xl pl-8"><span className={""}>10000</span> <span className={"text-gray-600"}>تومان</span></div>
                     </div>
                  </div>
                  <div className={"rounded-lg bg-white text-gray-800 p-0 overflow-hidden shadow-lg"}>
                     <div className="flex gap-12 items-center p-2">
                        <div className="w-20 h-20">
                           <img className={"w-full h-full object-cover object-center"} src="" alt="" />
                        </div>
                        <div className={"flex-grow"}>
                           <h3 className={"text-2xl bold"}>product name</h3>
                           <h4 className={"text-base text-gray-500"}>subtitle</h4>
                        </div>
                        <div className={`relative text-xl text-white leading-none rounded-2xl overflow-hidden w-28 h-8 bg-blue-500 flex`}>
                           <button className={"font-bold pr-3 w-1/2 text-right"}>+</button>
                           <span className={"transform -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2"}>1</span>
                           <button className={"font-bold pl-3 w-1/2 text-left"}>-</button>
                        </div>
                        {/* ---------------------------------- Price --------------------------------- */}
                        <div className="text-xl pl-8"><span className={""}>10000</span> <span className={"text-gray-600"}>تومان</span></div>
                     </div>
                  </div>
                  <div className={"rounded-lg bg-white text-gray-800 p-0 overflow-hidden shadow-lg"}>
                     <div className="flex gap-12 items-center p-2">
                        <div className="w-20 h-20">
                           <img className={"w-full h-full object-cover object-center"} src="" alt="" />
                        </div>
                        <div className={"flex-grow"}>
                           <h3 className={"text-2xl bold"}>product name</h3>
                           <h4 className={"text-base text-gray-500"}>subtitle</h4>
                        </div>
                        <div className={`relative text-xl text-white leading-none rounded-2xl overflow-hidden w-28 h-8 bg-blue-500 flex`}>
                           <button className={"font-bold pr-3 w-1/2 text-right"}>+</button>
                           <span className={"transform -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2"}>1</span>
                           <button className={"font-bold pl-3 w-1/2 text-left"}>-</button>
                        </div>
                        {/* ---------------------------------- Price --------------------------------- */}
                        <div className="text-xl pl-8"><span className={""}>10000</span> <span className={"text-gray-600"}>تومان</span></div>
                     </div>
                  </div>
                  <div className={"rounded-lg bg-white text-gray-800 p-0 overflow-hidden shadow-lg"}>
                     <div className="flex gap-12 items-center p-2">
                        <div className="w-20 h-20">
                           <img className={"w-full h-full object-cover object-center"} src="" alt="" />
                        </div>
                        <div className={"flex-grow"}>
                           <h3 className={"text-2xl bold"}>product name</h3>
                           <h4 className={"text-base text-gray-500"}>subtitle</h4>
                        </div>
                        <div className={`relative text-xl text-white leading-none rounded-2xl overflow-hidden w-28 h-8 bg-blue-500 flex`}>
                           <button className={"font-bold pr-3 w-1/2 text-right"}>+</button>
                           <span className={"transform -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2"}>1</span>
                           <button className={"font-bold pl-3 w-1/2 text-left"}>-</button>
                        </div>
                        {/* ---------------------------------- Price --------------------------------- */}
                        <div className="text-xl pl-8"><span className={""}>10000</span> <span className={"text-gray-600"}>تومان</span></div>
                     </div>
                  </div>
               </div>
            </div>
            {/* ---------------------------------- Factor ---------------------------------- */}
            <div className={"mr-6 w-96 max-w-sm sticky top-20"} style={{ minWidth: 384 }}>
               <div className={"rounded-md bg-white text-gray-800 shadow-lg flex flex-col justify-center items-stretch w-full p-4"} style={{ minHeight: '12rem' }} >
                  <p className={"text-lg flex"}><span className={"flex-1 text-left"}>مجموع سفارشات </span><span className={"px-1"}>:</span><span className={"flex-1"}> 50000 تومان</span></p>
                  <p className={"text-lg flex"}><span className={"flex-1 text-left"}>تخفیف </span><span className={"px-1"}>:</span><span className={"flex-1"}> 50000 تومان</span></p>
                  <hr className={"my-3 w-4/5 mx-auto"} />
                  <p className={"text-lg flex"}><span className={"flex-1 text-left"}>مبلغ قابل پرداخت </span><span className={"px-1"}>:</span><span className={"flex-1"}> 50000 تومان</span></p>
                  <button className={"self-center  mt-3 py-2 px-4 rounded-md text-red-50 bg-red-600 transform  hover:scale-105 active:scale-90 focus:animate-pulse"}>
                     پرداخت
                     <i className={"bi-chevron-double-left"} />
                  </button>
               </div>
            </div>
         </div>
      </div >
   );
}

export default Cart;