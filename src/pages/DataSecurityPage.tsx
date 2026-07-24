import React from 'react';
import { Shield, Lock, Server, Eye, HardDrive, AlertTriangle, CheckCircle, UserCheck } from 'lucide-react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/ui/Reveal';
import PageIntro from '../components/ui/PageIntro';
import { useLanguage } from '../contexts/LanguageContext';

const DataSecurityPage = () => {
  const { t, language } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'uz';

  const seoData = {
    uz: {
      title: "Ma'lumotlar xavfsizligi - IshTopchi | Eng yuqori darajadagi himoya",
      description: "IshTopchi ma'lumotlar xavfsizligi. AES-256 shifrlash, xavfsiz saqlash, kirish nazorati va muntazam tekshiruvlar haqida batafsil ma'lumot.",
      keywords: "ma'lumotlar xavfsizligi, shifrlash, AES-256, xavfsiz saqlash, kirish nazorati, ma'lumotlar himoyasi"
    },
    en: {
      title: "Data Security - IshTopchi | Highest level protection",
      description: "IshTopchi data security. Detailed information about AES-256 encryption, secure storage, access control and regular audits.",
      keywords: "data security, encryption, AES-256, secure storage, access control, data protection"
    },
    ru: {
      title: "Безопасность данных - IshTopchi | Защита высшего уровня",
      description: "Безопасность данных IshTopchi. Подробная информация о шифровании AES-256, безопасном хранении, контроле доступа и регулярных проверках.",
      keywords: "безопасность данных, шифрование, AES-256, безопасное хранение, контроль доступа, защита данных"
    }
  };

  const securityFeatures = [
    { icon: Lock, title: t('encryption'), description: t('encryptionDesc') },
    { icon: Server, title: t('secureStorage'), description: t('secureStorageDesc') },
    { icon: Eye, title: t('accessControl'), description: t('accessControlDesc') },
    { icon: CheckCircle, title: t('regularAudits'), description: t('regularAuditsDesc') },
    { icon: HardDrive, title: t('dataBackup'), description: t('dataBackupDesc') },
    { icon: AlertTriangle, title: t('incidentResponse'), description: t('incidentResponseDesc') },
  ];

  const compliance = ['ISO 27001', 'GDPR', 'SOC 2 Type II'];
  const rights = [
    "Ma'lumotlarni ko'rish huquqi",
    "Ma'lumotlarni o'zgartirish huquqi",
    "Ma'lumotlarni o'chirish huquqi",
  ];

  return (
    <div>
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={`https://ishtopchi.uz/${currentLang}/data-security`}
      />
      <Header />
      <main className="min-h-screen pt-32">
        <div className="edge pb-24">
          <PageIntro
            backTo={`/${currentLang}`}
            backLabel={t('backToHome')}
            eyebrow={t('dataSecurity')}
            title={t('dataSecurityTitle')}
            description={t('dataSecurityDescription')}
            icon={<Shield className="h-7 w-7" />}
            align="center"
          />

          {/* Security features */}
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <article className="card-line group h-full p-8 hover:-translate-y-1.5 hover:border-accent/50">
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line/12 bg-surface-2 text-ink transition-all duration-500 ease-signal group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast group-hover:-rotate-6">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-xs text-ink-3">{`0${i + 1}`}</span>
                    </div>
                    <h2 className="display mt-7 text-xl text-ink">{feature.title}</h2>
                    <p className="mt-3 leading-relaxed text-ink-2 text-pretty">{feature.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Compliance + rights */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              { icon: CheckCircle, title: t('complianceStandards'), desc: t('complianceDesc'), items: compliance },
              { icon: UserCheck, title: t('userRights'), desc: t('userRightsDesc'), items: rights },
            ].map((block, bi) => {
              const Icon = block.icon;
              return (
                <Reveal key={bi} delay={bi * 0.1}>
                  <div className="card-line h-full p-8 sm:p-10">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-contrast">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="display text-2xl text-ink">{block.title}</h3>
                    </div>
                    <p className="mt-5 leading-relaxed text-ink-2 text-pretty">{block.desc}</p>
                    <ul className="mt-6 space-y-3">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-ink-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Report vulnerability */}
          <Reveal className="mt-4">
            <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0B1220] px-6 py-16 text-center sm:px-16">
              <div className="dark pointer-events-none absolute inset-0" aria-hidden="true">
                <div
                  className="absolute inset-0 bg-grid opacity-60"
                  style={{
                    maskImage: 'radial-gradient(90% 90% at 50% 0%, #000, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(90% 90% at 50% 0%, #000, transparent 70%)',
                  }}
                />
                <div className="absolute -top-16 left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-[#6C7CFF]/25 blur-[120px] animate-aurora" />
              </div>
              <div className="relative z-10 mx-auto max-w-2xl">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ECEAE1] text-[#0B1220]">
                  <AlertTriangle className="h-7 w-7" />
                </span>
                <h2 className="display mt-8 text-3xl text-[#ECEAE1] sm:text-5xl text-balance">{t('reportVulnerability')}</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#ECEAE1]/70 text-pretty">
                  Agar xavfsizlik zaifligini topsangiz, bizga xabar bering
                </p>
                <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="display text-lg text-[#ECEAE1]">{t('contactSecurity')}</p>
                  <p className="mt-1 font-mono text-sm text-[#6C7CFF]">{t('securityEmail')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataSecurityPage;
