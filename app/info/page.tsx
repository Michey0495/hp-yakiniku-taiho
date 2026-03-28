import type { Metadata } from "next";
import { Section, Separator } from "../components/section";
import { Footer } from "../components/footer";
import { MobilePhoneBar } from "../components/mobile-phone-bar";

export const metadata: Metadata = {
  title: "店舗情報 | 焼肉 大鵬",
  description:
    "焼肉 大鵬の店舗情報。住所: 北海道釧路市寿3-4-8。個室完備、全席禁煙、駐車場10台。火〜日営業。",
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-6 py-4 border-b border-th-gold/10 last:border-b-0">
      <span className="text-th-gold/70 whitespace-nowrap min-w-[6em] text-sm font-hina">
        {label}
      </span>
      <span className="text-th-ivory-dim font-gothic">{children}</span>
    </div>
  );
}

export default function InfoPage() {
  return (
    <>
      <main className="pt-14">
        <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-th-charcoal">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(155,27,48,0.15) 0%, transparent 70%)",
            }}
          />
          <h1 className="relative z-10 section-heading text-3xl md:text-5xl text-th-ivory text-center">
            店舗情報
          </h1>
        </section>

        <Separator />

        <Section>
          <div className="max-w-lg mx-auto">
            <InfoRow label="店名">焼肉 大鵬</InfoRow>
            <InfoRow label="住所">北海道釧路市寿3-4-8</InfoRow>
            <InfoRow label="電話番号">
              <a
                href="tel:0154249156"
                className="hover:text-th-gold transition-colors duration-200 cursor-pointer"
              >
                0154-24-9156
              </a>
            </InfoRow>
            <InfoRow label="営業時間">
              <div>
                <p>火〜金 17:00 - 22:30（L.O. 22:00）</p>
                <p>土・祝日 16:00 - 22:30（L.O. 22:00）</p>
              </div>
            </InfoRow>
            <InfoRow label="定休日">月曜日（祝日の場合は火曜休業）</InfoRow>
            <InfoRow label="個室">あり（2〜4人 掘りごたつ）</InfoRow>
            <InfoRow label="禁煙・喫煙">全席禁煙</InfoRow>
            <InfoRow label="駐車場">あり（10台）</InfoRow>
            <InfoRow label="アクセス">JR釧路駅から徒歩約15分</InfoRow>
          </div>
        </Section>

        <Separator />

        <Section id="map">
          <h2 className="section-heading text-2xl md:text-3xl text-th-ivory mb-10 text-center">
            アクセス
          </h2>
          <div className="w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=焼肉+大鵬+釧路市寿3-4-8&zoom=15"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.3) brightness(0.75)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="焼肉 大鵬 所在地"
            />
          </div>
          <p className="text-center text-th-ivory-dim/60 text-sm mt-4 font-gothic">
            駐車場10台完備
          </p>
        </Section>
      </main>

      <Footer />
      <MobilePhoneBar />
    </>
  );
}
