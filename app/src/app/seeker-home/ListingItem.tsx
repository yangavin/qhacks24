export default function ListingItem({
  address,
  distance,
  price,
}: {
  address: string;
  distance: number;
  price: number;
}) {
  return (
    <div className="listing-card">
      <img src="house.svg" alt="" />
      <h2>{address}</h2>
      <p>{distance}km away</p>
      <p>{price}/month</p>
    </div>
  );
}
