'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

export default function BulletPage({ params }) {

  const [bulletDetails, setBulletDetails] = useState();

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch('/api/bullets/id/' + params.id, { method: 'GET' });
      const responseObj = await response.json();
      setBulletDetails(responseObj.data);
    }
    fetchDetails();
  }, []);

  return (
    <div>
      <Link href={'/data/components/bullets'} className="btn">
        {'Back'}
      </Link>
      <div>
        {
          !bulletDetails ?
            <div>Nothing to display...</div> :
            <div>
              <div>
                {`Brand: ${bulletDetails.brand}`}
              </div>
              <div>
                {`Name: ${bulletDetails.name}`}
              </div>
              <div>
                {`Weight: ${bulletDetails.weight} gr`}
              </div>
              <div>
                {`Diameter: ${bulletDetails.diam}"`}
              </div>
            </div>
        }
      </div>
    </div>
  );
}