#js-scraping
jQueryでローカルにある大量のhtmlファイルから特定の文字列を抽出&ファイル出力します

#前提条件

* htmlがローカルに保存されている
* File API に対応したブラウザで開く

#使い方

01.export.jsの中身（getContents関数）を取得したい要素に併せて編集する

02.fileexport.htmlをブラウザで読み込む

03.対象のファイルを読み込む

04.ダウンロードリンクをクリック


export.js内のgetContents関数内に対象のテキストを取得するjQueryを記述します。

取得したテキストを、resultArrayに格納すれば完成です。
サンプルはExcelで加工できるようタブ区切りで出力しています。

タブ区切りで取得すると、

1. 出力したテキストをExcelに貼り付け

2. 1行目にkeyを入力

3. <a href="https://shancarter.github.io/mr-data-converter/" target="_blank">Mr.Data Converter</a>に貼り付け

でJSONに変換することもできます。

# 問題点

* 繰り返しの読み込みに対応していない
* メモリの管理ができていない（大量に処理をするとブラウザが落ちる）

※PCにもよりますが、筆者の環境では2,000件一度に抽出すると落ちました

まだまだ改善の余地がありますが、500件くらいのデータを抽出するのであれば使えそうです。
