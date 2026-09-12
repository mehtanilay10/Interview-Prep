'use client';

import { useRef, useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function PdfDownloadButton({
  targetId,
  filename = 'lesson.pdf',
  label = 'Download PDF',
}: {
  targetId: string;
  filename?: string;
  label?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);
    try {
      const element = document.getElementById(targetId);
      if (!element) {
        throw new Error('Content not found for PDF export.');
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(filename);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate PDF.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="no-print">
      <button
        onClick={handleDownload}
        disabled={loading}
        className="flex items-center gap-1.5 rounded-lg border border-border bg-canvas px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default disabled:opacity-60"
        aria-label={label}
      >
        {loading ? (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
            Generating...
          </>
        ) : (
          <>
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            {label}
          </>
        )}
      </button>
      {error && <p className="mt-1 text-xs text-danger-fg">{error}</p>}
    </div>
  );
}
