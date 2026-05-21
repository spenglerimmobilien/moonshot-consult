import { setRequestLocale } from "next-intl/server";
import { PricingPageContent } from "@/components/pages/PricingPageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PricingPageContent />;
}
