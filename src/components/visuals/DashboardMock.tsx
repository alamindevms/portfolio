const chartBars = [35, 55, 40, 70, 50, 85, 60, 45, 75, 95, 65, 80];

/**
 * Stylized dashboard interface study for the Firewood project feature.
 * Decorative placeholder — replace with real product imagery when available.
 */
export function DashboardMock() {
  return (
    <div aria-hidden="true" className="flex h-full">
      <div className="hidden w-40 shrink-0 flex-col gap-1 border-r border-line p-4 sm:flex">
        <div className="mb-4 flex items-center gap-2">
          <span className="size-2.5 rounded-sm bg-accent" />
          <span className="h-2 w-16 rounded-full bg-fill-3" />
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`h-6 rounded-md ${
              i === 1
                ? "border border-accent/30 bg-accent-soft"
                : "bg-fill-1"
            }`}
          />
        ))}
      </div>

      <div className="flex-1 space-y-4 p-4 md:p-5">
        <div className="flex items-center justify-between">
          <div className="h-7 w-40 rounded-md border border-line bg-fill-1" />
          <div className="size-7 rounded-full border border-line bg-fill-1" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-lg border border-line bg-fill-1 p-3">
              <div className="h-1.5 w-10 rounded-full bg-fill-3" />
              <div className="h-3 w-14 rounded bg-fill-3" />
              <div className={`h-1.5 w-8 rounded-full ${i === 0 ? "bg-accent/70" : "bg-fill-2"}`} />
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-line bg-fill-1 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-1.5 w-16 rounded-full bg-fill-3" />
            <div className="flex gap-1.5">
              <span className="size-1.5 rounded-full bg-accent/70" />
              <span className="size-1.5 rounded-full bg-fill-2" />
            </div>
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {chartBars.map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t-sm ${i === 9 ? "bg-accent" : "bg-fill-2"}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2 rounded-lg border border-line bg-fill-1 p-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-line pb-2 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-2">
                <span className="size-5 rounded bg-fill-2" />
                <span className="h-2 w-24 rounded bg-fill-3" />
              </div>
              <span
                className={`h-4 w-14 rounded-full ${
                  i === 0
                    ? "border border-accent/40 bg-accent-soft"
                    : "border border-line bg-fill-2"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
