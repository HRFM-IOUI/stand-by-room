// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "STAND",
  description: "シンプルでおしゃれな美容室サイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
