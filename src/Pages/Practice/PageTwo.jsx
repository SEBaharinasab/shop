import React from 'react';
import car from '../../images/18c0695_001c.jpg';

function Two() {
   return (
      <div className={"font-serif"} style={{ direction: "ltr" }}>
         <nav className={"flex items-center justify-between p-4 text-gray-600"}>
            <div className={"flex items-center gap-3"}>
               <button className={"text-3xl w-12 h-12 leading-none"}><i class="bi bi-caret-left" /></button>
            </div>
            <div className={"flex items-center gap-3"}>
               <button className={"text-3xl w-12 h-12 leading-none"}><i class="bi bi-search" /></button>
               <button className={"text-3xl w-12 h-12 leading-none"}><i class="bi bi-bag" /></button>
            </div>
         </nav>
         <main className={"container mx-auto"}>
            <h1 className={"text-4xl px-3 my-4 font-semibold"}>
               Tank Tops & <br />Sleevless Shirts
            </h1>
            <div className={"products bg-gray-300 rounded-t-3xl py-6 px-4 grid grid-cols-2 gap-6"}>
               {/* ---------------------------------- Item ---------------------------------- */}
               <div className={"relative bg-gray-50 rounded-2xl pt-6 pb-4 flex flex-col items-center overflow-hidden"}>
                  <div className={"image w-32 h-32 rounded-full overflow-hidden"}>
                     <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                  </div>
                  <div className={"text w-full px-2 mt-3 "}>
                     <h3 className={"title font-bold text-xs "}>Nike Dri-FIT ADV<br />Nikolas ka</h3>
                     <p class={"text-red-500 text-lg "}>120 $</p>
                  </div>
                  <div className={"fixed-elements"}>
                     <button className={"absolute bottom-0 right-0 bg-gray-700 text-gray-50 text-lg py-2 px-4 leading-none rounded-tl-2xl"}><i className={"bi bi-bag"} /></button>
                     <p className="leading-none absolute top-3 right-3 lining-nums proportional-nums"><i className={"bi bi-star-fill text-yellow-300 mr-1"} />4.1</p>
                     <i className={"bi bi-check absolute top-2 left-2 leading-none text-3xl"} />
                  </div>
               </div>
               <div className={"relative bg-gray-50 rounded-2xl pt-6 pb-4 flex flex-col items-center overflow-hidden"}>
                  <div className={"image w-32 h-32 rounded-full overflow-hidden"}>
                     <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                  </div>
                  <div className={"text w-full px-2 mt-3 "}>
                     <h3 className={"title font-bold text-xs "}>Nike Dri-FIT ADV<br />Nikolas ka</h3>
                     <p class={"text-red-500 text-lg "}>120 $</p>
                  </div>
                  <div className={"fixed-elements"}>
                     <button className={"absolute bottom-0 right-0 bg-gray-700 text-gray-50 text-lg py-2 px-4 leading-none rounded-tl-2xl"}><i className={"bi bi-bag"} /></button>
                     <p className="leading-none absolute top-3 right-3 lining-nums proportional-nums"><i className={"bi bi-star-fill text-yellow-300 mr-1"} />4.1</p>
                     <i className={"bi bi-check absolute top-2 left-2 leading-none text-3xl"} />
                  </div>
               </div>
               <div className={"relative bg-gray-50 rounded-2xl pt-6 pb-4 flex flex-col items-center overflow-hidden"}>
                  <div className={"image w-32 h-32 rounded-full overflow-hidden"}>
                     <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                  </div>
                  <div className={"text w-full px-2 mt-3 "}>
                     <h3 className={"title font-bold text-xs "}>Nike Dri-FIT ADV<br />Nikolas ka</h3>
                     <p class={"text-red-500 text-lg "}>120 $</p>
                  </div>
                  <div className={"fixed-elements"}>
                     <button className={"absolute bottom-0 right-0 bg-gray-700 text-gray-50 text-lg py-2 px-4 leading-none rounded-tl-2xl"}><i className={"bi bi-bag"} /></button>
                     <p className="leading-none absolute top-3 right-3 lining-nums proportional-nums"><i className={"bi bi-star-fill text-yellow-300 mr-1"} />4.1</p>
                     <i className={"bi bi-check absolute top-2 left-2 leading-none text-3xl"} />
                  </div>
               </div>
               <div className={"relative bg-gray-50 rounded-2xl pt-6 pb-4 flex flex-col items-center overflow-hidden"}>
                  <div className={"image w-32 h-32 rounded-full overflow-hidden"}>
                     <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                  </div>
                  <div className={"text w-full px-2 mt-3 "}>
                     <h3 className={"title font-bold text-xs "}>Nike Dri-FIT ADV<br />Nikolas ka</h3>
                     <p class={"text-red-500 text-lg "}>120 $</p>
                  </div>
                  <div className={"fixed-elements"}>
                     <button className={"absolute bottom-0 right-0 bg-gray-700 text-gray-50 text-lg py-2 px-4 leading-none rounded-tl-2xl"}><i className={"bi bi-bag"} /></button>
                     <p className="leading-none absolute top-3 right-3 lining-nums proportional-nums"><i className={"bi bi-star-fill text-yellow-300 mr-1"} />4.1</p>
                     <i className={"bi bi-check absolute top-2 left-2 leading-none text-3xl"} />
                  </div>
               </div>
               <div className={"relative bg-gray-50 rounded-2xl pt-6 pb-4 flex flex-col items-center overflow-hidden"}>
                  <div className={"image w-32 h-32 rounded-full overflow-hidden"}>
                     <img className={"w-full h-full object-cover object-center"} src={car} alt="" />
                  </div>
                  <div className={"text w-full px-2 mt-3 "}>
                     <h3 className={"title font-bold text-xs "}>Nike Dri-FIT ADV<br />Nikolas ka</h3>
                     <p class={"text-red-500 text-lg "}>120 $</p>
                  </div>
                  <div className={"fixed-elements"}>
                     <button className={"absolute bottom-0 right-0 bg-gray-700 text-gray-50 text-lg py-2 px-4 leading-none rounded-tl-2xl"}><i className={"bi bi-bag"} /></button>
                     <p className="leading-none absolute top-3 right-3 lining-nums proportional-nums"><i className={"bi bi-star-fill text-yellow-300 mr-1"} />4.1</p>
                     <i className={"bi bi-check absolute top-2 left-2 leading-none text-3xl"} />
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}

export default Two;
