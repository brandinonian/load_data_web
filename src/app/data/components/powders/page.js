'use client'

import { useState, useEffect } from "react";
import PowdersTable from "./powdersTable";

export default function PowdersHome() {

  const [powderList, setPowderList] = useState();

  useEffect(() => {
    async function fetchPowders() {
      const response = await fetch('/api/powders', { method: 'GET' });
      const responseObj = await response.json();
      console.log(responseObj);
      setPowderList(responseObj.data);
    }
    fetchPowders();
  }, []);

  return (
    <div>
      {powderList &&
        <div className="p-4">
          <PowdersTable data={powderList} />
        </div>
      }
    </div>
  );
}