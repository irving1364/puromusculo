import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Link from "next/link";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
    
        <section className="section">
          <div className="container">
            <div className="rounded-xl bg-theme-light px-6 py-8 md:py-16 dark:bg-darkmode-theme-light">
              <div className="row items-center">
                <div className="mb-10 md:mb-0 lg:col-6 xl:col-6 mx-auto text-center order-2 lg:order-0">
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      "Oferta de la semana"
                    )}
                    className="md:text-lg text-dark dark:text-darkmode-dark font-bold"
                  />
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      "Colección Energizante para tu cuerpo: 25% de descuento"
                    )}
                    className="my-2 h1"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                     "Suscríbase a nuestro boletín y obtenga toda la información y ofertas más recientes."
                    )}
                    className="mb-6 md:text-lg"
                  />

                  {data.frontmatter.button.enable && (
                    <Link
                      className="btn btn-sm md:btn-lg btn-primary font-medium"
                      href='/'
                    >
                      Comprar Ahora
                    </Link>
                  )}
                </div>

                <div className="mx-auto lg:col-5 mb-6 lg:mb-0">
                  <ImageFallback
                    src='/images/vitamina.png'
                    width={543}
                    height={390}
                    alt="cta-image"
                    className="mx-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
    </>
  );
};

export default CallToAction;
