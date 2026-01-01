// apps/docs/theme.config.tsx
import { AlignTrueLogo } from "@aligntrue/ui";

const config = {
  logo: <AlignTrueLogo size="md" />,
  logoLink: "https://sync.aligntrue.ai",
  project: {
    link: "https://github.com/AlignTrue/aligntrue-sync",
  },
  docsRepositoryBase:
    "https://github.com/AlignTrue/aligntrue-sync/tree/main/apps/docs",
  editLink: {
    content: "Edit this page",
  },
  feedback: {
    content: "Question? Give us feedback",
    labels: "feedback",
  },
  // Table of contents configuration
  toc: {
    backToTop: true,
  },
};

export default config;
