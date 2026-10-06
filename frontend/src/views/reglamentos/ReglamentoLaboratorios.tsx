// src/views/reglamentos/ReglamentoLaboratorios.tsx
import PdfViewer from "../../components/PdfViewer";

export default function ReglamentoLaboratorios() {
  return (
    <PdfViewer
      title="Reglamento general de uso de laboratorios y taller"
      src="/reglamentos/reglamento-laboratorios-y-taller.pdf"
    />
  );
}
