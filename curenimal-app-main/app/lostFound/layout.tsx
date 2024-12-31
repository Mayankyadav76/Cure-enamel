import Link from "next/link"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="retro">
      <body>
        <nav className="bg-base-100">
        <div className="navbar shadow-lg z-10 h-1 bg-neutral">
        <div className="flex-1 bg-neutral">
            <Link href="/">
            <h1 className="btn btn-ghost normal-case text-xl text-base-100">Curenimal</h1>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-medium text-base-100 hover:text-primary">
              <Link href="/hospital">
              <li>Hospitals</li>
              </Link>
            <li className="hover:text-primary">
                <details>
                <summary className="hover:text-primary">
                    More
                </summary>
                <ul className="p-1 indent-1 text-neutral">
                    <li><Link href="/help">Help</Link></li>
                    <li><Link href='/about'>About</Link></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        <div>
            {children}
        </div>
        </body>
    </html>
  )
}