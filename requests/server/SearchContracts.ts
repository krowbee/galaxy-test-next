import { getBaseUrl } from "../API_URL";

export async function searchContracts(query: string) {
  try {
    const res = await fetch(getBaseUrl() + "/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });
    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error };
    }

    return { success: true, data: json.contracts };
  } catch {
    return { success: false, error: "Something went wrong" };
  }
}
