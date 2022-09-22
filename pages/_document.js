import Document, { Html, Head, Main, NextScript, Link } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
