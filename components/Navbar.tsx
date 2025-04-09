'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-qasly-dark shadow-md border-b border-qasly-medium">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Qasly Media</span>
            <Image src="/logo.jpeg" alt="Qasly Media" width={60} height={60} className="h-12 w-12 object-contain" priority />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-qasly-gray hover:text-qasly-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <Link href="/" className="text-sm font-medium text-qasly-offwhite hover:text-qasly-primary transition-colors">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium text-qasly-offwhite hover:text-qasly-primary transition-colors">
            Services
          </Link>
          <Link href="/#showcase" className="text-sm font-medium text-qasly-offwhite hover:text-qasly-primary transition-colors">
            Showcase
          </Link>
          <Link href="/#portfolio" className="text-sm font-medium text-qasly-offwhite hover:text-qasly-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="text-sm font-medium text-qasly-offwhite hover:text-qasly-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/contact" 
            className="rounded-md px-4 py-2 text-sm font-medium text-qasly-dark bg-qasly-primary hover:bg-qasly-secondary transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full bg-qasly-darker px-6 py-6 sm:max-w-sm sm:shadow-lg">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Qasly Media</span>
              <Image src="/logo.jpeg" alt="Qasly Media" width={60} height={60} className="h-12 w-12 object-contain" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-qasly-gray hover:text-qasly-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-qasly-medium">
              <div className="space-y-1 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-qasly-offwhite hover:text-qasly-primary hover:bg-qasly-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-qasly-offwhite hover:text-qasly-primary hover:bg-qasly-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/#showcase"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-qasly-offwhite hover:text-qasly-primary hover:bg-qasly-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Showcase
                </Link>
                <Link
                  href="/#portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-qasly-offwhite hover:text-qasly-primary hover:bg-qasly-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-qasly-offwhite hover:text-qasly-primary hover:bg-qasly-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-qasly-dark bg-qasly-primary hover:bg-qasly-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 