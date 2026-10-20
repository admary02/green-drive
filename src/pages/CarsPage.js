import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

// Încarcă automat toate pozele din fiecare folder.
// Ca să adaugi o poză nouă, o pui în folderul potrivit, fără alte modificări.
function importAllImages(ctx, car) {
  return ctx.keys().map((key) => ({ src: ctx(key), filename: key.replace('./', ''), car }));
}

const kiaCtx = require.context('../components/assets/cars/kia', false, /\.(png|jpe?g|webp)$/i);
const hyundaiCtx = require.context('../components/assets/cars/hyundai', false, /\.(png|jpe?g|webp)$/i);
const bothCtx = require.context('../components/assets/cars/both', false, /\.(png|jpe?g|webp)$/i);

const allImages = [...importAllImages(bothCtx, 'both'), ...importAllImages(kiaCtx, 'kia'), ...importAllImages(hyundaiCtx, 'hyundai')];

const CarsPage = () => {
  const { translate: t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [openIdx, setOpenIdx] = useState(null); // null = lightbox închis

  const filtered = useMemo(() => (filter === 'all' ? allImages : allImages.filter((img) => img.car === filter)), [filter]);

  const close = () => setOpenIdx(null);
  const next = useCallback(() => setOpenIdx((i) => (i + 1) % filtered.length), [filtered.length]);
  const prev = useCallback(() => setOpenIdx((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIdx, next, prev]);

  const filters = ['all', 'kia', 'hyundai'];
  const current = openIdx !== null ? filtered[openIdx] : null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <Link to="/#masini" className="text-sm font-semibold text-white/60 hover:text-white">
        {t('carsPage.back')}
      </Link>
      <h1 className="display mt-6 text-5xl sm:text-6xl">{t('carsPage.title')}</h1>
      <p className="mt-4 max-w-md text-[15px] text-white/70">{t('carsPage.subtitle')}</p>

      {/* Filtre */}
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
            className={`rounded-md px-4 py-2 text-sm font-bold transition-colors ${
              filter === id ? 'bg-signal text-asphalt' : 'bg-asphalt-800 text-white/80 hover:bg-asphalt-700'
            }`}>
            {t(`carsPage.filter.${id}`)}
          </button>
        ))}
      </div>

      {/* Galerie */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {filtered.length === 0 && <p className="col-span-full py-10 text-center text-white/50">{t('carsPage.empty')}</p>}
        {filtered.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIdx(i)}
            className="group aspect-[4/3] overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal">
            <img src={img.src} alt={img.filename} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" onClick={close}>
          <img src={current.src} alt={current.filename} className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          {[
            { label: t('carsPage.close'), action: close, pos: 'right-4 top-4', icon: '✕' },
            { label: t('carsPage.prev'), action: prev, pos: 'left-4 top-1/2 -translate-y-1/2', icon: '‹' },
            { label: t('carsPage.next'), action: next, pos: 'right-4 top-1/2 -translate-y-1/2', icon: '›' },
          ].map(({ label, action, pos, icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={(e) => {
                e.stopPropagation();
                action();
              }}
              className={`absolute ${pos} flex h-11 w-11 items-center justify-center rounded-full bg-signal text-xl font-black text-asphalt hover:bg-signal-600`}>
              {icon}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default CarsPage;
