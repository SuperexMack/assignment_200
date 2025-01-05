import Link from "next/link";

export function Navbar() {
  return (
    <>
      <div className="h-[100px] w-full bg-gradient-to-r from-blue-600 to-indigo-800 flex items-center px-4 sm:px-8 md:px-12">
        <div>
          <h1 className="font-bold text-[30px] sm:text-[35px] md:text-[40px] text-white">
            CrustData Application
          </h1>
        </div>
        <div className="ml-auto flex space-x-4 sm:space-x-6 md:space-x-8 text-[20px] sm:text-[25px] md:text-[30px] font-medium">
          <li className="text-white hover:text-blue-200 transition-colors duration-300 cursor-pointer">
            Home
          </li>
          <li className="text-white hover:text-blue-200 transition-colors duration-300 cursor-pointer">
            Contact
          </li>
          <li className="text-white hover:text-blue-200 transition-colors duration-300 cursor-pointer">
            <Link href={"https://github.com/SuperexMack/assignment_200"}>Contribute</Link>
          </li>
        </div>
      </div>
    </>
  );
}
