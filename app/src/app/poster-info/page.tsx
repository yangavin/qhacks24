import "./styles.css";
import Image from "next/image";
import { Form } from "./Form";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function PosterInfo() {
    return (
      <>
        <Form />
        <div className="absolute right-0 top-10">
          <Image
            src="person-sitting.svg"
            alt="Icon of person sitting at home"
            width={800}
            height={800}
          />
        </div>
      </>
    );
  },
  { returnTo: "/poster-info" }
);
