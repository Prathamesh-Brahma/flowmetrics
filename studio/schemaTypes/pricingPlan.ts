import { defineField, defineType } from 'sanity'

export const pricingPlan = defineType({
    name: 'pricingPlan',
    title: 'Pricing Plan',
    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Plan Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (rule) => rule.required().min(0),
        }),

        defineField({
            name: 'billingCycle',
            title: 'Billing Cycle',
            type: 'string',
            options: {
                list: [
                    { title: 'Per user / month', value: 'per user / month' },
                    { title: 'Per month', value: 'per month' },
                    { title: 'Per year', value: 'per year' },
                ],
            },
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),

        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required().min(1),
        }),

        defineField({
            name: 'highlighted',
            title: 'Highlighted / Most Popular',
            type: 'boolean',
            initialValue: false,
        }),

        defineField({
            name: 'sortOrder',
            title: 'Display Order',
            type: 'number',
            description: 'Example: Starter = 1, Team = 2, Business = 3',
        }),
    ],

    preview: {
        select: {
            title: 'name',
            price: 'price',
            highlighted: 'highlighted',
        },

        prepare({ title, price, highlighted }) {
            return {
                title,
                subtitle: `$${price ?? 0}${highlighted ? ' • Most Popular' : ''}`,
            }
        },
    },
})