import Link from "next/link";

export function Navbar() {
    return (
      <>
        <div className="h-[100px] w-full bg-gradient-to-r from-blue-600 to-indigo-800 flex items-center">
          <div>
            <h1 className="font-bold text-[40px] ml-11 text-white">
              CrustData Application
            </h1>
          </div>
          <div className="absolute text-[30px] font-medium list-none right-[200px] flex space-x-5">
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