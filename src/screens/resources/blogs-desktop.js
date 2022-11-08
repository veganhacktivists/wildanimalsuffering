import { VerticalScrollbar } from "../videos/vertical-scrollbar";
import { blogs } from "./resources";
import { cx } from "../../utils/cx";

export function BlogsDesktop({ className }) {
  return (
    <div className={cx("grid grow grid-cols-12 gap-12", className)}>
      <div className="col-span-7 flex flex-col">
        <div className="flex grow flex-col">
          <img
            className="h-full rounded-t-xl object-cover"
            src={`/images/other-resources/blogs/${blogs[0].key}.jpg`}
            alt=""
          />

          <div className="flex grow flex-col gap-4 rounded-b-xl bg-white/60 p-6 text-lg shadow-[0px_0px_3px_1px_rgba(255,255,255,1)]">
            <div className="flex items-center gap-4">
              <a
                className="text-xl font-bold"
                href={blogs[0].url}
                target="_blank"
                rel="noreferrer"
              >
                {blogs[0].title}
              </a>

              <time>{blogs[0].date.toLocaleDateString("en-US")}</time>

              <a
                className="ml-auto whitespace-nowrap rounded-full bg-brown px-5 py-1 font-bold uppercase text-white"
                href={blogs[0].url}
              >
                Read more
              </a>
            </div>

            <p>
              This is an area often overlooked in calculations about the
              effectiveness of our actions to reduce suffering...
            </p>
          </div>
        </div>
      </div>

      <VerticalScrollbar
        className="col-span-5 flex flex-col"
        contentClassName="!pr-8 !space-y-6"
      >
        {blogs.slice(1).map((blog) => (
          <div key={blog.key} className="grid grid-cols-12">
            <img
              className="col-span-5 aspect-4/3 h-full rounded-l-xl object-cover"
              src={`/images/other-resources/blogs/${blog.key}.jpg`}
              alt=""
            />
            <div className="col-span-7 flex flex-col gap-4 rounded-r-xl bg-white/60 p-4">
              <a
                className="font-bold"
                href={blog.url}
                target="_blank"
                rel="noreferrer"
              >
                {blog.title}
              </a>
              <time>{blog.date.toLocaleDateString("en-US")}</time>
            </div>
          </div>
        ))}
      </VerticalScrollbar>
    </div>
  );
}
