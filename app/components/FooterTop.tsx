import Link from "next/link";

function FooterTop() {
  return (
    <div className=" bg-bb-gray-100 py-16 text-center px-4 md:px-28">
      <h3 className=" text-4xl font-semibold text-bb-gray-900">
        Drive success with BAMIBUILDIT LIMITED
      </h3>
      <h3 className=" text-xl font-normal text-bb-gray-500 my-5">
        Contact us today to learn more about our comprehensive solutions and how
        we can support your business growth.
      </h3>
      <Link
        href="/contact"
        className=" text-white font-medium text-base rounded-lg	bg-bb-primary-600 border-solid border-bb-primary-600 border py-3 px-7 shadow-1xl block w-fit m-auto"
      >
        Contact Us
      </Link>
    </div>
  );
}

export default FooterTop;
