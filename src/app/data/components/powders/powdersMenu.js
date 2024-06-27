import NewPowderModal from "./newPowderModal";

export default function PowdersMenu({updateHandler}) {
  return (
    <div className="bg-grey-400">
      <div className="menu menu-horizontal p-4">
        <button className="btn" onClick={() => document.getElementById('new_powder_modal').showModal()}>New Powder</button>
        <NewPowderModal updateHandler={updateHandler} />
      </div>
    </div>
  );
}