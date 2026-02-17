import Portfolio from "@/components/portfolio"
import { enContent } from "@/lib/content/en"

export const metadata = {
  title: "Nikita Medvetskyi | SMM & AI",
  description: "SMM, AI-Agents, Content Creator - Portfolio of Nikita Medvetskyi",
}

export default function EnPage() {
  return <Portfolio content={enContent} currentLang="en" />
}
