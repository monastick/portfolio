"use client"

import { useEffect, useRef } from "react"

interface LangContent {
  lang: string
  navAbout: string
  navServices: string
  navFaq: string
  navContact: string
  heroSubtitle: string
  aboutTitle: string
  greeting: string
  name: string
  nameValue: string
  age: string
  ageValue: string
  aboutDesc: string
  servicesLabel: string
  servicesTitle: string
  faqLabel: string
  faqTitle: string
  contactLabel: string
  contactTitle: string
  footerText: string
  services: {
    title: string
    image: string
    items: string[]
  }[]
  faq: {
    question: string
    answer: string
  }[]
}

const langLinks: Record<string, { ru: string; uk: string; en: string; sk: string }> = {
  ru: { ru: "/ru", uk: "/uk", en: "/en", sk: "/sk" },
  uk: { ru: "/ru", uk: "/uk", en: "/en", sk: "/sk" },
  en: { ru: "/ru", uk: "/uk", en: "/en", sk: "/sk" },
  sk: { ru: "/ru", uk: "/uk", en: "/en", sk: "/sk" },
}

export default function Portfolio({ content, currentLang }: { content: LangContent; currentLang: string }) {
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  function toggleService(e: React.MouseEvent<HTMLDivElement>) {
    const header = e.currentTarget
    const card = header.parentElement
    if (!card) return
    const wasActive = card.classList.contains("active")

    document.querySelectorAll(".service-card").forEach((c) => {
      c.classList.remove("active")
    })

    if (!wasActive) {
      card.classList.add("active")
    }
  }

  function toggleFaq(e: React.MouseEvent<HTMLDivElement>) {
    const question = e.currentTarget
    const item = question.parentElement
    if (!item) return
    const wasActive = item.classList.contains("active")

    document.querySelectorAll(".faq-item").forEach((i) => {
      i.classList.remove("active")
    })

    if (!wasActive) {
      item.classList.add("active")
    }
  }

  const links = langLinks[currentLang]

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">NIKITA MEDVETSKYI</div>
          <nav>
            <a href="#about">{content.navAbout}</a>
            <a href="#services">{content.navServices}</a>
            <a href="#faq">{content.navFaq}</a>
            <a href="#contact">{content.navContact}</a>
          </nav>
          <div className="lang-switcher">
            <a href={links.ru} className={currentLang === "ru" ? "active" : ""}>
              RU
            </a>
            <a href={links.uk} className={currentLang === "uk" ? "active" : ""}>
              UK
            </a>
            <a href={links.en} className={currentLang === "en" ? "active" : ""}>
              EN
            </a>
            <a href={links.sk} className={currentLang === "sk" ? "active" : ""}>
              SK
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">SMM | AI | Content</div>
              <h1>NIKITA MEDVETSKYI</h1>
              <p className="hero-subtitle">{content.heroSubtitle}</p>
              <p className="hero-url">
                <span>medvetskyi.com</span>
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="fade-in">
          <div className="container">
            <div className="section-header">
              <span className="section-num">/01</span>
              <span className="section-title">{content.aboutTitle}</span>
            </div>
            <h2>{content.greeting}</h2>
            <div className="about-text">
              <p>
                <strong>{content.name}</strong> {content.nameValue}
              </p>
              <p>
                <strong>{content.age}</strong> {content.ageValue}
              </p>
              <p>{content.aboutDesc}</p>
            </div>
          </div>
        </section>

        <section id="services" className="fade-in">
          <div className="container">
            <div className="section-header">
              <span className="section-num">/02</span>
              <span className="section-title">{content.servicesLabel}</span>
            </div>
            <h2>{content.servicesTitle}</h2>
            <div className="services-grid">
              {content.services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-header" onClick={toggleService}>
                    <h3>{service.title}</h3>
                    <div className="service-arrow">&#9660;</div>
                  </div>
                  <div className="service-content">
                    <div className="service-inner">
                      <div className="service-image">{service.image}</div>
                      <ul className="service-list">
                        {service.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="fade-in">
          <div className="container">
            <div className="section-header">
              <span className="section-num">/03</span>
              <span className="section-title">{content.faqLabel}</span>
            </div>
            <h2>{content.faqTitle}</h2>
            <div className="faq-list">
              {content.faq.map((faqItem, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question" onClick={toggleFaq}>
                    <h3>{faqItem.question}</h3>
                    <span className="faq-arrow">&#9660;</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faqItem.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="fade-in">
          <div className="container">
            <div className="section-header">
              <span className="section-num">/04</span>
              <span className="section-title">{content.contactLabel}</span>
            </div>
            <h2>{content.contactTitle}</h2>
            <div className="contact-grid">
              <a href="https://t.me/monastick" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-label">Telegram</div>
                <div className="contact-value">@monastick</div>
              </a>
              <a href="https://wa.me/monastick" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-label">WhatsApp</div>
                <div className="contact-value">monastick</div>
              </a>
              <a
                href="https://instagram.com/monastick"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-label">Instagram</div>
                <div className="contact-value">@monastick</div>
              </a>
              <a href="mailto:myckat2626@gmail.com" className="contact-card">
                <div className="contact-label">Email</div>
                <div className="contact-value">myckat2626@gmail.com</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>{content.footerText}</p>
        </div>
      </footer>
    </>
  )
}
