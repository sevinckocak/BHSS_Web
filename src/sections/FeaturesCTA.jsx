import React from "react";
import ButtonSweep from "../component/ButtonSweep";

export default function FeaturesCTA() {
  return (
    <section className="mt-8 rounded-[40px] bg-white/60 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-black/10 bg-white p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-semibold text-black">Hazır mısın?</div>
            <div className="mt-1 text-sm text-black/70">
              Ücretsiz başlayıp istediğin zaman yükseltebilirsin.
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="/pricing"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              Planlar
            </a>

            <ButtonSweep
              type="button"
              onClick={() => (window.location.href = "/")}
              className="bg-black text-white border-black"
            >
              Ücretsiz Başla
            </ButtonSweep>
          </div>
        </div>
      </div>
    </section>
  );
}
