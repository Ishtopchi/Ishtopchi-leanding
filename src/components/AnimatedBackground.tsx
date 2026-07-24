/**
 * Ambient hero backdrop — deliberately quiet. A fine grid grounds the layout,
 * two slow ultramarine auroras breathe behind it, a radial mask fades the grid
 * toward the edges, and film grain keeps the flat color from looking digital.
 * All decorative, all pointer-events-none, all reduced-motion safe.
 */
const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden grain" aria-hidden="true">
      {/* fine grid, faded out toward edges */}
      <div
        className="absolute inset-0 bg-grid"
        style={{
          maskImage: 'radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 75%)',
        }}
      />

      {/* aurora glows */}
      <div className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[110px] animate-aurora"
        style={{ animationDelay: '-6s' }}
      />

      {/* horizon line just below the fold */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line/15 to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
