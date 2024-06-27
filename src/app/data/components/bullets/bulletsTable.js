import Link from "next/link"

export default function BulletsTable({ data }) {
  return (
    <div className="bg-grey-400 text-display-100 text-center text-lg">
      <ul className="grid grid-cols-6 border-b-2 bg-grey-300 border-grey-500">
        <li className="p-4">Brand</li>
        <li className="p-4">Name</li>
        <li className="p-4">Weight</li>
        <li className="p-4">Diameter</li>
      </ul>
      <div className="overflow-y-scroll">
        <div className="h-2 bg-grey-500"></div>
        {data.map(bullet => (
          <div>
            <Link href={`/data/components/bullets/id/${bullet._id}`}>
              <ul className="grid grid-cols-6">
                <li className="p-4">{bullet.brand}</li>
                <li className="p-4">{bullet.name}</li>
                <li className="p-4">{bullet.weight + ' gr'}</li>
                <li className="p-4">{bullet.diam + `"`}</li>
              </ul>
            </Link>
            <div className="h-4 bg-grey-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}