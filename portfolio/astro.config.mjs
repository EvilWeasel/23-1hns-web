import { defineConfig } from "astro/config";
import icon from "astro-icon";
import starlight from "@astrojs/starlight";
import { astroExpressiveCode } from "astro-expressive-code";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    astroExpressiveCode(),
    starlight({
      title: "Evil Docs",
      defaultLocale: "de",
      customCss: ["./src/styles/starlight.css", "./src/styles/fonts.css"],
      sidebar: [
        {
          label: "🔗Allgemein".toUpperCase(),
          items: [
            {
              label: "⬅️Zurück zum Portfolio",
              link: "/",
            },
            {
              label: "🎯Diátaxis",
              link: "docs/diataxis",
            },
          ],
        },
        {
          label: "🧑‍🏫AEVO - Erklärung",
          autogenerate: {
            directory: "docs/aevo",
          },
        },
        {
          label: "🚀Astro - Guides",
          autogenerate: {
            directory: "docs/astro",
          },
        },
      ],
      social: {
        mastodon: "https://mastodon.online/@EvilWeasel",
        github: "https://github.com/EvilWeasel",
        linkedin: "https://www.linkedin.com/in/tobias-wehrle-690509222/",
      },
    }),
    mdx(),
  ],
});
