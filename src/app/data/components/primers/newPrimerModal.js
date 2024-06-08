import { PrimerTypeList } from "@/app/internal/lists";
import { useState } from "react";

export default function NewPrimerModal() {

  const [primer, setPrimer] = useState({
    brand: null,
    name: null,
    type: null,
  })
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit() {
    setIsPending(true);
    const response = await fetch('/api/primers', {
      method: 'POST',
      headers: { "content-type": 'application/json' },
      body: JSON.stringify(primer),
    });
    if (response.status == 200) {
      setError(null);
      setIsPending(false);
      document.getElementById('new_primer_modal').close();
      return;
    }
    else {
      setError(response.status);
      setIsPending(false);
      return;
    }
  }

  return (
    <dialog id="new_primer_modal" className="modal">
      <div className="modal-box">
        <div className="flex flex-col gap-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
          {error &&
            <div>{'Error: ' + error}</div>
          }
          {/* form */}
          <form className="flex flex-col gap-6 w-full">
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <span>Brand</span>
                <input type="text" className="grow" placeholder="Brand" disabled={isPending} onChange={e => setPrimer({ ...primer, brand: e.target.value })} />
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <span>Name</span>
                <input type="text" className="grow" placeholder="Name" disabled={isPending} onChange={e => setPrimer({ ...primer, name: e.target.value })} />
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <span>Type</span>
                <select className="select select-ghost w-full" disabled={isPending} onChange={e => setPrimer({ ...primer, type: e.target.value })}>
                  {PrimerTypeList.map(type => (
                    <option>{type}</option>
                  ))}
                </select>
              </label>
            </div>
            <button className="btn btn-success" onClick={handleSubmit} disabled={isPending}>Save</button>
          </form>
          {/* /form */}
        </div>
      </div>
    </dialog>
  );
}