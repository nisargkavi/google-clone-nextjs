import './globals.css'
import { Open_Sans } from 'next/font/google'
import { AppProvider,useGlobalContext } from '@/app/context/appContext'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone NextJS',
  description: 'Project for learning NextJS',
}

export default function RootLayout({ children }) {
  return (
    <>
      <AppProvider>
        <html lang="en">
          <body className={`${openSans.className} h-[100vh]`}>
            {children}
          </body>
        </html>
      </AppProvider>
    </>
  )
}
