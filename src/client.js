import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "iu1mxffv",
    dataset: "production",
    useCdn: true,
})