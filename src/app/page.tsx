import Image from "next/image";

import babyLakshmi from "/public/assets/images/baby-lakshmi.webp"
import babyDavid from "/public/assets/images/baby-david.webp"

import fonts from '@/shared/fonts'

export default function Root() {
  return (
    <>
      <div className="hearts top-left">
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between align-between lg:align-between h-screen">
        <div className="w-full lg:w-1/4 lg:h-full grid place-items-center">
          <div className="flex lg:hidden" style={{maxWidth: "100%", maxHeight: "35vh", overflow: "hidden"}}>
            <Image style={{color: "white", objectPosition: "0 12%", objectFit: "cover"}} src={babyLakshmi} alt="Lakshmi as a child"/>
          </div>
          <div className="hidden lg:flex" style={{maxWidth: "25vw", maxHeight: "80vh", overflow: "hidden"}}>
            <Image style={{color: "white", objectPosition: "center", objectFit: "contain"}} src={babyLakshmi} alt="Lakshmi as a child"/>
          </div>
        </div>
        <div className="w-auto h-screen grid place-items-center text-center">
          <header className={fonts.annissaScript}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-indigo-800"> David Wildman{"\n"}</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-indigo-800">&{"\n"}</span>
              <br />
              <span className="text-indigo-800">Lakshmi Haridas</span>
            </h1>
          </header>
        </div>
        <div className="w-full lg:w-1/4 lg:h-full grid place-items-center">
          <div className="flex lg:hidden" style={{maxWidth: "100%", maxHeight: "35vh", overflow: "hidden"}}>
            <Image style={{color: "white", objectPosition: "0 30%", objectFit: "cover"}} src={babyDavid} alt="Lakshmi as a child"/>
          </div>
          <div className="hidden lg:flex" style={{maxWidth: "25vw", maxHeight: "80vh", overflow: "hidden"}}>
            <Image style={{color: "white", objectPosition: "center", objectFit: "contain"}} src={babyDavid} alt="Lakshmi as a child"/>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-screen grid place-items-center text-center">
      <header className={annissaScript.className}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-red-500">David <span className="font-bold">Wild</span>man</h1>
        <br className="hidden lg:initial" />
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-purple-500">&</p>
        <br className="hidden lg:initial" />
        <p  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-indigo-800">Lak<span className="font-bold">shmi</span> Haridas</p>
        </header>
      </div> */}
      <div className="hearts bottom-right">
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
      </div>
    </>
  )
}