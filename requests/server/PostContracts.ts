import { ContractType } from "@/app/components/contracts/types/contractType";
import { ApiResult } from "../ApiResult";
import { baseUrl } from "../API_URL";

export async function PostContracts(): Promise<ApiResult<ContractType[]>> {
  try {
    const res = await fetch(baseUrl + "/api/contracts", {
      method: "POST",
      cache: "no-store",
    });
    const json = await res.json();
    if (!res.ok) return { success: false, error: json.error };
    return { success: true, data: json.contracts };
  } catch {
    return { success: false, error: "Something went wrong" };
  }
}
