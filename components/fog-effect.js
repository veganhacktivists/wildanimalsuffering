// Each layer starts a 1000px fog tile to the left and slides one tile, which
// loops seamlessly. Sliding it with a transform saves repainting every frame.
export function FogEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-y-0 -left-[1000px] right-0 animate-fog-drift-slow bg-fog-1 opacity-50" />
      <div className="absolute inset-y-0 -left-[1000px] right-0 animate-fog-drift-fast bg-fog-2 opacity-50" />
    </div>
  );
}
