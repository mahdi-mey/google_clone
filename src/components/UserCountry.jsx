"use client";

import { useEffect, useState } from "react";

export default function UserCountry() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function getCountry() {
      try {
        const res = await fetch(
          "http://ip-api.com/json/?fields=status,message,country,countryCode",
        );
        const data = await res.json();

        if (data.status === "success") {
          setCountry(data.country); // Set the country if the request is successful
        } else {
          console.error("Failed to fetch country data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    }

    getCountry();
  }, []);

  return <h3 className="ml-4">{country}</h3>;
}
