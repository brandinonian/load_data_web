import Link from "next/link";

export default function DataFlyout() {
  return (
    <div className="w-48 z-[1]">
      <div>
        <ComponentsLink />
      </div>
    </div>
  );
}

function ComponentsLink() {
  return (
    <ul className="menu rounded-box">
      <li>
        <a href="/data/components">Components</a>
        <ul>
          <li><a href="/data/components/bullets">Bullets</a></li>
          <li><a href="/data/components/cases">Cases</a></li>
          <li><a href="/data/components/powders">Powders</a></li>
          <li><a href="/data/components/primers">Primers</a></li>
        </ul>
      </li>
    </ul>
  );
}