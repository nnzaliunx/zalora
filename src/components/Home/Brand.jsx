import sophee from "../../assets/sophee.png";
import lazada from "../../assets/lazada.png";
import tokopedia from "../../assets/tokopedia.png";
import qoo10 from "../../assets/qoo10.png";
import transak from "../../assets/transak-logo.svg";

const Brand = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-6">
        <div className="mx-4">
          <img src={sophee} alt="Logo 1" className="w-fit h-fit" />
        </div>
        <div className="m-4">
          <img src={tokopedia} alt="Logo 2" className="w-fit h-fit" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="mx-4">
          <img src={transak} alt="Logo 3" className="w-full" />
        </div>
        <div className="mx-4">
          <img src={lazada} alt="Logo 2" className="w-44" />
        </div>
      </div>
    </>
  );
};

export default Brand;
