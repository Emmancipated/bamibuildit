import hero from "@/public/assets/images/about-hero-one.png";
import Image from "next/image";
import { imageData } from "../utils/imageData";
import SlashedImage from "../components/SlashedImage";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import excavator from "@/public/assets/images/excavator_one.png";
import innovation from "@/public/assets/svgs/innovation.svg";
import integrity from "@/public/assets/svgs/integrity.svg";
import quality from "@/public/assets/svgs/quality.svg";
import sustain from "@/public/assets/svgs/sustainability.svg";

const valuesArray = [
  {
    name: "Integrity",
    image: integrity,
    content:
      "We uphold the highest standards of honesty and integrity in all our operations.",
  },
  {
    name: "Quality",
    image: quality,
    content:
      "We are dedicated to providing superior quality materials that meet and exceed industry standards.",
  },
  {
    name: "Innovation",
    image: innovation,
    content:
      "We continuously seek innovative solutions to improve our processes and services.",
  },
  {
    name: "Sustainability",
    image: sustain,
    content:
      "We are committed to environmentally responsible practices and sustainable sourcing of materials.",
  },
];

function About() {
  return (
    <>
      <div className=" bg-bb-bg-two bg-no-repeat">
        <div className="py-14 md:py-28 md:flex px-4 md:px-8 lg:px-28 justify-between items-center text-center md:text-left">
          <div>
            <h2 className=" text-base font-semibold text-bb-primary-25">
              Nice to meet you
            </h2>
            <h2 className=" text-white font-semibold text-4xl md:text-5xl">
              About our company
            </h2>
          </div>
          <div className=" mt-6 md:mt-0">
            <p className=" text-xl font-medium text-bb-gray-25">
              Bamibuildit Limited: Building the Future,
              <br /> One Solid Mineral at a Time
            </p>
          </div>
        </div>
      </div>

      <div className=" pt-14 md:pt-28 md:flex px-4 md:px-8 lg:px-28 justify-between items-center gap-x-24">
        <div>
          <h2 className=" text-4xl md:text-5xl font-bold  text-bb-gray-900 mb-4">
            Who We Are
          </h2>
          <p className=" text-xl font-normal text-bb-gray-500">
            Founded with a vision to streamline and innovate the supply chain
            industry, Bamibuildit Limited has rapidly established itself as a
            trusted partner in the procurement and distribution of high-quality
            solid minerals. Our expertise spans a broad range of materials,
            ensuring that our clients receive the best resources for their
            projects.
          </p>
        </div>
        <Image src={hero} alt="caterpillar" className=" my-2 md:my-0" />
      </div>

      <div className=" pt-14 md:pt-28 px-4 md:px-8 lg:px-28">
        <div>
          <h2 className=" text-4xl font-semibold  text-bb-gray-900 mb-4 text-center">
            Our Products
          </h2>
          <p className=" text-xl font-normal text-bb-gray-500 text-center">
            At Bamibuildit Limited, we mine and supply a variety of solid
            minerals essential for construction and manufacturing. Our product
            list includes:
          </p>
        </div>
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

      <div className="px-4 md:px-8 lg:px-28 md:pt-24">
        <h2 className=" text-4xl font-semibold text-bb-gray-900 my-3">
          Our Values
        </h2>

        <p className=" text-xl font-normal text-bb-gray-500 w-2/3">
          At Bamibuildit Limited, we are more than just a supplier; we are a
          partner in your success.
        </p>

        <div className=" md:grid grid-cols-2 gap-6 py-16">
          <div className=" grid grid-cols-2 gap-6">
            {valuesArray.map((item) => (
              <div key={item.name}>
                <Image src={item.image} alt="innovation" />
                <h3 className=" text-xl font-medium text-bb-gray-900">
                  {item.name}
                </h3>
                <p className=" text-base font-medium text-bb-gray-500">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <Image src={excavator} alt="excavator" className=" my-3 md:my-0" />
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
}

export default About;
