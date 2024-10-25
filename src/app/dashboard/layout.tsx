import { NavBar } from "./_components/NavBar";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-accent/5 min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}
