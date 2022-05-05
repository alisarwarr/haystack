//NEXTJS-DOCUMENT
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title> Haystack </title>
                    <link rel="shortcut icon" href="/favicon.ico"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                    <link rel='shortcut icon' type='image/x-icon' href="icon.ico"/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;