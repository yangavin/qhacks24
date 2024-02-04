import NativeListing from "./Listing";
import Header from "./Header";
import Secondary from "./Header-Secondary";

export default function Page() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Secondary />
      </div>
      <NativeListing />
    </>
  );
}
