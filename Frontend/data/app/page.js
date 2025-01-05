import Image from "next/image";
import { Navbar } from "./Components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
      <div className="h-screen w-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex flex-col justify-center items-center">
        <div className="h-[500px] w-1/2 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl space-y-14 flex flex-col p-8">
          <h1 className="text-[60px] font-bold text-center">
            Welcome to the <span className="text-red-600 underline">CrustData</span> page
          </h1>
          <p className="text-center font-medium text-[20px]  text-slate-200">
            Just go below and tap the Explore button and go to our chat bot which answers yours questions about Crustdata's APIs
          </p>
          <div className="flex justify-center space-x-6">
            <button className="font-medium text-[25px] p-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              <Link href={"/responsedata"}>Explore</Link>
            </button>
            <button className="font-medium text-[25px] p-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300">
              Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
}