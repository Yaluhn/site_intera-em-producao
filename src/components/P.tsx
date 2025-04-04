
interface PProps {
  p: string;
  style: React.CSSProperties;
}

export const P = (prop: PProps) => {
  return (
    <p style={prop.style}>{prop.p}</p>
  )}