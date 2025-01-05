import Image from "next/image";
import { Navbar } from "./Components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex flex-col justify-center items-center px-4">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl space-y-8 p-6 sm:p-8 md:space-y-10 md:p-10 lg:space-y-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-center">
            Welcome to the{" "}
            <span className="text-red-600 underline">CrustData</span> page
          </h1>
          <p className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-[20px] text-slate-200">
            Just go below and tap the Explore button and go to our chat bot
            which answers your questions about CrustData's APIs
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <Link href={"/responsedata"}>
              <button className="font-medium text-base sm:text-lg md:text-xl lg:text-[25px] px-4 py-2 sm:px-6 sm:py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Explore
              </button>
            </Link>
            <Link href={"https://github.com/SuperexMack/assignment_200"}>
              <button className="font-medium text-base sm:text-lg md:text-xl lg:text-[25px] px-4 py-2 sm:px-6 sm:py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300">
                Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
