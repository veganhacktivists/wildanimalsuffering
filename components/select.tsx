import { ChevronDownIcon } from "./chevron-down-icon";

type Props = React.HTMLProps<HTMLSelectElement> & {
  children?: React.ReactNode;
};

export function Select({ children, ...props }: Props) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute top-0 grid h-full place-items-center items-center gap-4 ltr:right-2 rtl:left-2">
        <ChevronDownIcon />
      </span>
      <select className="appearance-none bg-transparent pl-2 pr-8" {...props}>
        {children}
      </select>
    </div>
  );
}
