"use client";
import { ReactNode } from "react";
import texts from "@/contents/texts/fa/index.json";

type Replacements = { [key: string]: ReactNode };

export const useRichText = () => {
  const t = (key: string, replacements?: Replacements): ReactNode => {
    const keys = key.split(".");
    let result: any = texts;
    for (const k of keys) result = result?.[k];
    if (!result) {
      console.warn(`useRichText: key "${key}" not found.`);
      return "";
    }
    if (typeof result !== "string") {
      console.warn(`useRichText: value for key "${key}" is not a string.`);
      return "";
    }
    if (!replacements) return result;
    const parts = result.split(/({{.*?}})/g);
    return parts.map((part: string, index: number) => {
      const match = part.match(/{{(.*?)}}/);
      if (match) {
        const replacementKey = match[1];
        return <span key={index}>{replacements[replacementKey] || ""}</span>;
      }
      return part;
    });
  };
  return { t };
};
