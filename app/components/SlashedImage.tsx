import Image, { StaticImageData } from "next/image";
function SlashedImage({
  image,
  title,
}: {
  image: StaticImageData;
  title: string;
}) {
  return (
    <div>
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt="clay"
          className="w-full max-h-[160px] h-[150px]"
        />
        <div className=" absolute bg-white w-[70px] h-[70px] -bottom-[50px] -left-[35px] rotate-45"></div>
        <div className=" absolute bg-white w-[70px] h-[70px] -top-[50px] -right-[35px] rotate-45"></div>
      </div>
      <h3 className=" text-2xl font-bold text-bb-gray-900">{title}</h3>
    </div>
  );
}

export default SlashedImage;
