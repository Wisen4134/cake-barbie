import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { homepageData } from "../data/homepage";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-rose">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold text-brand-cocoa sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-brand-cocoa/80">{description}</p>
    </div>
  );
}

function PlaceholderVisual({ title, image, tone = "rose" }) {
  if (image) {
    return <img src={image} alt={title} className="h-full w-full object-cover" />;
  }

  const toneClass =
    tone === "sand"
      ? "from-[#f2d6a2] via-[#fff5dd] to-[#ebc48c]"
      : "from-[#f0c1bc] via-[#fff6f2] to-[#dba19a]";

  return (
    <div className={["flex h-full w-full items-center justify-center bg-gradient-to-br", toneClass].join(" ")}>
      <span className="rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-medium text-brand-cocoa">
        圖片待補
      </span>
    </div>
  );
}

export default function Home() {
  const { heroIntro, carousel, featuredProducts, partners, founder } = homepageData;

  return (
    <div className="pb-20 pt-10 sm:pt-12">
      <section className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-rose">
            {heroIntro.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-cocoa sm:text-5xl lg:text-6xl">
            {heroIntro.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-brand-cocoa/80 sm:text-lg">
            {heroIntro.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={heroIntro.primaryAction.to}
              className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              {heroIntro.primaryAction.label}
            </Link>
            <Link
              to={heroIntro.secondaryAction.to}
              className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/20 bg-white px-6 py-3 text-sm font-semibold text-brand-cocoa"
            >
              {heroIntro.secondaryAction.label}
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <Carousel slides={carousel} />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="熱門商品"
          title="先從高詢問度商品開始看，快速掌握品牌風格"
          description="這一區先展示 3 款代表性品項。之後若有真實商品照，只要在資料檔補上圖片路徑即可替換目前的占位視覺。"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft"
            >
              <div className="h-64">
                <PlaceholderVisual
                  title={product.name}
                  image={product.image}
                  tone={index === 2 ? "sand" : "rose"}
                />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold text-brand-cocoa">
                  {product.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-brand-cocoa">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-cocoa/75">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
          <SectionHeading
            eyebrow="合作品牌"
            title="可放合作店家名稱，也可後續改成客戶好評"
            description="目前先依 spec 做成可維護的展示區塊，避免一開始綁死成圖片格式。若確認可使用 logo，再把資料改成圖片路徑即可。"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner) => (
              <article
                key={partner.id}
                className="rounded-[1.5rem] border border-brand-peach/40 bg-brand-cream/70 p-5"
              >
                <p className="text-lg font-semibold text-brand-cocoa">{partner.name}</p>
                <p className="mt-2 text-sm leading-7 text-brand-cocoa/70">{partner.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {founder ? (
        <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-brand-cocoa text-white shadow-soft lg:grid-cols-[0.9fr,1.1fr]">
            <div className="min-h-[320px]">
              <PlaceholderVisual title={founder.name} image={founder.image} tone="sand" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/65">
                創辦人介紹
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                {founder.title}
              </h2>
              <p className="mt-4 text-lg font-medium text-white/85">{founder.name}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                {founder.description}
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
