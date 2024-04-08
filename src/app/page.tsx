/* eslint-disable react/no-unescaped-entities */
import CollectionsSlider from "@/components/CollectionsSlider";
import HeroSlider from "@/components/HeroSlider";
import SkeletonCategory from "@/components/skeleton/SkeletonCategory";
import SkeletonFeaturedProducts from "@/components/skeleton/SkeletonFeaturedProducts";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import { getCollectionProducts, getCollections } from "@/lib/shopify";
import CallToAction from "@/partials/CallToAction";
import FeaturedProducts from "@/partials/FeaturedProducts";
import SeoMeta from "@/partials/SeoMeta";
import { Suspense } from "react";

const { collections } = config.shopify;

const ShowHeroSlider = async () => {
  const sliderImages = await getCollectionProducts({
    collection: collections.hero_slider,
  });
  const { products } = sliderImages;
  return <HeroSlider products={products} />;
};

const ShowCollections = async () => {
  const collections = await getCollections();
  return <CollectionsSlider collections={collections} />;
};

const ShowFeaturedProducts = async () => {
  const { pageInfo, products } = await getCollectionProducts({
    collection: collections.featured_products,
    reverse: false,
  });
  return <FeaturedProducts products={products} />;
};

const Home = () => {
  const callToAction = getListPage("sections/call-to-action.md");

  return (
    <>
      <SeoMeta />
      <section>
        <div className="container">
          <div className="bg-gradient py-10 rounded-md">
          <HeroSlider />
            <Suspense>
              
            </Suspense>
          </div>
        </div>
      </section>

      {/* category section  */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-6 md:mb-14">
            <h2>Categorias Populares</h2>
          </div>
          <CollectionsSlider />
          {/*
          <Suspense fallback={<SkeletonCategory />}>
            <ShowCollections />
          </Suspense>
        */}
        </div>
      </section>

      {/* Featured Products section  */}
      <section>
        <div className="container">
          <div className="text-center mb-6 md:mb-14">
            <h2 className="mb-2">Productos Destacados</h2>
            <p className="md:h5">¡Explore las selecciones destacadas de hoy!</p>
          </div>

          <FeaturedProducts />

          {/*
          <Suspense fallback={<SkeletonFeaturedProducts />}>
              <ShowFeaturedProducts />
          </Suspense>
        */}
        </div>
      </section>

      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
