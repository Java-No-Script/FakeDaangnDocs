import nextra from "nextra";
import path from "node:path";

const withNextra = nextra({
  // Using page file convention (app/**/page.mdx)
});

export default withNextra({
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
});
