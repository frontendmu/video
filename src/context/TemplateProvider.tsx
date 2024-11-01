import {
  PropsWithChildren,
  createContext,
  useContext
} from "react";
import { Meetup, Template } from "../types";

type TemplateProps = {
  meetupDetails: Meetup;
  template: Template;
}

type TTemplateContext = TemplateProps | undefined;

type TemplateProviderProps = PropsWithChildren<TemplateProps>

const TemplateContext = createContext<TTemplateContext>(undefined);

export function TemplateProvider({ meetupDetails, template, children }: TemplateProviderProps) {
  return (
    <TemplateContext.Provider value={{ meetupDetails, template }}>
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const ctx = useContext(TemplateContext);

  if (!ctx) throw new Error("useTemplate must be used within an TemplateProvider!");

  return ctx!;
}