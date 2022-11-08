import { websites } from "./resources";
import { DotNavigation } from "../videos/dot-navigation";
import { cx } from "../../utils/cx";
import { videos } from "../videos/videos";
import { useRef, useState } from "react";

export function WebsitesMobile({ className }) {
  const [visibleWebsiteKey, setVisibleWebsiteKey] = useState(videos[0].id);
  const websitesRef = useRef({});

  const scrollTo = (websiteKey) => {
    setVisibleWebsiteKey(websiteKey);

    websitesRef.current[websiteKey].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
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
              className="ml-auto mt-auto rounded-full bg-brown px-5 py-1 font-bold uppercase text-white"
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
