import Link from "next/link"

export default function BulletsTable({ data }) {
  return (
    <div className="bg-grey-400 rounded">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Name</th>
            <th>Weight</th>
            <th>Diameter</th>
          </tr>
        </thead>
        <tbody>
          {data.map(bullet => (
            <tr className="hover:bg-blue-400">
              <Link href={`/data/components/bullets/id/${bullet._id}`}>
                <td>{bullet.brand}</td>
                <td>{bullet.name}</td>
                <td>{bullet.weight + ' gr'}</td>
                <td>{bullet.diam + `"`}</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}