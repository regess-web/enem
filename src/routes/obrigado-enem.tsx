import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/obrigado-enem")({
  head: () => ({
    meta: [
      { title: "Sua compra está confirmada | Professora Márcia" },
      {
        name: "description",
        content: "Confira seu e-mail para acessar seu material de preparação para o ENEM.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ObrigadoEnem,
});

function ObrigadoEnem() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#eef4fb] via-white to-[#f4f7fb] px-4 py-10 text-[#172337]">
      <section className="w-full max-w-xl rounded-3xl border border-[#dce6f1] bg-white px-6 py-10 text-center shadow-xl sm:px-12 sm:py-12">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
          ✓
        </div>
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[.16em] text-[#2870a8]">
          Professora Márcia • ENEM
        </p>
        <h1 className="text-3xl font-black leading-tight text-[#173d68] sm:text-4xl">
          Tudo certo com sua compra!
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
          Seu material será enviado para o e-mail informado na compra. Confira sua caixa de entrada e, se não encontrar, dê uma olhada também nas pastas de spam, lixo eletrônico ou promoções.
        </p>
        <div className="mt-7 rounded-2xl border border-blue-100 bg-[#f5f9ff] p-4 text-left">
          <p className="font-extrabold text-[#173d68]">Ainda não recebeu?</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Aguarde alguns minutos e confira se o endereço de e-mail usado no pagamento está correto. Guarde também o comprovante da compra.
          </p>
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-500">
          Obrigado pela confiança e bons estudos na sua preparação para o ENEM!
        </p>
      </section>
    </main>
  );
}
