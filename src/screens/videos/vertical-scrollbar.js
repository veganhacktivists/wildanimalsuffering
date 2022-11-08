import { Scrollbar } from "react-scrollbars-custom";
import { cx } from "../../utils/cx";

export function VerticalScrollbar({ children, className, contentClassName }) {
  return (
    <Scrollbar
      className={cx("!h-auto grow", className)}
      noScrollX
      contentProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return (
            <div
              {...restProps}
              ref={elementRef}
              className={cx("!px-2", contentClassName)}
            />
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
