import { contactInfo } from "../data/contact";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-brand-peach/40 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-brand-cocoa sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>c 蛋糕芭比 {currentYear} 版權所有</p>
        <div className="space-y-1 text-brand-cocoa/80">
          <p>聯絡電話：{contactInfo.phone}</p>
          <p>商家地址：{contactInfo.address}</p>
        </div>
        <div className="flex items-center gap-4 text-brand-cocoa/80">
          <a href={contactInfo.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={contactInfo.line} aria-label="LINE" target="_blank" rel="noreferrer">
            LINE
          </a>
          <a href={contactInfo.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
