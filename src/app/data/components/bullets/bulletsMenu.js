const CaliberSelect = ({ data, changeHandler }) => {
  return (
    <div>
      {!data ?
        <div>Loading...</div> :
        <div>
          <label htmlFor="caliber" className="label text-xl">Caliber</label>
          <select id="caliber" className="select w-full" onChange={event => changeHandler(event.target.value)}>
            <option selected>----------</option>
            {data.map(caliber => <option key={caliber}>{caliber}</option>)}
          </select>
        </div>}
    </div>
  );
}

export default function BulletMenu({ caliberList, setSelectedCaliber }) {
  return (
    <div className="bg-grey-400 text-display-100">
      <div className="grid grid-cols-12 p-4">
        <CaliberSelect data={caliberList} changeHandler={setSelectedCaliber} />
      </div>
    </div>
  );
}