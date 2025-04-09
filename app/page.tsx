import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import YouTubePlaylist from '../components/YouTubePlaylist'

export default function Home() {
  return (
    <main className="bg-qasly-darker">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-qasly-dark py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
            <div>
              <h1 className="text-4xl font-medium tracking-tight text-qasly-offwhite sm:text-5xl">
                Creative Solutions for Your 
                <span className="block text-qasly-primary mt-2">Digital Presence</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-qasly-gray">
                Professional media agency delivering premium web development and video editing services for brands that want to stand out.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/#services"
                  className="rounded-md px-5 py-3 text-sm font-medium text-qasly-dark bg-qasly-primary hover:bg-qasly-secondary transition-colors"
                >
                  Our Services
                </Link>
                <Link href="/contact" className="text-sm font-medium leading-6 text-qasly-gray hover:text-qasly-primary transition-colors">
                  Contact Us <span aria-hidden="true" className="ml-1">→</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="p-4 bg-qasly-medium rounded-lg">
                <Image
                  src="https://placehold.co/800x600/dafc37/121212/png?text=Qasly+Media"
                  alt="Qasly Media Team Working"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-qasly-primary rounded-lg hidden md:block" aria-hidden="true"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-qasly-medium border border-qasly-primary/50 rounded-lg hidden md:block" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-qasly-offwhite sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg leading-8 text-qasly-gray">
              Comprehensive digital solutions to elevate your brand
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-qasly-dark p-8 rounded-lg shadow-md border border-qasly-medium hover:border-qasly-primary/50 transition-colors">
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-qasly-primary/10 text-qasly-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-qasly-offwhite">Web Development</h3>
              <p className="mt-4 text-qasly-gray">
                Responsive websites and web applications custom-built to meet your unique business needs.
              </p>
              <Link href="/contact" className="mt-6 inline-flex text-sm font-medium text-qasly-primary hover:text-qasly-accent">
                Learn more <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="bg-qasly-dark p-8 rounded-lg shadow-md border border-qasly-medium hover:border-qasly-primary/50 transition-colors">
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-qasly-primary/10 text-qasly-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-qasly-offwhite">Penetration Testing</h3>
              <p className="mt-4 text-qasly-gray">
                Comprehensive security assessments to identify vulnerabilities in your web applications and systems.
              </p>
              <Link href="/contact" className="mt-6 inline-flex text-sm font-medium text-qasly-primary hover:text-qasly-accent">
                Learn more <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="bg-qasly-dark p-8 rounded-lg shadow-md border border-qasly-medium hover:border-qasly-primary/50 transition-colors">
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-qasly-primary/10 text-qasly-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-qasly-offwhite">Video Editing</h3>
              <p className="mt-4 text-qasly-gray">
                Professional video editing for promotional content, social media, and brand storytelling.
              </p>
              <Link href="/contact" className="mt-6 inline-flex text-sm font-medium text-qasly-primary hover:text-qasly-accent">
                Learn more <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="bg-qasly-dark p-8 rounded-lg shadow-md border border-qasly-medium hover:border-qasly-primary/50 transition-colors">
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-qasly-primary/10 text-qasly-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-qasly-offwhite">Photo Editing</h3>
              <p className="mt-4 text-qasly-gray">
                Enhance your visual content with professional photo editing from basic retouching to complex compositions.
              </p>
              <Link href="/contact" className="mt-6 inline-flex text-sm font-medium text-qasly-primary hover:text-qasly-accent">
                Learn more <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase Section */}
      <section id="showcase" className="bg-qasly-medium py-20 md:py-28 border-y border-qasly-medium">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-qasly-offwhite sm:text-4xl">Our Client Showcase</h2>
            <p className="mt-4 text-lg leading-8 text-qasly-gray">
              Explore our latest projects and see what we've built for our clients
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Wellness */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/800x800/dafc37/121212/png?text=Wellness"
                  alt="Wellness Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qasly-dark/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-qasly-offwhite">Wellness</h3>
                  <p className="mt-2 text-sm text-qasly-gray">
                    A modern pharmaceutical website with an elegant design that focuses on product showcasing and user experience.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-qasly-dark/50 px-3 py-1 text-xs text-qasly-primary border border-qasly-primary/30">Web Development</span>
                    <span className="inline-flex items-center rounded-full bg-qasly-dark/50 px-3 py-1 text-xs text-qasly-primary border border-qasly-primary/30">UI/UX Design</span>
                  </div>
                  <a 
                    href="https://wellnessazanul.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 inline-flex items-center text-sm font-medium text-qasly-primary hover:text-qasly-accent"
                  >
                    Visit Website <span aria-hidden="true" className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Jaipuria School */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/800x800/dafc37/121212/png?text=Jaipuria+School"
                  alt="Jaipuria School Nanpara Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qasly-dark/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-qasly-offwhite">Seth Anandram Jaipuria School</h3>
                  <p className="mt-2 text-sm text-qasly-gray">
                    An educational institution website designed to showcase their academic excellence and values.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-qasly-dark/50 px-3 py-1 text-xs text-qasly-primary border border-qasly-primary/30">Web Development</span>
                    <span className="inline-flex items-center rounded-full bg-qasly-dark/50 px-3 py-1 text-xs text-qasly-primary border border-qasly-primary/30">UI Design</span>
                  </div>
                  <a 
                    href="https://jaipuriaschoolnanpara.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 inline-flex items-center text-sm font-medium text-qasly-primary hover:text-qasly-accent"
                  >
                    Visit Website <span aria-hidden="true" className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-qasly-darker to-qasly-dark py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-qasly-offwhite sm:text-4xl">
              Ready to bring your vision to life?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-qasly-gray">
              Contact us today to discuss your project and how we can help you achieve your goals.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md px-5 py-3 text-sm font-medium text-qasly-dark bg-qasly-primary hover:bg-qasly-secondary transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Playlist section */}
      <YouTubePlaylist />
      
      <Footer />
    </main>
  )
} 