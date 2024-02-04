import Image from "next/image";

export function Buttons() {
  return (
    <div className="button-container">
      <a href="/seeker-info" className="btn" role="button">
        <div className="button-image">
          <img src="seeker.svg" alt="" />
        </div>
        <div className="button-text">
          <span className="btn-text"> Find a Place</span>
        </div>
      </a>
      <a href="/poster-info" className="btn" role="button">
        <img src="house.svg" alt="" />
        <span className="btn-text">Find a Roommate</span>
      </a>
    </div>
  );
}
