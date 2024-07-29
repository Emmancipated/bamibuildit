import Image from "next/image";
import Link from "next/link";
import excavator from "@/public/assets/images/excavator.png";
import SlashedImage from "./components/SlashedImage";
import { imageData } from "./utils/imageData";
import FooterTop from "./components/FooterTop";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <div className=" bg-bb-bg-one bg-no-repeat">
        <div className="px-4 md:px-8 lg:px-28 py-14 md:py-28 md:grid grid-cols-[1.4fr_0.6fr]">
          <div>
            <h1 className=" text-4xl font-bold text-white mb-5">
              BAMIBUILDIT LIMITED: Empowering Construction and Manufacturing
            </h1>
            <p className=" text-bb-gray-100 font-normal text-lg mb-9 md:w-[70%]">
              A fast-growing registered company dealing in supply chain
              solutions of solid minerals as raw materials for the support of
              the construction and manufacturing sectors of the economy.
            </p>

            <Link
              href="/contact"
              className=" text-white font-medium text-base rounded-lg	bg-bb-primary-600 border-solid border-bb-primary-600 border py-3 px-7 shadow-1xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-28 py-12 md:pt-24">
        <h2 className=" text-base font-semibold text-bb-primary-700">
          Our commitment
        </h2>
        <h2 className=" text-4xl font-semibold text-bb-gray-900 my-3">
          What we offer here at BamiBuildIt
        </h2>

        <div className=" md:grid grid-cols-2 gap-x-12 items-center">
          <div className="flex gap-x-6 my-3 md:my-0">
            <div className=" bg-bb-gray-100 h-auto w-1 min-w-1 relative">
              <div className=" absolute bg-bb-primary-600 h-1/3 w-1"></div>
            </div>
            <div className="">
              <div className=" mb-8">
                <h3 className=" text-xl font-medium text-bb-gray-900 mb-2">
                  Comprehensive Supply Chain Solutions
                </h3>
                <p className=" text-base font-normal text-bb-gray-500">
                  We manage the entire process from sourcing to delivery,
                  ensuring that your projects receive the necessary materials on
                  time and within budget.
                </p>
              </div>

              <div className=" mb-8">
                <h3 className=" text-xl font-medium text-bb-gray-900 mb-2">
                  Uncompromising Quality
                </h3>
                <p className=" text-base font-normal text-bb-gray-500">
                  Our rigorous quality assurance protocols ensure that all
                  minerals meet the highest industry standards, guaranteeing the
                  durability and success of your projects.
                </p>
              </div>

              <div className=" mb-8">
                <h3 className=" text-xl font-medium text-bb-gray-900 mb-2">
                  Sustainability
                </h3>
                <p className=" text-base font-normal text-bb-gray-500">
                  We are committed to environmentally responsible practices,
                  ensuring that our operations contribute to a sustainable
                  future.
                </p>
              </div>
            </div>
          </div>
          <Image src={excavator} alt="excavator" className=" my-3 md:my-0" />
        </div>
      </div>

      <div className=" px-4 md:px-8 lg:px-28 md:pt-24">
        <h2 className=" text-base font-semibold text-bb-primary-700">
          Our services
        </h2>
        <h2 className=" text-4xl font-semibold text-bb-gray-900 my-3">
          Here are some materials we mine
        </h2>

        <p className=" text-xl font-normal text-bb-gray-500 md:w-2/3">
          We process and supply industrial solid minerals as raw-materials for
          industries for the production of finished products or infrastructural
          development of the nation(s).
        </p>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 py-16">
          {imageData.map((item) => (
            <SlashedImage
              image={item.image}
              title={item.name}
              key={item.name}
            />
          ))}
        </div>
      </div>

      <FooterTop />
      <Footer />
    </main>
  );
}
