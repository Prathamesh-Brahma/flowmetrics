import { ArrowRight, PlayCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/70"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--color-primary)_14%,transparent),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-current" aria-hidden="true" />
              ))}
            </span>
            Built for high-performing remote teams
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            See where your team&apos;s time and effort really go
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Flowmetrics is the productivity and analytics platform for remote
            and hybrid teams. Track time, balance workloads, and follow project
            progress from one clear, real-time dashboard.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-6 text-sm"
              nativeButton={false} render={<a href="#pricing" />}
            >
              Start Free
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-6 text-sm"
              nativeButton={false} render={<a href="#demo" />}
            >
              <PlayCircle className="size-4" aria-hidden="true" />
              View Demo
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Free forever for up to 5 people. No credit card required.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
            <img
              src="/images/dashboard.png"
              alt="Flowmetrics analytics dashboard showing productivity trends, workload distribution, and time allocation charts"
              width={1600}
              height={1000}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
