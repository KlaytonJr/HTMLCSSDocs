import { sidebar } from "vuepress-theme-hope";

export const ptSidebar = sidebar({
    "/git": [
        {
          text: "Git e GitHub",
          icon: "code-merge",
          children: [
            '',
            'first',
          ],
        },
    ],
    "/html": [
        {
          text: "HTML",
          icon: "code",
          children: [
            '',
            'first',
          ],
        },
    ],
    "/css": [
        {
          text: "CSS",
          icon: "palette",
          children: [
            '',
            'first',
          ],
        },
    ],
});
