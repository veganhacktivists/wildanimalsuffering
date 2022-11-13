import { books } from "./resources";
import { DotNavigation, scrollIntoView } from "../../components/dot-navigation";
import { cx } from "../../utils/cx";
import { useRef, useState } from "react";

export function BooksMobile({ className }) {
  const [visibleBookKey, setVisibleBookKey] = useState(books[0].key);
  const booksRef = useRef({});

  const scrollTo = (bookKey) => {
    setVisibleBookKey(bookKey);
    scrollIntoView(booksRef.current[bookKey]);
  };

  return (
    <div className={cx("flex flex-col", className)}>
      <div className="flex grow gap-4 overflow-x-auto">
        {books.map((book) => (
          <div
            key={book.key}
            className="flex shrink-0 grow basis-full flex-col rounded-xl bg-white/60"
            ref={(el) => (booksRef.current[book.key] = el)}
          >
            <img
              className="aspect-video shrink rounded-t-xl object-cover"
              src={`/images/other-resources/books/${book.key}.jpg`}
              alt=""
            />

            <div className="flex grow flex-col gap-4 p-4">
              <a
                href={book.url}
                target="_blank"
                className="text-lg font-bold"
                rel="noreferrer"
              >
                {book.title}
              </a>

              <p>{book.description}</p>

              <div className="mt-auto flex justify-center gap-4">
                <a
                  className="rounded-full bg-brown px-5 py-1 font-bold uppercase text-white"
                  href={book.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WEBSITE
                </a>

                <a
                  className="rounded-full bg-brown px-5 py-1 font-bold uppercase text-white"
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  eBOOK
                </a>

                <a
                  className="rounded-full bg-brown px-5 py-1 font-bold uppercase text-white"
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  AMAZON
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DotNavigation
        className="mx-5 mt-5"
        items={books.map((book) => book.key)}
        activeItem={visibleBookKey}
        onNavigate={(bookKey) => scrollTo(bookKey)}
      />
    </div>
  );
}
