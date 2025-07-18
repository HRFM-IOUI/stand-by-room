// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  // ★日本語・英語タイトル両方（GoogleにもXにも強い） 
  title: "STAND｜杉並区西荻窪の美容室・ヘアサロン",
  description: "【2025年8月20日OPEN予定】杉並区西荻南の美容室STAND（スタンド）公式サイト。カット・カラー・パーマ・トリートメント。完全予約制・当日LINE予約OK。スタイリッシュな空間であなたの“似合う”を叶えます。",
  applicationName: "STAND",
  keywords: [
    "美容室",
    "西荻窪",
    "杉並区",
    "ヘアサロン",
    "STAND",
    "カット",
    "カラー",
    "パーマ",
    "トリートメント",
    "予約",
    "西荻南",
    "ヘアスタイル",
    "美容院",
    "オープン"
  ],
  authors: [{ name: "STAND", url: "https://stand-hair.com" }],
  creator: "STAND",
  publisher: "STAND",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  // OGP & SNS meta
  openGraph: {
    type: "website",
    url: "https://stand-hair.com",
    title: "STAND｜杉並区西荻窪の美容室・ヘアサロン",
    description: "【8月20日OPEN予定】西荻南の美容室STAND（スタンド）｜完全予約制＆当日LINE予約可。カット・カラー・パーマ・トリートメント",
    siteName: "STAND",
    images: [
      {
        url: "/ogp.jpg", // 1200x630で用意推奨
        width: 1200,
        height: 630,
        alt: "STAND（西荻窪 美容室）"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@stand_hair", // 公式Xアカウント名
    creator: "@stand_hair",
    title: "STAND｜杉並区西荻窪の美容室・ヘアサロン",
    description: "杉並区西荻南の美容室STAND（スタンド）｜8月20日新規OPEN！LINE予約・当日予約OK",
    images: ["/ogp.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* 追加SEO & PWAタグ */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        <link rel="canonical" href="https://stand-hair.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* LCP高速化向け仮画像プリロード例（Hero画像名変更OK） */}
        <link rel="preload" as="image" href="/dummy-hero.jpg" />
        {/* Google Fonts（使ってない場合は不要） */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" rel="stylesheet" /> */}
        {/* Google Search Console site verification（登録済なら） */}
        {/* <meta name="google-site-verification" content="ここに発行コード" /> */}
      </head>
      <body>
        <Header />
        <div className="pt-6">{children}</div>
      </body>
    </html>
  );
}
