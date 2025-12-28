export default function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground">{children}</span>;
}
