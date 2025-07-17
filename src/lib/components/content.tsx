"use client"

import Image from "next/image";

export default function content(){
  return (
    <div className="relative w-[378px] h-[378px] overflow-hidden group rounded-full">
      {/* Foto normal */}
      <Image
      // src="https://andriraymond.vercel.app/assets/images/ray-img.png"
      // src="/archive/assets/images/ray-img.webp"
      src="/ray-img.png"
      alt="Andri Reimondo Tamba"
      fill
      className="object-cover transition-opacity duration-300 opacity-100 hover:opacity-0 border"
      
      />
      
      {/* Foto saat hover */}
      <Image
      // src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
      // src="/archive/assets/images/ray-img.webp"
      src="/ray-img.png"
      alt="Andri Reimondo Tamba (hover)"
      fill
      // className="object-cover transition-opacity duration-300 opacity-0 hover:opacity-100 rounded-full"
      className="object-cover transition duration-300 opacity-0 group-hover:opacity-100 rounded-full group-hover:grayscale group-hover:scale-105"
      />
    </div>
  )
}