'use client'

import { useState, useEffect } from "react";
import CasesTable from "./casesTable";

export default function CasesHome() {

  const [caseList, setCaseList] = useState();

  useEffect(() => {
    async function fetchCases() {
      const response = await fetch('/api/cases', { method: 'GET' });
      const responseObj = await response.json();
      console.log(responseObj);
      setCaseList(responseObj.data);
    }
    fetchCases();
  }, []);

  return (
    <div>
      {caseList &&
        <div className="p-4">
          <CasesTable data={caseList} />
        </div>
      }
    </div>
  );
}