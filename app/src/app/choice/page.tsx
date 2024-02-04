import "./styles.css";
import { Buttons } from "./buttons";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Choice() {
    return (
      <>
        <h1 className="header-1">Housing Made Easier</h1>
        <h2 className="header-2">What are we Looking For?</h2>
        <Buttons />
      </>
    );
  },
  { returnTo: "/choice" }
);
