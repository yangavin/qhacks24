import ListingItem from "./ListingItem";

export default function NativeListing() {
  // Will pass props of posting info, must map for each and put into ListingItem
  // Maybe a container too? highkey dunno how those work tho lol sry
  return (
    <>
      <div className="flex justify-center gap-5">
        <ListingItem address="152 Collingwood St." distance={50} price={950} />
        <ListingItem address="355 Princess St." distance={150} price={1100} />
        <ListingItem address="111 Ninetower Rd." distance={75} price={875} />
        <ListingItem address="152 Robie St." distance={30} price={1300} />
      </div>
      <div className="flex justify-center gap-5">
        <ListingItem address="152 Collingwood St." distance={50} price={950} />
        <ListingItem address="355 Princess St." distance={150} price={1100} />
        <ListingItem address="111 Ninetower Rd." distance={75} price={875} />
        <ListingItem address="152 Robie St." distance={30} price={1300} />
      </div>
    </>
  );
}
