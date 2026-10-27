import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const CAKTO_SCRIPT = "https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js";

export const Route = createFileRoute("/upsell-fisica-enem")({
  head: () => ({
    meta: [
      { title: "Antes de finalizar: complete sua revisão de Física | Professora Márcia" },
      {
        name: "description",
        content:
          "Conheça o guia de conteúdos e fórmulas de Física para complementar sua preparação para o ENEM.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: UpsellFisicaEnem,
});

function UpsellFisicaEnem() {
  useEffect(() => {
    if (document.querySelector('script[src="' + CAKTO_SCRIPT + '"]')) return;
    const script = document.createElement("script");
    script.src = CAKTO_SCRIPT;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-[#f3f6fb] px-3 py-4 text-[#172337] sm:px-5 sm:py-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-4 flex items-center justify-center gap-3 py-2 sm:mb-6">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#173d68] text-lg font-black text-white shadow-md">M</div>
          <div>
            <p className="text-sm font-extrabold tracking-tight text-[#173d68]">Professora Márcia</p>
            <p className="text-xs font-medium text-slate-500">Materiais de apoio para o ENEM</p>
          </div>
        </header>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(23,61,104,0.12)]">
          <div className="relative overflow-hidden bg-[#102f54] px-5 py-8 text-center text-white sm:px-12 sm:py-11">
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-400/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-cyan-300/10 blur-2xl" />
            <div className="relative">
              <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.14em] text-blue-100 sm:text-xs">
                <span aria-hidden="true">✦</span> Uma oferta complementar à sua compra
              </p>
              <h1 className="mx-auto max-w-2xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                Antes de continuar… deixe sua revisão de Física mais completa.
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-lg sm:leading-7">
                As atividades ajudam você a praticar. Um guia de conteúdos e fórmulas pode ajudar a consultar a teoria enquanto estuda.
              </p>
            </div>
          </div>

          <div className="px-5 py-6 sm:px-10 sm:py-9">
            <div className="mx-auto mb-7 max-w-2xl text-center">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-3xl shadow-inner">
                📘
              </div>
              <p className="mb-2 text-xs font-black uppercase tracking-[.16em] text-[#2870a8]">
                Material digital de apoio
              </p>
              <h2 className="text-2xl font-black leading-tight text-[#173d68] sm:text-4xl">
                Física para o ENEM
                <span className="mt-1 block text-lg font-bold text-slate-600 sm:text-2xl">
                  Guia completo de conteúdos e fórmulas
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Chega de ficar procurando cada fórmula em um lugar diferente. Tenha um material de consulta para acompanhar sua revisão e retomar os conceitos quando precisar.
              </p>
            </div>

            <div className="mb-7 rounded-2xl border border-blue-100 bg-[#f5f9ff] p-4 sm:p-6">
              <p className="mb-4 text-center text-sm font-extrabold text-[#173d68] sm:text-base">
                O que esse guia acrescenta aos seus estudos:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex gap-3 rounded-xl bg-white p-3.5 shadow-sm">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-lg">🧭</span>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#173d68]">Conteúdos organizados</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">Encontre os temas com mais facilidade durante a revisão.</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-white p-3.5 shadow-sm">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-lg">📐</span>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#173d68]">Fórmulas para consultar</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">Relembre relações, variáveis e unidades na hora de estudar.</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-white p-3.5 shadow-sm">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-lg">✍️</span>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#173d68]">Apoio para praticar</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">Use o guia junto às atividades para conectar teoria e exercício.</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-white p-3.5 shadow-sm">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-lg">🎯</span>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#173d68]">Revisão mais prática</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">Volte aos pontos importantes sem recomeçar sua pesquisa do zero.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-7 rounded-2xl bg-amber-50 px-4 py-4 text-center ring-1 ring-amber-200 sm:px-6">
              <p className="text-sm font-black text-amber-950 sm:text-base">
                A ideia não é estudar mais horas. É aproveitar melhor o estudo que você já faz.
              </p>
              <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-amber-900 sm:text-sm">
                Use as atividades para treinar e o guia como apoio para consultar conteúdos e fórmulas ao longo da preparação.
              </p>
            </div>

            <div className="mx-auto max-w-xl text-center">
              <p className="mb-2 text-lg font-black text-[#173d68] sm:text-xl">
                Quer adicionar esse material à sua preparação?
              </p>
              <p className="mb-5 text-sm leading-6 text-slate-600">
                Se fizer sentido para você, aproveite agora esta oferta complementar antes de seguir para a próxima etapa.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
                <cakto-upsell-buttons>
                  <cakto-upsell-accept
                    bg-color="#16a34a"
                    text-color="#ffffff"
                    upsell-accept-url="members_area"
                    offer-id="3dqow8q"
                    app-base-url="https://app.cakto.com.br"
                    offer-type="upsell"
                    upsell-reject-url="https://professoramarciaenem.lovable.app/obrigado-enem"
                  >
                    Sim, quero adicionar o guia de Física
                  </cakto-upsell-accept>
                  <cakto-upsell-reject upsell-reject-url="members_area">
                    Não, vou continuar sem o guia
                  </cakto-upsell-reject>
                </cakto-upsell-buttons>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                A decisão é sua. Ao escolher uma opção, você seguirá o fluxo configurado pela Cakto.
              </p>
            </div>
          </div>
        </section>

        <footer className="px-3 py-5 text-center text-xs leading-5 text-slate-500">
          Professora Márcia • Continue no seu ritmo. Cada etapa de estudo conta.
        </footer>
      </div>
    </main>
  );
}
