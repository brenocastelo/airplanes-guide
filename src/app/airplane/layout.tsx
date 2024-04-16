export default function AirplaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Airplan layout</h1>
      <div>{children}</div>
    </div>
  );
}
