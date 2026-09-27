import { Trans } from "react-i18next";
import abyssImage from "../scale-of-suffering/images/abyss.jpg";

export function QuoteSection() {
  return (
    <section className="relative flex min-h-[40vh] items-center py-12 lg:py-16">
      <img
        loading="lazy"
        decoding="async"
        src={abyssImage.src}
        alt=""
        className="fixed inset-0 -z-10 block min-h-screen w-full object-cover"
      />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-6 lg:px-8 lg:py-10">
        <div className="text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-black/40 p-8 backdrop-blur-xs lg:p-12">
            <blockquote className="relative text-xl text-white/95 lg:text-2xl">
              <svg
                className="absolute -left-4 -top-4 h-12 w-12 text-primary opacity-80 lg:h-16 lg:w-16"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8z" />
              </svg>
              <span className="relative z-10 block px-8 py-6 lg:px-12 lg:py-8">
                <Trans
                  i18nKey="quote.text"
                  components={{
                    highlight: (
                      <b
                        style={{
                          fontWeight: 500,
                          color: "rgb(232 209 167 / var(--tw-text-opacity, 1))",
                        }}
                      />
                    ),
                    "source-link": (
                      <a
                        href="https://forum.effectivealtruism.org/posts/idhTjyNTsyxobijyJ/wild-animal-initiative-has-urgent-need-for-more-funding-and"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-primary-light/80 transition-colors hover:text-primary-light"
                      />
                    ),
                  }}
                />
              </span>
              <svg
                className="absolute -bottom-4 -right-4 h-12 w-12 rotate-180 text-primary opacity-80 lg:h-16 lg:w-16"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8z" />
              </svg>
            </blockquote>
            <footer className="mt-6 text-lg text-primary-light lg:text-xl">
              <cite className="not-italic">
                — Cameron Meyer Shorb,{" "}
                <a
                  href="https://www.wildanimalinitiative.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline transition-colors hover:text-primary"
                >
                  Wild Animal Initiative
                </a>
              </cite>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
