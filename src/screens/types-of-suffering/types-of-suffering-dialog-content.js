import "./types-of-suffering-dialog-content.css";

export function TypesOfSufferingDialogContent({
  selectedDialog,
  onNavigationClick,
}) {
  const handleNavigationClick = ({ direction }) => {
    onNavigationClick({ direction });
  };

  return (
    <div className="even-worse-dialog-content flex flex-grow flex-row">
      <div className={`w-1/2 suffer-image-${selectedDialog.id}`}></div>
      <div className="dark-gray flex w-1/2 flex-col self-center">
        <h2>{selectedDialog.title}</h2>
        <p
          className="py-8"
          dangerouslySetInnerHTML={{
            __html: selectedDialog.description,
          }}
        />
        <div className="dialog-navigator flex w-full flex-row justify-between">
          <div
            id="next-dialog-left"
            className="w-screen-5vw"
            onClick={() => {
              handleNavigationClick({ direction: "LEFT" });
            }}
          >
            <div className="arrow"></div>
          </div>
          <div
            id="next-dialog-right"
            className="w-screen-5vw"
            onClick={() => {
              handleNavigationClick({ direction: "RIGHT" });
            }}
          >
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
