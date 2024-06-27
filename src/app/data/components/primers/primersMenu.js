import { useEffect, useState } from "react";
import NewPrimerModal from "./newPrimerModal";

export default function PrimersMenu({ updateHandler, primerList, brandFilterHandler }) {

  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    if (primerList)
      primerList.map((primer) => {
        if (!brandList.includes(primer.brand)) {
          setBrandList([...brandList, primer.brand]); // TODO: wtf??
        }
      });
    console.log(brandList);
  }, [primerList]);

  return (
    <div className="bg-grey-400 text-display-100 text-center">
      <div className="grid grid-cols-6 gap-4 p-4">
        <div className="col-span-1">
          <button className="btn w-full" onClick={() => document.getElementById('new_primer_modal').showModal()}>New Primer</button>
          <NewPrimerModal updateHandler={updateHandler} />
        </div>

        <div className="col-span-1">
          <label className="text-xl" htmlFor="brand_filter">Brand</label>
          <select
            className="select w-full"
            id="brand_filter"
            defaultValue={'-- Select --'}
            onChange={e => brandFilterHandler(e.target.value)}
          >
            {brandList.map(brand => <option key={brand}>{brand}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}