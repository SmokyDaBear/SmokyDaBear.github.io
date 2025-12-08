export function Slider({ on, onClick }: { on: boolean; onClick?: () => void }) {
  return (
    <div
      className={"slider" + (on ? " on" : " off")}
      onClick={onClick}
      style={{
        border: "2px solid var(--border)",
        borderRadius: "500px",
        backgroundColor: "var(--bg-tertiary)",
        padding: "4px",
        width: "40px",
        height: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: on ? "flex-end" : "flex-start",
        cursor: "pointer",
        transition: "background-color 0.3s, justify-content 0.3s",
      }}
    >
      <div
        className="slider-circle"
        style={{
          backgroundColor: "var(--text-primary)",
          borderRadius: "50%",
          width: "12px",
          height: "12px",
          transition: "background-color 0.3s",
        }}
      ></div>
    </div>
  );
}
