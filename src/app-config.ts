import flowerShop2 from "./assets/images/flowershop-2.png";
import flowerShop from "./assets/images/flowershop.png";
import logo from "./assets/images/logo.webp";

const AppConfig = {
  theme: {
    mainScheme: "bg-yellow-950 text-white",
    bgPrimary: "bg-yellow-800",
    bgSecondary: "bg-yellow-100",
    bgTrimary: "bg-yellow-950",
    bgHover: "hover:bg-yellow-300",
    bgHoverDark: "hover:bg-yellow-500",
    bgHoverLight: "hover:bg-yellow-100",
    textColorPrimary: "text-black",
    textColorSecondary: "text-gray-400",
    textColorTrimary: "text-yellow-100",
    textColored: "text-yellow-500",
    textHover: "hover:text-yellow-500",
    textHoverLight: "hover:text-yellow-100",
  },
  text: {
    advertisement: "get 50% off all flower arrangements today!!! ONLY TODAY!",
    about: {
      intro:
        "At Flower Shop we do our very best as a family business to make sure we provide the city with the utmost fresh and beautiful flower arrangements available inside and outside of the market. You can never go wrong with choosing us as your local flower shop",
      listOfQualities: [
        "Fast and Prompt Delivery",
        "Freshness and Quality",
        "Local Business in Buffalo!",
      ],
      headingText: "WHERE YOUR FLOWERS GROW",
    },
    contact: {
      intro:
        "We’d love to hear from you! Whether you're looking to schedule a delivery, create a custom bouquet, or get ready for mothers day just drop us a message below. Our team is here to help and will get back to you as soon as possible!!",
      headingText: "GET IN TOUCH NOW",
    },
    footer: {
      intro:
        "We provide the best flowers and delivery services you could find around the entire city! If you choose to go with us you are guaranteed to find the happiness you were looking for",
    },
    gallery: {
      headingText: "FROM THE NEIGHBORHOOD",
    },
    hero: {
      introMainPoints: ["Low Cost", "Low Income"],
      intro:
        "Welcome to Flower Shop where you will find the flowers and beauty you were looking for!!",
      catcher:
        "Buffalo locals!! You are only a few minutes away from finding the perfect gift for the one you love!",
    },
    services: {
      headingText: "WHAT WE DO",
      intro: "Best service for all who love flowers",
    },
    testimonials: {
      headingText: "OUR TESTIMONIALS",
      intro: "What They're Talking About",
    },
  },
  socialLinks: {
    whatsapp: "https://wa.me/message/",
  },
  images: {
    logoPath: logo,
    gallery: {
      images: [
        { alt: "flower shop", src: flowerShop },
        { alt: "flower shop", src: flowerShop2 },
        { alt: "flower shop", src: flowerShop },
        { alt: "flower shop", src: flowerShop2 },
        { alt: "flower shop", src: flowerShop },
      ],
    },
    hero: {
      mainImage: {
        alt: "flower shop outside",
        src: flowerShop,
      },
      heroSvg: {
        alt: "logo",
        src: logo,
      },
    },
    about: {
      mainImage: {
        alt: "flower shop inside",
        src: flowerShop2,
      },
    },
    iconBanner: {
      images: [
        { src: logo, alt: "logo" },
        { src: logo, alt: "logo" },
        { src: logo, alt: "logo" },
      ],
    },
  },
  businessData: {
    phoneNumberHref: "7029811370",
    phoneNumber: "702-981-1370",
    email: "myflowershop@flowershop.com",
    serverLogoUrlForEmail: "",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.4722326702004!2d-78.8138663!3d42.8628759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30dddd7918617%3A0x3f1c05cd514d5d2d!2s105%20Sage%20Ave%2C%20Buffalo%2C%20NY%2014210!5e0!3m2!1sen!2sus!4v1746548934878!5m2!1sen!2sus",
    googleMapsHref: "https://www.google.com/maps/dir/",
    address: "123 Google Maps, NY",
    weekHoursOpen: "2am - 4am",
    saturdayHours: "5am - 7pm",
    sundayHours: "closed",
    businessName: "Flower Shop",
  },
  navigationLinks: [
    { text: "Home", hash: "#main", id: 0 },
    { text: "About", hash: "#about", id: 1 },
    { text: "Services", hash: "#services", id: 2 },
    { text: "Testimonials", hash: "#testimonials", id: 3 },
    { text: "Gallery", hash: "#gallery", id: 4 },
    { text: "Contact", hash: "#contact", id: 5 },
  ],
  testimonials: [
    {
      img: flowerShop,
      text: "What an amazing delivery speed! I will be going there again for sure",
      name: "Mark Walburg",
    },
    {
      img: flowerShop2,
      text: "What an amazing delivery speed! I will be going there again for sure",
      name: "Billy Joe",
    },
    {
      img: flowerShop,
      text: "What an amazing delivery speed! I will be going there again for sure",
      name: "Franklin Do-little",
    },
  ],
  searchableTerms: [
    { texts: ["home", "main", "top", "back"], id: "main" },
    {
      texts: ["about", "pets", "what", "why", "you", "do"],
      id: "about",
    },
    {
      texts: ["people", "say", "testimonials", "reviews"],
      id: "testimonials",
    },
    {
      texts: ["photos", "gallery", "images", "pictures", "pics"],
      id: "gallery",
    },
    {
      texts: [
        "contact",
        "get in touch",
        "ahold",
        "email",
        "phone",
        "connect",
        "send",
        "help",
      ],
      id: "contact",
    },
    {
      texts: ["services", "products", "work", "sell", "care"],
      id: "services",
    },
  ],
  services: [
    { text: "DELIVERY", src: flowerShop, alt: "flowers" },
    { text: "LOCAL", src: flowerShop2, alt: "flowers" },
    { text: "FRESHEST", src: flowerShop, alt: "flowers" },
  ],
};

export default AppConfig;
