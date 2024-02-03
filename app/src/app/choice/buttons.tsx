export function Buttons() {
  return (
    <div className="button-container">
      <button className="btn" role="button">
        <div className="button-image">
          <img src="seeker.svg" alt="" />
        </div>
        <div className="button-text">
          <span className="btn-text"> Find a Place</span>
        </div>
      </button>
      <button className="btn" role="button">
        <img src="house.svg" alt="" />
        <span className="btn-text"> Find a Roommate</span>
      </button>
    </div>
  );
}
