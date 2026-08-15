/**
 * Abstract "UI layers" composition for the hero — three stacked interface
 * cards suggesting component architecture and dashboard systems.
 * Purely decorative; not a representation of any real product.
 */
export function HeroLayers() {
  return (
    <div
      aria-hidden="true"
      data-hero="layers"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
    >
      <div
        data-hero="layers-in"
        className="absolute right-[-2.5rem] top-1/2 w-[20rem] -translate-y-1/2 xl:right-[-3rem] xl:w-[23rem]"
      >
        <div className="relative opacity-95">
          <div className="absolute inset-0 translate-x-10 translate-y-10 rotate-[5deg] rounded-2xl border border-line bg-raised/50" />

          <div className="absolute inset-0 -translate-x-7 -translate-y-9 rotate-[-4deg] rounded-2xl border border-line bg-raised/70 p-4">
            <div className="space-y-2.5 pt-6">
              <div className="h-1.5 w-3/4 rounded-full bg-fill-2" />
              <div className="h-1.5 w-1/2 rounded-full bg-fill-2" />
              <div className="h-1.5 w-2/3 rounded-full bg-fill-2" />
              <div className="h-1.5 w-1/3 rounded-full bg-accent/50" />
            </div>
          </div>

          <div className="relative rounded-2xl border border-line bg-surface/95 p-4 shadow-xl shadow-black/20">
            <div className="flex items-center justify-between">
              <div className="h-2 w-20 rounded-full bg-fill-3" />
              <div className="size-6 rounded-full border border-line bg-fill-1" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-1.5 rounded-md border border-line bg-fill-1 p-2">
                  <div className="h-1 w-6 rounded bg-fill-3" />
                  <div className="h-2 w-8 rounded bg-fill-3" />
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-20 items-end gap-1">
              {[40, 70, 45, 90, 60, 75, 50, 85, 65, 95, 55, 80].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-[2px] ${i === 9 ? "bg-accent" : "bg-fill-2"}`}
                />
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`size-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-fill-3"}`} />
                  <span
                    className="h-1.5 rounded-full bg-fill-2"
                    style={{ width: `${72 - i * 16}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <span className="absolute -left-10 top-1/2 h-px w-10 bg-gradient-to-l from-accent/60 to-transparent" />
          <span className="absolute -left-[2.72rem] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
