import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'
import { z } from 'astro/zod'

const i18nString = z.object({
  ua: z.string(),
  en: z.string(),
})

const i18nStringOptional = z.object({
  ua: z.string().optional(),
  en: z.string().optional(),
})

const products = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/products' }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    reverse: z.boolean().optional(),
    images: z.array(z.string()),
    badge: z
      .object({
        ua: z.string(),
        en: z.string(),
        icon: z.string(),
      })
      .optional(),
    ua: z.object({
      title: z.string(),
      items: z
        .array(
          z.object({
            name: z.string(),
            data: z.string().optional(),
            text: z.string(),
          }),
        )
        .optional(),
      equipmentTitle: z.string().optional(),
      equipment: z
        .array(
          z.object({
            name: z.string(),
            qty: z.string().optional(),
          }),
        )
        .optional(),
    }),
    en: z.object({
      title: z.string(),
      items: z
        .array(
          z.object({
            name: z.string(),
            data: z.string().optional(),
            text: z.string(),
          }),
        )
        .optional(),
      equipmentTitle: z.string().optional(),
      equipment: z
        .array(
          z.object({
            name: z.string(),
            qty: z.string().optional(),
          }),
        )
        .optional(),
    }),
  }),
})

const faq = defineCollection({
  loader: file('./src/content/faq/items.yaml'),
  schema: z.object({
    question: i18nString,
    answerHtml: i18nString,
  }),
})

const media = defineCollection({
  loader: file('./src/content/media/articles.yaml'),
  schema: z.object({
    logo: z.string(),
    date: z.string(),
    title: i18nString,
    url: z.string(),
    linkText: i18nString,
    pair: z.number().optional(),
  }),
})

const reviews = defineCollection({
  loader: file('./src/content/reviews/items.yaml'),
  schema: z.object({
    name: i18nString,
    position: i18nString,
    image: z.string(),
    text: i18nString,
  }),
})

const partners = defineCollection({
  loader: file('./src/content/partners/items.yaml'),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
  }),
})

const chosenBy = defineCollection({
  loader: file('./src/content/partners/chosen-by.yaml'),
  schema: z.object({
    logo: z.string(),
    text: z.string(),
  }),
})

const homepage = defineCollection({
  loader: file('./src/content/homepage/content.yaml'),
  schema: z.object({
    lang: z.string(),
    pageTitle: z.string(),
    hero: z.object({
      titleLine1: z.string(),
      titleLine2: z.string(),
      subtitleLine1: z.string(),
      subtitleLine2: z.string(),
      orderButton: z.string(),
      orderLink: z.string(),
      supportButton: z.string(),
      supportLink: z.string(),
      heroLink: z.string(),
      nav: z.array(z.object({ text: z.string(), href: z.string() })),
    }),
    about: z.object({
      sectionTitle: z.string(),
      subtitle: z.string(),
      subtitlePattern: z.string(),
      features: z.array(z.object({ icon: z.string(), text: z.string() })),
      desktopImageText: z.string(),
      carouselImages: z.array(z.string()),
    }),
    advantages: z.object({
      sectionTitle: z.string(),
      items: z.array(z.string()),
    }),
    partnership: z.object({
      sectionTitle: z.string(),
      subtitle: z.string(),
      text: z.string(),
      buttonText: z.string(),
      items: z.array(z.string()),
    }),
    orderProcess: z.object({
      sectionTitle: z.string(),
      steps: z.array(z.string()),
      videoTitle: z.string(),
      videos: z.array(z.string()),
    }),
    whyUkropter: z.object({
      sectionTitle: z.string(),
      subtitle: z.string(),
      training: z.object({
        title: z.string(),
        link: z.string(),
        image: z.string(),
        text: z.string(),
      }),
      items: z.array(z.string()),
    }),
    contacts: z.object({
      sectionTitle: z.string(),
      subtitle: z.string(),
      subtitlePattern: z.string(),
      text: z.string(),
      phone: z.object({ text: z.string(), href: z.string() }),
      email: z.object({ text: z.string(), href: z.string() }),
      instagram: z.object({ text: z.string(), href: z.string() }),
    }),
  }),
})

const bank = defineCollection({
  loader: file('./src/content/bank/details.yaml'),
  schema: z.object({
    lang: z.string(),
    title: z.string(),
    documentsTitle: z.string(),
    fundName: z.string(),
    bankInfo: z.string(),
    iban: z.string(),
    edrpouCode: z.string(),
    edrpouLabel: z.string(),
    purpose: z.string(),
    copyText: z.string().optional(),
    copiedText: z.string().optional(),
    documents: z.array(
      z.object({
        name: z.string(),
        file: z.string(),
      }),
    ),
  }),
})

export const collections = {
  products,
  faq,
  media,
  reviews,
  partners,
  chosenBy,
  homepage,
  bank,
}
