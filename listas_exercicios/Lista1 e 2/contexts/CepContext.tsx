import React, { createContext, useState, ReactNode } from "react";
import { CepData } from "../types/Cep";
import { buscarCep } from "../services/viacep";

interface CepContextType {
  resultado: CepData | null;
  historico: CepData[];
  erro: boolean;
  consultarCep: (cep: string) => Promise<void>;
}

export const CepContext = createContext<CepContextType>({} as CepContextType);

export function CepProvider({ children }: { children: ReactNode }) {
  const [resultado, setResultado] = useState<CepData | null>(null);
  const [historico, setHistorico] = useState<CepData[]>([]);
  const [erro, setErro] = useState(false);

  async function consultarCep(cep: string) {
    const data = await buscarCep(cep);
    if (!data) {
      setResultado(null);
      setErro(true);
    } else {
      setResultado(data);
      setErro(false);
      setHistorico((prev) => [...prev, data]);
    }
  }

  return (
    <CepContext.Provider value={{ resultado, historico, erro, consultarCep }}>
      {children}
    </CepContext.Provider>
  );
}