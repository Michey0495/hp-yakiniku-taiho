export function GET() {
  const content = `# 焼肉 大鵬
> 北海道釧路市の焼肉店。個室完備・掘りごたつ・全席禁煙・駐車場10台。

## 基本情報
- 店名: 焼肉 大鵬
- 住所: 北海道釧路市寿3-4-8
- 電話: 0154-24-9156
- 営業時間: 火〜金 17:00-22:30 / 土・日・祝日 16:00-22:30
- 定休日: 月曜日（祝日の場合は火曜休業）
- 価格帯: 2,000〜4,999円

## ページ一覧
- /: トップページ
- /menu: メニュー
- /info: 店舗情報
- /contact: お問い合わせ

## API
- /api/mcp: MCP Server エンドポイント
- /.well-known/agent.json: A2A Agent Card
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
