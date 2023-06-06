import "./globals.css"

export const metadata = {
  title: "Meker",
  description: "A meme generator made for fun",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-pretendard bg-neutral-900 text-white">{children}</body>
    </html>
  )
}
