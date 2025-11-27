export const metadata = {
  title: "MonAI",
  description: "Mongolian AI Image Tools",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
