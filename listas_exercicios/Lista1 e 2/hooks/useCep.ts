import { useContext } from "react";
import { CepContext } from "../contexts/CepContext";

export const useCep = () => useContext(CepContext);