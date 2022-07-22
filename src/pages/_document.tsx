import Document, {Html, Head, Main, NextScript} from 'next/document'
import GlobalStyle from '../styles/global'

// import 'tailwindcss/tailwind.css'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                </Head>
                
                <body className='bg-gradient-to-r from-blue-300 to-blue-500'>
                    <GlobalStyle />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}