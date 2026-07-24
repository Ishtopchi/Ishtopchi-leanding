import { motion, type Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';
import AccentUnderline from './ui/AccentUnderline';
import StoreButtons from './ui/StoreButtons';
import CountUp from './ui/CountUp';

// Localized live-feed jobs — the product's own content, made the hero's signature.
const jobFeed: Record<string, { role: string; company: string; city: string; pay: string }[]> = {
  uz: [
    { role: 'Frontend dasturchi', company: 'Uzum Tech', city: 'Toshkent', pay: "18 mln so'm" },
    { role: 'Buxgalter', company: 'Artel', city: 'Toshkent', pay: "9 mln so'm" },
    { role: 'Sotuv menejeri', company: 'Korzinka', city: 'Samarqand', pay: "7 mln so'm" },
    { role: 'Grafik dizayner', company: 'Click', city: 'Toshkent', pay: "12 mln so'm" },
    { role: 'SMM mutaxassisi', company: 'Payme', city: 'Buxoro', pay: "8 mln so'm" },
    { role: 'Logistika operatori', company: 'BTS Express', city: "Farg'ona", pay: "6.5 mln so'm" },
  ],
  en: [
    { role: 'Frontend Developer', company: 'Uzum Tech', city: 'Tashkent', pay: '$1,400' },
    { role: 'Accountant', company: 'Artel', city: 'Tashkent', pay: '$700' },
    { role: 'Sales Manager', company: 'Korzinka', city: 'Samarkand', pay: '$550' },
    { role: 'Graphic Designer', company: 'Click', city: 'Tashkent', pay: '$950' },
    { role: 'SMM Specialist', company: 'Payme', city: 'Bukhara', pay: '$620' },
    { role: 'Logistics Operator', company: 'BTS Express', city: 'Fergana', pay: '$500' },
  ],
  ru: [
    { role: 'Frontend разработчик', company: 'Uzum Tech', city: 'Ташкент', pay: '18 млн сум' },
    { role: 'Бухгалтер', company: 'Artel', city: 'Ташкент', pay: '9 млн сум' },
    { role: 'Менеджер по продажам', company: 'Korzinka', city: 'Самарканд', pay: '7 млн сум' },
    { role: 'Графический дизайнер', company: 'Click', city: 'Ташкент', pay: '12 млн сум' },
    { role: 'SMM специалист', company: 'Payme', city: 'Бухара', pay: '8 млн сум' },
    { role: 'Оператор логистики', company: 'BTS Express', city: 'Фергана', pay: '6.5 млн сум' },
  ],
};

const statLabels: Record<string, string[]> = {
  uz: ['Foydalanuvchi', 'Vakansiya', 'Reyting'],
  en: ['Users', 'Vacancies', 'Rating'],
  ru: ['Пользователей', 'Вакансий', 'Рейтинг'],
};

const feedTitle: Record<string, string> = { uz: 'Jonli oqim', en: 'Live feed', ru: 'Живая лента' };
const availLabel: Record<string, string> = {
  uz: 'iOS · Android · Bepul',
  en: 'iOS · Android · Free',
  ru: 'iOS · Android · Бесплатно',
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

const HeroSection = () => {
  const { t, language } = useLanguage();
  const jobs = jobFeed[language] ?? jobFeed.uz;
  const labels = statLabels[language] ?? statLabels.uz;
  const loop = [...jobs, ...jobs]; // seamless marquee

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
      aria-label="Asosiy bo'lim"
    >
      <AnimatedBackground />

      <div className="edge relative z-10 w-full">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div variants={rise} className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="eyebrow">O'zbekiston · №1 ish qidiruv ilovasi</span>
            </motion.div>

            <motion.h1
              variants={rise}
              className="display mt-6 text-[clamp(2.75rem,7vw,5.25rem)] text-ink text-balance"
            >
              {t('heroSubtitle')}
            </motion.h1>

            <motion.div variants={rise} className="relative mt-3 h-3 w-52 sm:w-72">
              <AccentUnderline delay={0.7} />
            </motion.div>

            <motion.p
              variants={rise}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 text-pretty"
            >
              {t('heroDescription')}
            </motion.p>

            <motion.div variants={rise} className="mt-10">
              <StoreButtons />
              <p className="eyebrow mt-5">{availLabel[language]}</p>
            </motion.div>
          </motion.div>

          {/* Live job feed — signature */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="card-line relative overflow-hidden p-2">
              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="eyebrow">{feedTitle[language]}</span>
                </div>
                <span className="font-mono text-[0.65rem] tracking-[0.15em] text-ink-3">10 000+</span>
              </div>

              <div className="mask-fade-y relative h-[27rem] overflow-hidden pause-on-hover">
                <div className="flex animate-marquee-y flex-col gap-2.5" style={{ ['--marquee-duration' as string]: '26s' }}>
                  {loop.map((job, i) => (
                    <div
                      key={i}
                      className="group rounded-xl border border-line/8 bg-surface-2 px-4 py-3.5 transition-colors duration-300 hover:border-accent/40"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate font-display text-[0.95rem] font-semibold text-ink">
                            {job.role}
                          </p>
                          <p className="mt-0.5 flex items-center gap-1.5 truncate text-xs text-ink-3">
                            <span>{job.company}</span>
                            <span className="text-ink-3/50">·</span>
                            <MapPin className="h-3 w-3" />
                            <span>{job.city}</span>
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[0.68rem] font-medium text-accent">
                          {job.pay}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-3 divide-x divide-line/10 border-y border-line/10 py-8 sm:mt-20"
        >
          {[
            { value: <CountUp to={50} suffix="K+" />, label: labels[0] },
            { value: <CountUp to={10} suffix="K+" />, label: labels[1] },
            { value: <CountUp to={4.8} decimals={1} />, label: labels[2] },
          ].map((stat, i) => (
            <div key={i} className="px-4 text-center sm:px-8">
              <dd className="display text-4xl text-ink sm:text-5xl">{stat.value}</dd>
              <dt className="eyebrow mt-2">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default HeroSection;
