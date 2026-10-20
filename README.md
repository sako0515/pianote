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

- **練習記録の追加**
  - 「記録する」ボタンから開くモーダルで入力
  - 曲名・一言コメント（任意・50文字まで）・練習時間
- **今日の練習ノート**
  - 今日の練習記録の一覧表示
  - 練習記録の削除（確認ダイアログ付き）
  - 今日の獲得経験値・合計練習時間の表示
- **マイピアノ**
  - レベルとレベルに応じた称号（はじまりのピアノ → 芽吹きのピアノ → 響きのピアノ → 歌うピアノ）
  - 次のレベルまでの進捗（練習1分 = 1 EXP、100 EXPごとにレベルアップ）
- **成長の記録**
  - 直近7日間の練習時間を棒グラフで表示
  - 最近の練習履歴（新しい順に5件）
  - これまでの合計練習時間
- **連続練習日数**の表示（サイドバー）
- **レスポンシブ対応**
  - PCではサイドバー + 2カラム、スマホでは1カラムで表示
- **データの保存**
  - localStorageへの保存・復元
  - 読み込み時にZodでデータを検証し、不正なデータはバックアップして退避

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
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
│   │   ├── Sidebar.tsx            # ロゴ・ナビ・連続日数・ユーザー情報
│   │   ├── NavItem.tsx            # ナビゲーションの項目
│   │   ├── StreakCard.tsx         # 連続練習日数
│   │   └── UserProfile.tsx        # ユーザー情報
│   ├── today/
│   │   ├── TodaySession.tsx       # 今日の練習ノート
│   │   ├── SessionItem.tsx        # 練習記録の1行
│   │   └── SessionSummary.tsx     # 今日の獲得経験値・合計時間
│   ├── growth/
│   │   ├── GrowthLog.tsx          # 成長の記録
│   │   ├── WeeklyChart.tsx        # 直近7日間の棒グラフ
│   │   └── HistoryList.tsx        # 練習履歴の一覧
│   ├── Card.tsx                   # カードの共通レイアウト
│   ├── Header.tsx                 # あいさつ・日付・通知ボタン
│   ├── PianoArea.tsx              # レベル・称号・進捗表示
│   └── PracticeFormModal.tsx      # 練習記録の入力モーダル
├── hooks/
│   └── usePracticeLogs.ts         # 練習記録の状態管理とlocalStorage保存
├── lib/
│   ├── date.ts                    # 日付の変換・表示形式
│   ├── exp.ts                     # 経験値・レベル・称号の計算
│   ├── stats.ts                   # 日別の練習時間・連続日数の集計
│   └── *.test.ts                  # 上記のテスト
├── schemas/
│   └── practice.ts                # 練習記録のZodスキーマと型
├── App.tsx                        # 全体のレイアウト
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

- ユーザー名の設定（現在は仮の名前を表示）
- ナビゲーションごとのページ分け
- 「庭」の成長要素の追加
