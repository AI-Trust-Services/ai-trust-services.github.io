import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AI Trust Platform",
  description: "The only open-source, end-to-end AI governance platform purpose-built for the EU AI Act.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  ignoreDeadLinks: [
    // localhost links (e.g. the dev server URL in the README).
    /^https?:\/\/localhost/,
    // Links to repo files (not rendered markdown pages) — valid on GitHub.
    /(^|\/)LICENSE$/,
    /(^|\/)REUSE\.toml$/,
  ],
  cleanUrls: true,
  base:
    "PAGES_BASE" in process.env && process.env.PAGES_BASE != ""
      ? "/" + process.env.PAGES_BASE + "/"
      : "/",

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL("theme/components/VPFooter.vue", import.meta.url)),
        },
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(new URL("theme/components/VPFeature.vue", import.meta.url)),
        },
      ],
    },
  },

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/docs/" },
    ],

    logo: { src: "/logo.svg", width: 21, height: 24 },

    outline: [2, 3, 4, 5],

    search: { provider: "local" },

    sidebar: {
      "/docs/": [
        {
          text: "Overview",
          items: [
            { text: "Introduction", link: "/docs/" },
            { text: "How it Works", link: "/docs/how-it-works" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/AI-Trust-Services/ai-trust-platform" },
    ],
  },
});
