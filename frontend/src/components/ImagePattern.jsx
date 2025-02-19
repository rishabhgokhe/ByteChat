import { loginImages } from "../../data";

const ImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {loginImages.map((item, index) => (
            <div
              key={index}
              className={`aspect-square}`}
            >
              <img src={item.images} className="rounded-2xl" alt="" />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImagePattern;