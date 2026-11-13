# 自己紹介サイトの学習メモ

## 使った道具

- Node.jsとnpm：Node.jsはJavaScriptを動かすための環境。npmは必要なパッケージを管理したり、開発サーバーの起動手順を実行したりするために使った。
- Next.jsとTailwind CSS：Next.jsでページを表示し、Tailwind CSSで見出しの大きさ、余白、カードの枠を整えた。
- GitとGitHub：Gitで変更をコミットとして記録し、`git push` でGitHubへ送った。

## ページが表示される流れ

`npm.cmd run dev` で開発サーバーを起動し、Edgeの上部にあるアドレス欄で `http://localhost:3000` を開いた。Next.jsは `app/layout.tsx` の共通設定を使い、その中に `app/page.tsx` のトップページを表示する。

`page.tsx` の `<main>` の中に、自己紹介・経歴・スキルを配置した。経歴とスキルはそれぞれ `<section>` で囲み、`className` にTailwind CSSのクラス名を書いてカードの見た目をそろえた。

## Fast Refresh

開発サーバーを動かしたままVS Codeで `page.tsx` を保存すると、Edgeで手動更新しなくても、追加した自己紹介文が表示された。これは、Next.jsの開発サーバーがファイルの変更を検知してブラウザに反映する仕組み。

## つまずいたことと解決方法

- ローカルサイトを `https://localhost:3000` で開くと接続エラーが出た。ターミナルの `Local:` に表示された `http://localhost:3000` を、Edgeのアドレス欄に入力し直すと表示できた。
- 最初のコミットでは、作成者の情報が未設定でエラーが出た。このプロジェクトに名前とGitHubの `noreply` アドレスを設定し、コミットをやり直した。
- 変更を `git add` で準備する前にコミットを実行し、`no changes added to commit` と表示された。`git add` のあとに `git status --short` を実行し、行の先頭に緑の `M` が出たことを確認してからコミットした。