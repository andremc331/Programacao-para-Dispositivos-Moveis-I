import axios from "axios";
import { CepData } from "../types/Cep";

export async function buscarCep(cep: string): Promise<CepData | null> {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data as CepData;
    if (data.erro) return null;
    return data;
  } catch {
    return null;
  }
}