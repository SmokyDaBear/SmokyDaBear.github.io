import "./Chip.css";
import type { ReactNode } from "react";

/** Small pill label. With onClick it becomes a filter button. */
export function Chip({
  children,
  active = false,
  onClick,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  const className = "chip" + (active ? " active" : "");
  if (onClick) {
    return (
      <button className={className} onClick={onClick} aria-pressed={active}>
        {children}
      </button>
    );
  }
  return <span className={className}>{children}</span>;
}

export function ChipRow({ children }: { children: ReactNode }) {
  return <div className="chip-row">{children}</div>;
}
