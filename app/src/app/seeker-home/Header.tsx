import "./styles.css";
import PerspectiveButton from "./PerspectiveButton";
export default function Header({
  setNative,
}: {
  setNative: (native: boolean) => void;
}) {
  return (
    <header className="top">
      <button className="general">
        <img className="general" src="settings.svg" alt="Settings Icon" />
      </button>
      <PerspectiveButton setNative={setNative} />
      <button className="general">
        <img className="general" src="chat.svg" alt="Chat Icon" />
      </button>
    </header>
  );
}
