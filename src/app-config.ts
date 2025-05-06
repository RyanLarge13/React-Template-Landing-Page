const AppConfig = {
  theme: {
    mainScheme: "bg-white",
    bgPrimary: "bg-purple-300",
    bgSecondary: "bg-purple-100",
    bgTrimary: "bg-purple-500",
    bgHover: "hover:bg-purple-300",
    bgHoverDark: "hover:bg-purple-500",
    bgHoverLight: "hover:bg-purple-100",
    textColorPrimary: "text-black",
    textColorSecondary: "text-gray-400",
    textColorTrimary: "text-white",
    textColored: "text-purple-500",
    textHover: "hover:text-purple-500",
    textHoverLight: "hover:text-purple-100"
  },
  text: {
    advertisement: "get 50% off today!!! ONLY TODAY!",
    about: {
      intro:
        "At Shelly's Pets, we believe every dog deserves love and care no matter your budget. We proudly serve local families with affordable dog walking, washing, and de-furing services, making it easy to keep your furry friend happy and healthy. Whether it’s a quick stroll around the block or a fresh scrub after a muddy day, our friendly team is here to help without breaking the bank.",
      listOfQualities: ["Low Cost Care", "Quality & Speed", "Local Business"],
      headingText: "WHERE YOUR PET IS CARED FOR"
    },
    contact: {
      intro:
        "We’d love to hear from you! Whether you're looking to schedule a dog walk, bath, or de-furing session, just drop us a message below. Our team is here to help and will get back to you as soon as possible—because your pup’s comfort is our priority!",
      headingText: "GET IN TOUCH NOW"
    },
    footer: {
      intro:
        "At Shelly's Pets, we believe every pet deserves to feel pampered, loved, and looked after with care. From gentle groomin  to wag-worthy washes, we treat your furry friends like family. Thank you for trusting us to keep your pets happy, healthy, and looking their best"
    },
    gallery: {
      headingText: "FROM THE NEIGHBORHOOD"
    },
    hero: {
      introMainPoints: ["Low Cost", "Low Income"],
      intro:
        "Welcome to Shelly's Pets where you will find the care and love you have been looking for",
      catcher:
        "Buffalo locals!! You are only a few minutes away from giving your furry friend the attention and care that they deserve"
    },
    services: {
      headingText: "WHAT WE DO",
      intro: "Best service for our best friends"
    },
    testimonials: {
      headingText: "OUR TESTIMONIALS",
      intro: "What They're Talking About"
    }
  },
  socialLinks: {
    whatsapp: "https://wa.me/message/3O2DQS4WSGV4H1"
  },
  images: {
    logoPath: "./assets/logo.png",
    gallery: {
      images: [{ alt: "", src: "" }]
    },
    hero: {
      mainImage: {
        alt: "",
        src: ""
      },
      heroSvg: {
        alt: "",
        src: ""
      }
    },
    iconBanner: {
      images: [{ src: "", alt: "" }]
    },
    services: [{ text: "", src: "", alt: "" }]
  },
  businessData: {
    phoneNumberHref: "7029811370",
    phoneNumber: "702-981-1370",
    email: "shellyshope4you@yahoo.com",
    serverLogoUrlForEmail:
      "https://email-provider-production.up.railway.app/static/shellys-pets.png",
    googleMapsEmbed: "",
    googleMapsHref:
      "https://www.google.com/maps/dir//177%20Wallace,%20Ave,%20Cheektowaga,%20NY%2014227%20",
    address: "177 Wallace Ave, Cheektowaga, NY 14227",
    weekHoursOpen: "2am - 4am",
    saturdayHours: "5am - 7pm",
    sundayHours: "closed",
    businessName: "Shelly's Pets"
  },
  navigationLinks: [
    { text: "Home", hash: "#main", id: 0 },
    { text: "About", hash: "#about", id: 1 },
    { text: "Services", hash: "#services", id: 2 },
    { text: "Testimonials", hash: "#testimonials", id: 3 },
    { text: "Gallery", hash: "#gallery", id: 4 },
    { text: "Contact", hash: "#contact", id: 5 }
  ],
  testimonials: [{ img: "", text: "", name: "" }]
};

export default AppConfig;
