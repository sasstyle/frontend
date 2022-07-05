export const isUser = () => {
  const token = localStorage.getItem('access_token')
}

export const setToken = (tokenKey: string, tokenValue: string) => localStorage.setItem(tokenKey, tokenValue)
