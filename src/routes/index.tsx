import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Atividades de Física para o ENEM 2026"
      src="/enem/index.html"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        display: "block",
        background: "#fff",
        zIndex: 9999,
      }}
    />
  );
}
