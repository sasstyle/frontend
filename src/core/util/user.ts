export const getToken = (key: string) => {
  return localStorage.getItem(key)
}

export const setToken = (tokenKey: string, tokenValue: string) => localStorage.setItem(tokenKey, tokenValue)
