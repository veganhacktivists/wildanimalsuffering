import { useTranslation } from "react-i18next";
import abyssImage from "../scale-of-suffering/images/abyss.jpg";

export function QuoteSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[40vh] items-center py-12 lg:py-16">
      <img
        src={abyssImage.src}
        alt=""
        className="fixed inset-0 -z-10 block min-h-screen w-full object-cover"
      />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-6 lg:px-8 lg:py-10">
        <div className="text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-black/40 p-8 backdrop-blur-sm lg:p-12">
            <blockquote className="relative text-xl text-white/95 lg:text-2xl">
              <svg className="absolute -top-4 -left-4 h-12 w-12 text-primary opacity-80 lg:h-16 lg:w-16" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8z"/>
              </svg>
              <span className="relative z-10 block px-8 py-6 lg:px-12 lg:py-8">
                Wild animal welfare is way less tractable than many cause areas. But I think that's outweighed by the scale: humanity, factory farmed animals, and other captive animals collectively make up only 0.1% of vertebrates. <strong>The other 99.9% of moral patients alive today are wild animals</strong> (or more, if you count invertebrates). <a 
                  href="https://forum.effectivealtruism.org/posts/idhTjyNTsyxobijyJ/wild-animal-initiative-has-urgent-need-for-more-funding-and" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm text-primary-light/80 transition-colors hover:text-primary-light"
                >
                  (source)
                </a>
              </span>
              <svg className="absolute -bottom-4 -right-4 h-12 w-12 rotate-180 text-primary opacity-80 lg:h-16 lg:w-16" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8z"/>
              </svg>
            </blockquote>
            <footer className="mt-6 text-lg text-primary-light lg:text-xl">
              <cite className="not-italic">
                — Cameron Meyer Shorb, <a 
                  href="https://www.wildanimalinitiative.org/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="underline transition-colors hover:text-primary"
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
