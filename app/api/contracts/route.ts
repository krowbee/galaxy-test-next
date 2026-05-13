import contractsData from "../../data/contracts.json";

export async function POST() {
  return Response.json(contractsData);
}
