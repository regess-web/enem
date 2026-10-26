import { createFileRoute } from "@tanstack/react-router";

const DRIVE_URL = "https://drive.google.com/drive/folders/14FkvyrfgaVXLLT7mEMcndQkF6JQsUD5P?usp=drive_link";

export const Route = createFileRoute("/entrega-30-dicas")({
  head: () => ({
    meta: [
      { title: "30 Dicas para Passar no ENEM | Acesso ao material" },
      { name: "description", content: "Acesse suas 30 dicas práticas para se preparar melhor para o ENEM." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DicasDelivery,
});

function DicasDelivery() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#eaf1fa] via-[#f3f6fb] to-white px-5 py-10 text-[#172337]">
      <div className="w-full max-w-[680px]">
        <header className="mb-6 flex items-center justify-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#173d68] text-2xl font-extrabold text-white shadow-lg">M</div>
          <div>
            <div className="text-[22px] font-extrabold tracking-tight text-[#173d68]">Professora Márcia • ENEM</div>
            <div className="text-xs text-[#617087]">Aprenda com estratégia.</div>
          </div>
        </header>
        <section className="rounded-3xl border border-[#e2e8f0] bg-white p-7 text-center shadow-xl sm:p-12">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#e7f7ee] text-3xl text-[#16804a]">✓</div>
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#24558a]">Acesso liberado</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#173d68] sm:text-4xl">Suas 30 Dicas para Passar no ENEM estão prontas!</h1>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-[#617087]">Obrigado pela sua compra! Acesse abaixo suas 30 dicas práticas para organizar os estudos, revisar melhor e chegar mais preparado no dia da prova.</p>
          <div className="my-7 flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-[#f8faff] p-4 text-left">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e5edf8] text-2xl">✅</div>
            <div><strong className="block text-[#173d68]">30 Dicas para Passar no ENEM</strong><span className="mt-1 block text-sm text-[#617087]">Material digital • Acesso pelo Google Drive</span></div>
          </div>
          <a href={DRIVE_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#173d68] px-5 py-4 font-extrabold text-white transition hover:bg-[#24558a]">Acessar minhas 30 dicas <span aria-hidden="true">→</span></a>
          <p className="mt-4 text-xs text-[#617087]">Se o link pedir acesso, confira se está conectado à conta Google correta.</p>
          <div className="mt-8 border-t border-[#e2e8f0] pt-5 text-sm text-[#617087]">Professora Márcia • Bons estudos e sucesso no ENEM!</div>
        </section>
      </div>
    </main>
  );
}
