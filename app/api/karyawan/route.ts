export async function GET() {
  return Response.json([
    { id: 1, name: "Budi", address: "Jakarta" },
    { id: 2, name: "Andi", address: "Tangerang" },
    { id: 3, name: "Siti", address: "Bandung" },
  ]);
}