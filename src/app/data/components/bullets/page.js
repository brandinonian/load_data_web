'use client'

import { useEffect, useState } from "react";
import BulletsTable from "./bulletsTable";
import BulletMenu from "./bulletsMenu";

export default function BulletsHome() {

  const [caliberList, setCaliberList] = useState();
  const [selectedCaliber, setSelectedCaliber] = useState();
  const [noDisplay, setNoDisplay] = useState(true);
  const [bulletList, setBulletList] = useState();

  useEffect(() => {
    async function fetchCalibers() {
      const response = await fetch('/api/bullets/calibers', { method: 'GET' });
      const responseObj = await response.json();
      setCaliberList(responseObj.data);
    }
    fetchCalibers();
  }, []);

  useEffect(() => {
    async function fetchBullets(caliber) {
      const response = await fetch('/api/bullets/' + caliber, { method: 'GET' });
      const responseObj = await response.json();
      setBulletList(responseObj.data);
      setNoDisplay(false);
    }
    if (selectedCaliber) {
      if (selectedCaliber != '----------') {
        fetchBullets(selectedCaliber);
        return;
      }
    }
    setNoDisplay(true);
  }, [selectedCaliber]);

  return (
    <div>
      <BulletMenu caliberList={caliberList} setSelectedCaliber={setSelectedCaliber} />
      {noDisplay ?
        <div className="text-center py-20">
          <div className="text-xl">Select a caliber...</div>
        </div> :
        <div className="p-4">
          <BulletsTable data={bulletList} />
        </div>
      }
    </div>
  );
}