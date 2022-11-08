import { useState } from "react";
import { cx } from "../../utils/cx";
import { BlogsDesktop } from "./blogs-desktop";
import { BooksDesktop } from "./books-desktop";
import { WebsitesMobile } from "./websites-mobile";
import { PodcastsMobile } from "./podcasts-mobile";
import { BooksMobile } from "./books-mobile";
import { BlogsMobile } from "./blogs-mobile";
import { WebsitesDesktop } from "./websites-desktop";
import { PodcastsDesktop } from "./podcasts-desktop";

const categories = ["blogs", "books", "websites", "podcasts"];

export function Resources() {
  const [currentCategory, setCurrentCategory] = useState("blogs");

  return (
    <section
      id="resources"
      className="relative flex min-h-screen flex-col bg-sand bg-top py-16 lg:py-24"
    >
      <div className=":g:space-y-10 relative flex grow flex-col space-y-4 px-10 pb-8">
        <h2 className="mx-auto text-center font-brand text-4xl text-white">
          Other resources you might like
        </h2>

        <div className="flex w-full grow flex-col gap-6 lg:flex-row lg:gap-12 lg:py-8">
          <div className="grid grid-cols-2 gap-0 lg:block lg:space-y-6">
            {categories.map((category) => (
              <a
                key={category}
                className={cx(
                  "flex h-[80px] w-[240px] items-center justify-center bg-center bg-no-repeat font-brand text-xl text-white odd:ml-[-50px] odd:mr-auto even:mr-[-50px] even:ml-auto lg:text-3xl lg:even:mr-0 lg:even:ml-[-50px]",
                  category === currentCategory
                    ? "odd:bg-resource-section-active even:bg-resource-section-active-flipped lg:even:bg-resource-section-active"
                    : "odd:bg-resource-section even:bg-resource-section-flipped lg:even:bg-resource-section"
                )}
                href={`#resources-${category}`}
                onClick={() => setCurrentCategory(category)}
              >
                {category}
              </a>
            ))}
          </div>

          <div
            className={
              currentCategory === "blogs" ? "hidden grow lg:flex" : "hidden"
            }
          >
            <BlogsDesktop />
          </div>

          <div className={currentCategory === "blogs" ? "lg:hidden" : "hidden"}>
            <BlogsMobile />
          </div>

          <div
            className={
              currentCategory === "books" ? "hidden grow lg:flex" : "hidden"
            }
          >
            <BooksDesktop />
          </div>

          <div className={currentCategory === "books" ? "lg:hidden" : "hidden"}>
            <BooksMobile />
          </div>

          <div
            className={
              currentCategory === "websites" ? "hidden grow lg:flex" : "hidden"
            }
          >
            <WebsitesDesktop />
          </div>

          <div
            className={currentCategory === "websites" ? "lg:hidden" : "hidden"}
          >
            <WebsitesMobile />
          </div>

          <div
            className={
              currentCategory === "podcasts" ? "hidden grow lg:flex" : "hidden"
            }
          >
            <PodcastsDesktop />
          </div>

          <div
            className={currentCategory === "podcasts" ? "lg:hidden" : "hidden"}
          >
            <PodcastsMobile />
          </div>
        </div>
      </div>
    </section>
  );
}
