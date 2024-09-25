import { defineCollection, z } from "astro:content";
// z-> zod (schema) para validar squemas y tipos de datos

const experience = defineCollection({
    schema: z.object({
        dates: z.string(),
        technologies: z.array(z.string()),
        logo: z.string(),
        title: z.string(),
        img: z.string(),
        description: z.string(),
        url: z.object({
            gitHub: z.string().url(),
            liveDemo: z.string().url()
        })
    })
})


export const collection = { experience }


