import React from "react";
import Card from "../componets/FileCard";
import { useNavigate } from "react-router-dom";
import { FileText, Upload, CheckCircle } from "lucide-react";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [gstFile, setGstFile] = useState(null);
  const [purchaseFile, setPurchaseFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async ()=>{
    const formData = new FormData();
    formData.append("gst_file",gstFile)
    formData.append("purchase_file",purchaseFile)
    try {
      const response = await axios.post("http://localhost:8000/match-files/",formData,{
        headers:{
          "content-Type":"multipart/form-data",
        },
      });
      console.log("Matched Data>=:",response);
      navigate("/result",{ state: { matchedData: response.data } })
      
      
    } catch (error) {
       console.error("Upload error:", error.response?.data || error.message);
    }
  }
    
  const handleGstFileName = (e) => {
    const file = e.target.files[0];
    setGstFile(file);
  };
  const handlePurchaseFileName = (e) => {
    const file = e.target.files[0];
    setPurchaseFile(file);
  };
  return (
    <>
      <div className=" min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100">
        {/* Header Section  */}

        <div className="home-top flex-col  mx-auto px-4 py-6  ">
          <div className="top-logo flex justify-center">Logo</div>

          <h1 className="flex justify-center font-bold text-5xl bg-gradient-to-r mt-4 from-purple-600 to-blue-600 text-transparent bg-clip-text">
            GST Return Matcher
          </h1>
          <p className=" sm:text-xl  max-w-4xl mx-auto leading-relaxed mt-4 text-center">
            Upload your GST return and purchase files to automatically match and
            verify transactions. Save time and reduce manual errors with smart
            reconciliation.
          </p>
        </div>

        {/* Upload Section  */}
        <div className="max-w-6xl mx-auto">
          <div className="upload-section grid lg:grid-cols-2 gap-6 sm:gap-8 ">
            <div className="GST-file-section">
              <div className="container group border-2 border-dashed rounded-xl border-purple-200 hover:border-purple-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 ">
                <div className="card-header flex flex-col items-center mt-8 ">
                  <div className="file-icon  w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                  </div>
                  <div className="Card-title font-semibold text-xl sm:text-2xl mb-2 text-purple-900">
                    GST Return File
                  </div>
                  <div className="card-description text-sm sm:text-base">
                    Upload your GST return file (Excel/CSV format)
                  </div>
                </div>
                <div className="card-footer p-6 ">
                  <label className="block cursor-pointer">
                    <input
                      type="file"
                      accept=".xlsx,.xls,.csv"
                      className="hidden"
                      onChange={handleGstFileName}
                    />

                    <div className="border-2 border-dashed border-gray-300 rounded-xl  p-6 sm:p-8 text-center hover:border-purple-400 transition-colors min-h-[120px] flex flex-col justify-center">
                      {gstFile ? (
                        <div className="flex flex-col items-center space-y-2 text-green-600">
                          <CheckCircle className="w-8 h-8" />
                          <span className="font-medium text-sm sm:text-base break-all">
                            {gstFile.name}
                          </span>
                          <span className="text-xs text-green-500">
                            Ready to process
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto" />
                          <div>
                            <p className="text-sm sm:text-base text-gray-600 font-medium">
                              Drop your GST file here
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">
                              or click to browse
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="purchase-file-section ">
              <div className="container group border-2 border-dashed rounded-xl border-purple-200 hover:border-purple-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 ">
                <div className="card-header flex flex-col items-center mt-8 ">
                  <div className="file-icon  w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                  </div>
                  <div className="Card-title font-semibold text-xl sm:text-2xl mb-2 text-purple-900">
                    Purchase Return File
                  </div>
                  <div className="card-description text-sm sm:text-base">
                    Upload your Purchase return file (Excel/CSV format)
                  </div>
                </div>
                <div className="card-footer p-6 ">
                  <label className="block cursor-pointer">
                    <input
                      type="file"
                      accept=".xlsx,.xls,.csv"
                      className="hidden"
                      onChange={handlePurchaseFileName}
                    />

                    <div className="border-2 border-dashed border-gray-300 rounded-xl  p-6 sm:p-8 text-center hover:border-purple-400 transition-colors min-h-[120px] flex flex-col justify-center">
                      {purchaseFile ? (
                        <div className="flex flex-col items-center space-y-2 text-green-600">
                          <CheckCircle className="w-8 h-8" />
                          <span className="font-medium text-sm sm:text-base break-all">
                            {purchaseFile.name}
                          </span>
                          <span className="text-xs text-green-500">
                            Ready to process
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto" />
                          <div>
                            <p className="text-sm sm:text-base text-gray-600 font-medium">
                              Drop your Purchase file here
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">
                              or click to browse
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit-button flex justify-center mt-8 ">
          <input
            type="button"
            value="Process & Match Files "
            className="bg-gradient-to-r px-10 py-2 from-purple-300 to-blue-300 font-semibold text-xl rounded-xl text-white"
            onClick={handleSubmit}
          />
        </div>

        {/* Footer Section */}
        <div className="pb-10">
          <div className="footer-section max-w-4xl m-auto mt-15 rounded-2xl  shadow-2xl bg-white ">
            <div className="">
              <div className="flex justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6">
                  How it works
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row  ">
                {/* Section 1 */}
                <div className=" flex-1  ">
                  <div className="flex  items-center justify-center mt-10 h-8">
                    <div className=" w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-r from-purple-100 to-purple-200 mx-auto ">
                      <span className="text-xl font-semibold text-purple-600">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="p-6 ml-6">
                    <p className="text-sm sm:text-base text-gray-600 m-1  items-center">
                      Upload your GST return and purchase files securely
                    </p>
                  </div>
                </div>
                {/* Section 2 */}
                <div className="flex-1">
                  <div className="flex  items-center justify-center mt-10 h-8">
                    <div className=" w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-r from-blue-100 to-blue-200 mx-auto ">
                      <span className="text-xl font-semibold text-blue-600">
                        2
                      </span>
                    </div>
                  </div>
                  <div className="p-6 ml-6">
                    <p className="text-sm sm:text-base text-gray-600 m-1  items-center">
                      Our AI system processes and matches the data intelligently
                    </p>
                  </div>
                </div>
                {/* Section 3 */}
                <div className="flex-1">
                  <div className="flex  items-center justify-center mt-10 h-8">
                    <div className=" w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-r from-green-100 to-green-200 mx-auto ">
                      <span className="text-xl font-semibold text-green-600">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="p-6 ml-6">
                    <p className="text-sm sm:text-base text-gray-600 m-1  items-center">
                      View detailed results with comprehensive analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
