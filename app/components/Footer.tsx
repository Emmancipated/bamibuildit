import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logoFooter.svg";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className=" bg-bb-gray-900 pt-16  px-4 md:px-28">
      <div className=" md:flex justify-between border-b border-solid border-b-bb-gray-700 pb-8">
        <div>
          <div>
            <Link href="/">
              <Image src={logo} alt="bamibuildit" />
            </Link>
          </div>
          <div>
            <Link
              href="tel:+2347036218492"
              className="text-base text-bb-gray-200 font-medium my-3 block"
            >
              +234 703 621 8492
            </Link>
            <Link
              href="mailto:info@bamibuildit.com"
              className="text-base text-bb-gray-200 font-medium my-3 block"
            >
              info@bamibuildit.com
            </Link>

            <h3 className="text-base text-bb-gray-200 font-medium my-3">
              8, Oladoyinbo Street, Ogba, Ikeja, Lagos
            </h3>
          </div>
        </div>

        <div className="my-7 md:my-0 flex gap-x-14 md:gap-x-4">
          <div>
            <Link
              href="/about"
              className=" text-bb-gray-200 font-medium text-base"
            >
              About us
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className=" text-bb-gray-200 font-medium text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <p className=" text-base font-normal text-bb-gray-400 mx-auto py-8 text-center">
        © {date} BamiBuildIt. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
