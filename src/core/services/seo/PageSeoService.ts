import { Page } from '../../types/PageTypes'
import { SeoService } from './SeoService'
import { PageMicroData } from './types'

export class PageSeoService extends SeoService {
  page: Page

  constructor(data: Page) {
    super()
    this.page = data
  }

  public getPage(): string {
    if (this.page.template === 'faq') return this.render(this.faqPage())
    return this.render(this.genericPage())
  }

  private genericPage(): PageMicroData {
    let microData: PageMicroData = {
      '@context': 'http://schema.org/',
      '@type': 'WebPage',
      url: this.page.url,
      name: this.page.name,
      description: this.formatRichText(this.page.description)
    }
    return microData
  }

  private faqPage(): PageMicroData {
    let microData: PageMicroData = {
      '@context': 'http://schema.org/',
      '@type': 'FAQPage',
      url: this.page.url,
      name: this.page.name,
      description: this.formatRichText(this.page.description),
      mainEntity: []
    }
    if (this.page.faq.length) {
      this.page.faq.forEach(question => {
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
