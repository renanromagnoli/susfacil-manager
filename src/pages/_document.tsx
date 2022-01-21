import Document, {Html, Head, Main, NextScript} from 'next/document'
import GlobalStyle from '../styles/global'

// import 'tailwindcss/tailwind.css'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                </Head>
                
                <body>
                    <GlobalStyle />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}