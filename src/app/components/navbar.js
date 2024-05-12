import Link from "next/link";

export default function NavBar() {

  const links = [
    {
      text: "Home",
      href: "/",
      key: 1,
    },
    {
      text: "Factory",
      href: "/factory",
      key: 2,
    },
    {
      text: "Custom",
      href: "/custom",
      key: 3,
    },
    { 
      text: "Data",
      href: "/data",
      key: 4,
    },
  ];

  return (
    <div className="flex flex-row bg-blue-500 w-full">
      {links.map(link => (
        <Link href={link.href} key={link.key}>
          <div className="bg-blue-400 p-4 px-8 hover:bg-blue-300">
            <p className="text-display-100">{link.text}</p>
          </div>
        </Link>
      ))
      }
    </div>
  );
}