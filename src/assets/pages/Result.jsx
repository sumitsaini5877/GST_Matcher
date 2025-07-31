import { ArrowLeft, Download, Sparkles, FileText, Table } from "lucide-react";
import TableResult from "../componets/TableResult";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Result() {
  const [result, setResult] = useState({});
  const [ activeTab,setActiveTab] = useState("tab1");
  const navigate = useNavigate();
  const location = useLocation();
  const matchData = location.state?.matchedData;
  useEffect(() => {
    if (matchData) {
      setResult(matchData);
      console.log("Received data:", matchData);
    } else {
      // Optional: redirect if no data was passed
      navigate("/");
    }
  }, [matchData, navigate]);
  console.log("result is ", result);

  const handleTabClick =(tab)=>{
    setActiveTab(tab)
  }

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen  px-2 lg:px-21 py-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-x-hidden">
      {/* Header Section */}
      <div className="header flex sm:flex-row flex-col ">
        <div className=" back-button  py-3 ">
          <div
            className=" flex items-center gap-4 text-sm  p-2 px-4 border  rounded-lg  border-purple-300 font-semibold "
            onClick={handleClick}
          >
            <ArrowLeft className="w-4" />
            <h5>Back to Upload</h5>
          </div>
        </div>
        <div className=" middle-col flex-1 px-3">
          <div className="">
            <div className="flex items-center gap-2  ">
              <Sparkles className="text-purple-600" />
              <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
                Match Results
              </h1>
            </div>
            <div className="py-2">
              <p className=" text-gray-500">
                Comparison between{" "}
                <span className="text-gray-500 font-semibold">
                  GST_return.xlsx
                </span>{" "}
                and{" "}
                <span className="text-gray-500 font-semibold">
                  purchase_register.xlsx
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="export-button   py-3  ">
          <div className="flex items-center gap-4 text-sm  p-2 px-4 bg-green-600 text-white shadow-2xl  rounded-lg   font-semibold ">
            <Download className="w-4" />
            <h5>Export Results</h5>
          </div>
        </div>
      </div>
      {/* Result Card Section */}
      <div className="result-cards grid lg:grid-cols-4 gap-6 py-8 grid-cols-2">
        {/* card-1 */}
        <div className=" box-1 border drop-shadow-lg border-gray-300 bg-white rounded-2xl box-1 flex-1">
          <div className=" mt-6 ">
            <h2 className=" px-6 text-gray-500 font-semibold text-sm  ">
              Total Records
            </h2>
          </div>
          <div className=" mb-6 mt-3">
            <h1 className="px-6 text-2xl font-bold">{result.total_records}</h1>
          </div>
        </div>
        {/* card-2 */}
        <div className=" box-1 border border-green-100  drop-shadow-lg bg-white rounded-2xl box-1 flex-1">
          <div className=" mt-6 ">
            <h2 className=" px-6 text-green-600  font-semibold text-sm  ">
              Perfect Matches
            </h2>
          </div>
          <div className=" mb-6 mt-3">
            <h1 className="px-6 text-2xl text-green-600 font-bold">
              {result.matching_records}
            </h1>
          </div>
        </div>
        {/* card-3 */}
        <div className=" box-1 border border-amber-100  drop-shadow-lg bg-white rounded-2xl box-1 flex-1">
          <div className=" mt-6 ">
            <h2 className=" px-6 text-amber-600 font-semibold text-sm  ">
              Partial Matches
            </h2>
          </div>
          <div className=" mb-6 mt-3">
            <h1 className="px-6 text-2xl text-amber-600 font-bold">2</h1>
          </div>
        </div>
        {/* card-4 */}
        <div className=" box-1 border border-red-100  drop-shadow-lg bg-white rounded-2xl box-1 flex-1">
          <div className=" mt-6 ">
            <h2 className=" px-6 text-red-600 font-semibold text-sm  ">
              No Matches
            </h2>
          </div>
          <div className=" mb-6 mt-3">
            <h1 className="px-6 text-2xl text-red-600 font-bold">
              {result.non_matching_records}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white relative overflow-hidden rounded-xl shadow-2xl">
       <div className="bg-gray-200 ">
         <div className="flex  w-60  ">
          <div className={`py-3 px-7  ${activeTab=="tab1"?"bg-white":""}`}  onClick={()=>handleTabClick("tab1")}>match</div>
          <div className={`py-3 px-7 ${activeTab=="tab2"?"bg-white":""}`} onClick={()=>handleTabClick("tab2")}>Non-match</div>
        </div>
       </div>
        <div className="flex  border-gray-200   gap-2 p-5">
          <FileText className="text-purple-500" />
          <h1 className="font-semibold text-xl">Detailed Match Results</h1>
        </div>
        <div>
          <TableResult result={result} activeTab={activeTab}/>
        </div>
      </div>
    </div>
  );
}

export default Result;
