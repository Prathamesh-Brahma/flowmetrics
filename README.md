# Flowmetrics

Flowmetrics is a fictional team productivity and analytics SaaS platform built for a Full-Stack Intern Hiring challenge.

It is designed for remote and hybrid teams to understand where their time and effort are being spent through time tracking, workload analytics, project progress, productivity reports, and dashboard insights.

The application uses **Next.js + TypeScript** for the website and **Sanity CMS** for managing dynamic Pricing Plans and Blog Posts.

---

## Features

### Modern SaaS Landing Page
- Responsive design
- Hero section
- Features section
- Dynamic pricing section
- Testimonials
- Dynamic blog section
- Final CTA
- Footer

### Dynamic Pricing Plans

Pricing plans are managed through Sanity CMS.

Each plan contains:

- Plan name
- Price
- Billing cycle
- Description
- Feature list
- Display order
- Highlighted / Most Popular flag

The **Team** plan can be dynamically marked as the highlighted plan from the CMS.

### Blog System

Blog posts are managed through Sanity CMS.

Each post contains:

- Title
- Slug
- Excerpt
- Category
- Publish date
- Featured flag
- Main image
- Rich-text article content

Featured posts are visually highlighted on the landing page.

Each blog post also has its own dynamic route:

```text
/blog/[slug]
```

Example:

```text
/blog/how-high-performing-remote-teams-protect-deep-work
```

### Draft and Published Content

Draft content is excluded from public queries.

Only published Pricing Plans and Blog Posts are displayed on the public website.

### CMS Administration

Sanity Studio acts as the administration panel for managing website content.

Administrators can:

- Create pricing plans
- Edit pricing plans
- Delete pricing plans
- Highlight pricing plans
- Create blog posts
- Edit blog posts
- Delete blog posts
- Save posts as drafts
- Publish posts
- Mark posts as featured

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### CMS / Backend
- Sanity CMS
- Sanity Studio
- GROQ

### Content Rendering
- Portable Text

### Development
- Git
- GitHub
- Antigravity IDE
- v0 by Vercel

### Deployment
- Vercel
- Sanity

---

## Project Structure

```text
flowmetrics/
│
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── blog.tsx
│   ├── cta.tsx
│   ├── features.tsx
│   ├── hero.tsx
│   ├── pricing.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── testimonials.tsx
│
├── lib/
│   ├── data.ts
│   ├── sanity.ts
│   ├── sanityQueries.ts
│   └── utils.ts
│
├── public/
│
├── studio/
│   ├── schemaTypes/
│   │   ├── blogPost.ts
│   │   ├── pricingPlan.ts
│   │   └── index.ts
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   └── package.json
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## Sanity CMS Integration

The Next.js application connects to Sanity using `@sanity/client`.

The Sanity client configuration is located in:

```text
lib/sanity.ts
```

The GROQ queries are located in:

```text
lib/sanityQueries.ts
```

These queries are used to:

- Fetch published pricing plans
- Fetch published blog posts
- Fetch an individual blog post using its slug

Draft documents are excluded from the public queries.

---

## Dynamic Blog Routes

Next.js dynamic routing is used for individual blog pages.

The route is:

```text
app/blog/[slug]/page.tsx
```

When a user clicks a blog post, its slug is used to retrieve the corresponding article from Sanity CMS.

---

## Incremental Static Regeneration

The application uses Next.js revalidation:

```ts
export const revalidate = 60
```

This allows published Sanity content to refresh on the deployed website without requiring a full manual redeployment.

---

## Running the Website Locally

Clone the repository:

```bash
git clone https://github.com/Prathamesh-Brahma/flowmetrics.git
```

Enter the project directory:

```bash
cd flowmetrics
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Running Sanity Studio Locally

Open another terminal and enter the Studio directory:

```bash
cd studio
```

Install the Studio dependencies:

```bash
npm install
```

Start Sanity Studio:

```bash
npm run dev
```

Sanity Studio will normally be available at:

```text
http://localhost:3333
```

---

## Production Checks

TypeScript validation:

```bash
npx tsc --noEmit
```

Production build:

```bash
npm run build
```

The project currently passes both the TypeScript check and the Next.js production build.

---

## Deployment

### Live Website

To be added after Vercel deployment.

### Sanity Studio

To be added after Sanity Studio deployment.

---

## Repository

https://github.com/Prathamesh-Brahma/flowmetrics

---

## Author

**Prathamesh Brahma**