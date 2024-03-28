import React from "react";
// Icons
import { IoLanguageOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

const HeaderControls = () => {
  const handleModal = () => {
    my_modal_5.showModal();
  };
  return (
    <div className="flex justify-between py-8">
      <div className="flex items-center space-x-1">
        <button className="btn bg-indigo-700 text-white" onClick={handleModal}>
          <IoLanguageOutline size="20" color="white" />
          Select Language
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <ul>
              <li className="border-b-2 py-4 border-slate-200">English</li>
            </ul>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-indigo-700 text-white">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="btn btn-circle bg-indigo-700">
        <a
          href="https://tawk.to/chat/65f7fba8cc1376635adbb806/1hp8au3hg"
          target="_blank"
        >
          <RiCustomerService2Fill size="20" color="white" />
        </a>
      </div>
    </div>
  );
};

export default HeaderControls;
