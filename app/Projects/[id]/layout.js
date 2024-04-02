import Nav from "@/components/Nav";
import Navbar from "@/components/Navbar";

export const metadata = {
  icons: {
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://devalexdgreat.vercel.app'),
  alternates: {
    canonical: '/Projects',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexander de Great (ADG) - Projects",
    description: "Explore the portfolio of Alexander de Great (ADG) showcasing a collection of innovative projects. From web applications to design concepts, discover the creative solutions crafted with expertise and passion. Dive into my projects to witness the fusion of technology and creativity.",
    siteId: '@devalexdgreat',
    creator: 'Alexander de Great',
    creatorId: '@OgbuaguGreat',
    images: ['https://devalexdgreat.vercel.app/favicon.png'], // Must be an absolute URL
  },
  openGraph: {
    title: "Alexander de Great (ADG) - Projects",
    description: "Explore the portfolio of Alexander de Great (ADG) showcasing a collection of innovative projects. From web applications to design concepts, discover the creative solutions crafted with expertise and passion. Dive into my projects to witness the fusion of technology and creativity.",
    url: 'https://devalexdgreat.vercel.app/Projects',
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
  title: "Alexander de Great (ADG) - Projects",
  description: "Explore the portfolio of Alexander de Great (ADG) showcasing a collection of innovative projects. From web applications to design concepts, discover the creative solutions crafted with expertise and passion. Dive into my projects to witness the fusion of technology and creativity.",
  keywords: "projects, portfolio, web applications, design concepts, creative solutions, technology, creativity",
  author: "Alexander de Great (ADG)",
  url: "https://devalexdgreat.vercel.app/Projects",
  image: "https://devalexdgreat.vercel.app/favicon.png",
  siteName: "Alexander de Great (ADG)",
  type: "website"
};

  
export default function ProjectLayout({ children }) {
    return (
        <section>
          <div>
            {children}
          </div>
        </section>
      );
}