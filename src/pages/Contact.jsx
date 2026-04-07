import { contactInfo } from "../data/contact";

function ContactCard({ title, children }) {
  return (
    <article className="rounded-[1.75rem] bg-white p-6 shadow-soft sm:p-7">
      <h2 className="text-xl font-semibold text-brand-cocoa">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-brand-cocoa/80">{children}</div>
    </article>
  );
}

export default function Contact() {
  return (
    <div className="pb-20 pt-10 sm:pt-12">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-rose">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold text-brand-cocoa sm:text-5xl">
            聯絡我們
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-cocoa/80">
            這一頁的資料都來自 `src/data/contact.js`。你之後只要更新電話、地址、社群連結與地圖網址，就能直接反映到頁面與 Footer。
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
        <div className="space-y-6">
          <ContactCard title="電話聯絡">
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-base font-semibold text-brand-cocoa underline-offset-4 hover:underline"
            >
              {contactInfo.phone}
            </a>
            <p className="mt-3">如需訂製蛋糕或詢問檔期，可直接來電或透過社群私訊。</p>
          </ContactCard>

          <ContactCard title="門市地址">
            <p className="text-base font-semibold text-brand-cocoa">{contactInfo.address}</p>
            <p className="mt-3">營業時間：{contactInfo.businessHours}</p>
          </ContactCard>

          <ContactCard title="社群與線上聯絡">
            <div className="flex flex-wrap gap-3">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-cream px-4 py-2 font-semibold text-brand-cocoa"
              >
                Facebook
              </a>
              <a
                href={contactInfo.line}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-cream px-4 py-2 font-semibold text-brand-cocoa"
              >
                LINE
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-cream px-4 py-2 font-semibold text-brand-cocoa"
              >
                Instagram
              </a>
            </div>
          </ContactCard>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-soft">
          <iframe
            title="蛋糕芭比地圖"
            src={contactInfo.googleMapsEmbedUrl}
            className="h-[480px] w-full rounded-[1.25rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
