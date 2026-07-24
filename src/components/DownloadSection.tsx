import { useLanguage } from '../contexts/LanguageContext';
import StoreButtons from './ui/StoreButtons';
import Reveal from './ui/Reveal';

const DownloadSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line/10 py-24 sm:py-28" aria-labelledby="download-title">
      <div className="edge">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0B1220] px-6 py-20 text-center sm:px-16">
            {/* texture: grid + auroras — .dark scope flips the grid lines light */}
            <div className="dark pointer-events-none absolute inset-0" aria-hidden="true">
              <div
                className="absolute inset-0 bg-grid opacity-60"
                style={{
                  maskImage: 'radial-gradient(90% 90% at 50% 0%, #000, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(90% 90% at 50% 0%, #000, transparent 70%)',
                }}
              />
              <div className="absolute -top-20 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-[#6C7CFF]/25 blur-[120px] animate-aurora" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[#ECEAE1]/50">
                iOS · Android
              </p>
              <h2
                id="download-title"
                className="display mt-6 text-4xl text-[#ECEAE1] sm:text-6xl text-balance"
              >
                {t('downloadNow')}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#ECEAE1]/70 text-pretty">
                {t('downloadDescription')}
              </p>
              <div className="mt-10 flex justify-center">
                <StoreButtons tone="onInk" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DownloadSection;
