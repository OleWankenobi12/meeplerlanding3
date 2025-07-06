// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Brevo Styles */}
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>

        {/* Brevo + reCAPTCHA Scripts */}
        <Script
          src="https://sibforms.com/forms/end-form/build/main.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.google.com/recaptcha/api.js?hl=de"
          strategy="afterInteractive"
        />
        <Script id="brevo-captcha-handler" strategy="afterInteractive">
          {`
            function handleCaptchaResponse() {
              var event = new Event('captchaChange');
              document.getElementById('sib-captcha')?.dispatchEvent(event);
            }
          `}
        </Script>
      </body>
    </html>
  );
}
