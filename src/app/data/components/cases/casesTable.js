export default function CasesTable({ data }) {
  return (
    <div className="bg-grey-400 rounded">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Cartridge</th>
            <th>Brand</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr className="hover:bg-blue-400">
              <td>{item.cartridge}</td>
              <td>{item.brand}</td>
              <td>{item.length + '"'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}