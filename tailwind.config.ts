import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          default: "var(--color-brand-default)",
          hover: "var(--color-brand-hover)",
          tertiary: "var(--color-brand-tertiary)",
        },
        neutral: {
          default: "var(--color-neutral-default)",
          secondary: "var(--color-neutral-secondary)",
          tertiary: "var(--color-neutral-tertiary)",
          tertiaryHover: "var(--color-neutral-tertiary-hover)",
        },
        danger: {
          default: "var(--color-danger-default)",
          hover: "var(--color-danger-hover)",
          secondary: "var(--color-danger-secondary)",
        },
        background: {
          default: "var(--color-bg-default)",
          secondary: "var(--color-bg-secondary)",
        },
        border: {
          default: "var(--color-border-default)",
          neutral: "var(--color-border-neutral)",
          disabled: "var(--color-border-disabled)",
        },
        text: {
          default: "var(--color-text-default)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          disabled: "var(--color-text-disabled)",
        },
      },
      borderRadius: {
        '200': 'var(--radius-200)',
        'full': 'var(--radius-full)',
      },
    },
  },
  plugins: [],
};
export default config;
