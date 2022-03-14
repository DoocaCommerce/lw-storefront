export class SeoService {
  protected formatRichText(description: string): string {
    let tagsStripped = description.replace(/(<([^>]+)>)/gi, '')
    return tagsStripped
  }

  protected render(data: object): string {
    return JSON.stringify(data)
  }
}
