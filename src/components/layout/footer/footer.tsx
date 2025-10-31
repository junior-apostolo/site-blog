import Link from "next/link"
import { Logo } from "../../logo"

export const Footer = () => {
    return (
        <footer className="bg-gray-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between md:flex-row gap-8 py-8">
                <Logo/>

                <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
                  <Link href="/termos-de-uso" className="hover:text-blue-200">Termos de uso</Link>
                  <Link href="/termos-de-uso" className="hover:text-blue-200">Politica de privacidade</Link>
                  <Link href="/termos-de-uso" className="hover:text-blue-200">Feedback</Link>
                </nav>
              </div>
            </div>
        </footer>
    )
}