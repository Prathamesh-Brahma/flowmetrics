import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            initialValue: false,
        }),

        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },

            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                }),
            ],
        }),

        defineField({
            name: 'content',
            title: 'Post Content',
            type: 'array',

            of: [
                {
                    type: 'block',
                },
            ],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'mainImage',
        },
    },
})