import { useState } from "react";
import {
  arrowUpRight,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  clock,
  closeIcon,
  email,
  gitHub,
  gridIcon,
  hamburger,
  leftArrow,
  linkedIn,
  linkIcon,
  listIcon,
  phone,
  rightArrow,
  searchIcon,
  plus,
  uI,
  warning,
  webDev,
} from "./icons";
import { ImageFormatter } from "../offline-utils/ImageFormatter/ImageFormatter";

type ImageMimeType = "image/png" | "image/jpeg" | "image/webp";

const EXT: Record<ImageMimeType, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
};

const parseAspectRatio = (value: string): number => {
  const parsed = value.replace(/[^0-9./]/g, "");
  const parts = parsed.split("/");
  const width = parseFloat(parts[0]);
  const height = parts[1] ? parseFloat(parts[1]) : 1;
  return width && height ? width / height : 1;
};

export function HiddenIconPage() {
  const [burgerActive, setBurgerActive] = useState(true);
  const [showFormatter, setShowFormatter] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formattedImage, setFormattedImage] = useState<File | null>(null);
  const [aspectRatioRaw, setAspectRatioRaw] = useState("16/9");
  const [maxSize, setMaxSize] = useState<number>(1024);
  const [imageType, setImageType] = useState<ImageMimeType>("image/webp");

  const aspectRatio = parseAspectRatio(aspectRatioRaw);

  const downloadImage = () => {
    if (!formattedImage) return;
    const url = URL.createObjectURL(formattedImage);
    const a = document.createElement("a");
    a.href = url;
    a.download = `formatted-image.${EXT[imageType]}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <section id="hidden-icon-page">
        <h1>Hidden Icon Page</h1>
        <p>
          This is a hidden page for testing icons and utilities. If you find
          this page, let me know.
        </p>

        {/* ── Icon Gallery ───────────────────────────────── */}
        <h2 className="section-title" style={{ marginTop: "2rem" }}>Icon Gallery</h2>
        <div className="icon-display">
          {linkIcon("large")}
          {warning("large")}
          {warning("large", true)}
          {clock("large")}
          {leftArrow("large")}
          {rightArrow("large")}
          {hamburger({
            active: burgerActive,
            handleClick: () => setBurgerActive(!burgerActive),
          })}
          {arrowUpRight("large")}
          {webDev("large")}
          {uI("large")}
          {plus("large")}
          {phone("large")}
          {email("large")}
          {gitHub("large")}
          {linkedIn("large")}
          {gridIcon("large")}
          {listIcon("large")}
          {searchIcon("large")}
          {chevronUp("large")}
          {chevronDown("large")}
          {chevronLeft("large")}
          {chevronRight("large")}
          {closeIcon("large")}
        </div>

        {/* ── Image Formatter ────────────────────────────── */}
        <h2 className="section-title" style={{ marginTop: "2.5rem" }}>Image Formatter</h2>
        <div className="img-tool-panel">
          <div className="img-tool-controls">
            <div className="img-tool-field">
              <label htmlFor="img-file">Source Image</label>
              <input
                id="img-file"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setFile(e.target.files?.[0] ?? null);
                  setFormattedImage(null);
                }}
              />
            </div>

            <div className="img-tool-field">
              <label htmlFor="img-type">Output Format</label>
              <select
                id="img-type"
                value={imageType}
                onChange={(e) => setImageType(e.target.value as ImageMimeType)}
              >
                <option value="image/webp">WebP</option>
                <option value="image/jpeg">JPEG</option>
                <option value="image/png">PNG</option>
              </select>
            </div>

            <div className="img-tool-field">
              <label htmlFor="img-aspect">Aspect Ratio</label>
              <input
                id="img-aspect"
                type="text"
                placeholder="e.g. 16/9 or 1.5"
                value={aspectRatioRaw}
                onChange={(e) => setAspectRatioRaw(e.target.value)}
              />
              <span className="img-tool-hint">= {aspectRatio.toFixed(3)}</span>
            </div>

            <div className="img-tool-field">
              <label htmlFor="img-maxsize">Max Size (KB)</label>
              <input
                id="img-maxsize"
                type="number"
                min={10}
                max={10000}
                value={maxSize}
                onChange={(e) => setMaxSize(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="img-tool-previews">
            {file && (
              <div className="img-tool-preview-item">
                <span className="img-tool-preview-label">Original</span>
                <img src={URL.createObjectURL(file)} alt="Original" />
              </div>
            )}
            {formattedImage && (
              <div className="img-tool-preview-item">
                <span className="img-tool-preview-label">
                  Formatted · {(formattedImage.size / 1024).toFixed(1)} KB
                </span>
                <img src={URL.createObjectURL(formattedImage)} alt="Formatted" />
              </div>
            )}
          </div>

          <div className="img-tool-actions">
            <button
              className="square-btn bg-shift"
              disabled={!file}
              onClick={() => setShowFormatter(true)}
            >
              Crop &amp; Format
            </button>
            <button
              className="square-btn"
              disabled={!formattedImage}
              onClick={downloadImage}
            >
              Download .{EXT[imageType]}
            </button>
          </div>
        </div>

        {showFormatter && file && (
          <ImageFormatter
            file={file}
            maxSizeKb={maxSize}
            aspectRatio={aspectRatio}
            imageType={imageType}
            onDone={(formatted) => {
              setFormattedImage(formatted);
              setShowFormatter(false);
            }}
            onCancel={() => setShowFormatter(false)}
          />
        )}
      </section>
    </>
  );
}
