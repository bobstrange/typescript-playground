/** @jsxImportSource @emotion/react */

import { FC } from 'react'
import { css } from '@emotion/react'

const container = css`
  max-width: 36em;
  padding: 0 1em;
  margin: 3em auto 6em;
`

const Layout: FC = ({ children }) => {
  return <div css={container}>{children}</div>
}

export default Layout
