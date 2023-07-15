export function ScrollDownIndicator() {
  return (
    <div className="py-6">
      <span className="-mt-2 block h-4 w-4 rotate-45 animate-arrows-down border-b-2 border-r-2 border-white" />
      <span className="-mt-2 block h-4 w-4 rotate-45 animate-arrows-down border-b-2 border-r-2 border-white -animation-delay-200" />
      <span className="-mt-2 block h-4 w-4 rotate-45 animate-arrows-down border-b-2 border-r-2 border-white -animation-delay-400" />
    </div>
  );
}
