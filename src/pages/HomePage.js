import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { site } from '../siteConfig';
import heroImg from '../components/assets/cars/kia/kia_03.JPEG';
import bothImg from '../components/assets/cars/both/both_01.JPEG';
import kiaImg from '../components/assets/cars/kia/kia_02.JPEG';
import hyundaiImg from '../components/assets/cars/hyundai/i30_02.JPEG';

const Container = ({ className = '', children }) => <div className={`mx-auto max-w-6xl px-5 ${className}`}>{children}</div>;

/* ---------- 1. Hero ---------- */
const Hero = ({ t }) => (
  <section id="acasa">
    <Container className="grid items-center gap-12 py-14 md:grid-cols-2 md:py-20">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-signal">{t('home.hero.eyebrow')}</p>
        <h1 className="display mt-4 text-[3.25rem] sm:text-7xl lg:text-[4.5rem]">
          <span className="block">{t('home.hero.line1')}</span>
          <span className="block">{t('home.hero.line2')}</span>
          <span className="block text-signal">{t('home.hero.line3')}</span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">{t('home.hero.lead')}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="btn-yellow">
            {t('home.hero.ctaPrimary')}
          </a>
          <a href="#preturi" className="btn-ghost">
            {t('home.hero.ctaSecondary')}
          </a>
        </div>
      </div>

      <div className="relative">
        <img src={heroImg} alt={t('home.hero.imageAlt')} className="aspect-[8/7] w-full rounded-lg object-cover" />
        <div className="absolute -bottom-5 left-0 rounded-md bg-signal px-4 py-3 text-asphalt shadow-xl sm:-left-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em]">{t('home.hero.badgeLabel')}</p>
          <p className="display text-3xl">{t('home.hero.badgePrice')}</p>
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- 2. Linia de drum + cifre ---------- */
const Stats = ({ t }) => (
  <div>
    <div className="road-line" aria-hidden="true" />
    <Container className="grid grid-cols-2 gap-y-6 py-10 md:grid-cols-4">
      {t('home.stats').map(({ value, label }) => (
        <div key={label} className="border-l border-white/10 pl-5">
          <p className="display text-4xl sm:text-5xl">{value}</p>
          <p className="mt-2 text-xs text-white/60">{label}</p>
        </div>
      ))}
    </Container>
  </div>
);

/* ---------- 3. Prețuri ---------- */
const PriceCard = ({ t, type, dark }) => {
  const key = `home.pricing.${type}`;
  return (
    <div className={`rounded-lg p-6 sm:p-7 ${dark ? 'bg-asphalt text-white' : 'border-2 border-asphalt bg-white text-asphalt'}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-extrabold">{t(`${key}.title`)}</h3>
        {dark && <span className="shrink-0 whitespace-nowrap rounded-sm bg-signal px-1.5 py-0.5 text-[10px] font-bold uppercase text-asphalt">{t(`${key}.badge`)}</span>}
      </div>
      <p className="mt-4 flex items-baseline gap-1.5">
        <span className="display text-6xl sm:text-7xl">{t(`${key}.price`)}</span>
        <span className="text-xl font-extrabold">{t('home.pricing.currency')}</span>
      </p>
      <p className={`mt-5 text-xs ${dark ? 'text-white/70' : 'text-asphalt/70'}`}>{t(`${key}.cars`)}</p>
    </div>
  );
};

const Pricing = ({ t }) => (
  <section id="preturi" className="bg-paper text-asphalt">
    <Container className="py-16 md:py-24">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <h2 className="display text-5xl sm:text-6xl">
          <span className="block">{t('home.pricing.line1')}</span>
          <span className="block">{t('home.pricing.line2')}</span>
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-asphalt/70">{t('home.pricing.intro')}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <PriceCard t={t} type="manual" dark />
        <PriceCard t={t} type="automatic" />
      </div>

      <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-5">
        {t('home.pricing.extras').map(({ label, value }) => (
          <div key={label} className="border-t-2 border-asphalt/80 pt-3">
            <dt className="text-xs text-asphalt/65">{label}</dt>
            <dd className="mt-1 text-lg font-extrabold">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-xs text-asphalt/60">{t('home.pricing.note')}</p>
    </Container>
  </section>
);

/* ---------- 4. Pașii ---------- */
const Steps = ({ t }) => {
  const items = t('home.steps.items');
  return (
    <section id="cum-functioneaza">
      <Container className="py-16 md:py-24">
        <h2 className="display text-5xl sm:text-6xl">
          <span className="block">{t('home.steps.line1')}</span>
          <span className="block">
            {t('home.steps.line2')} <span className="text-signal">{t('home.steps.highlight')}</span>.
          </span>
        </h2>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map(({ title, text }, i) => {
            const last = i === items.length - 1;
            return (
              <li key={title} className={`rounded-lg p-6 ${last ? 'bg-signal text-asphalt md:col-span-3' : 'bg-asphalt-800'}`}>
                <p className={`text-xs font-extrabold ${last ? '' : 'text-signal'}`}>{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-lg font-extrabold">{title}</h3>
                <p className={`mt-2 max-w-sm text-[13px] leading-relaxed ${last ? 'max-w-none text-asphalt/80' : 'text-white/60'}`}>{text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
};

/* ---------- 5. Legislație și chestionare ---------- */
const Resources = ({ t }) => (
  <section id="legislatie">
    <Container className="pb-16 md:pb-24">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <h2 className="display text-5xl sm:text-6xl">
          <span className="block">{t('home.resources.line1')}</span>
          <span className="block">{t('home.resources.line2')}</span>
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-white/60">{t('home.resources.intro')}</p>
      </div>

      <ul className="mt-10 border-b border-white/10">
        {t('home.resources.items').map(({ key, title, text }) => {
          const url = site.resources[key];
          return (
            <li key={key} className="border-t border-white/10">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-1 py-5 sm:grid-cols-[16rem_1fr_auto] sm:items-baseline sm:gap-6">
                <span className="text-lg font-extrabold transition-colors group-hover:text-signal">{title}</span>
                <span className="text-sm text-white/60">{text}</span>
                <span className="text-xs font-semibold text-white/40 transition-colors group-hover:text-signal">
                  {url.startsWith('/') ? 'PDF' : new URL(url).hostname.replace('www.', '')} ↗
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

/* ---------- 6. Mașini ---------- */
const Cars = ({ t }) => (
  <section id="masini">
    <Container className="pb-16 md:pb-24">
      <div className="flex items-end justify-between gap-4">
        <h2 className="display text-4xl sm:text-5xl">{t('home.cars.title')}</h2>
        <Link to="/galerie" className="shrink-0 text-sm font-bold text-signal underline underline-offset-4 hover:text-signal-600">
          {t('home.cars.galleryLink')}
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:h-[26rem] md:grid-cols-[1.9fr_1fr] md:grid-rows-2">
        <img src={bothImg} alt={t('home.cars.altBoth')} className="aspect-[4/3] w-full rounded-lg object-cover md:row-span-2 md:aspect-auto md:h-full" />
        <img src={kiaImg} alt={t('home.cars.altKia')} className="aspect-[16/9] w-full rounded-lg object-cover md:aspect-auto md:h-full" />
        <img src={hyundaiImg} alt={t('home.cars.altHyundai')} className="aspect-[16/9] w-full rounded-lg object-cover md:aspect-auto md:h-full" />
      </div>
      <p className="mt-3 text-xs text-white/55">{t('home.cars.caption')}</p>
    </Container>
  </section>
);

/* ---------- 7. Recenzii ---------- */
const Testimonials = ({ t }) => (
  <section className="border-t border-white/10">
    <Container className="py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-2">
        {t('home.testimonials').map(({ quote, author }) => (
          <figure key={author}>
            <blockquote className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">„{quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-bold text-signal">{author}</figcaption>
          </figure>
        ))}
      </div>
      {site.googleReviews && (
        <a href={site.googleReviews} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-10">
          {t('home.reviewsLink')}
        </a>
      )}
    </Container>
  </section>
);

/* ---------- 8. Contact ---------- */
const Contact = ({ t }) => (
  <section id="contact" className="border-t border-white/10">
    <Container className="py-16 md:py-20">
      <div className="grid items-center gap-8 rounded-lg bg-signal px-7 py-10 text-asphalt md:grid-cols-[1fr_auto] md:px-12">
        <div>
          <h2 className="display text-5xl sm:text-6xl">{t('home.cta.title')}</h2>
          <p className="mt-4 text-[15px]">{t('home.cta.text')}</p>
          <p className="mt-5 text-sm font-semibold">
            {site.address} ·{' '}
            <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">
              {t('home.cta.map')}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 md:w-72">
          <a href={site.phoneHref} className="btn bg-asphalt py-3.5 text-base text-white hover:bg-asphalt-700">
            {site.phoneDisplay}
          </a>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn border-2 border-asphalt hover:bg-asphalt/10">
            {t('home.cta.whatsapp')}
          </a>
        </div>
      </div>
    </Container>
  </section>
);

const HomePage = () => {
  const { translate: t } = useLanguage();

  return (
    <>
      <Hero t={t} />
      <Stats t={t} />
      <Pricing t={t} />
      <Steps t={t} />
      <Resources t={t} />
      <Cars t={t} />
      <Testimonials t={t} />
      <Contact t={t} />
    </>
  );
};

export default HomePage;
