import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), starlight()]
});