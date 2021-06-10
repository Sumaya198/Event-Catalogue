import React from "react";
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface DocumentWithLocale extends DocumentInitialProps {
    i18n: string;
}

export default class MyDocument extends Document<DocumentWithLocale> {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentWithLocale> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        const i18nWithQuery = ctx?.asPath?.split("/")[1];
        const i18n = i18nWithQuery?.split("?")[0] || "en";

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                i18n,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        const isProd = process.env.ENV === "production";

        return (
            <Html lang={this.props.i18n}>
                <Head>
                    {!isProd && <meta name="robots" content="noindex, nofollow" />}
                    <meta name="description" content="Gymshark NextJS Starter" />
                    <meta property="og:description" content="Gymshark NextJS Starter" />
                    <meta property="og:url" content={`https://${process.env.DOMAIN}`} />
                    <meta name="twitter:description" content="Gymshark NextJS Starter" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <link rel="shortcut icon" href="./favicon.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
                    <link rel="manifest" href="./site.webmanifest" />
                    <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#000000" />
                    <meta name="msapplication-TileColor" content="#0000" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900|Roboto:400,500,700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <div id="portal-countryselect-modal" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
