import * as RadixAccordion from "@radix-ui/react-accordion";
import { ArrowIcon } from "~/components/arrow-icon";
import { cx } from "~/utils/cx";

export function Accordion({ children, ...props }) {
  return (
    <RadixAccordion.Root
      className="mx-auto w-full max-w-4xl space-y-2"
      type="single"
      {...props}
    >
      {children}
    </RadixAccordion.Root>
  );
}

export function AccordionItem({ index, label, content, value, ...props }) {
  return (
    <RadixAccordion.Item
      className="rounded-lg bg-white/60"
      value={value}
      {...props}
    >
      <RadixAccordion.Header className="flex rounded-lg bg-white py-2 transition-all radix-state-open:rounded-b-none">
        <RadixAccordion.Trigger className="group flex flex-1 items-center space-x-4 px-4">
          <span className="w-10 font-brand text-lg font-bold text-gray">
            {index}
          </span>
          <span className="flex-1 text-left">{label}</span>
          <span className="grid h-8 w-8 place-items-center">
            <ArrowIcon
              aria-hidden
              size={8}
              className="-rotate-180 transition group-radix-state-open:rotate-0"
            />
          </span>
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content
        className={cx(
          "overflow-hidden rounded-b-lg border border-white",
          "radix-state-closed:animate-slide-up radix-state-open:animate-slide-down",
        )}
      >
        <div className="px-5 py-5 sm:pl-18">{content}</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
