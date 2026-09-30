# 前坂理髪店 ご提案用デモ

## 参考サイト（2026-09-30 調査／文章・写真・ロゴ・レイアウトは転載していません）
- THE BARBER NAKAYA（長野）https://www.the-barber-nakaya.com/ ：冒頭は外観写真＋大きなセリフ体コピー。トップはヒーロー→男女別メニューの2ブロック、店舗案内は別ページ。黒・金・白と大きな写真、主導線はメニュー。男女両方の入口と営業時間・駐車場の見つけやすさを採用し、今回は生成りの1ページに統合。評判確認：https://beauty.hotpepper.jp/slnH000230088/ （好意的な接客・仕上がりの口コミを確認）。
- BARBER GALAHAD（長野）https://www.barbergalahad.com/ ：冒頭は店頭写真・店名・コンセプトと予約ボタン。ヒーロー→予約/SNS→メニュー→店舗/スタッフ→映像→問い合わせ→アクセスの7ブロック（大区分）。黒・深緑・金、英字サンセリフと広い写真余白、主導線はWeb予約。料金区分・予約方法・定休日の明示を採用し、電話主体・家族向けに変更、SNS転載は不採用。評判確認：https://beauty.hotpepper.jp/slnH000482874/ （良好な口コミ評価を確認）。
- HIRO GINZA 銀座本店 https://www.hiroginza.com/salon/ginza-honten/ ：冒頭は店名・店舗ナビ・スタイル写真。写真/紹介→スタッフ→カタログ→メニュー→こだわり→店舗情報等の複数ブロック（主要6区分）。白黒＋金、和文明朝と細かな情報区分、主導線はWeb/LINE予約。シェービングの説明と繰り返しの予約導線を採用し、今回は電話に一本化・過度な販促と人物写真は不採用。評判確認：https://www.hiroginza.com/salon/ginza-honten/review/ 。

## 構成判断
ヒーロー → 営業時間・定休日・住所の早見表 → お店について → メニュー → 営業時間・アクセス → Instagramリンク → お問い合わせ → フッター。理容室利用時に探す料金、顔剃り、子ども対応、女性向けメニュー、予約方法、駐車場、定休日をまとめた。未確定項目は【要確認】のまま。スマートフォンの固定電話バーにsafe-areaを適用。

## 写真素材
Pexelsから指定形式のURLでダウンロード。全3枚、1200px幅・各200KB以下。実店舗の写真ではなく、全てキャプション付き。Googleマップ・Instagram・Facebookからの画像転載なし。

| Pexels ID | 撮影者 | 用途 | 元ページ |
| --- | --- | --- | --- |
| 8834066 | Kampus Production | ヒーロー：タオル上のハサミ・コーム（背景人物は強くぼけている） | https://www.pexels.com/photo/different-types-of-hair-scissors-on-a-towel-8834066/ |
| 8867164 | Los Muertos Crew | メニュー：泡・ブラシ・手元 | https://www.pexels.com/photo/person-holding-a-shaving-brush-8867164/ |
| 7697712 | RDNE Stock project | メニュー：理容道具ディテール | https://www.pexels.com/photo/tools-at-barbershop-7697712/ |

取得URL形式：`https://images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?auto=compress&cs=tinysrgb&w=1200`

## 事実・公開前の確認事項
- 店名、住所、電話、営業時間、月曜定休は依頼文の情報を使用。
- 営業時間：【要確認：平日の閉店時刻 18:00か18:20か】。
- 【要確認：創業年・代数の表記】。依頼に1924年創業・2024年100周年とあるが、本文やロゴでは年数を断定していない。
- 【要確認：口コミ評価の掲載可否】。星の数・件数・口コミ原文は掲載していない。紹介文は提供された口コミ傾向を再構成。
- 【要確認：店主紹介文】、各メニューの提供範囲・価格・税表記、カラー提供有無、子どもの対象年齢、駐車場有無・台数、予約制・当日受付。
- フォームはaction空のデモ。送信や保存を行わず、入力検証後に「未送信」と表示。本運用前にFormspreeの正式エンドポイントと個人情報の取扱いを確定する。
- noindex、提案用デモの上部表示、指定のフッターデモ表記あり。外部リンク矢印は地図とInstagramのみ。電話のタップ確認は発信を実行せずhrefを検査する。
- Googleマップ外部リンクは提供されたMaps URLs形式を維持（HTMLでは & を &amp; にエスケープ）。Instagramはリンクのみ。
- 静的HTML/CSS/JS、相対パス、ビルド不要。ユーザーの明示指示に従い、AGENTS.mdの標準Cloudflare PagesではなくGitHub Pagesを利用。解析タグはデモには追加していない。

## 動作確認
2026-09-30：ブラウザで1440pxのPC表示、390px・320pxのスマホ表示を確認。横はみ出しなし。スマホメニューの開閉・アンカー移動、全3枚の画像読込、写真注記、固定電話バー、telリンク6箇所、指定Maps URLsとの一致、地図iframe、noindex、viewport-fit=cover、フッターデモ表記を検査。フォームは必須入力検証と未送信メッセージを確認。JavaScript構文検査に合格。iPhone実機での発信とsafe-areaの実機検証は未実施。

