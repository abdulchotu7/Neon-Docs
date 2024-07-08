import React from 'react';
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineGetApp } from "react-icons/md";
import { motion } from "framer-motion";

function Cards({ reference }) {
  return (
    <motion.div 
      drag 
      dragConstraints={reference} 
      className="relative m-3 w-52 h-[250px] bg-white rounded-lg shadow-lg overflow-hidden p-6"
    >
      <CiCreditCard1 size={20} className="text-gray-700 mb-4" />
      <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, dolore?</p>
      <div className="absolute h-10 w-full bg-yellow-300 left-0 bottom-0 flex items-center justify-between px-4">
        <h4 className="text-black">0.4mb</h4>
        <MdOutlineGetApp size={25} className="text-black" />
      </div>
    </motion.div>
  );
}

export default Cards;
