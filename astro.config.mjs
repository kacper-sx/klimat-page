// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://klimatbp.com",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon({
    include: {
      lucide: [
        "arrow-up-right",
        "chevron-right",
        "arrow-right",
        "phone",
        "menu",
        "scroll",
        "mail",
        "hand-heart",
        "crown",
        "handshake",
        "badge-check",
        "map-pin",
        "calendar-clock",
        "hand-coins",
        "calendar",
        "heater",
        "server",
        'air-vent',
        "battery-charging",
        "cctv",
        "arrow-up-right",
          "chevron-right",
          "phone",
          "menu",
          "scroll",
          "mail",
          "hand-heart",
          "users",
          "handshake",
          "scale",
          "map-pin",
          "calendar-clock",
          "hand-coins",
          "calendar",
          "building-2",
          "server",
          'fingerprint',
          "file-chart-column-increasing",
          "chart-no-axes-combined"
      ],
    },
  }), sitemap(), react()]
});
