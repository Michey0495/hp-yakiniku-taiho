import Image from "next/image";
import Link from "next/link";
import { Section, Separator } from "./components/section";
import { Footer } from "./components/footer";
import { MobilePhoneBar } from "./components/mobile-phone-bar";

export default function Home() {
  return (
    <>
      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
          <Image
            src="https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1920&h=1080&fit=crop&q=80"
            alt="焼肉イメージ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(155,27,48,0.2) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <p className="font-gothic text-th-gold/70 text-xs md:text-sm tracking-[0.4em] mb-6">
              北海道釧路市
            </p>

            <h1 className="font-hina text-5xl md:text-7xl lg:text-8xl text-th-ivory tracking-wider leading-tight">
              焼肉
              <br />
              大鵬
            </h1>

            <p className="font-gothic text-th-ivory/70 text-base md:text-lg tracking-[0.15em] mt-8 max-w-md">
              個室で味わう、くつろぎの焼肉。
              <br />
              家族の笑顔が集まる場所。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link
                href="/menu"
                className="px-8 py-3 bg-th-crimson border border-th-crimson-bright/30 text-th-ivory font-hina text-sm tracking-widest hover:bg-th-crimson-bright/80 transition-all duration-200 cursor-pointer"
              >
                メニューを見る
              </Link>
              <Link
                href="/info"
                className="px-8 py-3 border border-th-gold/40 text-th-ivory font-hina text-sm tracking-widest hover:bg-th-gold/10 transition-all duration-200 cursor-pointer"
              >
                店舗情報
              </Link>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="font-gothic text-[10px] tracking-[0.3em] text-th-ivory-dim/50">
              SCROLL
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="animate-bounce"
              aria-hidden="true"
            >
              <path
                d="M8 4L8 18M8 18L2 12M8 18L14 12"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>
        </section>

        {/* ═══ こだわり ═══ */}
        <Separator />
        <Section id="concept">
          <h2 className="section-heading text-2xl md:text-3xl text-th-ivory mb-10 text-center">
            くつろぎの個室空間
          </h2>
          <div className="mb-10 overflow-hidden rounded">
            <Image
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop&q=80"
              alt="焼肉イメージ"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 font-gothic text-base md:text-lg leading-[1.9] text-th-ivory-dim/80">
            <p>
              大鵬は、掘りごたつの個室を備えた
              <br className="hidden md:block" />
              釧路の焼肉店です。
            </p>
            <p>
              ご家族での団らん、大切な方とのお食事に。
              <br className="hidden md:block" />
              周りを気にせずゆっくりとお過ごしいただける
              <br className="hidden md:block" />
              プライベートな空間をご用意しております。
            </p>
          </div>
        </Section>

        {/* ═══ 営業案内 ═══ */}
        <Separator />
        <Section id="hours">
          <h2 className="section-heading text-2xl md:text-3xl text-th-ivory mb-10 text-center">
            営業案内
          </h2>
          <div className="max-w-sm mx-auto space-y-5 font-gothic text-base leading-[1.8]">
            <div className="flex gap-6">
              <span className="text-th-gold/70 whitespace-nowrap min-w-[5em] text-sm">
                営業時間
              </span>
              <div className="text-th-ivory-dim">
                <p>火〜金 17:00 - 22:30</p>
                <p className="text-sm text-th-ivory-dim/60">（L.O. 22:00）</p>
                <p className="mt-1">土・日・祝日 16:00 - 22:30</p>
                <p className="text-sm text-th-ivory-dim/60">（L.O. 22:00）</p>
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

        {/* ═══ アクセス ═══ */}
        <Separator />
        <Section id="access">
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
