export default function PerspectiveButton({
  setNative,
}: {
  setNative: (native: boolean) => void;
}) {
  return (
    <>
      <div>
        <button className="perspective" onClick={() => setNative(true)}>
          <img
            className="perspective"
            src="button-left.svg"
            alt="Left Oriented Button Background"
          />
        </button>
        <button className="perspective" onClick={() => setNative(false)}>
          <img
            className="perspective"
            src="button-right.svg"
            alt="Right Oriented Button Background"
          />
        </button>
      </div>
    </>
  );
}
