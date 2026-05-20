import { setRequestLocale } from "next-intl/server";
import { LandingEffects } from "@/components/providers/LandingEffects";
import { LandingPage } from "@/components/sections/LandingPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <LandingEffects>
      <LandingPage />
    </LandingEffects>
  );
}
