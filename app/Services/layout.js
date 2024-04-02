import Nav from "@/components/Nav";

export const metadata = {
  icons: {
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://devalexdgreat.vercel.app'),
  alternates: {
    canonical: '/Services',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexander de Great (ADG) - Services",
    description: "Welcome to the services offered by Alexander de Great (ADG). Specializing in design, development, maintenance, and consultation, I provide comprehensive solutions to elevate your online presence. Explore my offerings to enhance your projects and achieve success.",
    siteId: '@devalexdgreat',
    creator: 'Alexander de Great',
    creatorId: '@OgbuaguGreat',
    images: ['https://devalexdgreat.vercel.app/favicon.png'], // Must be an absolute URL
  },
  openGraph: {
    title: "Alexander de Great (ADG) - Services",
    description: "Welcome to the services offered by Alexander de Great (ADG). Specializing in design, development, maintenance, and consultation, I provide comprehensive solutions to elevate your online presence. Explore my offerings to enhance your projects and achieve success.",
    url: 'https://devalexdgreat.vercel.app/Services',
    siteName: 'Alexander de Great (ADG)',
    images: [
      {
        url: 'https://devalexdgreat.vercel.app/favicon.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://devalexdgreat.vercel.app/favicon.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Alexander de Great (ADG)',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: "Alexander de Great (ADG) - Services",
  description: "Welcome to the services offered by Alexander de Great (ADG). Specializing in design, development, maintenance, and consultation, I provide comprehensive solutions to elevate your online presence. Explore my offerings to enhance your projects and achieve success.",
  keywords: "seo, design, development, maintenance, consultation, web design, React.js, Next.js, Tailwind CSS, MongoDB, website maintenance, consulting services",
  author: "Alexander de Great (ADG)",
  url: "https://devalexdgreat.vercel.app/Services",
  image: "https://devalexdgreat.vercel.app/favicon.png",
  siteName: "Alexander de Great (ADG)",
  type: "website"
};

  
export default function ServicesLayout({ children }) {
    return (
      <section>
        <Nav/>
        <div>
          {children}
        </div>
      </section>
    );
}