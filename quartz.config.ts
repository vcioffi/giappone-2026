import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🗾 Giappone 2026",
    pageTitleSuffix: " · Giappone 2026",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "it-IT",
    baseUrl: "vcioffi.github.io/giappone-2026",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "CLAUDE.md",
      "memory",
      ".trash",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        // Ukiyo light — palette blu/cielo
        lightMode: {
          light: "#e6f0ff",
          lightgray: "#c9d9f1",
          gray: "#4069bf",
          darkgray: "#254da1",
          dark: "#1a3a80",
          secondary: "#2b9cb8",
          tertiary: "#30b4d4",
          highlight: "rgba(43, 156, 184, 0.10)",
          textHighlight: "#ffdec6",
        },
        // Ukiyo dark — palette teal/notte
        darkMode: {
          light: "#253847",
          lightgray: "#2e505a",
          gray: "#48867d",
          darkgray: "#d0d0d0",
          dark: "#e4e4e4",
          secondary: "#2babb5",
          tertiary: "#35bbc4",
          highlight: "rgba(43, 171, 181, 0.12)",
          textHighlight: "#a0632666",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
