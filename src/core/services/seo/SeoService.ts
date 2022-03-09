export class SeoService {
  /**
   * Remove HTML tags from text
   *
   * @param description string
   * @returns string
   */
  protected formatRichText(description: string): string {
    let tagsStripped = description.replace(/(<([^>]+)>)/gi, '')
    return tagsStripped
  }

  /**
   * Returns data with MicroData script wrapper
   *
   * @param data object
   * @returns string
   */
  protected render(data: object): string {
    return '<script type="application/ld+json"> ' + JSON.stringify(data) + '</script>'
  }
}
