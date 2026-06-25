# Bridge English Studio LP

英会話教室向けの問い合わせ・無料体験予約LPです。静的なHTML/CSS/JSのみで構成しているため、GitHub PagesやVercelにそのままデプロイできます。

## Files

- `index.html`: LP本体
- `styles.css`: レスポンシブデザイン、CTA、FAQ、フォームのスタイル
- `script.js`: フェードインとフォームのデモ送信
- `assets/`: AI生成画像

## Local Preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy

Vercelでは静的サイトとしてルートディレクトリをデプロイしてください。
