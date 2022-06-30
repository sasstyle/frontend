export const getCurrentNav = () => {
  const location = window.location.pathname.slice(1)
  const sliceIdx = location.indexOf('/')
  if (sliceIdx < 0) return location ? location : 'home'
  else return location.slice(0, sliceIdx)
}
