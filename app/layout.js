import './globals.css';
import '@/styles/styles.css';
import Navbar from '@/components/Navbar';
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

// const pt = Montserrat({
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata = {
  title: 'Alexander de Great (ADG) - Web Designer & Developer',
  description: 'created by ADG. 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anyFont.className}>
        <div className="text-white relative">
          <MyCursor />
          {/* <MidMenu /> */}
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
