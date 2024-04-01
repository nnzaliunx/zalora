import sophee from "../../assets/sophee.png";
import lazada from "../../assets/lazada.png";
import tokopedia from "../../assets/tokopedia.png";
import qoo10 from "../../assets/qoo10.png";
import carousell from "../../assets/carousell.jpg";

const Brand = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="m-4">
          <img
            src={sophee}
            alt="Logo 1"
            className="h-20 w-auto object-contain"
          />
        </div>
        <div className="m-4">
          <img
            src={tokopedia}
            alt="Logo 2"
            className="h-20 w-auto object-contain"
          />
        </div>
        <div className="m-4">
          <img
            src={carousell}
            alt="Logo 3"
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
      <div className="flex mt--10 items-center">
        <div className="m-4">
          <img src={qoo10} alt="Logo 1" className="h-12 w-auto object-fit" />
        </div>
        <div className="m-4">
          <img
            src={lazada}
            alt="Logo 2"
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Brand;
