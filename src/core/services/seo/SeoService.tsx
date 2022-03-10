import * as React from 'react'

export class SeoService {
  protected formatRichText(description: string): string {
    let tagsStripped = description.replace(/(<([^>]+)>)/gi, '')
    return tagsStripped
  }

  protected render(data: object): JSX.Element {
    return <script type="application/ld+json">{JSON.stringify(data)}</script>
  }
}
