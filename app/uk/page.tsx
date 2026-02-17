import Portfolio from "@/components/portfolio"
import { ukContent } from "@/lib/content/uk"

export const metadata = {
  title: "Nikita Medvetskyi | SMM & AI",
  description: "SMM, AI-\u0410\u0433\u0435\u043d\u0442\u0438, \u041a\u043e\u043d\u0442\u0435\u043d\u0442-\u041a\u0440\u0435\u0430\u0442\u043e\u0440 - \u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e \u041d\u0456\u043a\u0456\u0442\u0438 \u041c\u0435\u0434\u0432\u0435\u0446\u044c\u043a\u043e\u0433\u043e",
}

export default function UkPage() {
  return <Portfolio content={ukContent} currentLang="uk" />
}
