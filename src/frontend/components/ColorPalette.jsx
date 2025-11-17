import "../styles/comboSuggestions.css";

export default function ColorPalette({ imageUrl, dominant, palette }) {
  return (
    <div className="preview-card">
      {imageUrl && <img src={imageUrl} alt="Uploaded clothing" className="preview-image" />}

      {dominant && (
        <div className="dominant-row">
          <span className="dominant-label">Dominant colour</span>
          <div className="color-chip-big" style={{ backgroundColor: dominant }} />
          <span className="hex-text">{dominant}</span>
        </div>
      )}
      {palette.length > 0 && (
        <div className="palette-row">
          {palette.map((hex) => (
            <div key={hex} className="palette-chip-wrapper">
              <div className="color-chip" style={{ backgroundColor: hex }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
