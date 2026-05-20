import type { LocalizedText } from "@/types/content";

export const legalNotice = {
  title: { de: "Impressum", en: "Imprint" } satisfies LocalizedText,
  disclaimer: {
    de: "Mustertext – bitte rechtlich prüfen und durch echte Angaben ersetzen.",
    en: "Placeholder text — please have legally reviewed and replace with real information.",
  } satisfies LocalizedText,
  sections: [
    {
      heading: { de: "Angaben gemäß § 5 TMG", en: "Information pursuant to § 5 TMG" },
      content: {
        de: "[Firmenname]\n[Adresse]\n[PLZ Ort]\nDeutschland",
        en: "[Company Name]\n[Address]\n[Postal Code City]\nGermany",
      },
    },
    {
      heading: { de: "Kontakt", en: "Contact" },
      content: {
        de: "Telefon: +49 30 1234 5678\nE-Mail: hello@moonshot-consult.de",
        en: "Phone: +49 30 1234 5678\nEmail: hello@moonshot-consult.de",
      },
    },
    {
      heading: { de: "Registereintrag", en: "Register Entry" },
      content: {
        de: "Registergericht: [Amtsgericht]\nRegisternummer: [HRB-Nummer]",
        en: "Register court: [District Court]\nRegistration number: [HRB Number]",
      },
    },
    {
      heading: { de: "Umsatzsteuer-ID", en: "VAT ID" },
      content: {
        de: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:\n[USt-IdNr.]",
        en: "VAT identification number pursuant to § 27a UStG:\n[VAT ID]",
      },
    },
  ],
} as const;

export const privacyPolicy = {
  title: { de: "Datenschutzerklärung", en: "Privacy Policy" } satisfies LocalizedText,
  disclaimer: {
    de: "Mustertext – bitte rechtlich prüfen und durch echte Angaben ersetzen.",
    en: "Placeholder text — please have legally reviewed and replace with real information.",
  } satisfies LocalizedText,
  sections: [
    {
      heading: { de: "1. Verantwortlicher", en: "1. Data Controller" },
      content: {
        de: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n[Firmenname], [Adresse], [E-Mail]",
        en: "The data controller for this website is:\n[Company Name], [Address], [Email]",
      },
    },
    {
      heading: { de: "2. Hosting", en: "2. Hosting" },
      content: {
        de: "Diese Website wird bei [Hosting-Anbieter] gehostet. Beim Aufruf der Website werden automatisch Server-Logfiles erfasst.",
        en: "This website is hosted by [Hosting Provider]. Server log files are automatically collected when you visit the site.",
      },
    },
    {
      heading: { de: "3. Cookies", en: "3. Cookies" },
      content: {
        de: "Diese Website verwendet ggf. technisch notwendige Cookies. Weitere Informationen folgen nach rechtlicher Prüfung.",
        en: "This website may use technically necessary cookies. Further information will follow after legal review.",
      },
    },
    {
      heading: { de: "4. Kontaktformular", en: "4. Contact Form" },
      content: {
        de: "Wenn Sie uns per Kontaktformular Anfragen senden, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.",
        en: "If you send us inquiries via the contact form, your details will be stored for processing the request.",
      },
    },
  ],
} as const;
