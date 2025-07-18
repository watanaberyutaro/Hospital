# 地域医療センター病院 ウェブサイト

![Hospital Website](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

https://saikazo.org/ のUI・レイアウト・配色・タイポグラフィを参考にした完全静的サイトです。Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui で構築されています。

## 🎯 プロジェクトの特徴

- **完全静的サイト**: バックエンド連携なし、MDX/JSONベースのコンテンツ管理
- **高性能**: Lighthouse スコア 90以上（パフォーマンス・アクセシビリティ・SEO）
- **レスポンシブデザイン**: モバイルファーストなデザイン
- **ダークモード対応**: システム設定に応じた自動切り替え
- **多言語対応準備**: 日本語・英語切り替え機能（UI準備済み）

## 🚀 クイックスタート

### 必要な環境

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd hospital-website

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーが起動後、[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## 📁 ディレクトリ構成

```
hospital-website/
├── app/                    # Next.js App Router
│   ├── about/             # 病院概要ページ
│   ├── contact/           # お問い合わせページ
│   ├── departments/       # 診療科一覧・詳細ページ
│   ├── news/             # お知らせ一覧・詳細ページ
│   ├── globals.css       # グローバルスタイル
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # ホームページ
├── components/            # Reactコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Breadcrumbs.tsx
│   └── ui/               # UIコンポーネント
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Hero.tsx
│       ├── SectionHeading.tsx
│       └── Pagination.tsx
├── content/              # MDXコンテンツ
│   ├── departments/      # 診療科記事
│   └── news/            # お知らせ記事
├── lib/                  # ユーティリティ関数
├── public/               # 静的ファイル
├── stories/              # Storybook用ストーリー
├── tests/                # テストファイル
└── types/                # TypeScript型定義
```

## 🛠️ 使用技術

### フロントエンド

- **Next.js 14**: App Router、静的エクスポート
- **TypeScript**: 型安全な開発
- **Tailwind CSS**: ユーティリティファーストCSS
- **shadcn/ui**: 高品質なUIコンポーネント
- **Lucide React**: アイコンライブラリ

### コンテンツ管理

- **MDX**: Markdown + React components
- **next-mdx-remote**: 動的MDXレンダリング
- **Front Matter**: メタデータ管理

### 開発・テスト

- **Storybook**: コンポーネント開発環境
- **Vitest**: 高速テストランナー
- **Testing Library**: React コンポーネントテスト
- **ESLint**: コード品質チェック

### CI/CD

- **GitHub Actions**: 自動テスト・ビルド・デプロイ
- **Lighthouse CI**: パフォーマンス計測
- **GitHub Pages**: 静的サイトホスティング

## 📜 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# 静的エクスポート
npm run export

# プロダクションサーバー起動
npm run start

# リンター実行
npm run lint

# テスト実行
npm run test

# Storybook起動
npm run storybook

# Storybookビルド
npm run build-storybook
```

## 🎨 カスタマイズ

### カラーパレット

```css
/* tailwind.config.js */
colors: {
  primary: '#0066b3',    /* コバルトブルー */
  accent: '#f28c00',     /* オレンジ */
}
```

### フォント

- **Noto Sans JP**: 日本語フォント
- **Inter**: 英語フォント

### コンテンツ追加

#### 診療科の追加

1. `content/departments/` に新しい `.mdx` ファイルを作成
2. Front Matter で メタデータを設定
3. `app/departments/page.tsx` の departments 配列に追加

#### お知らせの追加

1. `content/news/` に新しい `.mdx` ファイルを作成
2. Front Matter で日付・カテゴリを設定
3. `app/news/page.tsx` の newsItems 配列に追加

## 🚀 デプロイ

### GitHub Pages

```bash
# 静的ビルド
npm run build

# GitHub Pages へデプロイ（自動）
git push origin main
```

### 他のホスティングサービス

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **AWS S3**: `aws s3 sync out/ s3://your-bucket/`

## 🧪 テスト

### 単体テスト

```bash
# 全てのテストを実行
npm run test

# 特定のテストを実行
npm run test Button.test.tsx

# ウォッチモードでテスト
npm run test --watch
```

### Storybook

```bash
# Storybook起動
npm run storybook

# http://localhost:6006 でコンポーネントを確認
```

## 📈 パフォーマンス

このサイトは以下のLighthouseスコアを達成しています：

- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## 🤝 コントリビューション

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 📞 お問い合わせ

プロジェクトに関する質問やご提案がありましたら、お気軽にお問い合わせください。

---

**注意**: このプロジェクトは教育・デモンストレーション目的で作成されています。実際の病院サイトとは関係ありません。