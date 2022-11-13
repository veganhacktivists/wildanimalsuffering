import { VerticalScrollbar } from "../../components/vertical-scrollbar";
import { websites } from "./resources";

export function WebsitesDesktop({ className }) {
  return (
    <VerticalScrollbar
      className={className}
      contentClassName="flex flex-col gap-4 space-y-6 !pr-8"
    >
      {websites.map((website) => (
        <div
          key={website.key}
          className="grid grid-cols-12 rounded-xl bg-white/60 p-4"
        >
          <img
            className="col-span-2 aspect-square p-4"
            src={`/images/other-resources/websites/${website.key}.png`}
            alt=""
          />

          <div className="col-span-10 flex flex-col gap-10 px-8 pt-6 pb-8">
            <div className="flex">
              <a
                href={website.url}
                target="_blank"
                className="text-2xl font-bold"
                rel="noreferrer"
              >
                {website.title}
              </a>
              <a
                className="ml-auto rounded-full bg-brown px-5 py-1 font-bold uppercase text-white"
                href={website.url}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            </div>

            <p className="text-xl">{website.description}</p>
          </div>
        </div>
      ))}
    </VerticalScrollbar>
  );
}
