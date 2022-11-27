export function FogEffect() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 animate-slide-bg-right-slow bg-fog-1 opacity-50" />
      <div className="pointer-events-none absolute inset-0 animate-slide-bg-right-fast bg-fog-2 opacity-50" />
    </>
  );
}
