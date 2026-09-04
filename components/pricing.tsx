import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getPricingPlans } from "@/lib/sanityQueries"
import { cn } from '@/lib/utils'

type PricingPlan = {
  _id: string
  name: string
  price: string
  cycle: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

export async function Pricing() {
  const sanityPlans = await getPricingPlans()

  const plans: PricingPlan[] = sanityPlans.map(
    (plan: {
      _id: string
      name: string
      price: number
      billingCycle: string
      description: string
      features: string[]
      highlighted?: boolean
    }) => ({
      _id: plan._id,
      name: plan.name,
      price: `$${plan.price}`,
      cycle: plan.billingCycle,
      description: plan.description,
      features: plan.features,
      highlighted: Boolean(plan.highlighted),
      cta:
        plan.name === "Business"
          ? "Contact Sales"
          : plan.highlighted
            ? "Start Free Trial"
            : "Start Free",
    }),
  )

  return (
    <section
      id="pricing"
      className="scroll-mt-16 border-y border-border/70 bg-secondary/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Simple pricing that scales with your team
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Start free and upgrade when you need deeper analytics. No hidden
            fees, cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-card p-8',
                plan.highlighted
                  ? 'border-primary shadow-xl shadow-primary/10 lg:-translate-y-3'
                  : 'border-border',
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.cycle}
                </span>
              </div>

              <Button
                size="lg"
                variant={plan.highlighted ? 'default' : 'outline'}
                className="mt-6 h-11 w-full text-sm"
                nativeButton={false} render={<a href="#login" />}
              >
                {plan.cta}
              </Button>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
