import * as RadixTabs from "@radix-ui/react-tabs";
import { useTranslation } from "react-i18next";
import { Blogs } from "./blogs";
import { Books } from "./books";
import { Podcasts } from "./podcasts";
import { Websites } from "./websites";

const ResourceTypes = {
  WEBSITES: "websites",
  BLOGS: "blogs",
  BOOKS: "books",
  PODCASTS: "podcasts",
};

function Tab({ resourceType, children }) {
  return (
    <RadixTabs.Trigger
      className="w-full rounded-full bg-brown-lighter p-2 text-xl font-medium text-white hover:bg-brown-lighter/80 radix-state-active:bg-brown"
      value={resourceType}
    >
      {children}
    </RadixTabs.Trigger>
  );
}

function MobileResourceList({ title, children }) {
  return (
    <div className="space-y-10 lg:hidden">
      <h3 className="px-8 text-center font-brand text-3xl text-white">
        {title}
      </h3>
      <div className="flex snap-x snap-mandatory scroll-px-8 gap-8 overflow-x-scroll px-8 scrollbar-none">
        {children}
      </div>
    </div>
  );
}

function TabContent({ value, children }) {
  return (
    <RadixTabs.Content value={value} className="flex flex-col gap-8">
      {children}
    </RadixTabs.Content>
  );
}

export function Resources() {
  const { t } = useTranslation();

  return (
    <RadixTabs.Root
      id={t("resources.id")}
      className="relative flex min-h-screen items-center bg-sand bg-cover py-12 lg:items-start lg:py-24"
      defaultValue={ResourceTypes.WEBSITES}
      orientation="vertical"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl grow flex-col gap-10">
        <h2 className="hidden px-8 text-center font-brand text-4xl text-white lg:block">
          {t("resources.heading")}
        </h2>

        <MobileResourceList title={t("resources.websites.name")}>
          <Websites />
        </MobileResourceList>
        <MobileResourceList title={t("resources.blogs.name")}>
          <Blogs />
        </MobileResourceList>
        <MobileResourceList title={t("resources.books.name")}>
          <Books />
        </MobileResourceList>
        <MobileResourceList title={t("resources.podcasts.name")}>
          <Podcasts />
        </MobileResourceList>

        <div className="mx-auto hidden w-full max-w-7xl grid-cols-9 gap-8 px-8 lg:grid">
          <div className="col-span-2">
            <RadixTabs.List
              className="flex flex-col gap-4"
              aria-label={t("resources.blogs.select_resource_type")}
            >
              <Tab resourceType={ResourceTypes.WEBSITES}>
                {t("resources.websites.name")}
              </Tab>
              <Tab resourceType={ResourceTypes.BLOGS}>
                {t("resources.blogs.name")}
              </Tab>
              <Tab resourceType={ResourceTypes.BOOKS}>
                {t("resources.books.name")}
              </Tab>
              <Tab resourceType={ResourceTypes.PODCASTS}>
                {t("resources.podcasts.name")}
              </Tab>
            </RadixTabs.List>
          </div>
          <div className="col-span-7">
            <TabContent value={ResourceTypes.WEBSITES}>
              <Websites />
            </TabContent>
            <TabContent value={ResourceTypes.BLOGS}>
              <Blogs />
            </TabContent>
            <TabContent value={ResourceTypes.BOOKS}>
              <Books />
            </TabContent>
            <TabContent value={ResourceTypes.PODCASTS}>
              <Podcasts />
            </TabContent>
          </div>
        </div>
      </div>
    </RadixTabs.Root>
  );
}
