'use client'

import { useState } from "react";
import MenuLink from "../components/menuLink";

const links = [
  {
    href: '/data/components',
    text: 'Components',
  },
  // TODO: better name for this
  {
    href: '/data/loads',
    text: 'Load Data',
  },
  {
    href: '/data/velocity',
    text: 'Velocity Data',
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

// ({ children }) {
//   return (
//     <div>
//       <div className="drawer">
//         <input id="data-menu" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content">
//           {children}
//           <label htmlFor="data-menu" className="btn btn-primary drawer-button">Open drawer</label>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="data-menu" aria-label="close sidebar" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//             {links.map(link => <MenuLink key={link.text} href={link.href} text={link.text} />)}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }