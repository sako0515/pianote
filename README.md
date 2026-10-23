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

ページは「マイピアノ」「練習ノート」「成長の記録」の3つで、React Routerで切り替えます。

- **練習記録の追加**
  - 「記録する」ボタンから開くモーダルで入力（どのページからでも開ける）
  - 曲名・一言コメント（任意・50文字まで）・練習時間
- **マイピアノ（`/`）**
  - レベルとレベルに応じた称号（はじまりのピアノ → 芽吹きのピアノ → 響きのピアノ → 歌うピアノ）
  - 次のレベルまでの進捗（練習1分 = 1 EXP、100 EXPごとにレベルアップ）
  - 今日の練習記録の一覧・削除（確認ダイアログ付き）、今日の獲得経験値・合計練習時間
  - 直近7日間のグラフと最近の履歴5件
- **練習ノート（`/notes`）**
  - すべての練習記録を日付ごとにまとめて表示（日ごとの合計時間付き）
  - 練習記録の追加・削除
- **成長の記録（`/growth`）**
  - これまでの練習時間・練習した日数・連続練習日数・1日あたりの平均
  - 練習時間のグラフ（1週間 / 30日を切り替え、`?range=month` のようにURLに保持）
  - すべての練習履歴
- **サイドバー**（PC）
  - 連続練習日数の表示
  - ボタンで開閉でき、閉じるとアイコンだけになる（アニメーション付き・開閉状態は保存）
- **レスポンシブ対応**
  - PCではサイドバー、スマホでは画面下のナビで移動
- **404ページ**・エラー画面
- **データの保存**
  - localStorageへの保存・復元
  - 読み込み時にZodでデータを検証し、不正なデータはバックアップして退避

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Zod
- Vitest
- lucide-react
- localStorage
- Git / GitHub
- Vercel

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx            # ロゴ・ナビ・連続日数（PC、開閉できる）
│   │   ├── BottomNav.tsx          # 画面下のナビ（スマホ）
│   │   ├── NavItem.tsx            # ナビゲーションの項目
│   │   ├── navItems.ts            # ナビの項目の定義
│   │   └── StreakCard.tsx         # 連続練習日数
│   ├── today/
│   │   ├── TodaySession.tsx       # 今日の練習ノート
│   │   ├── SessionItem.tsx        # 練習記録の1行
│   │   └── SessionSummary.tsx     # 今日の獲得経験値・合計時間
│   ├── notes/
│   │   └── DailyNoteGroup.tsx     # 1日分の練習記録
│   ├── growth/
│   │   ├── GrowthLog.tsx          # 成長の記録の要約（マイピアノ用）
│   │   ├── PracticeChart.tsx      # 練習時間の棒グラフ
│   │   └── HistoryList.tsx        # 練習履歴の一覧
│   ├── Card.tsx                   # カードの共通レイアウト
│   ├── Header.tsx                 # あいさつ
│   ├── PianoArea.tsx              # レベル・称号・進捗表示
│   └── PracticeFormModal.tsx      # 練習記録の入力モーダル
├── contexts/
│   ├── practiceLogsContext.ts     # 練習記録を全ページで共有するContext
│   └── PracticeLogsProvider.tsx   # 上記のProviderと入力モーダル
├── hooks/
│   ├── usePracticeLogs.ts         # 練習記録の状態管理とlocalStorage保存
│   └── useSidebarCollapsed.ts     # サイドバーの開閉状態（localStorageに保存）
├── layouts/
│   └── RootLayout.tsx             # 全ページ共通のレイアウト
├── pages/
│   ├── HomePage.tsx               # マイピアノ（/）
│   ├── NotesPage.tsx              # 練習ノート（/notes）
│   ├── GrowthPage.tsx             # 成長の記録（/growth）
│   ├── NotFoundPage.tsx           # 404
│   └── ErrorPage.tsx              # エラー画面
├── lib/
│   ├── date.ts                    # 日付の変換・表示形式
│   ├── exp.ts                     # 経験値・レベル・称号の計算
│   ├── stats.ts                   # 日別の練習時間・連続日数・並べ替えなどの集計
│   └── *.test.ts                  # 上記のテスト
├── schemas/
│   └── practice.ts                # 練習記録のZodスキーマと型
├── router.tsx                     # ルートの定義（React Router / Dataモード）
├── App.css                        # Tailwindの読み込みとテーマ（色・フォント）
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

## 📝 今後の予定

- 「庭」の成長要素の追加
