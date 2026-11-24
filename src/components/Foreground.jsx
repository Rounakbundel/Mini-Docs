
import React, { useRef } from 'react'
import Card from './card'


function Foreground() {
  const ref=useRef(null)
  const data = [
    {
      desc: "hello this is IMPORTANT file open this.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagcolor: "green",
      },
    },
    {
      desc: "hello this is IMPORTANT file open this.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagcolor: "blue",
      },
    },
    {
      desc: "hello this is IMPORTANT file open this.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "UPLOAD",
        tagcolor: "yellow",
      },
    },
  ]

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] bg w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} key={index} reference ={ref} />
      ))}
    </div>
  )
}

export default Foreground; 
