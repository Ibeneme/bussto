import hero from "@/assets/landing-page-images/home/hero.svg";
import aboutHero from "@/assets/landing-page-images/home/about-hero.svg";
import pricingHero from "@/assets/landing-page-images/home/pricing-hero.svg";

const auth_image_a = 'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=1642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_b = 'https://images.unsplash.com/photo-1773176647951-d8f618dee942?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_c = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_d = 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_f = 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_e = 'https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_g = 'https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_h = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_i = 'https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_j = 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_k = 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const auth_image_l = 'https://images.unsplash.com/photo-1531583044854-c6b7d8490ecf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const IMAGES = {
    bussto: "/bussto.svg",
    hero: hero,
    aboutHero: aboutHero,
    pricingHero: pricingHero,
    auth_image_a: auth_image_a,
    auth_image_b: auth_image_b,
    auth_image_c: auth_image_c,
    auth_image_d: auth_image_d,
    auth_image_e: auth_image_e,
    auth_image_f: auth_image_f,
    auth_image_g: auth_image_g,
    auth_image_h: auth_image_h,
    auth_image_i: auth_image_i,
    auth_image_j: auth_image_j,
    auth_image_k: auth_image_k,
    auth_image_l: auth_image_l
} as const;

export type ImageKey = keyof typeof IMAGES;