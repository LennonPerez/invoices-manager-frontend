import localFont from "next/font/local";

export const SpartanFont = localFont({
  display: "swap",
  fallback: ["Times New Roman"],
  variable: "--main-font",
  src: [
    {
      path: "../../public/fonts/Spartan-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Spartan-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
