import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_100%_0%,color-mix(in_oklch,var(--color-teal)_45%,transparent),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
              Ready to see where your team&apos;s time goes?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pretty text-primary-foreground/80">
              Help your team work with more clarity, focus, and confidence
              using Flowmetrics.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-11 px-6 text-sm"
                nativeButton={false} render={<a href="#login" />}
              >
                Start Free
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 border-primary-foreground/30 bg-transparent px-6 text-sm text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                nativeButton={false} render={<a href="#demo" />}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
