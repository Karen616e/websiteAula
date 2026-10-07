// src/views/reglamentos/ReglamentoAulaHibrida.tsx
import PdfViewer from "../../components/PdfViewer";

export default function ReglamentoAulaHibrida() {
  return (
    <PdfViewer
      title="Reglamento de Aula Híbrida CISCO"
      src="/reglamentos/reglamentoaulahibrida-cisco.pdf"
    />
  );
}
