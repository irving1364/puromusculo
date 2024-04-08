"use client";
import { AddToCart } from "@/components/cart/AddToCart";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";

import Link from "next/link";

const FeaturedProducts = () => {


  return (
    <>
      <div className="row">

     
            <div
              className="text-center col-6 md:col-4 lg:col-3 mb-8 md:mb-14 group relative"
            >
              <div className="relative overflow-hidden">
                <ImageFallback
                  src="/images/product_image404.jpg"
                  width={312}
                  height={269}
                  alt="fallback image"
                  className="w-[312px] h-[150px] md:h-[269px] object-cover border rounded-md"
                />
                {/*
                <AddToCart
                  variants="variants"
                  availableForSale="yes"
                  handle="handle"
                  defaultVariantId="defaultVariantId"
                  stylesClass={
                    "btn btn-primary max-md:btn-sm z-10 absolute bottom-12 md:bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full md:group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap drop-shadow-md"
                  }
                />
                */}
                
              </div>
              <div className="py-2 md:py-4 text-center z-20">
                <h2 className="font-medium text-base md:text-xl">
                  <Link
                    className="after:absolute after:inset-0"
                    href="/products/"
                  >
                    TItulo
                  </Link>
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-2 mt-2 md:mt-4">
                  <span className="text-base md:text-xl font-bold text-dark dark:text-darkmode-dark">
                    $10 USD
                  </span>

                </div>
              </div>
            </div>


            <div
              className="text-center col-6 md:col-4 lg:col-3 mb-8 md:mb-14 group relative"
            >
              <div className="relative overflow-hidden">
                <ImageFallback
                  src="/images/product_image404.jpg"
                  width={312}
                  height={269}
                  alt="fallback image"
                  className="w-[312px] h-[150px] md:h-[269px] object-cover border rounded-md"
                />
                {/*
                <AddToCart
                  variants="variants"
                  availableForSale="yes"
                  handle="handle"
                  defaultVariantId="defaultVariantId"
                  stylesClass={
                    "btn btn-primary max-md:btn-sm z-10 absolute bottom-12 md:bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full md:group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap drop-shadow-md"
                  }
                />
                */}
                
              </div>
              <div className="py-2 md:py-4 text-center z-20">
                <h2 className="font-medium text-base md:text-xl">
                  <Link
                    className="after:absolute after:inset-0"
                    href="/products/"
                  >
                    TItulo
                  </Link>
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-2 mt-2 md:mt-4">
                  <span className="text-base md:text-xl font-bold text-dark dark:text-darkmode-dark">
                    $10 USD
                  </span>

                </div>
              </div>
            </div>

            <div
              className="text-center col-6 md:col-4 lg:col-3 mb-8 md:mb-14 group relative"
            >
              <div className="relative overflow-hidden">
                <ImageFallback
                  src="/images/product_image404.jpg"
                  width={312}
                  height={269}
                  alt="fallback image"
                  className="w-[312px] h-[150px] md:h-[269px] object-cover border rounded-md"
                />
                {/*
                <AddToCart
                  variants="variants"
                  availableForSale="yes"
                  handle="handle"
                  defaultVariantId="defaultVariantId"
                  stylesClass={
                    "btn btn-primary max-md:btn-sm z-10 absolute bottom-12 md:bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full md:group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap drop-shadow-md"
                  }
                />
                */}
                
              </div>
              <div className="py-2 md:py-4 text-center z-20">
                <h2 className="font-medium text-base md:text-xl">
                  <Link
                    className="after:absolute after:inset-0"
                    href="/products/"
                  >
                    TItulo
                  </Link>
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-2 mt-2 md:mt-4">
                  <span className="text-base md:text-xl font-bold text-dark dark:text-darkmode-dark">
                    $10 USD
                  </span>

                </div>
              </div>
            </div>

            <div
              className="text-center col-6 md:col-4 lg:col-3 mb-8 md:mb-14 group relative"
            >
              <div className="relative overflow-hidden">
                <ImageFallback
                  src="/images/product_image404.jpg"
                  width={312}
                  height={269}
                  alt="fallback image"
                  className="w-[312px] h-[150px] md:h-[269px] object-cover border rounded-md"
                />
                {/*
                <AddToCart
                  variants="variants"
                  availableForSale="yes"
                  handle="handle"
                  defaultVariantId="defaultVariantId"
                  stylesClass={
                    "btn btn-primary max-md:btn-sm z-10 absolute bottom-12 md:bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full md:group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap drop-shadow-md"
                  }
                />
                */}
                
              </div>
              <div className="py-2 md:py-4 text-center z-20">
                <h2 className="font-medium text-base md:text-xl">
                  <Link
                    className="after:absolute after:inset-0"
                    href="/products/"
                  >
                    TItulo
                  </Link>
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-2 mt-2 md:mt-4">
                  <span className="text-base md:text-xl font-bold text-dark dark:text-darkmode-dark">
                    $10 USD
                  </span>

                </div>
              </div>
            </div>

            

            
     
     
     
      </div>

      <div className="flex justify-center">
        <Link
          className="btn btn-sm md:btn-lg btn-primary font-medium"
          href={"/products"}
        >
          + Ver todos los productos
        </Link>
      </div>
    </>
  );
};

export default FeaturedProducts;
