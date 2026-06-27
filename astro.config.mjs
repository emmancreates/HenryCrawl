import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://henrycrawl.com",
  devToolbar: {
    enabled: false
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/thank-you/")
    })
  ],
});
