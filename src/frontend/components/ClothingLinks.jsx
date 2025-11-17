import { useState } from "react";
import "../styles/comboSuggestions.css";
import ToggleButtons from "./ToggleButtons";

export default function ClothingLinks({ loading, error, combos, myntraLinks }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredLinks = selectedCategory == "all" ? myntraLinks : myntraLinks.filter((l) => l.category === selectedCategory);
  const ColorLine = ({ label, name, hex }) => {
    if (!name) return null;
    return (
      <li className="combo-line">
        <span className="combo-label">{label}:</span>
        <span className="combo-chip" style={{ backgroundColor: hex }}></span>
        <span className="combo-hex">{name}</span>
      </li>
    );
  };

  const CategoryPill = ({ label, value, selected, onClick }) => {
    return (
      <button type="button" className={"category-pill" + (selected ? "category-pill--active" : "")} onClick={() => onClick(value)}>
        {label}
      </button>
    );
  };

  return (
    <div className="details-card">
      {loading && <p className="status-text">Analyzing colours…</p>}
      {error && <p className="status-text error-text">{error}</p>}
      <ToggleButtons />
      {combos && (
        <>
          <h3 className="section-title">Suggested combinations</h3>
          <ul className="combos-list">
            {(combos.bottoms || []).map((item) => (
              <ColorLine key={`bottom-${item.hex}`} label="Bottoms" name={item.name} hex={item.hex} />
            ))}

            {(combos.shoes || []).map((item) => (
              <ColorLine key={`shoe-${item.hex}`} label="Shoes" name={item.name} hex={item.hex} />
            ))}

            {(combos.accents || []).map((item) => (
              <ColorLine key={`accent-${item.hex}`} label="Accent" name={item.name} hex={item.hex} />
            ))}
          </ul>
        </>
      )}

      {/* 🔽 NEW: Myntra section */}
      {myntraLinks.length > 0 && (
        <div className="myntra-section">
          <h3 className="section-title">Shop matching pieces</h3>

          <div className="pill-row">
            <CategoryPill label="All" value="all" selected={selectedCategory === "all"} onClick={setSelectedCategory} />
            <CategoryPill label="Tops" value="tops" selected={selectedCategory === "tops"} onClick={setSelectedCategory} />
            <CategoryPill label="Bottoms" value="bottoms" selected={selectedCategory === "bottoms"} onClick={setSelectedCategory} />
            <CategoryPill label="Dresses" value="dresses" selected={selectedCategory === "dresses"} onClick={setSelectedCategory} />
          </div>

          <div className="myntra-list">
            {filteredLinks.map((item) => (
              <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="myntra-card">
                <p className="myntra-title">{item.title}</p>
                {item.category && <span className="myntra-category-tag">{item.category}</span>}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
