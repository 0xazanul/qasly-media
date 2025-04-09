'use client'

export default function YouTubePlaylist() {
  const playlistId = 'PLThXvqV0iNzi2--k1i7e31DYJdGtDfq-d';
  
  return (
    <section className="py-20 md:py-28 bg-qasly-dark border-t border-qasly-medium">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight text-qasly-offwhite sm:text-4xl">Project Videos</h2>
          <p className="mt-4 text-lg leading-8 text-qasly-gray">
            Watch our portfolio of completed projects on YouTube
          </p>
        </div>
        
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border border-qasly-medium">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
            title="Qasly Media Project Showcase" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href={`https://www.youtube.com/playlist?list=${playlistId}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-qasly-primary px-5 py-2.5 text-sm font-medium text-qasly-dark hover:bg-qasly-secondary transition-colors"
          >
            View Full Playlist on YouTube
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 