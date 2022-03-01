import * as React from 'react'
import { Helmet } from 'react-helmet'
import DefaultTags from './partials/default-tags'
import FacebookTags from './partials/facebook-tags'
import TwitterTags from './partials/twitter-tags'
import { SeoProps } from './types'

export function MetaSeo({ data }: SeoProps) {
  return (
    <Helmet defer={false}>
      <DefaultTags data={data} />
      <FacebookTags data={data} />
      <TwitterTags data={data} />
    </Helmet>
  )
}
