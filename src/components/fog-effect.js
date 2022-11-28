export function FogEffect() {
  return (
    <>
      <div className="absolute inset-0 animate-slide-bg-right-slow bg-fog-1 opacity-50" />
      <div className="absolute inset-0 animate-slide-bg-right-fast bg-fog-2 opacity-50" />
    </>
  );
}
