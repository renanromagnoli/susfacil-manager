import Document, {Html, Head, Main, NextScript} from 'next/document'
// import 'tailwindcss/tailwind.css'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}