import contractsData from "../../data/contracts.json";

export async function POST(req: Request) {
  const body = await req.json();
  const query = String(body.query ?? "")
    .trim()
    .toLowerCase();
  if (!query) {
    return Response.json({ contracts: [] });
  }
  const filteredContracts = contractsData.contracts.filter((contract) => {
    const title = contract.title.toLowerCase();
    const description = contract.description.toLowerCase();
    return title.includes(query) || description.includes(query);
  });
  return Response.json({ contracts: filteredContracts });
}
