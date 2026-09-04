import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Clock,
  GaugeCircle,
  LineChart,
  Target,
  Users,
} from 'lucide-react'

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Clock,
    title: 'Time Tracking',
    description:
      'Automatic, low-friction time tracking that maps hours to projects and tasks without nagging your team for timesheets.',
  },
  {
    icon: BarChart3,
    title: 'Workload Analytics',
    description:
      'See who is overloaded and who has capacity, so you can rebalance work before burnout or missed deadlines happen.',
  },
  {
    icon: Target,
    title: 'Project Progress',
    description:
      'Track scope, velocity, and delivery risk across every project with a single source of truth for status.',
  },
  {
    icon: Users,
    title: 'Team Insights',
    description:
      'Understand collaboration patterns, focus time, and meeting load to help your team do their best deep work.',
  },
  {
    icon: LineChart,
    title: 'Productivity Reports',
    description:
      'Generate shareable weekly and monthly reports for stakeholders in a couple of clicks, no spreadsheets required.',
  },
  {
    icon: GaugeCircle,
    title: 'Real-Time Dashboards',
    description:
      'Live dashboards update as work happens, giving managers an always-current view of the whole operation.',
  },
]

export type Plan = {
  name: string
  price: string
  cycle: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cycle: 'per user / month',
    description: 'For small teams getting started with productivity analytics.',
    features: [
      'Up to 5 team members',
      'Automatic time tracking',
      '2 active projects',
      'Weekly productivity reports',
      'Community support',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Team',
    price: '$12',
    cycle: 'per user / month',
    description: 'For growing teams that need deeper analytics and insights.',
    features: [
      'Up to 50 team members',
      'Everything in Starter',
      'Unlimited projects',
      'Workload & capacity analytics',
      'Real-time dashboards',
      'Priority email support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$29',
    cycle: 'per user / month',
    description: 'For agencies and orgs that need control, security, and scale.',
    features: [
      'Unlimited team members',
      'Everything in Team',
      'Advanced team insights',
      'Custom report exports',
      'SSO & audit logs',
      'Dedicated success manager',
    ],
    cta: 'Contact Sales',
  },
]

export type Testimonial = {
  name: string
  role: string
  avatar: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Maya Chen',
    role: 'Engineering Manager, Northwind',
    avatar: '/images/avatar-1.png',
    quote:
      'Flowmetrics finally gave me an honest picture of where my team\u2019s time actually goes. We cut meeting load by 30% and shipped our roadmap a full sprint early.',
  },
  {
    name: 'David Okafor',
    role: 'Founder, Bright Lane Agency',
    avatar: '/images/avatar-2.png',
    quote:
      'As an agency owner, billable clarity is everything. The workload analytics helped us spot burnout risk and rebalance projects before clients ever noticed.',
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead, Cobalt Labs',
    avatar: '/images/avatar-3.png',
    quote:
      'The real-time dashboards replaced three of our internal reports. Now leadership just checks Flowmetrics instead of pinging me every Monday morning.',
  },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  author: string
  category: string
  image: string
  featured?: boolean
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-high-performing-remote-teams-protect-deep-work',
    title: 'How high-performing remote teams protect deep work',
    excerpt:
      'The best distributed teams treat focus time as a first-class metric. Here is the framework we see them use to defend it every single week.',
    date: 'Aug 28, 2026',
    readingTime: '6 min read',
    author: 'Maya Chen',
    category: 'Productivity',
    image: '/images/blog-1.png',
    featured: true,
    content: [
      'Deep work is the single biggest lever remote teams have, yet it is the first thing to disappear when calendars fill up. The teams that ship consistently do not leave focus time to chance. They measure it, protect it, and review it the same way they review velocity or uptime.',
      'The first step is making focus time visible. When a team can see that meetings have quietly grown to consume half of every engineer\u2019s week, the conversation shifts from "we feel busy" to "here is exactly where our hours go." Flowmetrics surfaces this automatically, so nobody has to reconstruct their week from memory.',
      'Next comes the weekly ritual. High-performing teams block collaboration into predictable windows and defend the rest as maker time. The goal is not to eliminate meetings, but to cluster them so that everyone gets multi-hour stretches of uninterrupted work at least a few days a week.',
      'Finally, they close the loop. Each week they compare planned focus time against what actually happened, look for the meetings that crept in, and adjust. Over a quarter, these small corrections compound into a dramatically calmer, more productive team.',
    ],
  },
  {
    slug: 'time-tracking-without-the-micromanagement',
    title: 'Time tracking without the micromanagement',
    excerpt:
      'Automatic tracking builds trust when you get the defaults right. Here is how to roll it out so your team actually appreciates it.',
    date: 'Aug 14, 2026',
    readingTime: '5 min read',
    author: 'David Okafor',
    category: 'Time Tracking',
    image: '/images/blog-2.png',
    content: [
      'Time tracking has a reputation problem. For most people it conjures images of surveillance software and hourly screenshots. But done well, tracking is not about watching people \u2014 it is about giving them an honest picture of where their effort actually goes.',
      'The trick is to make it automatic and low-friction. If your team has to remember to start and stop timers, adoption collapses within a week. Flowmetrics maps activity to projects in the background, so the data is accurate without anyone babysitting a stopwatch.',
      'Just as important is who sees the data and why. When tracking is framed as a tool for the individual and the team \u2014 not a report card for managers \u2014 people lean in. They start using the numbers to protect their own focus time and push back on unrealistic workloads.',
      'Roll it out with transparency, default to aggregate views over individual scrutiny, and let the team see the same insights you do. Get those defaults right and time tracking becomes something people appreciate rather than tolerate.',
    ],
  },
  {
    slug: 'spotting-burnout-before-it-hits-your-roadmap',
    title: 'Spotting burnout before it hits your roadmap',
    excerpt:
      'Workload imbalance is a leading indicator of missed deadlines. Learn the early signals your analytics are already telling you.',
    date: 'Jul 30, 2026',
    readingTime: '7 min read',
    author: 'Priya Nair',
    category: 'Team Health',
    image: '/images/blog-3.png',
    content: [
      'Burnout rarely announces itself. By the time someone says they are overwhelmed, they have usually been running on empty for weeks. The good news is that the warning signs show up in your workload data long before they show up in a resignation letter.',
      'The clearest signal is sustained imbalance. When the same few people consistently carry more projects, more context-switching, and more after-hours activity than everyone else, you are watching burnout accumulate in real time. Flowmetrics highlights this distribution so it is impossible to miss.',
      'Another early indicator is shrinking focus time paired with rising meeting load. People compensate for fragmented days by working longer, which feels productive but quietly erodes their capacity. Tracking the ratio week over week gives you a leading indicator, not a lagging one.',
      'The fix is almost always redistribution, not heroics. Rebalance projects before deadlines are at risk, protect focus time for the people carrying the most, and revisit the numbers weekly. Catching imbalance early is the difference between a small adjustment and a missed quarter.',
    ],
  },
]

export const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Blog', href: '/#blog' },
]
