export default function Secondary() {
  return (
    <header className="sub">
      <div>
        <label htmlFor="bedroom" className="text-label">
          Bedroom No.
        </label>
        <select id="bedroom" name="bedroom">
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option4">4+</option>
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
