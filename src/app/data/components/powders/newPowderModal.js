import { useState } from "react";

export default function NewPowderModal({ updateHandler }) {

  const [powder, setPowder] = useState({
    brand: null,
    name: null,
  })
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit() {
    setIsPending(true);
    const response = await fetch('/api/powders', {
      method: 'POST',
      headers: { "content-type": 'application/json' },
      body: JSON.stringify(powder),
    });
    if (response.status == 200) {
      setError(null);
      setIsPending(false);
      updateHandler(true);
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
    <dialog id="new_powder_modal" className="modal">
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
                <input type="text" className="grow" placeholder="Brand" disabled={isPending} onChange={e => setPowder({ ...powder, brand: e.target.value })} />
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <span>Name</span>
                <input type="text" className="grow" placeholder="Name" disabled={isPending} onChange={e => setPowder({ ...powder, name: e.target.value })} />
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