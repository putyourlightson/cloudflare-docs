module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Cloudflare Plugin Documentation"
    }
  },
  dest: "public",
  theme: "craftdocs",
  themeConfig: {
    repo: "workingconcept/cloudflare-craft-plugin",
    docsBranch: "main",
    docsDir: "docs",
    editLinks: true,
    searchMaxSuggestions: 10,
    sidebar: [
      {
        title: "Setup",
        collapsable: false,
        children: ["/setup/installation", "/setup/configuration"]
      },
      {
        title: "Purging",
        collapsable: false,
        children: ["/purging/overview", "/purging/console", "/purging/rules"]
      },
      {
        title: "Extending",
        collapsable: false,
        children: ["/dev/services"]
      },
      {
        title: "Get Help",
        collapsable: false,
        children: ["/help/troubleshooting", "/help/support"]
      }
    ],
    nav: [
      {
        text: "Working Concept",
        link: "https://workingconcept.com/plugins/cloudflare"
      }
    ]
  }
};
