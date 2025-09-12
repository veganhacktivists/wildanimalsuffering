import { useTranslation, Trans } from "react-i18next";
import { WindEffect } from "~/components/wind-effect";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "~/components/chevron-down-icon";

const CollapsibleSection = ({ sectionNumber, title, children, isOpen, onToggle }) => {
  return (
    <div className="rounded-2xl border border-white/40 bg-black/30 backdrop-blur-sm overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full text-left transition-colors focus:outline-none ${
          !isOpen ? 'hover:bg-white/10 focus:bg-white/10' : ''
        }`}
        style={{ padding: '1.2rem' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
              {sectionNumber}
            </div>
            <h3 className="font-brand text-2xl font-bold text-white lg:text-3xl">
              {title}
            </h3>
          </div>
          <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="h-8 w-8" viewBox="0 0 15 9" fill="none">
              <path
                d="M2.09155 2.29578L7.20878 7.57418C7.24613 7.61523 7.29124 7.64795 7.34133 7.67032C7.39142 7.69269 7.44542 7.70423 7.5 7.70423C7.55458 7.70423 7.60859 7.69269 7.65867 7.67032C7.70876 7.64795 7.75388 7.61523 7.79123 7.57418L12.9085 2.29578"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </button>
                    <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'translate-y-0' : '-translate-y-2'
                  }`}
                  style={{ padding: '0 1.2rem 1.2rem 1.2rem' }}
                >
                  {children}
                </div>
              </div>
    </div>
  );
};

export function ProposedSolutions() {
  const { t, ready } = useTranslation();
  const [openSection, setOpenSection] = useState(null); // Start with no section open
  const [isHydrated, setIsHydrated] = useState(false);

  // Set first section open after hydration to avoid SSR mismatch
  useEffect(() => {
    setIsHydrated(true);
    setOpenSection(1); // First section open by default after hydration
  }, []);

  // Don't render until translations are ready to avoid hydration mismatch
  if (!ready) {
    return (
      <section className="relative flex min-h-screen items-center bg-proposed-solutions bg-cover bg-fixed bg-no-repeat py-12 lg:items-start lg:py-24">
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-12 px-8">
          <div className="text-center">
            <div className="h-12 bg-white/20 rounded animate-pulse"></div>
            <div className="mt-6 h-6 bg-white/10 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0">
          <WindEffect />
        </div>
      </section>
    );
  }

  const toggleSection = (sectionNumber) => {
    setOpenSection(openSection === sectionNumber ? null : sectionNumber);
  };

  return (
    <>
    <section
      id={t("proposed_solutions.id")}
      className="relative flex min-h-screen items-center bg-proposed-solutions bg-cover bg-fixed bg-no-repeat py-12 lg:items-start lg:py-24"
    >

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-12 px-8">
        <div className="text-center">
          <h2 className="pt-8 font-brand text-4xl font-bold text-white lg:text-5xl">
            {t("proposed_solutions.heading")}
          </h2>
          <p className="mt-6 text-lg text-white/90 lg:text-xl">
            {t("proposed_solutions.description")}
          </p>
        </div>

        <div className="space-y-4">
          <CollapsibleSection
            sectionNumber={1}
            title={t("proposed_solutions.research.title")}
            isOpen={openSection === 1}
            onToggle={() => toggleSection(1)}
          >
            <div className="space-y-4 text-white/90">
              <p>{t("proposed_solutions.research.description1")}</p>
              <p>{t("proposed_solutions.research.description2")}</p>
              <p>
                <Trans
                  i18nKey="proposed_solutions.research.description3"
                  components={{
                    1: <a
                      href="https://www.wildanimalinitiative.org/grantees"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-primary-light underline transition-colors hover:text-primary"
                    />
                  }}
                />
              </p>
              <div className="mt-6 rounded-xl border-2 border-primary/60 bg-black/40 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    💡
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-primary-light">How You Can Help:</h4>
                    <p className="text-sm text-white/90">
                      {t("proposed_solutions.research.how_to_help")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            sectionNumber={2}
            title={t("proposed_solutions.disease_control.title")}
            isOpen={openSection === 2}
            onToggle={() => toggleSection(2)}
          >
            <div className="space-y-4 text-white/90">
              <p>{t("proposed_solutions.disease_control.description1")}</p>
              <p>{t("proposed_solutions.disease_control.description2")}</p>
              <p>{t("proposed_solutions.disease_control.description3")}</p>
              <div className="mt-6 rounded-xl border-2 border-primary/60 bg-black/40 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    💡
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-primary-light">How You Can Help:</h4>
                    <p className="text-sm text-white/90">
                      {t("proposed_solutions.disease_control.how_to_help")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            sectionNumber={3}
            title={t("proposed_solutions.policy_advocacy.title")}
            isOpen={openSection === 3}
            onToggle={() => toggleSection(3)}
          >
            <div className="space-y-4 text-white/90">
              <p>{t("proposed_solutions.policy_advocacy.description1")}</p>
              <p>{t("proposed_solutions.policy_advocacy.description2")}</p>
              <p>{t("proposed_solutions.policy_advocacy.description3")}</p>
              <div className="mt-6 rounded-xl border-2 border-primary/60 bg-black/40 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    💡
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-primary-light">How You Can Help:</h4>
                    <p className="text-sm text-white/90">
                      {t("proposed_solutions.policy_advocacy.how_to_help")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            sectionNumber={4}
            title={t("proposed_solutions.spreading_awareness.title")}
            isOpen={openSection === 4}
            onToggle={() => toggleSection(4)}
          >
            <div className="space-y-4 text-white/90">
              <p>{t("proposed_solutions.spreading_awareness.description1")}</p>
              <p>{t("proposed_solutions.spreading_awareness.description2")}</p>
              <div className="mt-6 rounded-xl border-2 border-primary/60 bg-black/40 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    💡
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-primary-light">How You Can Help:</h4>
                    <p className="text-sm text-white/90">
                      <Trans
                        i18nKey="proposed_solutions.spreading_awareness.how_to_help"
                        components={{
                          1: <a
                            href="https://www.animal-ethics.org/wild-animal-suffering-video-course/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-primary-light underline transition-colors hover:text-primary"
                          />
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            sectionNumber={5}
            title={t("proposed_solutions.helping_animals_near_us.title")}
            isOpen={openSection === 5}
            onToggle={() => toggleSection(5)}
          >
            <div className="space-y-4 text-white/90">
              <p>{t("proposed_solutions.helping_animals_near_us.description1")}</p>
              <p>{t("proposed_solutions.helping_animals_near_us.description2")}</p>
              <div className="mt-6 rounded-xl border-2 border-primary/60 bg-black/40 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    💡
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-primary-light">How You Can Help:</h4>
                    <p className="text-sm text-white/90">
                      <Trans
                        i18nKey="proposed_solutions.helping_animals_near_us.how_to_help"
                        components={{
                          1: <a
                            href="https://guarinicenter.org/wp-content/uploads/2024/03/Wild-Animal-Welfare-in-Local-Policies-Policy-Brief.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-primary-light underline transition-colors hover:text-primary"
                          />
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            sectionNumber={6}
            title={t("proposed_solutions.disaster_relief.title")}
            isOpen={openSection === 6}
            onToggle={() => toggleSection(6)}
          >
            <div className="space-y-4 text-white/90">
              <p>{t("proposed_solutions.disaster_relief.description1")}</p>
              <p>{t("proposed_solutions.disaster_relief.description2")}</p>
              <div className="mt-6 rounded-xl border-2 border-primary/60 bg-black/40 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    💡
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-primary-light">How You Can Help:</h4>
                    <p className="text-sm text-white/90">
                      {t("proposed_solutions.disaster_relief.how_to_help")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            sectionNumber={7}
            title={t("proposed_solutions.treating_parasites.title")}
            isOpen={openSection === 7}
            onToggle={() => toggleSection(7)}
          >
            <div className="space-y-4 text-white/90">
              <p>{t("proposed_solutions.treating_parasites.description1")}</p>
              <p>
                <Trans
                  i18nKey="proposed_solutions.treating_parasites.description2"
                  components={{
                    1: <a
                      href="https://screwworm.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-primary-light underline transition-colors hover:text-primary"
                    />
                  }}
                />
              </p>
              <p>{t("proposed_solutions.treating_parasites.description3")}</p>
              <div className="mt-6 rounded-xl border-2 border-primary/60 bg-black/40 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    💡
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-primary-light">How You Can Help:</h4>
                    <p className="text-sm text-white/90">
                      <Trans
                        i18nKey="proposed_solutions.treating_parasites.how_to_help"
                        components={{
                          1: <a
                            href="https://screwworm.org/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-primary-light underline transition-colors hover:text-primary"
                          />
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            sectionNumber={8}
            title={t("proposed_solutions.artificial_intelligence.title")}
            isOpen={openSection === 8}
            onToggle={() => toggleSection(8)}
          >
            <div className="space-y-4 text-white/90">
              <p>{t("proposed_solutions.artificial_intelligence.description1")}</p>
              <p>{t("proposed_solutions.artificial_intelligence.description2")}</p>
              <p>{t("proposed_solutions.artificial_intelligence.description3")}</p>
              <div className="mt-6 rounded-xl border-2 border-primary/60 bg-black/40 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    💡
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-primary-light">How You Can Help:</h4>
                    <p className="text-sm text-white/90">
                      {t("proposed_solutions.artificial_intelligence.how_to_help")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>
        
        {/* Decorative bottom image with proper padding */}
        <div className="flex justify-center pb-4 pt-12">
          <img
            src="/images/proposed-solutions-bottom-decorative.png"
            alt="Decorative wildlife illustration"
            className="max-h-96 w-auto max-w-full scale-150 opacity-80 lg:scale-200"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <WindEffect />
      </div>
    </section>
    </>
  );
}