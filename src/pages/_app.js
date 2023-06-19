import '@/styles/globals.css'

// copied from [ https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts ]

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
