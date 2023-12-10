import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Topbar'

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Experiences and Relevant Projects - Ojochogwu Dickson | FullStack Engineer',
  description: 'An overview of my Projects nad Relevant Experiences in recent years. This list may also consist of works I have in Progress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${syne.className} bg-[#040404]`}>
        <div className=''>
            <Header/>
        </div>   
          {children}
      </body>
    </html>
  )
}