import Portfolio from "@/components/portfolio"
import { skContent } from "@/lib/content/sk"

export const metadata = {
  title: "Nikita Medvetskyi | SMM & AI",
  description: "SMM, AI-Agenti, Content Creator - Portf\u00f3lio Nikitu Medvetsk\u00e9ho",
}

export default function SkPage() {
  return <Portfolio content={skContent} currentLang="sk" />
}
