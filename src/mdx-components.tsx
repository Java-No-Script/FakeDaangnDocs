import { MDXComponents } from "nextra/mdx-components";
import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import * as nextraComponents from "nextra/components";

const themeComponents = getThemeComponents();

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    ...themeComponents,
    ...nextraComponents,
  };
}
