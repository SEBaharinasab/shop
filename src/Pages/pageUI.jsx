import React from 'react';
import logo from '../images/Logo.png';
import user from '../images/bmw-m8-gte-2560x1440-artwork-hd-11479.jpg';
import car from '../images/bmw-m8-gte-2560x1440-artwork-hd-11479.jpg';

function PageUI() {
   return (
      <div className={"pb-24"} style={{ direction: "ltr" }}>
         <nav className={"flex justify-between items-center p-4"}>
            <button className="h-8">
               <img className={"w-full h-full object-cover object-center"} src={logo} alt="logo" />
            </button>
            <button className={"h-12 w-12 rounded-md shadow-md overflow-hidden"}>
               <img className={"w-full h-full object-cover object-center"} src={user} alt="user" />
            </button>

            {/* ------------------------------- Fixed Links ------------------------------ */}
            <div className={"fixed z-10 inset-x-5 bottom-5 bg-gray-700 rounded-2xl flex justify-between items-center p-4"}>
               <button className={"w-12 h-12 rounded-xl bg-white text-gray-700"}>H</button>
               <button className={"w-12 h-12 rounded-xl text-white"}>S</button>
               <button className={"w-12 h-12 rounded-xl text-white"}>C</button>
               <button className={"w-12 h-12 rounded-xl text-white"}>U</button>
            </div>
         </nav>
         <main className={"p-4"}>
            <h1 className={"text-4xl mt-10 font-serif"}>
               <span className={"font-black"}>Find your</span>
               <br />
               <span className={"font-medium"}>match <span className={"underline"}>style!</span></span>
            </h1>
            <div className="searchBar my-7">
               <div className={"relative p-3"}>
                  <input className={"w-full p-4 pr-8 rounded-md shadow-lg border-0"} type="text" placeholder={"What you want to search..."} />
                  <button className={"absolute inset-y-3 right-3 text-gray-600 w-14 "}>
                     {/* <i className={"bi bi-search text-lg w-4 h-4"} /> */}
                     S
                  </button>
               </div>
            </div>
            <div className={"Popular"}>
               <h2 className={"title border-l-4 border-red-500 text-xl font-medium leading-none pl-2 mt-2"}>Popular</h2>
               <div className={"list flex overflow-x-auto p-4 -mx-4"}>
                  <div className={"flex gap-4"}>
                     {/* -------------------------------- Item -------------------------------- */}
                     <div className={"relative p-3 pb-5 shadow-md rounded-3xl overflow-hidden"} >
                        <div className={"relative w-60 h-60 rounded-2xl overflow-hidden"}>
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="car" />
                           <div className={"absolute bottom-0 inset-x-0 pt-20 pb-4 px-4  bg-gradient-to-t from-gray-900 text-gray-200 "}>$ 120</div>
                        </div>
                        <div className={"p-2"}>
                           <h3 className={"text-lg font-semibold"}>Nike Yoga Dri-FIT</h3>
                           <h4 className={"text-sm"}>Men's Graphic dsfljk</h4>
                        </div>
                        <button className={"py-2 px-5 leading-none bg-gray-700 text-gray-50 absolute bottom-0 right-0 rounded-tl-3xl"}>H</button>
                     </div>
                     <div className={"relative p-3 pb-5 shadow-md rounded-3xl overflow-hidden"} >
                        <div className={"relative w-60 h-60 rounded-2xl overflow-hidden"}>
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="car" />
                           <div className={"absolute bottom-0 inset-x-0 pt-20 pb-4 px-4  bg-gradient-to-t from-gray-900 text-gray-200 "}>$ 120</div>
                        </div>
                        <div className={"p-2"}>
                           <h3 className={"text-lg font-semibold"}>Nike Yoga Dri-FIT</h3>
                           <h4 className={"text-sm"}>Men's Graphic dsfljk</h4>
                        </div>
                        <button className={"py-2 px-5 leading-none bg-gray-700 text-gray-50 absolute bottom-0 right-0 rounded-tl-3xl"}>H</button>
                     </div>
                     <div className={"relative p-3 pb-5 shadow-md rounded-3xl overflow-hidden"} >
                        <div className={"relative w-60 h-60 rounded-2xl overflow-hidden"}>
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="car" />
                           <div className={"absolute bottom-0 inset-x-0 pt-20 pb-4 px-4  bg-gradient-to-t from-gray-900 text-gray-200 "}>$ 120</div>
                        </div>
                        <div className={"p-2"}>
                           <h3 className={"text-lg font-semibold"}>Nike Yoga Dri-FIT</h3>
                           <h4 className={"text-sm"}>Men's Graphic dsfljk</h4>
                        </div>
                        <button className={"py-2 px-5 leading-none bg-gray-700 text-gray-50 absolute bottom-0 right-0 rounded-tl-3xl"}>H</button>
                     </div>
                     <div className={"relative p-3 pb-5 shadow-md rounded-3xl overflow-hidden"} >
                        <div className={"relative w-60 h-60 rounded-2xl overflow-hidden"}>
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="car" />
                           <div className={"absolute bottom-0 inset-x-0 pt-20 pb-4 px-4  bg-gradient-to-t from-gray-900 text-gray-200 "}>$ 120</div>
                        </div>
                        <div className={"p-2"}>
                           <h3 className={"text-lg font-semibold"}>Nike Yoga Dri-FIT</h3>
                           <h4 className={"text-sm"}>Men's Graphic dsfljk</h4>
                        </div>
                        <button className={"py-2 px-5 leading-none bg-gray-700 text-gray-50 absolute bottom-0 right-0 rounded-tl-3xl"}>H</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className={"categories mt-4"}>
               <h2 className={"title border-l-4 border-red-500 text-xl font-medium leading-none pl-2 mt-2"}>Categories</h2>
               <div className={"list flex overflow-x-auto p-4 -mx-4"}>
                  <div className={"flex gap-4"}>
                     <button className={"shadow-lg rounded-2xl flex items-center p-2 w-44 gap-2 text-left"}>
                        <div className="img w-14 h-14 rounded-full overflow-hidden">
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                        </div>
                        <p className="text">Graphic<br />T-Shirt</p>
                     </button>
                     <button className={"shadow-lg rounded-2xl flex items-center p-2 w-44 gap-2 text-left"}>
                        <div className="img w-14 h-14 rounded-full overflow-hidden">
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                        </div>
                        <div className="text">
                           <span>Graphic</span><br />
                           <span>T-Shirt</span>
                        </div>
                     </button>
                     <button className={"shadow-lg rounded-2xl flex items-center p-2 w-44 gap-2 text-left"}>
                        <div className="img w-14 h-14 rounded-full overflow-hidden">
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                        </div>
                        <div className="text">
                           <span>Graphic</span><br />
                           <span>T-Shirt</span>
                        </div>
                     </button>
                     <button className={"shadow-lg rounded-2xl flex items-center p-2 w-44 gap-2 text-left"}>
                        <div className="img w-14 h-14 rounded-full overflow-hidden">
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                        </div>
                        <div className="text">
                           <span>Graphic</span><br />
                           <span>T-Shirt</span>
                        </div>
                     </button>
                     <button className={"shadow-lg rounded-2xl flex items-center p-2 w-44 gap-2 text-left"}>
                        <div className="img w-14 h-14 rounded-full overflow-hidden">
                           <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                        </div>
                        <div className="text">
                           <span>Graphic</span><br />
                           <span>T-Shirt</span>
                        </div>
                     </button>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}

export default PageUI;
