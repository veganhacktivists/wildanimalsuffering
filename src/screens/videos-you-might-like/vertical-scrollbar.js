import { Scrollbar } from "react-scrollbars-custom";

export function VerticalScrollbar({ children, className }) {
  return (
    <Scrollbar
      className={className}
      noScrollX
      contentProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return (
            <div {...restProps} ref={elementRef} className="!space-y-6 !p-2" />
          );
        },
      }}
      scrollerProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return <div {...restProps} ref={elementRef} className="!pr-7" />;
        },
      }}
      trackYProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return (
            <div
              {...restProps}
              ref={elementRef}
              className="!w-[2px] !overflow-visible !bg-white"
            />
          );
        },
      }}
      thumbYProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return (
            <div
              {...restProps}
              ref={elementRef}
              className="!ml-[-4px] !mr-[-4px] !w-auto !bg-white"
            />
          );
        },
      }}
    >
      {children}
    </Scrollbar>
  );
}
