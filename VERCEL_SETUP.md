# Vercel環境での管理機能セットアップ

Vercel環境で管理機能（お知らせ投稿、臨時休業設定など）を使用するには、Vercel Blob Storageの設定が必要です。

## セットアップ手順

### 1. Vercel Blob Storageを有効化

1. [Vercelダッシュボード](https://vercel.com/dashboard)にログイン
2. プロジェクトを選択
3. 「Storage」タブをクリック
4. 「Create Database」をクリック
5. 「Blob」を選択
6. データベース名を入力（例：`hospital-storage`）
7. 「Create」をクリック

### 2. 環境変数を設定

1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」タブをクリック
3. 「Environment Variables」を選択
4. 以下の環境変数を追加：
   - `BLOB_READ_WRITE_TOKEN`: Blob Storageのトークン（自動的に設定される）

### 3. デプロイ

環境変数を設定したら、再デプロイしてください：

```bash
git push origin main
```

## トラブルシューティング

### エラー：「Vercel Blob Storageの設定が必要です」

このエラーが表示される場合は、環境変数が正しく設定されていません。上記の手順を確認してください。

**確認項目：**
1. Vercel Blob Storageが作成されているか
2. 環境変数 `BLOB_READ_WRITE_TOKEN` が存在するか
3. 環境変数が正しいプロジェクトに設定されているか
4. 最新のコードがデプロイされているか

**環境変数の確認方法：**
1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「Environment Variables」
3. `BLOB_READ_WRITE_TOKEN` が存在し、値が設定されていることを確認

### エラー：「Failed to save holiday data」

このエラーが出る場合、以下を確認してください：

1. **Vercel環境の場合**: 上記の「Vercel Blob Storageの設定が必要です」エラーと同じ対処法
2. **ローカル環境の場合**: `public/data/` ディレクトリが存在し、書き込み権限があることを確認

### ログの確認方法

Vercelでのエラーログを確認する：
1. Vercelダッシュボードでプロジェクトを選択
2. 「Deployments」タブをクリック
3. 最新のデプロイメントをクリック
4. 「Functions」タブで関数のログを確認
5. または「Runtime Logs」でリアルタイムログを確認

### データの移行

既存のJSONファイルのデータをVercel Blobに移行したい場合は、以下の手順で行えます：

1. ローカル環境で管理画面にアクセス
2. 既存のデータをエクスポート（手動でコピー）
3. Vercel環境の管理画面にアクセス
4. データを再入力

## ローカル開発

ローカル環境では引き続きファイルシステムを使用します。`.env.local`ファイルは不要です。

## 料金

Vercel Blob Storageには無料枠があります：
- 1GB のストレージ
- 1億回の読み取り
- 10万回の書き込み

病院のウェブサイトの規模であれば、無料枠で十分です。

## 代替案

Vercel Blob Storageを使用したくない場合の代替案：

1. **Supabase**: 無料のPostgreSQLデータベース
2. **PlanetScale**: 無料のMySQLデータベース
3. **Firebase**: Googleの無料データベース
4. **静的管理**: GitHubで直接JSONファイルを編集

これらの代替案を使用する場合は、`lib/storage.ts`を適切に修正する必要があります。