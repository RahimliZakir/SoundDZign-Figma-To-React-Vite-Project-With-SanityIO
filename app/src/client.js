import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "cteeg2m7",
  dataset: "production",
  apiVersion: "2023-09-14",
  token:
    "skWEklUV1qoKpU3JJJMgTaRQwV6Rvqm5Gr0YbHmiNZSKN5phny2fiEkeuztbLwzwHPRpUU1plhKbmMBz33xprjd9YfXcUR74reiFiWWdjciBy0sNGDrhqHdw4TC2CwakM5O5cD9IvtihxprME329gIdEMcNSmWzanyaQ9YAxlN6ni0BcgKVv",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
