"use client";

import ImageFallback from "@/helpers/ImageFallback";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingCategory from "./skeleton/SkeletonCategory";

const CollectionsSlider = () => {
  const [_, setInit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [collectionsData, setCollectionsData] = useState([]);
  const [loadingCollectionsData, setLoadingCollectionsData] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {  }, []);

  if (loadingCollectionsData) {
    return <LoadingCategory />;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        // navigation={true}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        //trigger a re-render by updating the state on swiper initialization
        onInit={() => setInit(true)}
      >
        
            <SwiperSlide >
              <div className="text-center relative">
                <ImageFallback
                  src="https://cdn.shopify.com/s/files/1/0574/5111/8628/products/13.1.webp?v=1703408312"
                  width={424}
                  height={306}
                  alt="title"
                  className="h-[150px] md:h-[250px] lg:h-[306px] object-cover rounded-md"
                />
                <div className="py-6">
                  <h3 className="mb-2 font-medium h4">
                    <Link
                      className="after:absolute after:inset-0"
                      href={`/`}
                    >
                      Categoria
                    </Link>
                  </h3>
                  <p className="text-light dark:text-darkmode-light text-xs md:text-xl">
                    {5}  Items
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="text-center relative">
                <ImageFallback
                  src="/images/herba.png"
                  width={424}
                  height={306}
                  alt="title"
                  className="h-[150px] md:h-[250px] lg:h-[306px] object-cover rounded-md"
                />
                <div className="py-6">
                  <h3 className="mb-2 font-medium h4">
                    <Link
                      className="after:absolute after:inset-0"
                      href={`/`}
                    >
                      Categoria 2
                    </Link>
                  </h3>
                  <p className="text-light dark:text-darkmode-light text-xs md:text-xl">
                    {5}  Items
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="text-center relative">
                <ImageFallback
                  src="https://cdn.shopify.com/s/files/1/0574/5111/8628/products/13.1.webp?v=1703408312"
                  width={424}
                  height={306}
                  alt="title"
                  className="h-[150px] md:h-[250px] lg:h-[306px] object-cover rounded-md"
                />
                <div className="py-6">
                  <h3 className="mb-2 font-medium h4">
                    <Link
                      className="after:absolute after:inset-0"
                      href={`/`}
                    >
                      Categoria 3
                    </Link>
                  </h3>
                  <p className="text-light dark:text-darkmode-light text-xs md:text-xl">
                    {5}  Items
                  </p>
                </div>
              </div>
            </SwiperSlide>
        
            
            <SwiperSlide >
              <div className="text-center relative">
                <ImageFallback
                  src="/images/herba.png"
                  width={424}
                  height={306}
                  alt="title"
                  className="h-[150px] md:h-[250px] lg:h-[306px] object-cover rounded-md"
                />
                <div className="py-6">
                  <h3 className="mb-2 font-medium h4">
                    <Link
                      className="after:absolute after:inset-0"
                      href={`/`}
                    >
                      Nueva Categoria 
                    </Link>
                  </h3>
                  <p className="text-light dark:text-darkmode-light text-xs md:text-xl">
                    {51}  Items
                  </p>
                </div>
              </div>
            </SwiperSlide>



        <div
          className={`hidden md:block w-full absolute top-[33%] z-10 px-4 text-dark ${
            isHovered
              ? "opacity-100 transition-opacity duration-300 ease-in-out"
              : "opacity-0 transition-opacity duration-300 ease-in-out"
          }`}
        >
          <div
            ref={prevRef}
            className="p-2 lg:p-3 rounded-md bg-body cursor-pointer shadow-sm absolute left-4"
          >
            <HiOutlineArrowNarrowLeft size={24} />
          </div>
          <div
            ref={nextRef}
            className="p-2 lg:p-3 rounded-md bg-body cursor-pointer shadow-sm absolute right-4"
          >
            <HiOutlineArrowNarrowRight size={24} />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CollectionsSlider;
