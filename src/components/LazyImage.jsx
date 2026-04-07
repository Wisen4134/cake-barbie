function PlaceholderCard({ title }) {
  return (
    <div className="flex h-full min-h-[260px] w-full items-center justify-center bg-gradient-to-br from-[#f0c1bc] via-[#fff6f2] to-[#d9c2b0]">
      <span className="rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-medium text-brand-cocoa">
        {title} 圖片待補
      </span>
    </div>
  );
}

export default function LazyImage({ src, alt }) {
  if (!src) {
    return <PlaceholderCard title={alt} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  );
}
