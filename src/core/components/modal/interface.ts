export interface SimpleModal {
  isModal: boolean
  trigger: any
  icon?: 'error' | 'success'
  content: string
  btnText: string
  btnTrigger: any
}
