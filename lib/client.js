import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "n371wo5v",
  dataset: "production",
  apiVersion: "2022-07-29",
  useCdn: true,
  token: process.env.NEXT_PUBLI_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
