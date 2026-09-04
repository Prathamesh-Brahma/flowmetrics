import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { Blog } from '@/components/blog'
import { CTA } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export const revalidate = 60

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
