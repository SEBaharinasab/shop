import React, { useReducer } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import productImage1 from '../../../images/6x6-gornos-w.jpg';
import productImage2 from '../../../images/photo_۲۰۱۸-۰۴-۰۲_۱۳-۴۴-۴۹.jpg';
import productImage3 from '../../../images/93988803_907625239684186_2928864674942205986_n.jpg';

const initialState = {
  slides: [
    { id: 1, image: productImage1, visible: true, alt: 'altOne' },
    { id: 2, image: productImage2, visible: false, alt: 'altThree' },
    { id: 3, image: productImage3, visible: false, alt: 'altTwo' },
    { id: 4, image: productImage2, visible: false, alt: 'altThree' },
    { id: 5, image: productImage3, visible: false, alt: 'altTwo' },
    { id: 6, image: productImage2, visible: false, alt: 'altThree' },
    { id: 7, image: productImage3, visible: false, alt: 'altTwo' },
    { id: 8, image: productImage2, visible: false, alt: 'altThree' },
  ],
};

const about = `
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
 `;
const parametrs = {
  "دسته اول": [
    { title: 'عنوان-1-1', body: 'مقدار-1-1' },
    { title: 'عنوان-1-2', body: 'مقدار-1-2' },
    { title: 'عنوان-1-3', body: 'مقدار-1-3' },
    { title: 'عنوان-1-4', body: 'مقدار-1-4' },
  ],
  "دسته دوم": [
    { title: 'عنوان-2-1', body: 'مقدار-2-1' },
    { title: 'عنوان-2-2', body: 'مقدار-2-2' },
    { title: 'عنوان-2-3', body: 'مقدار-2-3' },
  ],
  "دسته سوم": [
    { title: 'عنوان-3-1', body: 'مقدار-3-1' },
    { title: 'عنوان-3-2', body: 'مقدار-3-2' },
    { title: 'عنوان-3-3', body: 'مقدار-3-3' },
    { title: 'عنوان-3-4', body: 'مقدار-3-4' },
    { title: 'عنوان-3-5', body: 'مقدار-3-5' },
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'show':
      return { ...state, slides: state.slides.map(slide => ({ ...slide, visible: (slide.id == action.payload) })) };
    case 'nextSlide':
      return { ...state, slides: state.slides.map };
    default:
      return state;
  }
}

function Product() {
  const [popup, showPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupContent, setPopupContent] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const showAbout = () => {
    setPopupTitle('درباره کالا');
    setPopupContent(<p className={"text-gray-500 leading-relaxed"}>{about}</p>);
    showPopup(true);
  };
  const showParameters = () => {
    const content = Object.entries(parametrs).map((item, index) => (
      <div className={"mb-6"} key={index}>
        <h1 className={"text-xl font-bold"}>{item[0]}:</h1>
        <ul className={"pr-8"} >
          {
            item[1].map((item, index) => (
              <li className={""} key={index}>
                <span className={"w-1/3 inline-block text-gray-800 font-medium"}>{item.title}</span>
                <span className={"w-1/3 inline-block text-gray-500 font-medium"}>{item.body}</span>
              </li>
            ))
          }
        </ul>
      </div>
    ));
    setPopupTitle('مشخصات فنی کالا');
    setPopupContent(content);
    showPopup(true);
  };
  const showSlide = (id) => {
    state.slides.map(slide => slide.visible = slide.id == id);
  };
  const slideLeft = () => {
  };
  const slideRight = () => {
  };

  return (
    <div className={"pt-32 px-4 pb-3 container mx-auto relative lg:pt-16"}>
      {/* ---------------------------------- Bread Crumbs ---------------------------------- */}
      <div className="bread-crumb sm:hidden">
        <div className={"flex items-end text-sm px-2 sm:px-8 sm:text-base md:px-4 md:py-2 lg:text-sm"}>
          <Link to={"/"}>خانه</Link>
          <i className={"bi bi-chevron-left mx-1 text-xs sm:text-sm"} />
          <Link to={"/products"}>محصولات</Link>
          <i className={"bi bi-chevron-left mx-1 text-xs sm:text-sm"} />
          <span>here</span>
        </div>
        <hr className={"my-1"} />
      </div>
      {/* ------------------------------------- Product ------------------------------------ */}
      <div className={"product"}>
        {/*  Preview  */}
        <div className={"bg-white rounded-xl p-3 flex flex-col items-stretch shadow-md mt-3 sm:flex-row"}>

          {/* Product Preview */}
          <div className={"image-container flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:w-7/12 md:w-1/2 md:items-start overflow-hidden "}>
            {/* --------------------------------- Actions -------------------------------- */}
            <div className={"flex justify-start text-gray-500 gap-1 sm:flex-col sm:border-l-0.5 sm:border-gray-300 sm:pl-3 md:border-0 md:pl-0"}>
              <button className={"p-2 text-2xl sm:p-1 sm:text-xl text-red-500"}><i className={"bi-heart-fill"} /></button>
              <button className={"p-2 text-2xl sm:p-1 sm:text-xl"}><i className={"bi-share"} /></button>
              <button className={"p-2 text-2xl sm:p-1 sm:text-xl"}><i className={"bi-graph-up"} /></button>
              <button className={"p-2 text-2xl sm:p-1 sm:text-xl"}><i className={"bi-bell"} /></button>
              <button className={"p-2 text-2xl sm:p-1 sm:text-xl"}><i className={"bi-list-ul"} /></button>
            </div>
            {/* ---------------------------------- Image Box --------------------------------- */}
            <div className={"sm:flex-1 overflow-hidden "}>
              <div className={"md:flex md:flex-col md:items-stretch md:w-full"}>
                {/* ---------------------------------- Image --------------------------------- */}
                <div className={"relative image h-40 w-60 mx-auto md:w-11/12 md:h-80 border-0.5 border-gray-300 lg:h-96 "}>
                  {
                    state.slides.map(({ id, image, visible, alt }) => (
                      <img className={`absolute w-full h-full object-contain object-center ${visible ? 'z-10' : 'opacity-0'}`} src={image} key={alt + id} alt={alt} />
                    ))
                  }
                  <button className="absolute p-4 text-lg leading-none inset-y-0 right-0 sm:z-10 sm:text-gray-500 sm:px-3 sm:text-xl sm:bg-transparent sm:hover:bg-gray-500 sm:hover:bg-opacity-30 " onClickk={slideRight}><i className={"bi bi-chevron-right"} /></button>
                  <button className="absolute p-4 text-lg leading-none inset-y-0 left-0 sm:z-10 sm:text-gray-500 sm:px-3 sm:text-xl sm:bg-transparent sm:hover:bg-gray-500 sm:hover:bg-opacity-30 " onClickk={slideLeft}><i className={"bi bi-chevron-left"} /></button>
                </div>
                {/* ----------------------------- Slider Buttons ----------------------------- */}
                {/* For Mobile Size */}
                <div className={"slider-sm w-full flex items-center justify-center gap-2 py-2 md:hidden"}>
                  <button className={"rounded-full bg-gray-700 opacity-20 w-2 h-2 sm:rounded-md sm:w-1 sm:h-1"} />
                  <button className={"rounded-full bg-gray-700 opacity-60 w-3 h-3 sm:rounded-md sm:w-3 sm:h-2"} />
                  <button className={"rounded-full bg-gray-700 opacity-100 w-4 h-4 sm:rounded-md sm:w-5 sm:h-3"} />
                  <button className={"rounded-full bg-gray-700 opacity-60 w-3 h-3 sm:rounded-md sm:w-3 sm:h-2"} />
                  <button className={"rounded-full bg-gray-700 opacity-20 w-2 h-2 sm:rounded-md sm:w-1 sm:h-1"} />
                </div>
                {/* For Greater Than Mobile Size */}
                <div className={"slider-md hidden md:flex md:flex-wrap overflow-x-auto mt-4 "}>
                  <div className={"flex items-center h-20 gap-2 "}>
                    {
                      state.slides.map(({ id, image, visible, alt }) => (
                        <button className={"border border-gray-200 " + (visible ? "w-20 h-full" : "w-14 h-14 opacity-70")} onClick={() => dispatch({ type: 'show', payload: id })}>
                          <img className={"w-full h-full object-contain object-center"} src={image} key={id} alt={alt} />
                        </button>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className={"my-3 sm:hidden"} />

          {/* title & price */}
          <div className={"flex justify-between items-center sm:flex-col sm:justify-start sm:items-stretch sm:w-5/12 sm:py-2 md:w-1/2 md:p-3"} >
            <div className={"hidden sm:block lg:text-xs lg:text-gray-600"}>
              <Link to={"/"}>خانه</Link>
              <i className={"bi bi-chevron-left mx-1 text-xs sm:text-sm lg:text-xs "} />
              <Link to={"/products"}>محصولات</Link>
              <i className={"bi bi-chevron-left mx-1 text-xs sm:text-sm lg:text-xs "} />
              <span>here</span>
              <hr className={"my-2"} />
            </div>
            {/* ---------------------------------- Title --------------------------------- */}
            <div className="title mb-2 sm:relative">
              <h1 className={"text-xl md:text-2xl"}>عنوان محصول</h1>
              <h2 className={"text-base text-gray-600 md:text-lg"}>زیر عنوان</h2>
              <h3 className={"hidden sm:block text-sm text-gray-500 md:mt-3 "}>saipa motmaen!!!</h3>
              {/* ---------------------------------- Color --------------------------------- */}
              <button className={"hidden sm:absolute sm:top-1 sm:left-1 sm:flex sm:flex-col sm:items-center sm:gap-1 sm:p-2 text-gray-400 text-sm "} >
                <span className={" bg-red-500 w-2 h-2 rounded-full "} />
                <span className={" bg-green-500 w-2 h-2 rounded-full "} />
                <span className={" bg-blue-500 w-2 h-2 rounded-full "} />
                <i className={"bi-three-dots-vertical"} />
              </button>
              <hr className={"hidden sm:block sm:my-2"} />
            </div>
            {/* ------------------------------- Buy Actions ------------------------------ */}
            <div>
              {/* ---------------------------------- Price --------------------------------- */}
              <div className="price flex flex-col items-end px-3">
                <div className="flex text-sm font-medium sm:text-base">
                  <del className={"text-gray-600 line-through"}>100,000</del>
                  <span className={"bg-red-500 text-red-50 py-0.5 px-1 rounded-2xl mr-1"}>10%</span>
                </div>
                <div className={"text-xl text-gray-900 sm:text-2xl md:font-bold"}>90,000<span className={"md:text-base md:text-gray-700 md:px-1 "}>تومان</span></div>
              </div>
              {/* --------------------------- Add To Cart --------------------------- */}
              <div className={"hidden md:flex items-stretch bg-red-500 mt-4 w-full rounded"}>
                <button className={"block flex-1 text-white "}>افزودن به سبد خرید</button>
                <input className={"border-0 text-center rounded w-3/12 h-10 m-2"} defaultValue={"1"} placeholder={"تعداد؟؟"} type="number"/>
              </div>
            </div>
          </div>

        </div>

        {/*  Seller  */}
        <div className={"bg-white rounded-xl p-4 flex flex-col items-stretch shadow-md mt-3 md:hidden"}>
          {/* Seller Name */}
          <div className={"flex gap-4"}>
            <span className={"bi-shop text-gray-400 text-lg"} />
            <div className="flex-1">
              <div className="">فروشنده: {"عماد"}</div>
              <div className={"text-xs text-gray-500 font-medium"}>
                عملکرد: {"عالی"}
                <i className={"bi-check text-green-600"} />
              </div>
            </div>
          </div>
          <hr className={"my-3"} />
          {/* Garanti */}
          <div className={"flex gap-4"}>
            <span className={"bi-shield-check text-gray-400 text-lg"} />
            <div className="flex-1">
              <div>گارانتی اصالت و سلامت فیزیکی کالا</div>
            </div>
          </div>
        </div>

        {/*  Description  */}
        <div className={"bg-white rounded-xl p-4 flex flex-col items-stretch shadow-md mt-3"}>
          {/* About */}
          <div className={"p-2"} >
            {/* title */}
            <div className={"flex justify-between items-center mb-3"} >
              <h5 className={"text-xl"}>درباره کالا</h5>
              <button className={"text-sm p-2 text-blue-500 cursor-pointer"} onClick={showAbout} >
                بیشتر
                <i className={"bi-chevron-left"} />
              </button>
            </div>
            {/* body */}
            <div>
              <p className={"text-gray-500 block sm:hidden"} >{about.substring(0, 180)}...</p>
              <p className={"text-gray-500 hidden sm:block"}>{about.substr(0, 320)}...</p>
            </div>
          </div>

          <hr className={"my-2"} />

          {/* Moshakhasat Fani */}
          <div className={"p-2"} >
            {/* title */}
            <div className={"flex justify-between items-center mb-4"} >
              <h5 className={"text-xl"}>مشخصات فنی</h5>
              <button className={"text-sm p-2 text-blue-500 cursor-pointer"} onClick={showParameters} >
                بیشتر
                <i className={"bi-chevron-left"} />
              </button>
            </div>
            {/* body */}
            <div className={"text-gray-500"} >
              <h1 className={"text-lg font-bold mb-3"}>{Object.entries(parametrs)[0][0]}:</h1>
              <ul className={"pr-8"} >
                {
                  Object.entries(parametrs)[0][1].map((item, index) => (
                    <li className={""} key={index}>
                      <span className={"w-1/3 inline-block text-gray-800 font-medium"}>{item.title}</span>
                      <span className={"w-1/3 inline-block text-gray-500 font-medium"}>{item.body}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------ Comments ------------------------------------ */}
      <div className={"bg-white rounded-xl p-4 pb-0 flex flex-col items-stretch shadow-md mt-3 relative"}>
        {/* Comments Header */}
        <div className={"header flex justify-between items-center mb-3"} >
          <h5 className={"text-2xl"}>نظرات</h5>
          <button className={"p-2 border border-blue-500 rounded-lg text-blue-500 shadow hover:bg-blue-50"} >
            افزودن نظر
            <i className={"bi-plus-lg mr-2 "} />
          </button>
        </div>
        <hr className={"my-2"} />

        {/* Some Comments List */}
        <div className={"comment-list flex flex-col items-stretch gap-8 py-3"} >
          <button className={"comment p-1 text-right"}>
            <div className={"userName mb-1 font-bold text-gray-700"}>احسان بهاری نسب</div>
            <div className={"date mb-2 text-gray-500 text-sm"}>9 تیر 1400</div>
            <div className={"text-gray-500 text-sm"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </button>
          <button className={"comment p-1 text-right"}>
            <div className={"userName mb-1 font-bold text-gray-700"}>احسان بهاری نسب</div>
            <div className={"date mb-2 text-gray-500 text-sm"}>9 تیر 1400</div>
            <div className={"text-gray-500 text-sm"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </button>
          <button className={"comment p-1 text-right"}>
            <div className={"userName mb-1 font-bold text-gray-700"}>احسان بهاری نسب</div>
            <div className={"date mb-2 text-gray-500 text-sm"}>9 تیر 1400</div>
            <div className={"text-gray-500 text-sm"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </button>
          <button className={"comment p-1 text-right"}>
            <div className={"userName mb-1 font-bold text-gray-700"}>احسان بهاری نسب</div>
            <div className={"date mb-2 text-gray-500 text-sm"}>9 تیر 1400</div>
            <div className={"text-gray-500 text-sm"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </button>
        </div>

        {/* Load More */}
        <button className={"p-6 text-blue-500 border-t"} >مشاهده همه نظرات</button>
      </div>
      {/* ----------------------------------- Add To Cart ---------------------------------- */}
      <div className={"fixed inset-x-0 bottom-0 p-3 bg-red-50 shadow-inner md:hidden "}>
        <div className={"flex items-stretch bg-red-500 rounded-md "}>
          <button className={"text-red-50 flex-1 sm:p-2 sm:text-lg "} >افزودن به سبد خرید</button>
          <input className={"border-0 text-center rounded w-2/12 h-10 m-2 p-0.5 "} defaultValue={"1"} placeholder={"تعداد؟؟"} type="number" />
        </div>
      </div>
      {/* ------------------------------------- Pop Up ------------------------------------- */}
      <div className={`fixed top-32 inset-x-4 bottom-8 bg-white rounded-xl shadow-3xl border-2 border-blue-400 flex flex-col items-stretch z-40 overflow-hidden ${popup ? 'block' : 'hidden'} sm:top-32 lg:hidden`}>
        {/* filter header */}
        <div className={"p-3 border-b border-gray-300 flex gap-4 sm:p-4"}>
          <button className={"text-xl"} onClick={() => showPopup(false)}><i className={"bi bi-x-lg"} /></button>
          <h4>{popupTitle}</h4>
        </div>
        {/* filter body */}
        <div className={"flex-1 overflow-y-auto overflow-x-hidden overscroll-y-none p-6 sm:m-4"}>
          {popupContent}
        </div>
        {/* filter footer */}
        {/* <button className={"filter-btn p-3 bg-blue-600 text-blue-100 font-medium "}>اعمال فیلترها</button> */}
      </div>
    </div >
  );
}

export default Product;
