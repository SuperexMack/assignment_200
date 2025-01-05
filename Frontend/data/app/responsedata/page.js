"use client"

import { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [userData, setuserData] = useState("");
  const [getuserData, setgetUserdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendData = async () => {
    setLoading(true);
    await axios.post("https://assignment-200-wyj1.vercel.app/getdata", {
      userdaata: userData
    })
      .then((response) => {
        const responseData = response.data.myresponse;
        const dataArray = Array.isArray(responseData) ? responseData : [responseData];
        setgetUserdata(dataArray);
        console.log("data got printed");
        setuserData("");
        setLoading(false);
      })
      .catch((error) => {
        console.log("something is wrong with the data : " + error);
      });
  };

  return (
    <div className="p-4">
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <h1 className="font-bold text-[40px]">Loading....</h1>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="h-[60px] bg-gradient-to-r from-blue-600 to-indigo-800 flex items-center px-4 sm:px-6">
            <h2 className="text-white text-xl sm:text-2xl font-bold">CrustData API Assistant</h2>
          </div>

          <div className="h-[400px] overflow-y-auto p-4 sm:p-6 space-y-4">
            {Array.isArray(getuserData) &&
              getuserData.map((item, index) => (
                <div key={index} className="rounded-lg shadow-md overflow-hidden">
                  <div className="bg-indigo-100 p-4">
                    <div className="font-semibold text-indigo-800 mb-2">Description:</div>
                    <div className="bg-white rounded p-3 text-gray-700">{item.description}</div>
                  </div>

                  <div className="bg-emerald-100 p-4">
                    <div className="font-semibold text-emerald-800 mb-2">Route:</div>
                    <div className="bg-white rounded p-3 text-gray-700">{item.route}</div>
                  </div>

                  <div className="bg-amber-100 p-4">
                    <div className="font-semibold text-amber-800 mb-2">cURL:</div>
                    <div className="bg-white rounded p-3 font-mono text-sm text-gray-700">
                      {item.curl}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="p-4 sm:p-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={userData}
                placeholder="Ask about CrustData APIs..."
                onChange={(e) => setuserData(e.target.value)}
                className="flex-1 text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendData}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Get response
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}