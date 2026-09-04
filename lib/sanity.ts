import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "yw0xutul",
    dataset: "production",
    apiVersion: "2026-09-04",
    useCdn: true,
});