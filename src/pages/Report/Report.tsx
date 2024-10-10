import React from "react";

const reports = [
  {
    title: "2023 General Election Report",
    pdfLink: "https://example.com/report1.pdf",
  },
  {
    title: "2022 Annual Report",
    pdfLink: "https://example.com/report2.pdf",
  },
  {
    title: "2023 Youth Sensitization Report",
    pdfLink: "https://example.com/report3.pdf",
  },
  {
    title: "29th November Sensitization Workshop on Good Governance Communique",
    pdfLink: "https://example.com/report4.pdf",
  },
];

const Report = () => {
  const openPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-5 py-12 mt-20 px-8">
        <h1 className="text-3xl lg:text-5xl text-blue-900 font-bold">MESH Reports</h1>
      {reports.map((report, index) => (
        <div
          key={index}
          onClick={() => openPDF(report.pdfLink)}
          style={{ cursor: "pointer", marginBottom: "20px" }}>
          <h3 className="text-xl lg:text-3xl text-blue-900 font-semibold hover:text-blue-700">{report.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Report;
