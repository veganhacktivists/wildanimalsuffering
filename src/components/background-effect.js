import { FireEffect } from "./fire-effect";
import { FogEffect } from "./fog-effect";
import { LeavesEffect } from "./leaves-effect";
import { RainfallEffect } from "./rain-effect";
import { SnowfallEffect } from "./snowfall-effect";

const effectComponents = {
  "introduction-screen": FogEffect,
  "common-objections-screen": RainfallEffect,
  "even-worse-screen": RainfallEffect,
  "how-you-can-help-screen": FireEffect,
  "videos-screen": SnowfallEffect,
};

export function BackgroundEffect({ type }) {
  const EffectComponent = effectComponents[type];

  if (!EffectComponent) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 h-screen w-screen">
      <EffectComponent />
    </div>
  );
}
