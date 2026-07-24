import { Briefcase, MessageSquare, Zap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Briefcase, title: t('findJob'), description: t('findJobDesc') },
    { icon: MessageSquare, title: t('directChatTitle'), description: t('directChatDesc') },
    { icon: Zap, title: t('easyApply'), description: t('easyApplyDesc') },
  ];

  return (
    <section className="border-t border-line/10 py-24 sm:py-28" aria-labelledby="features-title">
      <div className="edge">
        <SectionHeader
          index="02"
          eyebrow="Imkoniyatlar"
          title={<span id="features-title">{t('featuresTitle')}</span>}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <article
                  tabIndex={0}
                  className="card-line group relative h-full overflow-hidden p-8 hover:-translate-y-1.5 hover:border-accent/50 focus-visible:border-accent/50"
                >
                  {/* accent wash on hover */}
                  <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line/12 bg-surface-2 text-ink transition-all duration-500 ease-signal group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast group-hover:-rotate-6">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs text-ink-3">{`0${i + 1}`}</span>
                  </div>

                  <h3 className="display mt-8 text-2xl text-ink">{feature.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-2 text-pretty">{feature.description}</p>

                  <ArrowUpRight className="mt-6 h-5 w-5 text-ink-3 transition-all duration-400 group-hover:translate-x-1 group-hover:text-accent" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
