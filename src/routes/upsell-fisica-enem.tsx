import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const CAKTO_SCRIPT = "https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js";

export const Route = createFileRoute("/upsell-fisica-enem")({
  head: () => ({
    meta: [
      { title: "Oferta especial: Física para o ENEM | Professora Márcia" },
      { name: "description", content: "Complete sua preparação com o guia de conteúdos e fórmulas de Física para o ENEM." },
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
    <main className="min-h-screen bg-gradient-to-b from-[#eef4fb] via-white to-[#f4f7fb] px-4 py-8 text-[#172337] sm:py-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-[#173d68] text-xl font-extrabold text-white shadow-lg">M</div>
          <p className="text-sm font-bold uppercase tracking-[.16em] text-[#24558a]">Professora Márcia • ENEM</p>
        </header>

        <section className="overflow-hidden rounded-3xl border border-[#dce6f1] bg-white shadow-xl">
          <div className="bg-[#173d68] px-6 py-8 text-center text-white sm:px-12 sm:py-10">
            <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wider">Oferta especial para você</p>
            <h1 className="text-3xl font-black leading-tight sm:text-5xl">Espere! Complete sua preparação para o ENEM</h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">Adicione ao seu material um guia de Física com os principais conteúdos, fórmulas e explicações para revisar com mais segurança.</p>
          </div>

          <div className="px-6 py-8 sm:px-12 sm:py-10">
            <div className="mx-auto mb-8 max-w-xl text-center">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-[#e5edf8] text-3xl">📘</div>
              <h2 className="text-2xl font-extrabold leading-tight text-[#173d68] sm:text-3xl">Física para o ENEM: guia completo de conteúdos e fórmulas</h2>
              <p className="mt-3 leading-7 text-[#617087]">Tenha um material de consulta para organizar a revisão e relembrar os conceitos essenciais antes da prova.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8faff] p-5">
                <div className="mb-2 text-2xl">🧠</div>
                <h3 className="font-extrabold text-[#173d68]">Conteúdos organizados</h3>
                <p className="mt-2 text-sm leading-6 text-[#617087]">Revise os principais temas de Física cobrados no ENEM com uma estrutura fácil de consultar.</p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8faff] p-5">
                <div className="mb-2 text-2xl">📐</div>
                <h3 className="font-extrabold text-[#173d68]">Fórmulas explicadas</h3>
                <p className="mt-2 text-sm leading-6 text-[#617087]">Consulte fórmulas, entenda o significado das variáveis e confira as unidades utilizadas.</p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8faff] p-5">
                <div className="mb-2 text-2xl">✍️</div>
                <h3 className="font-extrabold text-[#173d68]">Exemplos resolvidos</h3>
                <p className="mt-2 text-sm leading-6 text-[#617087]">Use exemplos como referência para compreender a aplicação dos conceitos e das fórmulas.</p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8faff] p-5">
                <div className="mb-2 text-2xl">🎯</div>
                <h3 className="font-extrabold text-[#173d68]">Revisão mais prática</h3>
                <p className="mt-2 text-sm leading-6 text-[#617087]">Reúna os pontos importantes em um material de apoio para acompanhar seus estudos.</p>
              </div>
            </div>

            <div className="my-8 rounded-2xl border border-[#dce6f1] bg-[#f4f8fd] p-5 text-center">
              <p className="font-extrabold text-[#173d68]">Quer incluir esse guia na sua preparação?</p>
              <p className="mt-2 text-sm leading-6 text-[#617087]">Escolha abaixo se deseja aproveitar esta oferta. A confirmação é feita com segurança pela Cakto.</p>
            </div>

            <div className="mx-auto max-w-xl text-center">
              <cakto-upsell-buttons>
                <cakto-upsell-accept
                  bg-color="#140035ff"
                  text-color="#ffffff"
                  upsell-accept-url="members_area"
                  offer-id="3dqow8q"
                  app-base-url="https://app.cakto.com.br"
                  offer-type="upsell"
                  upsell-reject-url="members_area"
                >
                  Sim, quero aproveitar a oferta
                </cakto-upsell-accept>
                <cakto-upsell-reject upsell-reject-url="members_area">
                  Não, eu não quero aproveitar esta oferta
                </cakto-upsell-reject>
              </cakto-upsell-buttons>
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-[#7b8798]">Oferta complementar. Ao escolher uma opção, você seguirá o fluxo configurado na Cakto.</p>
          </div>
        </section>
        <footer className="mt-6 text-center text-xs text-[#7b8798]">Professora Márcia • Bons estudos e sucesso no ENEM!</footer>
      </div>
    </main>
  );
}
