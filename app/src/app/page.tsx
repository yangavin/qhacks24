import "./home.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-20">
      <div className="flex flex-col gap-16">
        <h1 className="text-8xl">Room For One</h1>
        <div>
          <h2 className="text-6xl underline">Find Listings</h2>
          <h2 className="text-6xl underline">Connect with Students</h2>
        </div>
        <p className="text-4xl max-w-[30ch]">
          Unlock Your Ideal Home: Welcome to Housify, Where Queen&apos;s
          Students Come Together to List and Find the Perfect Living Spaces!
        </p>
      </div>
      <div className="mt-14">
        <a
          href="/api/auth/login"
          className="bg-blue-400 rounded-md py-3 text-2xl px-6"
        >
          Get Started
        </a>
      </div>
      <div className="absolute right-0 top-20">
        <Image
          src="person-sitting.svg"
          alt="Icon of person sitting at home"
          width={650}
          height={650}
        />
      </div>
    </div>
  );
}
