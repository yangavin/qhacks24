import { Header } from "./Header";

export function Form() {
  return (
    <>
      <form>
        <div className="backdrop">
          <Header />
          <label htmlFor="name" className="text-label">
            Name
          </label>
          <input
            className="input-spacing"
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="age" className="text-label">
            Age
          </label>
          <input
            className="input-spacing"
            type="text"
            id="age"
            name="age"
            required
          />

          <label htmlFor="gender" className="text-label">
            Gender
          </label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer Not to Say</option>
          </select>

          <label htmlFor="email" className="text-label">
            Email
          </label>
          <input
            className="input-spacing"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="phone" className="text-label">
            Phone Number (Optional)
          </label>
          <input className="input-spacing" type="tel" id="phone" name="phone" />

          <h1 className="header-1">What Are YOU Looking For?</h1>

          <label htmlFor="price-range" className="text-label">
            Price Range
          </label>
          <select id="price" name="price-range">
            <option value="option-1">Less Than $750 </option>
            <option value="option-2">$750-$850</option>
            <option value="option-3">$850-$950</option>
            <option value="option-4">$950-$1050</option>
            <option value="option-5">More Than $1050</option>
          </select>

          <label htmlFor="pet-preference" className="text-label">
            Pet Friendly?
          </label>
          <select id="response" name="pet">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label htmlFor="smoke-preference" className="text-label">
            Smoke Friendly?
          </label>
          <select id="response" name="smoke">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label htmlFor="distance-preference" className="text-label">
            Distance From Campus?
          </label>
          <select id="distance" name="distance-range">
            <option value="option-1">Less Than 5km </option>
            <option value="option-2">5km-1km</option>
            <option value="option-3">10km-15km</option>
            <option value="option-4">More Than 15km</option>
          </select>

          <button className="submission-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
