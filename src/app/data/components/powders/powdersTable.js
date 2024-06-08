export default function PowdersTable({data}) {
  return (
    <div className="bg-grey-400 rounded">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(powder => (
            <tr>
              <td>{powder.brand}</td>
              <td>{powder.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}