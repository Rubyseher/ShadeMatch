import { useState } from "react";
import "../styles/comboSuggestions.css";
import ToggleButtons from "./Utilities/ToggleButtons";
import MenWomanToggle from "./Utilities/MenWomanToggle";

interface ColorLineProps {
  name: string;
  hex: string;
}
interface NeutralItem {
  name: string;
  hex: string;
}

interface MyntraLink {
  url: string;
  title: string;
  category: string;
}
interface ColorPalletProps {
  loading: boolean;
  error: string | null;
  neutrals: Record<string, NeutralItem[]> | null;
  myntraLinks: MyntraLink[];
  colorApiPalette: Record<string, string[]> | null;
}
export default function ColorPallet({ loading, error, neutrals, myntraLinks, colorApiPalette }: ColorPalletProps) {
  const [selectedCategory, setSelectedCategory] = useState("shoes");
  const [selectedMode, setSelectedMode] = useState("analogic");

  const categoryOptions: { value: string; label: string }[] = [
    { value: "tops", label: "Tops" },
    { value: "bottoms", label: "Bottoms" },
    { value: "shoes", label: "Shoes" },
  ];
  const modeOptions: { value: string; label: string }[] = [
    { value: "analogic", label: "analogic" },
    { value: "analogic-complement", label: "Analogic Complement" },
    { value: "complement", label: "Complement" },
    { value: "monochrome", label: "Monochrome" },
    { value: "monochrome-dark", label: "Mono Dark" },
    { value: "monochrome-light", label: "Mono Light" },
    { value: "quad", label: "Quad" },
    { value: "triad", label: "Triad" },
  ];
  console.log("colorApiPalette", colorApiPalette);

  const filteredLinks = myntraLinks.filter((l) => l.category === selectedCategory);
  const ColorLine = ({ name, hex }: ColorLineProps) => {
    if (!name) return null;
    return (
      <li className="combo-line">
        <span className="combo-chip" style={{ backgroundColor: hex }}></span>
        <span className="combo-hex">{name}</span>
      </li>
    );
  };

  return (
    <>
      <div className="details-card">
        {loading && <p className="status-text">Analyzing colours…</p>}
        {error && <p className="status-text error-text">{error}</p>}
        {neutrals && (
          <>
            <div className="flex mt-2.5">
              <ToggleButtons
                value={selectedCategory}
                options={categoryOptions as any}
                onChange={(v: string) => setSelectedCategory(v)}
                wrap={false}
                center={false}
              />
              <div className="m-1">
                <MenWomanToggle defaultChecked />
              </div>
            </div>

            <h3 className="section-title">NEUTRALS</h3>
            {selectedCategory && (
              <ul className="combos-list">
                {(neutrals?.[selectedCategory] || []).map((item: NeutralItem) => (
                  <ColorLine key={`${selectedCategory}-${item.hex}`} name={item.name} hex={item.hex} />
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <div className="details-card details-card--full">
        {/* 🔽 NEW: Myntra section */}
        {selectedMode && Object.keys(colorApiPalette || {}).length > 0 && (
          <div className="myntra-section ">
            <h3 className="section-title">MORE COMBINATIONS</h3>
            <div className="toggle-row">
              <ToggleButtons value={selectedMode} options={modeOptions as any} onChange={(v: string) => setSelectedMode(v)} wrap center />
            </div>
            <ul className="combos-list">
              {(colorApiPalette?.[selectedMode] || []).map((hex: string) => (
                <li key={`${selectedMode}-${hex}`} className="combo-line">
                  <span className="combo-chip" style={{ backgroundColor: hex }} />
                  <span className="combo-hex">{hex}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* <div className="details-card details-card--full">
        {myntraLinks.length > 0 && (
          <div className="myntra-section ">
            <h3 className="section-title">links</h3>

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
      </div> */}
    </>
  );
}
