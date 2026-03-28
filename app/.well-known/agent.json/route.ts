export function GET() {
  const agentCard = {
    name: "焼肉 大鵬",
    description:
      "北海道釧路市の焼肉店。個室完備・掘りごたつ・全席禁煙・駐車場10台。",
    url: "https://hp-yakiniku-taiho.vercel.app",
    provider: { organization: "EZOAI", url: "https://ezoai.jp" },
    version: "0.1.0",
    capabilities: {
      streaming: false,
      pushNotifications: false,
    },
    defaultInputModes: ["text"],
    defaultOutputModes: ["text"],
    skills: [
      {
        id: "shop-info",
        name: "店舗情報",
        description:
          "焼肉 大鵬の店舗情報（住所・電話番号・営業時間・アクセス等）を返します。",
      },
    ],
  };

  return Response.json(agentCard);
}
