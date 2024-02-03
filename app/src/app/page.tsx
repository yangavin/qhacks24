import "./home.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-20">
      <div className="flex flex-col  w-7/12 gap-24">
        <h1 className="text-9xl">Need One More?</h1>
        <div>
          <h2 className="text-6xl underline">Find Listings</h2>
          <h2 className="text-6xl underline">Connect with Students</h2>
        </div>
        <p className="text-4xl">
          Unlock Your Ideal Home: Welcome to Housify, Where Queen&apos;s
          Students Come Together to List and Find the Perfect Living Spaces!
        </p>
        <button className="bg-blue-400 rounded-md text-5xl p-4 mt-4 w-2/5">
          Get Started
        </button>
      </div>
      <div className="absolute right-0 top-10">
        <Image
          src="person-sitting.svg"
          alt="Icon of person sitting at home"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}