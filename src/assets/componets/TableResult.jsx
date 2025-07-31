import React, {  useEffect, useState } from "react";
import { CheckCircle,XCircle } from "lucide-react";

function TableResult({ result ,activeTab }) {
  console.log("activetab",activeTab);
  
  const [match, setMatch] = useState([]);
  const [notMatch, setNotMatch] = useState([]);
  
  

  useEffect(() => {
    if (result?.match_data && result?.non_match_data) {
      setMatch(result.match_data);
      setNotMatch(result.non_match_data);
    }
  }, [result]);

  const renderRow = (item, index, status = "Match") => (
    <tr key={index} className="border-t">
      <td className="px-4 py-2 text-sm font-bold text-gray-700">
        {item["Invoice Details Invoice number"] || "-"}
      </td>
      <td className="px-4 py-2 text-sm text-gray-700">
        {item["Invoice Details Invoice Date"] || "-"}
      </td>
      <td className="px-4 py-2 text-sm text-gray-700">
        ₹{item["Invoice Details Invoice Value(₹)"] || "-"}
      </td>
      <td className="px-4 py-2 text-sm text-gray-700">
        {item["Trade/Legal name"] || "-"}
      </td>
      <td className="px-4 py-2 text-sm font-bold text-gray-700">
        {item["Voucher No."] || "-"}
      </td>
      <td className="px-4 py-2 text-sm text-gray-700">{item["Date"] || "-"}</td>
      <td className="px-4 py-2 text-sm text-gray-700">
        ₹{item["Gross Total"] || "-"}
      </td>
      <td className="px-4 py-2 text-sm font-semibold ">
        {status === "Match" ? (
          <CheckCircle className="inline mr-1 text-green-600" />
        ) : (
          <XCircle className="inline mr-1 text-red-600"/>
        )}
      </td>
    </tr>
  );
  //    const gstData = [
  //   {
  //     gstInvoice: "GST001",
  //     gstDate: "2024-01-15",
  //     gstAmount: "₹50,000",
  //     gstVendor: "ABC Suppliers Ltd",
  //     purchaseInvoice: "PUR001",
  //     purchaseDate: "2024-01-15",
  //     purchaseAmount: "₹50,000",
  //     status: "Match",
  //     remarks: "Perfect match",
  //   },
  //   {
  //     gstInvoice: "GST002",
  //     gstDate: "2024-01-16",
  //     gstAmount: "₹25,000",
  //     gstVendor: "XYZ Corp",
  //     purchaseInvoice: "PUR002",
  //     purchaseDate: "2024-01-16",
  //     purchaseAmount: "₹24,500",
  //     status: "Partial Match",
  //     remarks: "Amount mismatch: ₹500",
  //   },
  //   {
  //     gstInvoice: "GST003",
  //     gstDate: "2024-01-17",
  //     gstAmount: "₹75,000",
  //     gstVendor: "DEF Industries",
  //     purchaseInvoice: "-",
  //     purchaseDate: "-",
  //     purchaseAmount: "-",
  //     status: "Not Match",
  //     remarks: "No matching purchase record found",
  //   },
  //   {
  //     gstInvoice: "GST004",
  //     gstDate: "2024-01-18",
  //     gstAmount: "₹30,000",
  //     gstVendor: "GHI Ltd",
  //     purchaseInvoice: "PUR004",
  //     purchaseDate: "2024-01-20",
  //     purchaseAmount: "₹30,000",
  //     status: "Partial Match",
  //     remarks: "Date mismatch: 2 days difference",
  //   },
  //   {
  //     gstInvoice: "GST005",
  //     gstDate: "2024-01-19",
  //     gstAmount: "₹45,000",
  //     gstVendor: "JKL Enterprises",
  //     purchaseInvoice: "PUR005",
  //     purchaseDate: "2024-01-19",
  //     purchaseAmount: "₹45,000",
  //     status: "Match",
  //     remarks: "Perfect match",
  //   },
  // ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto ">
        <thead className="bg-[#F7F6FF]">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium whitespace-normal break-words text-gray-600">
              GST Invoice
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium whitespace-normal break-words text-gray-600">
              GST Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              GST Amount
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              GST Vendor
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium   text-gray-600">
              Purchase Invoice
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Purchase Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium whitespace-normal break-words text-gray-600">
              Purchase Amount
            </th>
            <th className="px-4  py-2 text-left text-sm font-medium text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="border-t-gray-200">
        
          {
            activeTab == "tab1"? match.map((item, index) => renderRow(item, index, "Match")):
            notMatch.map((item, index) => renderRow(item, index, "Not Match"))
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableResult;
