"use client";

export function BrevoNewsletterEmbed() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!-- BEGIN Brevo Form -->
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">

<div class="sib-form" style="text-align: center; background-color: #EFF2F7;">
  <!-- Dein generierter Code hier -->
  <div id="sib-form-container">… (vollständiger Brevo-HTML-Code) …</div>
</div>

<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
<script defer src="https://www.google.com/recaptcha/api.js?hl=de"></script>
<script>
  function handleCaptchaResponse() {
    var event = new Event('captchaChange');
    document.getElementById('sib-captcha')?.dispatchEvent(event);
  }
</script>
<!-- END Brevo Form -->
        `,
      }}
    />
  );
}
