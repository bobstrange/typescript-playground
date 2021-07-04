/** @jsxImportSource @emotion/react */

import { FC } from 'react'
import { css } from '@emotion/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import * as utilStyles from '../styles/utils'

const container = css`
  max-width: 36em;
  padding: 0 1em;
  margin: 3em auto 6em;
`

const header = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const backToHome = css`
  margin: 3em 0 0;
`

const name = 'bobstrange'
export const siteTitle = 'Next.js Sample Website'

const Layout: FC<{ home?: boolean }> = ({ children, home }) => {
  return (
    <div css={container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header css={header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              css={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 css={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  css={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 css={utilStyles.headingLg}>
              <Link href="/">
                <a css={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div css={backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
