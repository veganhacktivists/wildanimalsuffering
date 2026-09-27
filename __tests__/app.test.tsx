import { render, screen } from "@testing-library/react";
import type { AppProps } from "next/app";
import { useTranslation } from "react-i18next";
import { describe, expect, it, vi } from "vitest";
import de from "../lang/de.json";
import App from "../pages/_app";

vi.mock("next/font/google", () => ({
  Asap_Condensed: () => ({ style: { fontFamily: "Asap Condensed" } }),
  Poppins: () => ({ style: { fontFamily: "Poppins" } }),
}));

vi.mock("next/head", () => ({
  default: () => null,
}));

function Name() {
  const { t } = useTranslation();

  return <p>{t("common.name")}</p>;
}

describe("App", () => {
  it("renders a page in the locale its props carry", () => {
    const props = {
      Component: Name,
      pageProps: { locale: "de", messages: de },
    } as unknown as AppProps;

    render(<App {...props} />);

    expect(screen.getByText(de["common.name"])).toBeInTheDocument();
  });
});
