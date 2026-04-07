import { useEffect, useMemo, useState } from "react";
import LazyImage from "../components/LazyImage";
import { portfolioCategories, portfolioItems } from "../data/portfolio";

const PAGE_SIZE = 9;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="pb-20 pt-10 sm:pt-12">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-rose">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold text-brand-cocoa sm:text-5xl">
            作品集展示頁
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-cocoa/80">
            目前先依 spec 完成分類篩選、卡片展示、延遲載入與分批顯示。之後你只要維護
            `src/data/portfolio.js` 的資料內容，就能替換成真實作品。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {portfolioCategories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  className={[
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "bg-brand-cocoa text-white"
                      : "bg-brand-cream text-brand-cocoa hover:bg-brand-peach/60",
                  ].join(" ")}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-brand-cocoa/70">
            目前顯示 {visibleItems.length} / {filteredItems.length} 件作品
          </p>
          <p className="text-sm text-brand-cocoa/60">圖片可稍後補上，不影響版型與功能</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft"
            >
              <div className="h-72">
                <LazyImage src={item.image} alt={item.name} />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold text-brand-cocoa">
                  {item.category === "cake" ? "客製化蛋糕" : "牛渣糖"}
                </span>
                <h2 className="mt-4 text-xl font-semibold text-brand-cocoa">{item.name}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-cocoa/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="rounded-full bg-brand-cocoa px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              載入更多
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
