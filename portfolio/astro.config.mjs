import { defineConfig } from "astro/config";
import icon from "astro-icon";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    starlight({
      title: "Evil Docs",
      defaultLocale: "de",
      sidebar: [
        {
          label: "🔗Allgemein",
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
  ],
});
