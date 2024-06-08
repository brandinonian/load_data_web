export default function PrimersTable({ data }) {
  return (
    <div className="bg-grey-400 rounded">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map(primer => (
            <tr>
              <td>{primer.brand}</td>
              <td>{primer.name}</td>
              <td>{primer.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}