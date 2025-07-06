"use client";

import { useEffect } from "react";

export function BrevoNewsletterForm() {
  useEffect(() => {
    // Ladet das Brevo-Formularskript und das Captcha nach
    const script1 = document.createElement("script");
    script1.src = "https://sibforms.com/forms/end-form/build/main.js";
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://www.google.com/recaptcha/api.js?hl=de";
    script2.defer = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.innerHTML = `
      function handleCaptchaResponse() {
        var event = new Event('captchaChange');
        document.getElementById('sib-captcha')?.dispatchEvent(event);
      }
    `;
    document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return (
    <div className="bg-[#EFF2F7] rounded-xl max-w-xl mx-auto p-6 shadow-sm">
      <form
        id="sib-form"
        method="POST"
        action="https://25054e3f.sibforms.com/serve/MUIFAAjCPUlG9Bsr-qtGRvo373tCpYpNptlBqZmPbJ3rNix9d5kfmmH6j8DqIMQ3dJG7hVKcc4Z2mv-FgB0zCTsgUSng9ZF2uJmPMG3uquMy7ZHq0QtzDblbh4-H8LiKsT31ba1tdheeH2k8akEFmRcKYSLzckvSK1Ss1Z4ASqejTZWCLAk02hMVBCMm35tJgSdmkxQJy0rJaATH"
        data-type="subscription"
      >
        <h3 className="text-xl font-semibold text-left mb-2">Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4 text-left">
          Melde dich zu unserem Newsletter an, um auf dem Laufenden zu bleiben.
        </p>

        <label className="block text-left mb-2 font-medium" htmlFor="EMAIL">
          Deine E-Mail-Adresse
        </label>
        <input
          type="email"
          id="EMAIL"
          name="EMAIL"
          required
          placeholder="z. B. du@beispiel.de"
          className="w-full rounded border px-3 py-2 mb-4 text-sm shadow-sm"
        />

        <label className="text-sm block text-left mb-4">
          <input type="checkbox" name="OPT_IN" required className="mr-2" />
          Ich möchte den Meepler-Newsletter erhalten und akzeptiere die{" "}
          <a href="/datenschutz" className="underline">
            Datenschutzerklärung
          </a>.
        </label>

        <div id="sib-captcha" className="g-recaptcha mb-4" data-sitekey="6LcYbngrAAAAACS2pEcUfAc3dI2ojhP_A1xx-s7o" data-callback="handleCaptchaResponse" />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-emerald-700 text-sm font-medium"
        >
          Anmelden
        </button>

        {/* Hidden fields for bot detection */}
        <input type="text" name="email_address_check" className="hidden" />
        <input type="hidden" name="locale" value="de" />
      </form>
    </div>
  );
}
