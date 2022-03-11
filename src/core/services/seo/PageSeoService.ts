import { Page } from 'src/core/types/PageTypes'
import { SeoService } from './SeoService'
import { PageMicroData } from './types'

export class PageSeoService extends SeoService {
  data: Page

  constructor(data: Page) {
    super()
    this.data = data
  }

  public getPage(): string {
    if (this.data.template === 'faq') return this.render(this.faqPage())
    return this.render(this.genericPage())
  }

  private genericPage(): PageMicroData {
    let page = this.data
    let microData: PageMicroData = {
      '@context': 'http://schema.org/',
      '@type': 'WebPage',
      url: page.url,
      name: page.name,
      description: this.formatRichText(page.description)
    }
    return microData
  }

  private faqPage(): PageMicroData {
    let page = this.data
    let microData: PageMicroData = {
      '@context': 'http://schema.org/',
      '@type': 'FAQPage',
      url: page.url,
      name: page.name,
      description: this.formatRichText(page.description),
      mainEntity: []
    }
    if (page.faq.length) {
      page.faq.forEach(question => {
        let questionItem = {
          '@type': 'Question',
          name: question.name,
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.formatRichText(question.content)
          }
        }
        microData.mainEntity.push(questionItem)
      })
    }
    return microData
  }
}
