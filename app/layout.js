import './globals.css';
import '@/styles/styles.css';
import Footer from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import MyCursor from '@/components/MyCursor';
import MidMenu from '@/components/MidMenu';
import Nav from '@/components/Nav';

const anyFont = localFont({
  src: [
    {
      path: './myfonts/Paralucent-Light.otf',
    },
  ],
})

export const metadata = {
  icons: {
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://devalexdgreat.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexander de Great (ADG) - Fullstack Developer & Designer",
    description: "Welcome to the portfolio of Alexander de Great (ADG), a Fullstack Developer & Designer. I'm passionate about building engaging and innovative web applications. Explore my portfolio to see my latest projects and contact me to discuss collaboration opportunities or hiring inquiries.",
    siteId: '@dev.alexdgreat',
    creator: 'Ogbuagu Great Alexander',
    creatorId: '@OgbuaguGreat',
    images: ['https://devalexdgreat.vercel.app/favicon.png'], // Must be an absolute URL
  },
  openGraph: {
    title: "Alexander de Great (ADG) - Fullstack Developer & Designer",
    description: "Welcome to the portfolio of Alexander de Great (ADG), a Fullstack Developer & Designer. I'm passionate about building engaging and innovative web applications. Explore my portfolio to see my latest projects and contact me to discuss collaboration opportunities or hiring inquiries.",
    url: 'https://devalexdgreat.vercel.app/',
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
  title: "Alexander de Great (ADG) - Fullstack Developer & Designer",
  description: "Welcome to the portfolio of Alexander de Great (ADG), a Fullstack Developer & Designer. I'm passionate about building engaging and innovative web applications. Explore my portfolio to see my latest projects and contact me to discuss collaboration opportunities or hiring inquiries.",
  keywords: "dev.alex_dgreat, devalexdgreat, dev.alexdgreat, greatOgbuagu, fullstack developer, designer, Next.js, React.js, Tailwind CSS, MongoDB, Node.js, Express.js, web development, design",
  author: "Alexander de Great (ADG)",
  url: "https://devalexdgreat.vercel.app/",
  image: "https://devalexdgreat.vercel.app/favicon.png",
  siteName: "Alexander de Great (ADG)",
  type: "website"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anyFont.className}>
        <div className="text-white relative">
        <div class="absolute -z-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          {/* <MyCursor /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
