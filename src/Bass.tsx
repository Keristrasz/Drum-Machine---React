import "./App.css";

export default function Bass({ bass, setBass }) {
  function handleBass() {
    setBass((prevBass) => !prevBass);
  }

  return (
    <div id="bass">
      <div className="d-flex justify-content-center mt-3 mb-0">BANK</div>
      <div className="form-check form-switch d-flex justify-content-center">
        <input
          className="form-check-input "
          type="checkbox"
          role="switch"
          onChange={handleBass}
        />
      </div>
    </div>
  );
}
