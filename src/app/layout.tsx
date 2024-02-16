export const metadata = {
  title: 'S&D Autobody Login',
  description: 'S&D Autobody Login Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
