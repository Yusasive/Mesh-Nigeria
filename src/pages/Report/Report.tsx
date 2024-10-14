import React from "react";
import localPdf1 from "../../assets/documents/REPORT-OF-2023-MESH-ELECTION-OBSERVATION-complete-1.pdf";
import localPdf2 from "../../assets/documents/MESH-Final-2022-Report.pdf";
import localPdf3 from "../../assets/documents/Final-Report-on-The-Annual-Sensitization-Workshop-for-Students-in-Senior-Secondary-Schools-in-Abuja.pdf";
import localPdf4 from "../../assets/documents/Sensitization-on-good-governance-Communique.pdf";

const reports = [
  {
    title: "2023 General Election Report",
    pdfLink: localPdf1,
  },
  {
    title: "2022 Annual Report",
    pdfLink: localPdf2,
  },
  {
    title: "2023 Youth Sensitization Report",
    pdfLink: localPdf3,
  },
  {
    title: "29th November Sensitization Workshop on Good Governance Communique",
    pdfLink: localPdf4,
  },
];

const Report = () => {
  const openPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-5 py-12 mt-4 lg:mt-20 px-4 lg:px-8">
      <h1 className="text-3xl lg:text-5xl text-blue-900 font-bold">
        MESH Reports
      </h1>
      {reports.map((report, index) => (
        <div
          key={index}
          onClick={() => openPDF(report.pdfLink)}
          style={{ cursor: "pointer", marginBottom: "20px" }}>
          <h3 className="text-xl lg:text-3xl text-blue-900 font-semibold hover:text-blue-700">
            {report.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Report;
