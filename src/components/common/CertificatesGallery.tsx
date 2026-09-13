import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function CertificatesGallery({ certificates }: { certificates: string[] }) {
  const [search, setSearch] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const formatName = (filename: string) => {
    return filename
      .replace(/\.(jpeg|jpg|png|webp)$/i, '')
      .replace(/_/g, ' ')
      .replace(/-/g, ' ');
  };

  const filtered = certificates.filter(c => formatName(c).toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          type="text"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Buscar certificados... / Search certificates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filtered.map((cert) => (
          <div 
            key={cert} 
            className="group relative cursor-pointer overflow-hidden rounded-md border bg-muted transition-colors hover:border-foreground/50"
            onClick={() => setSelectedImage(cert)}
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={`/certificates/${cert}`} 
                alt={formatName(cert)}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-2 text-xs font-medium text-center truncate">
              {formatName(cert)}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-8 text-center text-sm text-muted-foreground">
            No se encontraron certificados.
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-h-full max-w-4xl overflow-hidden rounded-lg border bg-background shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 rounded-full bg-background/50 p-1.5 text-foreground/70 backdrop-blur-md transition-colors hover:bg-background hover:text-foreground focus:outline-none"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
            <img 
              src={`/certificates/${selectedImage}`} 
              alt={formatName(selectedImage)}
              className="max-h-[85vh] w-auto object-contain"
            />
            <div className="border-t p-3 text-center text-sm font-medium">
              {formatName(selectedImage)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
