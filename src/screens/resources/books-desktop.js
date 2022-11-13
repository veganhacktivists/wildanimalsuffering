import { VerticalScrollbar } from "../../components/vertical-scrollbar";
import { books } from "./resources";

export function BooksDesktop({ className }) {
  return (
    <VerticalScrollbar
      className={className}
      contentClassName="flex flex-col gap-4 !pr-8"
    >
      {books.map((book) => (
        <div key={book.key} className="grid grid-cols-12">
          <img
            className="col-span-2 aspect-4/5 h-full rounded-l-xl object-cover"
            src={`/images/other-resources/books/${book.key}.jpg`}
            alt=""
          />

          <div className="col-span-10 flex flex-col gap-10 rounded-r-xl bg-white/60 px-8 pt-6 pb-8">
            <p>
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noreferrer"
                className="text-2xl font-bold"
              >
                {book.title}
              </a>
              <br />
              <span>by {book.author}</span>
            </p>

            <p className="text-xl">{book.description}</p>

            <div className="mt-auto flex gap-4">
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
                href={book.eBookUrl}
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
                FIND ON AMAZON
              </a>
            </div>
          </div>
        </div>
      ))}
    </VerticalScrollbar>
  );
}
