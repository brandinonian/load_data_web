import NewPrimerModal from "./newPrimerModal";

export default function PrimersMenu() {
  return (
    <div className="bg-grey-400">
      <div className="menu menu-horizontal p-4">
        <button className="btn" onClick={() => document.getElementById('new_primer_modal').showModal()}>New Primer</button>
        <NewPrimerModal />
      </div>
    </div>
  );
}