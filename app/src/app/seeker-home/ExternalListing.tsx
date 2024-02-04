import { useEffect, useState } from "react";
import ExternalListingItem from "./ExternalListingItem";

type Listing = {
  bathrooms: string;
  bedrooms: string;
  house_link: string;
  image_url: string;
  name: string;
  price: string;
};

export default function ExternalListing() {
  const [listings, setListings] = useState<Listing[]>([]);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_WEB_SCRAPE_URL as string, { mode: "no-cors" })
      .then((response) => response.json())
      .then((data: Listing[]) => setListings(data));
  });
  if (listings.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {listings.map((listing) => (
          <ExternalListingItem
            key={listing.house_link}
            address={listing.name}
            bath={listing.bathrooms}
            bed={listing.bedrooms}
            link={listing.house_link}
            img={listing.image_url}
            price={listing.price}
          />
        ))}
      </div>
    </>
  );
}
