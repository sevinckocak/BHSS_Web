import React from "react";
import { Link } from "react-router-dom";
import ButtonSweep from "../component/ButtonSweep";

export default function AboutCTA() {
  return (
    <section className="mt-8 rounded-[40px] bg-white/60 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-black/10 bg-white p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-semibold text-black">Hazır mısın?</div>
            <div className="mt-1 text-sm text-black/70">
              Ücretsiz başlayıp sürünü düzenli şekilde takip etmeye başla.
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              to="/features"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              Özellikler
            </Link>

            <ButtonSweep
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
