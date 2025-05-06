import { FormEvent, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { z } from "zod";

import AppConfig from "../app-config";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [dynamicWidth, setDynamicWidth] = useState(window.innerWidth);

  const [error, setError] = useState({
    show: false,
    message: "",
  });

  // Reset error with use effect automatically after 5 seconds of being shown
  useEffect(() => {
    if (error.show) {
      setTimeout(() => {
        setError({ show: false, message: "" });
      }, 5000);
    }
  }, [error.show]);

  // On resize make sure the iframe google map can adjust and be dynamic
  useEffect(() => {
    const changeWidth = () => {
      setDynamicWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, [dynamicWidth]);

  const validate = (): boolean => {
    const result = contactFormSchema.safeParse({
      name: name,
      email: email,
      phone: number,
      message: message,
    });

    if (!result.success) {
      setError({ show: true, message: result.error.issues[0].message });
      console.log(result.error.format());
      return false;
    } else {
      console.log("✅ Valid data:", result.data);
      return true;
    }
  };

  const handleSendEmail = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setDisabled(true);

    const formData = {
      from: email,
      to: AppConfig.businessData.email,
      businessName: AppConfig.businessData.businessName,
      logoUrl: AppConfig.businessData.serverLogoUrlForEmail,
      message: message,
      number: number,
      name: name,
    };

    try {
      const response = await fetch(
        "https://email-provider-production.up.railway.app/send-email/clients",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setError({
        show: true,
        message:
          "Your message was successfully sent and I will reach out to you as soon as possible!",
      });
      console.log(response);
    } catch (err) {
      console.log(err);
      setError({
        show: true,
        message:
          "We are terribly sorry but your message could not be sent at this time. Please try again later",
      });
      setDisabled(false);
    }
  };

  return (
    <section
      id="contact"
      data-observer
      data-index="5"
      className="px-5 pb-20 pt-40 md:px-20 lg:px-40 xl:px-60 lg:flex justify-between items-center"
    >
      {/* Error from invalid for data */}
      {error.show ? (
        <div className="fixed bottom-10 z-[999] left-10 p-3 rounded-md bg-rose-200 text-black shadow-md backdrop-blur-md bg-opacity-20 max-w-[400px]">
          <p>{error.message}</p>
        </div>
      ) : null}
      <div>
        <p className="text-center lg:text-left">CONTACT NOW</p>
        <h2
          className={`font-bold text-4xl text-center lg:text-left mt-3 ${AppConfig.theme.textColored}`}
        >
          {AppConfig.text.contact.headingText}
        </h2>
        <p className="text-center mt-5 max-w-[400px] mx-auto lg:text-left">
          {AppConfig.text.contact.intro} 🐾
        </p>
        <div className="mt-20">
          <p className="font-semibold text-lg">PHONE</p>
          <a
            className={`${AppConfig.theme.textHover} duration-200`}
            href={`tel:${AppConfig.businessData.phoneNumberHref}`}
          >
            {AppConfig.businessData.phoneNumber}
          </a>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">WHATSAPP</p>
          <a
            className={`${AppConfig.theme.textHover} duration-200 flex justify-start items-center gap-x-2`}
            href={AppConfig.socialLinks.whatsapp}
          >
            {AppConfig.businessData.businessName} WhatsApp
            <FaWhatsapp />
          </a>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">EMAIL</p>
          <a
            className={`${AppConfig.theme.textHover} duration-200`}
            href={`mailto:${AppConfig.businessData.email}`}
          >
            {AppConfig.businessData.email}
          </a>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">ADDRESS</p>
          <a
            className={`${AppConfig.theme.textHover} duration-200`}
            href={AppConfig.businessData.googleMapsHref}
          >
            {AppConfig.businessData.address}
          </a>
        </div>
        <div className="mt-5">
          <iframe
            src={AppConfig.businessData.googleMapsEmbed}
            width={dynamicWidth - 50}
            height={dynamicWidth}
            style={{ border: 0, maxWidth: 400, borderRadius: 5 }}
            // allowfullscreen={true}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-16">
          <p className="font-semibold text-lg">HOURS</p>
          <p className="font-semibold mt-2">Mon - Fri</p>
          <p className="">{AppConfig.businessData.weekHoursOpen}</p>
          <p className="font-semibold">Saturday</p>
          <p>{AppConfig.businessData.saturdayHours}</p>
          <p className="font-semibold">Sunday</p>
          <p>{AppConfig.businessData.sundayHours}</p>
        </div>
      </div>
      <form onSubmit={handleSendEmail} className="mt-16 text-black">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full ${AppConfig.theme.bgSecondary}`}
          placeholder="Your Name"
        />
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={`rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full ${AppConfig.theme.bgSecondary}`}
          placeholder="Phone Number"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full ${AppConfig.theme.bgSecondary}`}
          placeholder="Email Address"
        />
        <textarea
          name=""
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full aspect-square max-h-100 ${AppConfig.theme.bgSecondary}`}
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          disabled={disabled}
          className={`rounded-md text-white shadow-sm ${AppConfig.theme.bgPrimary} ${AppConfig.theme.bgHover} px-10 py-2 hover:text-black duration-200 cursor-pointer`}
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
