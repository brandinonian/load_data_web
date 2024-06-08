'use client'

import { useState, useEffect } from "react";
import PrimersTable from "./primersTable";
import PrimersMenu from "./primersMenu";

export default function PrimersHome() {

  const [powderList, setPowderList] = useState();

  useEffect(() => {
    async function fetchPrimers() {
      const response = await fetch('/api/primers', { method: 'GET' });
      const responseObj = await response.json();
      console.log(responseObj);
      setPowderList(responseObj.data);
    }
    fetchPrimers();
  }, []);

  return (
    <div>
      <PrimersMenu />
      {powderList &&
        <div className="p-4">
          <PrimersTable data={powderList} />
        </div>
      }
    </div>
  );
}