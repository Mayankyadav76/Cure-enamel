import Link from "next/link"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="retro">
      <body>
        <nav>
        <div className="navbar shadow-lg z-10 h-1 bg-base-100">
        <div className="flex-1">
            <Link href="/">
            <h1 className="btn btn-ghost normal-case text-xl text-red-900">Curenimal</h1>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-medium text-red-900">
            <li>
                <details>
                <summary>
                    More
                </summary>
                <ul className="p-1 indent-1">
                    <li><Link href="/lostFound">Report_Missing</Link></li>
                    <li><Link href='/about'>About</Link></li>
                </ul>
                </details>
            </li>
            <li><Link href="/help">Home</Link></li>
            </ul>
        </div>
        </div>
        </nav>
        <div className="bg-base-100 h-screen">
        {children}
        </div>
 
        </body>
    </html>
  )
}