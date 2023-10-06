import { createClient } from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'oeixyygt',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)

export default client