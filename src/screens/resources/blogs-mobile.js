import { blogs } from "./resources";
import { DotNavigation, scrollIntoView } from "../../components/dot-navigation";
import { cx } from "../../utils/cx";
import { useRef, useState } from "react";

export function BlogsMobile({ className }) {
  const [visibleBlogKey, setVisibleBlogKey] = useState(blogs[0].key);
  const blogsRef = useRef({});

  const scrollTo = (blogKey) => {
    setVisibleBlogKey(blogKey);
    scrollIntoView(blogsRef.current[blogKey]);
  };

  return (
    <div className={cx("flex flex-col", className)}>
      <div className="flex grow gap-4 overflow-x-auto">
        {blogs.map((blog) => (
          <div
            key={blog.key}
            className="flex shrink-0 grow basis-full flex-col rounded-xl bg-white/60"
            ref={(el) => (blogsRef.current[blog.key] = el)}
          >
            <img
              className="aspect-video shrink rounded-t-xl object-cover"
              src={`/images/other-resources/blogs/${blog.key}.jpg`}
              alt=""
            />

            <div className="flex grow flex-col gap-4 p-4">
              <a
                href={blog.url}
                target="_blank"
                className="text-lg font-bold"
                rel="noreferrer"
              >
                {blog.title}
              </a>

              <p>{blog.description}</p>

              <a
                className="bg-brown ml-auto mt-auto rounded-full px-5 py-1 font-bold uppercase text-white"
                href={blog.url}
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <DotNavigation
        className="mx-5 mt-5"
        items={blogs.map((blog) => blog.key)}
        activeItem={visibleBlogKey}
        onNavigate={(blogKey) => scrollTo(blogKey)}
      />
    </div>
  );
}
