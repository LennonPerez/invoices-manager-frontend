// import { League_Spartan } from "next/font/google"
import localFont from 'next/font/local'

// export const SpartanFont = League_Spartan({
//     display: 'swap',
//     style: ['normal'],
//     subsets: ['latin'],
//     fallback: ['Times New Roman'],
//     weight: ['500', '700'],
// })

export const SpartanFont = localFont({
    display: 'swap',
    fallback: ['Times New Roman'],
    variable: '--main-font',
    src: [
        {
            path: '../../public/fonts/Spartan-Regular.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Spartan-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
})