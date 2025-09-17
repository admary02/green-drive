import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../LanguageContext';

// -------- helpers --------
function importAllImages(ctx) {
  return ctx.keys().map((key) => ({
    src: ctx(key),
    filename: key.replace('./', ''),
  }));
}

// Context-urile Webpack le definim o singură dată, în afara componentei.
// Folosim /i ca să prindem .jpg/.jpeg/.JPG/.JPEG etc.
let kiaCtx = null;
let hyundaiCtx = null;
let bothCtx = null;

try {
  kiaCtx = require.context('../components/assets/cars/kia', false, /\.(png|jpe?g|webp)$/i);
} catch (e) {}
try {
  hyundaiCtx = require.context('../components/assets/cars/hyundai', false, /\.(png|jpe?g|webp)$/i);
} catch (e) {}
try {
  bothCtx = require.context('../components/assets/cars/both', false, /\.(png|jpe?g|webp)$/i);
} catch (e) {}

const CarsPage = () => {
  const { translate: t } = useLanguage();

  // Importăm imaginile o singură dată (nu se schimbă la rerender)
  const kiaImages = useMemo(() => (kiaCtx ? importAllImages(kiaCtx) : []), []);
  const hyundaiImages = useMemo(() => (hyundaiCtx ? importAllImages(hyundaiCtx) : []), []);
  const bothImages = useMemo(() => (bothCtx ? importAllImages(bothCtx) : []), []);

  // Tagging + listă completă
  const tagged = useMemo(
    () => [...kiaImages.map((i) => ({ ...i, car: 'kia' })), ...hyundaiImages.map((i) => ({ ...i, car: 'hyundai' })), ...bothImages.map((i) => ({ ...i, car: 'both' }))],
    [kiaImages, hyundaiImages, bothImages],
  );

  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    switch (filter) {
      case 'kia':
        return tagged.filter((i) => i.car === 'kia'); // doar Kia
      case 'hyundai':
        return tagged.filter((i) => i.car === 'hyundai'); // doar Hyundai
      default:
        return tagged; // Toate (Kia + Hyundai + Both)
    }
  }, [filter, tagged]);

  // Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => {
    setIdx(i);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const next = useCallback(() => setIdx((p) => (p + 1) % filtered.length), [filtered.length]);
  const prev = useCallback(() => setIdx((p) => (p - 1 + filtered.length) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, next, prev]);

  return (
    <section className="py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{t('carsPage.title')}</h1>
        <p className="mt-3 text-gray-600">{t('carsPage.subtitle')}</p>

        {/* Cards – Kia / Hyundai */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl overflow-hidden shadow ring-1 ring-black/5 bg-white">
            <div className="h-40 bg-gradient-to-br from-green-200 to-green-100" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Kia XCeed</h3>
                <span className="text-sm text-gray-500">
                  {kiaImages.length} {t('carsPage.photos')}
                </span>
              </div>
              <p className="mt-1 text-gray-600 text-sm">{t('carsPage.kiaDescription')}</p>
              <button
                className={`mt-4 inline-flex items-center rounded-xl px-3 py-1.5 text-sm font-medium shadow-sm transition
                 ${filter === 'kia' ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                onClick={() => setFilter('kia')}>
                {t('carsPage.filter.kia')}
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow ring-1 ring-black/5 bg-white">
            <div className="h-40 bg-gradient-to-br from-indigo-200 to-indigo-100" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Hyundai i30</h3>
                <span className="text-sm text-gray-500">
                  {hyundaiImages.length} {t('carsPage.photos')}
                </span>
              </div>
              <p className="mt-1 text-gray-600 text-sm">{t('carsPage.hyundaiDescription')}</p>
              <button
                className={`mt-4 inline-flex items-center rounded-xl px-3 py-1.5 text-sm font-medium shadow-sm transition
                 ${filter === 'hyundai' ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                onClick={() => setFilter('hyundai')}>
                {t('carsPage.filter.hyundai')}
              </button>
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { id: 'all', label: t('carsPage.filter.all') },
            { id: 'kia', label: t('carsPage.filter.kia') },
            { id: 'hyundai', label: t('carsPage.filter.hyundai') },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition shadow-sm
                ${filter === id ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
              aria-pressed={filter === id}>
              {label}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {filtered.length === 0 && <div className="col-span-full text-gray-500 text-center py-10">{t('carsPage.empty')}</div>}

          {filtered.map((img, i) => (
            <button key={`${img.src}-${i}`} onClick={() => openAt(i)} className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/5 shadow">
              <img src={img.src} alt={img.filename} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && filtered[idx] && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={close}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white p-2 shadow"
            aria-label="Close">
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow"
            aria-label="Previous">
            ‹
          </button>

          <img
            src={filtered[idx].src}
            alt={filtered[idx].filename}
            className="max-h-[82vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow"
            aria-label="Next">
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default CarsPage;
