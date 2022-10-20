import { createContext, useContext } from "react";

export const CinnostContext = createContext();

export const useCinnost = () => useContext(CinnostContext);