import React from 'react'
import { SeoProps } from '../types'

export default function DefaultTags({ data }: SeoProps) {
  return (
    <>
      data.title && <title>{data.title}</title>
      data.description && <meta name="description" content={data.description} />
      data.url && <link rel="canonical" href={data.url} />
      data.url && <meta name="url" content={data.url} />
      <meta name="robots" content="index,follow" />
    </>
  )
}
