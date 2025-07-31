import { FileText, Upload, CheckCircle } from "lucide-react";
import { useState } from "react";

function FileCard() {
  const [gstFile , setGstFile] =useState(null)
  const handleFileName = (e)=>{
        const file = e.target.files[0];
        setGstFile({'name':file.name});
  }
  return (
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
          <input type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={handleFileName} />

          <div className="border-2 border-dashed border-gray-300 rounded-xl  p-6 sm:p-8 text-center hover:border-purple-400 transition-colors min-h-[120px] flex flex-col justify-center">
            {gstFile ? (
              <div className="flex flex-col items-center space-y-2 text-green-600">
                <CheckCircle className="w-8 h-8" />
                <span className="font-medium text-sm sm:text-base break-all">
                  {gstFile.name}
                </span>
                <span className="text-xs text-green-500">Ready to process</span>
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
  );
}

export default FileCard;
