import type { Metadata } from "next";
import { Section, Separator, PhoneIcon } from "../components/section";
import { Footer } from "../components/footer";
import { MobilePhoneBar } from "../components/mobile-phone-bar";

export const metadata: Metadata = {
  title: "お問い合わせ | 焼肉 大鵬",
  description:
    "焼肉 大鵬へのお問い合わせ・ご予約。電話: 0154-24-9156。火〜金 17:00-22:30 / 土・日・祝日 16:00-22:30。",
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-14">
        <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-th-charcoal">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)",
            }}
          />
          <h1 className="relative z-10 section-heading text-3xl md:text-5xl text-th-ivory text-center">
            お問い合わせ
          </h1>
        </section>

        <Separator />

        <Section className="text-center">
          <p className="font-gothic text-th-ivory-dim/70 text-base md:text-lg mb-4">
            ご予約・お問い合わせはお電話にて承ります
          </p>
          <p className="font-gothic text-th-ivory-dim/50 text-sm mb-10">
            営業時間内にお電話ください
          </p>

          <a href="tel:0154249156" className="phone-cta">
            <PhoneIcon />
            <span>0154-24-9156</span>
          </a>

          <div className="mt-16 max-w-sm mx-auto space-y-4 font-gothic text-base leading-[1.8] text-left">
            <div className="flex gap-6">
              <span className="text-th-gold/70 whitespace-nowrap min-w-[5em] text-sm">
                営業時間
              </span>
              <div className="text-th-ivory-dim">
                <p>火〜金 17:00 - 22:30</p>
                <p>土・日・祝日 16:00 - 22:30</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-th-gold/70 whitespace-nowrap min-w-[5em] text-sm">
                定休日
              </span>
              <div className="text-th-ivory-dim">
                <p>月曜日</p>
                <p className="text-sm text-th-ivory-dim/60">（祝日の場合は火曜休業）</p>
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        <Section>
          <h2 className="section-heading text-2xl md:text-3xl text-th-ivory mb-10 text-center">
            アクセス
          </h2>
          <div className="w-full aspect-[16/9] mb-8 overflow-hidden rounded">
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
          <div className="text-center space-y-2">
            <p className="font-gothic text-th-ivory-dim text-base">
              北海道釧路市寿3-4-8
            </p>
            <p className="font-gothic text-th-ivory-dim/60 text-sm">
              JR釧路駅から徒歩約15分 / 駐車場10台完備
            </p>
          </div>
        </Section>
      </main>

      <Footer />
      <MobilePhoneBar />
    </>
  );
}
