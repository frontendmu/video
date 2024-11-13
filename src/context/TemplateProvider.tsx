import {
  PropsWithChildren,
  createContext,
  useContext
} from "react";
import { Meetup, Soundtrack, Template } from "../types";

type TemplateProps = {
  meetupDetails: Meetup;
  template: Template;
  soundtrack: Soundtrack;
}

type TTemplateContext = TemplateProps | undefined;

type TemplateProviderProps = PropsWithChildren<TemplateProps>

const TemplateContext = createContext<TTemplateContext>(undefined);

export function TemplateProvider({ meetupDetails, template, soundtrack, children }: TemplateProviderProps) {
  return (
    <TemplateContext.Provider value={{ meetupDetails, template, soundtrack }}>
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const ctx = useContext(TemplateContext);

  if (!ctx) throw new Error("useTemplate must be used within a TemplateProvider!");

  return ctx!;
}