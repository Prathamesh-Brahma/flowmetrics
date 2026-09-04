import { sanityClient } from "./sanity";

export async function getPricingPlans() {
    return sanityClient.fetch(`
    *[
      _type == "pricingPlan" &&
      !(_id in path("drafts.**"))
    ] | order(sortOrder asc) {
      _id,
      name,
      price,
      billingCycle,
      description,
      features,
      highlighted,
      sortOrder
    }
  `);
}
export async function getBlogPosts() {
    return sanityClient.fetch(`
    *[
      _type == "blogPost" &&
      !(_id in path("drafts.**"))
    ] | order(featured desc, publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt,
      featured,
      "image": mainImage.asset->url,
      content
    }
  `)
}

export async function getBlogPostBySlug(slug: string) {
    return sanityClient.fetch(
        `
      *[
        _type == "blogPost" &&
        slug.current == $slug &&
        !(_id in path("drafts.**"))
      ][0] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        category,
        publishedAt,
        featured,
        "image": mainImage.asset->url,
        content
      }
    `,
        { slug },
    )
}