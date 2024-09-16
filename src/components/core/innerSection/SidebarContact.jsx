import React from "react";
import { FaPhoneAlt, FaDirections } from "react-icons/fa";
import { IoCopy, IoStarOutline, IoGlobeOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineTextsms, MdEdit } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { TbReceiptTax } from "react-icons/tb";

function SubSection({ icon, content }) {
  return (
    <div className="text-blue flex gap-2 py-2 px-2 rounded-md  items-center  border-t border-slate-200 hover:bg-slate-300">
      <span className="text-blue-500 text-3xl">{icon}</span>
      <p className="text-lg ">{content}</p>
    </div>
  );
}

const SidebarContact = () => {
  return (
    <div className="w-full my-2 py-2 flex gap-2 border px-2 border-gray-300 rounded-lg flex-col">
      <h3 className="text-xl font-semibold">Contact</h3>
      <div className="flex gap-2 items-center">
        <span>
          <FaPhoneAlt />
        </span>
        <p className="text-lg text-blue-500 font-semibold">9655448897</p>
      </div>
      <hr className="w-[95%] mx-auto" />
      <div>
        <h3 className="text-xl font-semibold my-1">Address</h3>
        <p className="text-lg">
          No 16, 14th Main, Dwaraka Nagar,
          <br /> Nagarbhavi, Bangalore - 560072
        </p>
        <div className="flex justify-between my-2 text-blue-500">
          <div className="text-blue flex gap-2 items-center cursor-pointer">
            <span className="text-xl">
              <FaDirections />
            </span>
            <p className="text-lg font-semibold">Get Directions</p>
          </div>
          <div className="text-blue flex gap-2 items-center cursor-pointer">
            <span className="text-xl">
              <IoCopy />
            </span>
            <p className="text-lg font-semibold">Copy</p>
          </div>
        </div>
      </div>

      <SubSection icon={<IoCopy />} content={"View Products"} />
      <SubSection icon={<MdOutlineEmail />} content={"Send Enquiry by mail"} />
      <SubSection
        icon={<MdOutlineTextsms />}
        content={"Get Info via SMS/Email"}
      />
      <SubSection icon={<RiShareForwardLine />} content={"Share This"} />
      <SubSection icon={<IoStarOutline />} content={"Tap To rate"} />
      <SubSection icon={<IoGlobeOutline />} content={"Visit Our Website"} />
      <SubSection icon={<TbReceiptTax />} content={"GSTIN : 29AACCO1347P1ZP"} />
      <SubSection icon={<MdEdit />} content={"Edit This"} />
    </div>
  );
};

export default SidebarContact;
