import { websites } from "./resources";
import { DotNavigation, scrollIntoView } from "../../components/dot-navigation";
import { cx } from "../../utils/cx";
import { useRef, useState } from "react";

export function WebsitesMobile({ className }) {
  const [visibleWebsiteKey, setVisibleWebsiteKey] = useState(websites[0].key);
  const websitesRef = useRef({});

  const scrollTo = (websiteKey) => {
    setVisibleWebsiteKey(websiteKey);
    scrollIntoView(websitesRef.current[websiteKey]);
  };

  return (
    <div className={cx("flex flex-col", className)}>
      <div className="flex grow gap-2 overflow-x-auto">
        {websites.map((website) => (
          <div
            key={website.key}
            className="flex shrink-0 grow basis-full flex-col gap-4 rounded-xl bg-white/60 p-4"
            ref={(el) => (websitesRef.current[website.key] = el)}
          >
            <img
              className="aspect-square shrink self-center p-4"
              src={`/images/other-resources/websites/${website.key}.png`}
              alt=""
            />

            <a
              href={website.url}
              target="_blank"
              className="text-lg font-bold"
              rel="noreferrer"
            >
              {website.title}
            </a>

            <p>{website.description}</p>

            <a
              className="bg-brown ml-auto mt-auto rounded-full px-5 py-1 font-bold uppercase text-white"
              href={website.url}
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        ))}
      </div>

      <DotNavigation
        className="mx-5 mt-5"
        items={websites.map((website) => website.key)}
        activeItem={visibleWebsiteKey}
        onNavigate={(websiteKey) => scrollTo(websiteKey)}
      />
    </div>
  );
}
