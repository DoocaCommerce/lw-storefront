export class CookieService {
  static getCookie(key: string) {
    const cookie = document.cookie
      .split(';')
      .find(row => {
        return row.trim().startsWith(`${key}=`)
      })
      ?.split('=')[1]

    return cookie || null
  }

  static setCookie(name: string, value: string, lifetime?: any) {
    const maxAge = lifetime ? 60 * 60 * 24 * lifetime : 0
    document.cookie = `${name}=${value};max-age= ${maxAge}; Secure`
  }

  static eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;'
  }
}
