// src/components/PdfViewer.tsx
import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type PdfViewerProps = {
  title: string;
  src: string; // ruta dentro de /public, por ejemplo "/reglamentos/laboratorios.pdf"
};

export default function PdfViewer({ title, src }: PdfViewerProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">{title}</h1>

        <div className="flex gap-2">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            Abrir en pestaña nueva
          </a>
          <a
            href={src}
            download
            className="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
          >
            <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
            Descargar
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border border-gray-300 shadow-md">
        <iframe src={src} title={title} className="h-[80vh] w-full bg-gray-100">
          <p className="p-4">
            Tu navegador no puede mostrar el PDF.{" "}
            <a href={src} className="text-cyan-600 underline">
              Descárgalo aquí
            </a>
            .
          </p>
        </iframe>
      </div>
    </section>
  );
}