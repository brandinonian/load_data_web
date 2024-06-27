'use client'

import Link from "next/link";
import { useState } from "react";
import DataFlyout from "./dataFlyout";

export default function NavBar() {

  return (
    <div className="navbar bg-blue-500">
      {/* <div className="navbar-center">
        <a className="btn btn-ghost rounded text-xl" href="/custom">Custom Loads</a>
        <a className="btn btn-ghost rounded text-xl" href="/factory">Factory Loads</a>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded text-xl">Data</div>
          <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-grey-400 rounded-box w-52">
            <li>
              <a href="/components">Components</a>
              <ul>
                <li><a href="/components/bullets">Bullets</a></li>
                <li><a href="/components/casese">Cases</a></li>
                <li><a href="/components/powders">Powders</a></li>
                <li><a href="/components/primers">Primers</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div> */}
      <FlyoutLink href='/custom'>Custom Loads</FlyoutLink>
      <FlyoutLink href='/custom'>Factory Loads</FlyoutLink>
      <FlyoutLink href='/data' FlyoutContent={DataFlyout}>Data</FlyoutLink>
    </div>
  );
}

function FlyoutLink({ children, href, FlyoutContent }) {

  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  return (
    <div
      className="relative btn btn-ghost rounded"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={href} className="relative text-xl text-display-100">
        {children}
      </Link>
      {showFlyout && (
        <div className="absolute left-1/2 top-11 -translate-x-1/2 bg-grey-400 text-display-100 rounded text-center">
          <FlyoutContent />
        </div>
      )}
    </div>
  );
}