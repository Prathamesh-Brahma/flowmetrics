import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/sanityQueries'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getBlogPosts()

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Article not found – Flowmetrics",
    }
  }

  return {
    title: `${post.title} – Flowmetrics`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const sanityPost = await getBlogPostBySlug(slug)

  if (!sanityPost) {
    notFound()
  }

  const post = {
    slug: sanityPost.slug,
    title: sanityPost.title,
    excerpt: sanityPost.excerpt,
    category: sanityPost.category,
    date: new Date(sanityPost.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readingTime: "5 min read",
    author: "Flowmetrics Team",
    image: sanityPost.image || "/placeholder.svg",
    content: sanityPost.content || [],
  }

  const allPosts = await getBlogPosts()

  const related = allPosts
    .filter((p: { slug: string }) => p.slug !== post.slug)
    .slice(0, 2)
    .map(
      (p: {
        slug: string
        title: string
        category: string
        image?: string
      }) => ({
        slug: p.slug,
        title: p.title,
        category: p.category,
        image: p.image || "/placeholder.svg",
      }),
    )

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
          <a
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to blog
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
              {post.category}
            </span>
            <span className="text-muted-foreground">{post.date}</span>
            <span aria-hidden="true" className="text-muted-foreground/50">
              &middot;
            </span>
            <span className="text-muted-foreground">{post.readingTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3 border-b border-border pb-8 text-sm">
            <span className="flex size-9 items-center justify-center rounded-full bg-teal/15 text-sm font-semibold text-teal">
              {post.author
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
            <div>
              <div className="font-medium text-foreground">{post.author}</div>
              <div className="text-xs text-muted-foreground">
                Flowmetrics Team
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={post.image || '/placeholder.svg'}
              alt=""
              width={1200}
              height={675}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <PortableText
              value={post.content}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-base leading-relaxed text-pretty text-foreground/90">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mt-4 text-2xl font-bold text-foreground">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-3 text-xl font-semibold text-foreground">
                      {children}
                    </h3>
                  ),
                },
              }}
            />
          </div>
        </article>

        <section className="border-t border-border/70 bg-secondary/40 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Keep reading
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((r: {
                slug: string
                title: string
                category: string
                image: string
              }) => (
                <a
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
                >
                  <img
                    src={r.image || '/placeholder.svg'}
                    alt=""
                    width={600}
                    height={338}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs text-muted-foreground">
                      {r.category}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-balance text-foreground">
                      {r.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read article
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
