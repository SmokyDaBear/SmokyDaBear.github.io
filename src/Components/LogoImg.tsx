export function LogoImg({
  borderRadius = 36,
  borderThickness = 4,
  preferredSize = 150,
}: {
  borderRadius?: number;
  borderThickness?: number;
  preferredSize?: number;
}) {
  const innerRadius = borderRadius - borderThickness;
  return (
    <div
      className="rotating-bg green-glow"
      style={{
        maxWidth: preferredSize,
        maxHeight: preferredSize,
        width: preferredSize,
        height: preferredSize,
        padding: `${borderThickness}px`,
        margin: "1rem auto",
        borderRadius: borderRadius,
      }}
    >
      <img
        src="/verdant-icon.svg"
        alt="Verdant Logo"
        style={{
          width: "100%",
          height: "100%",
          padding: "6px",
          backgroundColor: "var(--bg-logo)",
          boxShadow: "inset  0 0 20px var(--verdant-green)",
          display: "block",
          margin: "0 auto",
          borderRadius: innerRadius,
        }}
      />
    </div>
  );
}
