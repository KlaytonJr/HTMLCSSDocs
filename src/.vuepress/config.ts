import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/JSDocs/",

  locales: {
    "/": {
        lang: "pt-BR",
        title: "Documentação HTML e CSS",
        description: "Documentação HTML e CSS para iniciantes",
    },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  plugins: [    
    searchPlugin({
      // your options
      locales: {
        '/': {
          placeholder: 'Pesquisar',
        },
      },
    }),
  ],
});
