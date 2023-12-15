import { forwardRef } from "react";

/**
 * @type React.ForwardRefExoticComponent<any>
 */
export const ActionButton = forwardRef(function ActionButton(
  { step, children, subtitle, as: Component = "button", ...props },
  ref,
) {
  return (
    <Component
      className="max-w-56 full aspect-square max-h-56 cursor-pointer overflow-hidden rounded-2xl border border-white/60 bg-white/30 shadow-glow-lg shadow-white/30 transition-transform duration-100 hover:scale-105 hover:shadow-white/50 ltr:text-left rtl:text-right"
      ref={ref}
      {...props}
    >
      <div className="flex h-full w-full flex-col justify-center bg-leaves bg-cover px-4 pt-6">
        <span className="pl-2 font-brand text-7xl">{step}</span>
        <span className="pb-2 pl-2 font-brand text-2xl lg:text-3xl">
          {children}
        </span>
        <span className="pb-4 pl-2">{subtitle}</span>
      </div>
    </Component>
  );
});
