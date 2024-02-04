"use client";
import NativeListing from "./NativeListing";
import ExternalListing from "./ExternalListing";
import Header from "./Header";
import Secondary from "./Header-Secondary";
import { useState } from "react";

export default function Page() {
  const [native, setNative] = useState(true);
  return (
    <>
      <div>
        <Header setNative={setNative} />
      </div>
      <div>
        <Secondary />
      </div>
      {native ? <NativeListing /> : <ExternalListing></ExternalListing>}
    </>
  );
}
