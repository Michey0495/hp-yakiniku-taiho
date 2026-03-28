import type { Metadata } from "next";
import Image from "next/image";
import { Section, Separator } from "../components/section";
import { Footer } from "../components/footer";
import { MobilePhoneBar } from "../components/mobile-phone-bar";

export const metadata: Metadata = {
  title: "メニュー | 焼肉 大鵬",
  description:
    "焼肉 大鵬のメニュー。新鮮なお肉を個室でゆっくりとお楽しみください。価格帯2,000〜4,999円。",
};

function MenuCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; price: string }[];
}) {
  return (
    <div className="mb-12">
      <h3 className="font-hina text-lg md:text-xl text-th-gold tracking-wider mb-6 text-center">
        {title}
      </h3>
      <div className="max-w-md mx-auto">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline justify-between py-3 border-b border-th-gold/10 last:border-b-0"
          >
            <span className="font-hina text-base md:text-lg tracking-wider text-th-ivory">
              {item.name}
            </span>
            <span className="font-gothic text-sm md:text-base text-th-ivory-dim/70 ml-4 whitespace-nowrap">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <main className="pt-14">
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&h=800&fit=crop&q=80"
            alt="焼肉イメージ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <h1 className="relative z-10 section-heading text-3xl md:text-5xl text-th-ivory text-center">
            メニュー
          </h1>
        </section>

        <Separator />

        {/* メニュー写真 */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            <div className="overflow-hidden rounded aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=400&fit=crop&q=80"
                alt="お肉イメージ"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop&q=80"
                alt="炭火イメージ"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded aspect-square hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&q=80"
                alt="焼肉イメージ"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        <Separator />

        {/* メニュー一覧 */}
        <Section>
          <p className="text-center text-th-ivory-dim/60 text-sm mb-12 font-gothic">
            価格帯: 2,000円〜4,999円
          </p>

          <MenuCategory
            title="牛肉"
            items={[
              { name: "カルビ", price: "時価" },
              { name: "上カルビ", price: "時価" },
              { name: "ロース", price: "時価" },
              { name: "上ロース", price: "時価" },
              { name: "ハラミ", price: "時価" },
              { name: "タン塩", price: "時価" },
            ]}
          />

          <MenuCategory
            title="豚肉・鶏肉"
            items={[
              { name: "豚カルビ", price: "時価" },
              { name: "豚トロ", price: "時価" },
              { name: "鶏モモ", price: "時価" },
            ]}
          />

          <MenuCategory
            title="ホルモン"
            items={[
              { name: "ホルモン", price: "時価" },
              { name: "レバー", price: "時価" },
              { name: "ハツ", price: "時価" },
              { name: "ミノ", price: "時価" },
            ]}
          />

          <MenuCategory
            title="サイドメニュー"
            items={[
              { name: "ライス", price: "時価" },
              { name: "キムチ盛り合わせ", price: "時価" },
              { name: "ナムル", price: "時価" },
              { name: "サラダ", price: "時価" },
              { name: "冷麺", price: "時価" },
              { name: "スープ", price: "時価" },
            ]}
          />

          <MenuCategory
            title="ドリンク"
            items={[
              { name: "生ビール", price: "時価" },
              { name: "瓶ビール", price: "時価" },
              { name: "ハイボール", price: "時価" },
              { name: "焼酎各種", price: "時価" },
              { name: "ソフトドリンク", price: "時価" },
            ]}
          />

          <p className="text-center text-th-ivory-dim/40 text-xs mt-8 font-gothic tracking-wider">
            価格は税込です。仕入れ状況により内容・価格が変更になる場合がございます。
          </p>
        </Section>
      </main>

      <Footer />
      <MobilePhoneBar />
    </>
  );
}
