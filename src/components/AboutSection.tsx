import { Eye, SlidersHorizontal, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

const AboutSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Eye, text: t('viewJobsWithoutAccount') },
    { icon: SlidersHorizontal, text: t('filterJobs') },
    { icon: MessageCircle, text: t('directChat') },
  ];

  return (
    <section className="border-t border-line/10 py-24 sm:py-28" aria-labelledby="about-title">
      <div className="edge grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            index="01"
            eyebrow="Ilova haqida"
            title={<span id="about-title">{t('aboutTitle')}</span>}
          />
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-line/10 border-y border-line/10">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={i} delay={i * 0.08}>
                  <div className="group flex items-center gap-6 py-7 transition-transform duration-500 ease-signal hover:translate-x-1">
                    <span className="font-mono text-xs text-ink-3">{`0${i + 1}`}</span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line/12 bg-surface text-ink transition-colors duration-400 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-lg leading-snug text-ink text-pretty">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
