import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: '#1C2B33',
        'light-gray':'#F0F4F9',
        'hover-gray':'#DDE3EA',
        'border-gray':'#E4E4E5',
        'border-table-gray':'#DADCE0',
        'text-table-gray':'#5F6368',
        'black':'#1B1C1D',
        'light-blue':'#D3E3FD',
        'bright-blue':'#0842A0'
      },
    },
  },
  plugins: [],
} satisfies Config;
