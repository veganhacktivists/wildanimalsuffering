import { ChevronDownIcon } from "./chevron-down-icon";

type Props = React.HTMLProps<HTMLSelectElement> & {
  children?: React.ReactNode;
};

export function Select({ children, ...props }: Props) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute right-2 top-0 grid h-full place-items-center items-center gap-4">
        <ChevronDownIcon />
      </span>
      <select className="appearance-none bg-transparent pl-2 pr-8" {...props}>
        {children}
      </select>
    </div>
  );
}
