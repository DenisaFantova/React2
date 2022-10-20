import { createContext, useContext, useTransition } from "react";

export const SettingContext = createContext();

export const useSetting = () => useContext(SettingContext);