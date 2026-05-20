import { setRequestLocale } from "next-intl/server";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactPageContent />;
}
