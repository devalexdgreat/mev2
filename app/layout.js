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
        <div class="absolute -z-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          {/* <MyCursor /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
