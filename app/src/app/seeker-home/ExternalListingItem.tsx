export default function ListingItem({
  address,
  bath,
  bed,
  img,
  link,
  price,
}: {
  address: string;
  bath: string;
  bed: string;
  img: string;
  link: string;
  price: string;
}) {
  return (
    <a target="_blank" href={link} className="listing-card">
      <img src={img} alt="house-image" />
      <h2>{address}</h2>
      <p>
        {bath} {bed}
      </p>
      <p>{price}</p>
    </a>
  );
}
