
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { GrDownload } from "react-icons/gr"
import { IoIosClose } from "react-icons/io";
import { motion } from 'motion/react'



function Card({data, reference}) {
  return (

    <motion.div drag  dragConstraints={reference} whileDrag={{ scale:1.2 }}  dragElastic={0.2}className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900 text-white p-5 overflow-hidden">

      {/* Card Content */}
      <div>
        <p className="text-sm mt-5 font-semibold"> {data.desc}</p>

        <FaRegFileAlt className="text-2xl mt-3" />
      </div>

      {/* File Size and Download Icon */}
      <div className="absolute bottom-16 left-0 w-full px-5 flex items-center justify-between">
        <h5>{data.filesize}</h5>

        <span className="w-9 h-9 bg-zinc-600 rounded-full flex items-center justify-center">
         {data.close ? <IoIosClose size={20} /> : <GrDownload size={16} color="#fff"/>}
        </span>
      </div>

      {/* Green Footer */}

      {data.tag.isOpen? (
        <div className={`tag  absolute bottom-0 left-0 w-full h-14 ${data.tag.tagcolor ==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
        <h3 className="text-sm  text-white font-semibold">{data.tag.tagTitle}</h3>
      </div>
) : null}
    

    </motion.div>
  )
}

export default Card
