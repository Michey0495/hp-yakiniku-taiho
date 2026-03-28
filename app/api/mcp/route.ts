import { NextRequest } from "next/server";

const SHOP_INFO = {
  name: "焼肉 大鵬",
  address: "北海道釧路市寿3-4-8",
  phone: "0154-24-9156",
  hours: {
    weekday: "火〜金 17:00-22:30（L.O. 22:00）",
    weekend: "土・日・祝日 16:00-22:30（L.O. 22:00）",
  },
  closedDays: "月曜日（祝日の場合は火曜休業）",
  features: ["個室あり（2〜4人 掘りごたつ）", "全席禁煙", "駐車場10台"],
  access: "JR釧路駅から徒歩約15分",
  priceRange: "2,000〜4,999円",
  genre: "焼肉",
  area: "北海道釧路市",
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { method } = body;

  if (method === "tools/list") {
    return Response.json({
      tools: [
        {
          name: "get_shop_info",
          description: "焼肉 大鵬の店舗情報を取得します",
          inputSchema: { type: "object", properties: {} },
        },
      ],
    });
  }

  if (method === "tools/call") {
    return Response.json({
      content: [{ type: "text", text: JSON.stringify(SHOP_INFO, null, 2) }],
    });
  }

  return Response.json({ error: "Unknown method" }, { status: 400 });
}

export async function GET() {
  return Response.json({
    name: "焼肉 大鵬 MCP Server",
    version: "0.1.0",
    description: "焼肉 大鵬の店舗情報を提供するMCPサーバー",
  });
}
