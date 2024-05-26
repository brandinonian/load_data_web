import Link from "next/link";

export default function MenuLink({ href, text, key, collapseHandler }) {
  return (
    <Link key={key} href={href} onClick={() => collapseHandler(true)}>
      <div className="border-b-2 border-grey-300 w-full text-center p-4 hover:bg-blue-300">
        <p>{text}</p>
      </div>
    </Link>
  );
}