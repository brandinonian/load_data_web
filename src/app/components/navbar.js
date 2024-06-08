import Link from "next/link";

export default function NavBar() {

  return (
    <div className="flex flex-row bg-blue-500 w-full">
      <Link href={'/factory'}>
        <div className="bg-blue-400 p-4 px-8 hover:bg-blue-300">
          <p className="text-display-100">Factory</p>
        </div>
      </Link>
      <Link href={'/custom'}>
        <div className="bg-blue-400 p-4 px-8 hover:bg-blue-300">
          <p className="text-display-100">Custom</p>
        </div>
      </Link>
      {/* TODO make this a dropdown */}
      <div className="bg-blue-400 p-4 px-8 hover:bg-blue-300">
        <p className="text-display-100">Data</p>
      </div>
    </div>
  );
}