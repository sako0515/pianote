# Pianote 🎹🌱

ピアノの練習を記録し、日々の積み重ねを可視化する練習記録アプリです。

「練習した分だけ、自分のピアノと庭が成長していく」をコンセプトに、
ピアノの練習を継続することが楽しくなるようなアプリを目指しています。

現在は、React / TypeScriptを使ったフロントエンド開発を中心に、
基本的な状態管理やデータ保存の仕組みを学びながら開発しています。

## 🔗 Demo

https://pianote-peach.vercel.app/

## ✨ Features

現在実装している機能

- 練習記録の追加
  - 曲名
  - 作曲家
  - 練習時間
- 今日の練習記録の一覧表示
- 練習記録の削除（確認ダイアログ付き）
- 今日の合計練習時間・獲得経験値の表示
- ピアノのステータス表示（レベル・次のレベルまでの進捗）
  - 練習1分 = 1 EXP、100 EXPごとにレベルアップ
- localStorageへの練習記録の保存・復元
  - 読み込み時にZodでデータを検証し、不正なデータはバックアップして退避

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Zod
- Vitest
- localStorage
- Git / GitHub
- Vercel

## 📁 Project Structure

```text
src/
├── components/
│   ├── Card.tsx            # カードの共通レイアウト
│   ├── Header.tsx          # あいさつ・日付・通知ボタン
│   ├── PianoArea.tsx       # ピアノのレベル・進捗表示
│   ├── PianoForm.tsx       # 練習記録の入力フォーム
│   └── TodaySession.tsx    # 今日の練習一覧・合計
├── hooks/
│   └── usePracticeLogs.ts  # 練習記録の状態管理とlocalStorage保存
├── lib/
│   ├── date.ts             # 日付の変換
│   ├── exp.ts              # 経験値・レベルの計算
│   └── *.test.ts           # 上記のテスト
├── schemas/
│   └── practice.ts         # 練習記録のZodスキーマと型
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

| コマンド          | 内容                   |
| ----------------- | ---------------------- |
| `npm run dev`     | 開発サーバーを起動     |
| `npm run build`   | 型チェックとビルド     |
| `npm run lint`    | ESLintを実行           |
| `npm run test`    | Vitestでテストを実行   |
| `npm run preview` | ビルド結果をプレビュー |
