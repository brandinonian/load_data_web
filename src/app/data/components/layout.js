'use client'

import MenuLink from "@/app/components/menuLink";
import { useState } from "react";


const links = [
  {
    href: '/data/components/bullets',
    text: 'Bullets',
  },
  {
    href: '/data/components/cases',
    text: 'Cases',
  },
  {
    href: '/data/components/primers',
    text: 'Primers',
  },
  {
    href: '/data/components/powders',
    text: 'Powders',
  },
]

export default function DataLayout({ children }) {

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      {isCollapsed &&
        <div className="h-full bg-grey-400 border-e-2 border-grey-300">
          <div className="bg-blue-300 p-2 mx-2" onClick={() => setIsCollapsed(false)}>{`>`}</div>
        </div>
      }
      {!isCollapsed &&
        <div className="flex flex-col w-1/4 h-full bg-grey-400 border-e-2 border-grey-300">
          <div className="bg-blue-300 p-2 self-end" onClick={() => setIsCollapsed(true)}>{`<`}</div>
          <div className="w-full h-6 border-b-2 border-grey-300"></div>
          {links.map(link => <MenuLink key={link.text} href={link.href} text={link.text} collapseHandler={setIsCollapsed} />)}
        </div>
      }
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}