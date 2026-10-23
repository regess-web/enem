import { createFileRoute } from "@tanstack/react-router";

const DRIVE_URL = "https://drive.google.com/drive/folders/1B-_BnzGRmGubSizz6VqufBKLFxR4ppV3?usp=drive_link";

export const Route = createFileRoute("/entrega-basico")({
  head: () => ({
    meta: [
      { title: "Seu Kit Básico está pronto | NeuroTrilhas" },
      { name: "description", content: "Acesse seu material de Física para o ENEM da NeuroTrilhas." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: BasicDelivery,
});

function BasicDelivery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#eaf1fa] via-[#f3f6fb] to-white px-5 py-10 text-[#172337] flex items-center justify-center">
      <div className="w-full max-w-[680px]">
        <header className="mb-6 flex items-center justify-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#173d68] text-2xl font-extrabold text-white shadow-lg">N</div>
          <div>
            <div className="text-[22px] font-extrabold tracking-tight text-[#173d68]">NeuroTrilhas</div>
            <div className="text-xs text-[#617087]">Aprender com direção.</div>
          </div>
        </header>
        <section className="rounded-3xl border border-[#e2e8f0] bg-white p-7 text-center shadow-xl sm:p-12">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#e7f7ee] text-3xl text-[#16804a]">✓</div>
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#24558a]">Acesso liberado</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#173d68] sm:text-4xl">Seu Kit Básico está pronto!</h1>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-[#617087]">Obrigado pela sua compra. Seu material de Física para o ENEM está disponível no botão abaixo. Salve o link para encontrar os arquivos quando precisar.</p>
          <div className="my-7 flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-[#f8faff] p-4 text-left">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e5edf8] text-2xl">📘</div>
            <div><strong className="block text-[#173d68]">Kit Básico — Física para o ENEM</strong><span className="mt-1 block text-sm text-[#617087]">Material digital • Acesso pelo Google Drive</span></div>
          </div>
          <a href={DRIVE_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#173d68] px-5 py-4 font-extrabold text-white transition hover:bg-[#24558a]">Acessar meu material <span aria-hidden="true">→</span></a>
          <p className="mt-4 text-xs text-[#617087]">Se o link pedir acesso, confira se está conectado à conta Google correta.</p>
          <div className="mt-8 border-t border-[#e2e8f0] pt-5 text-sm text-[#617087]">NeuroTrilhas • Bons estudos e boa preparação!</div>
        </section>
      </div>
    </main>
  );
}
