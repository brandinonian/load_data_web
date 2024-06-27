'use client'

import { useState, useEffect } from "react";
import PrimersTable from "./primersTable";
import PrimersMenu from "./primersMenu";

export default function PrimersHome() {

  const [shouldUpdate, setShouldUpdate] = useState(true);
  const [primerList, setPrimerList] = useState();
  const [displayList, setDisplayList] = useState();
  const [brandFilter, setBrandFilter] = useState();

  function updateDisplayLists(brand) {
    let data = primerList;
    if (brand) data = data.filter(primer => primer.brand == brand);
    setDisplayList(data);
  }

  useEffect(() => {
    updateDisplayLists(brandFilter);
  }, [brandFilter]);

  useEffect(() => {
    async function fetchPrimers() {
      const response = await fetch('/api/primers', { method: 'GET' });
      const responseObj = await response.json();
      setPrimerList(responseObj.data);
    }
    if (shouldUpdate) {
      fetchPrimers();
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  return (
    <div>
      <PrimersMenu updateHandler={setShouldUpdate} primerList={primerList} brandFilterHandler={setBrandFilter} />
      {displayList &&
        <div className="p-4">
          <PrimersTable data={displayList} />
        </div>
      }
    </div>
  );
}
