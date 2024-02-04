export default function Secondary() {
  return (
    <header className="sub">
      <div>
        <label htmlFor="gender" className="text-label">
          Gender
        </label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer Not to Say</option>
        </select>
      </div>

      <div>
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
      </div>
    </header>
  );
}
