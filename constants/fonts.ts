import localFont from "next/font/local";

export const lufga = localFont({
    src: [
        { path: "../public/fonts/LufgaLight.ttf", weight: "300", style: "normal" },
        { path: "../public/fonts/LufgaRegular.ttf", weight: "400", style: "normal" },
        { path: "../public/fonts/LufgaMedium.ttf", weight: "500", style: "normal" },
        { path: "../public/fonts/LufgaSemiBold.ttf", weight: "600", style: "normal" },
        { path: "../public/fonts/LufgaBold.ttf", weight: "700", style: "normal" },
        { path: "../public/fonts/LufgaExtraBold.ttf", weight: "800", style: "normal" },
    ],
    variable: "--font-lufga",
    display: "swap",
});