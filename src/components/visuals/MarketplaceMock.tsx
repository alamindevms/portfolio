const chips = ["All", "Electronics", "Fashion", "Home", "Grocery", "Beauty"];
const products = [0, 1, 2, 3, 4, 5, 6, 7];

/**
 * Stylized marketplace interface study for the Jamanabd project feature.
 * Decorative placeholder — replace with real product imagery when available.
 */
export function MarketplaceMock() {
  return (
    <div aria-hidden="true" className="h-full p-4 md:p-5">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-sm bg-accent" />
          <span className="h-2 w-14 rounded-full bg-fill-3" />
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden h-1.5 w-10 rounded-full bg-fill-2 sm:block" />
          <span className="hidden h-1.5 w-10 rounded-full bg-fill-2 sm:block" />
          <span className="relative size-6 rounded-full border border-line bg-fill-1">
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-accent" />
          </span>
        </div>
      </div>

      <div className="mt-4 flex h-24 items-center justify-between gap-4 rounded-xl border border-line bg-fill-1 p-4">
        <div className="space-y-2">
          <div className="h-2 w-28 rounded-full bg-fill-3" />
          <div className="h-1.5 w-20 rounded-full bg-fill-2" />
          <div className="h-3.5 w-16 rounded-full bg-accent/80" />
        </div>
        <div className="hidden h-full w-1/3 rounded-lg bg-gradient-to-br from-fill-1 to-transparent sm:block" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <span
            key={c}
            className={`rounded-full px-3 py-1.5 text-[10px] ${
              i === 0
                ? "border border-accent/40 bg-accent-soft"
                : "border border-line bg-fill-1"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {products.map((i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-lg border ${
              i === 5 ? "border-accent/30 bg-accent-soft" : "border-line bg-fill-1"
            }`}
          >
            <div
              className={`h-12 md:h-14 ${
                i === 5
                  ? "bg-gradient-to-br from-accent/20 to-transparent"
                  : "bg-fill-1"
              }`}
            />
            <div className="space-y-1.5 p-2">
              <div className="h-1.5 w-4/5 rounded-full bg-fill-3" />
              <div className={`h-1.5 w-1/3 rounded-full ${i === 5 ? "bg-accent/70" : "bg-fill-3"}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
