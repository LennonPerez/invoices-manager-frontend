import { FunctionComponent, ReactNode } from 'react'
import type { Metadata } from 'next'
import { SpartanFont } from '@/styles/fonts'
import ThemesProvider from '@/providers/themes'
import DefaultLayout from '@/layout/default'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: ReactNode,
}

const RootLayout: FunctionComponent<RootLayoutProps> =({ children }) => {
  return (
    <ThemesProvider>
      <html lang="en">
        <body className={SpartanFont.className}>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </body>
      </html>
    </ThemesProvider>
  )
}

export default RootLayout;