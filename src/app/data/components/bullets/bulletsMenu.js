const CaliberSelect = ({data, changeHandler}) => {
  return (
    <div>
      {!data ?
        <div>Loading...</div> :
        <div>
          <label htmlFor="caliber" className="label">Caliber</label>
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
    <div className="bg-grey-400">
      <div className="menu menu-horizontal p-4">
        <CaliberSelect data={caliberList} changeHandler={setSelectedCaliber} />
      </div>
    </div>
  );
}