import Link from "next/link";

export default function MenuLink({ href, text, collapseHandler }) {
  return (
    <Link href={href} onClick={() => collapseHandler(true)}>
      <div className="border-b-2 border-grey-300 w-full text-center p-4 hover:bg-blue-300">
        <p>{text}</p>
      </div>
    </Link>
  );
}