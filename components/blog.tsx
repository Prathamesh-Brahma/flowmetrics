import { ArrowUpRight } from 'lucide-react'
import { getBlogPosts } from '@/lib/sanityQueries'

type BlogPostCard = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  author: string
  category: string
  image: string
  featured: boolean
}

export async function Blog() {
  const sanityPosts = await getBlogPosts()

  const blogPosts: BlogPostCard[] = sanityPosts.map(
    (post: {
      _id: string
      slug: string
      title: string
      excerpt: string
      category: string
      publishedAt: string
      featured?: boolean
      image?: string
    }) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readingTime: "5 min read",
      author: "Flowmetrics Team",
      category: post.category,
      image: post.image || "/placeholder.svg",
      featured: Boolean(post.featured),
    }),
  )

  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <section
      id="blog"
      className="scroll-mt-16 border-t border-border/70 bg-secondary/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Blog
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Latest from our Blog
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Practical playbooks on productivity, time tracking, and building
            healthy, high-output teams.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured && (
            <a
              href={`/blog/${featured.slug}`}
              className="group row-span-2 flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="overflow-hidden">
                <img
                  src={featured.image || '/placeholder.svg'}
                  alt=""
                  width={800}
                  height={450}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
                    {featured.category}
                  </span>
                  <span className="text-muted-foreground">{featured.date}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-balance text-foreground">
                  {featured.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read article
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>
          )}

          <div className="flex flex-col gap-6">
            {rest.map((post) => (
              <a
                key={post.title}
                href={`/blog/${post.slug}`}
                className="group flex gap-5 overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <img
                  src={post.image || '/placeholder.svg'}
                  alt=""
                  width={160}
                  height={160}
                  className="hidden size-28 shrink-0 rounded-lg object-cover sm:block"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-balance text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
