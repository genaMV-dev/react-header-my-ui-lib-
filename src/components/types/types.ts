export interface HeaderStyleProps {
  fontColor?: string
  backgroundColor?: string
  gap?: number
  fontSizeNav?: number
  fontSizeContact?: number
  fontWeightNav?: number
  fontWeightContact?: number
  isUpperCase?: boolean
  hoverColor?: string
}

export interface HeaderLinkProps {
  id: number  
  label: string
  href: string
}

export interface HeaderContactProps {
  id?: number  
  phoneNumber?: string
  email?: string
}

export interface HeaderLogoStyle{
  width?: number
  height?: number
  color?: string
  hoverColor?: string
}

export interface HeaderProps extends HeaderStyleProps {
  links: HeaderLinkProps[]
  contacts?: HeaderContactProps[]
  maxLinks?: number
  logo?: React.ReactNode
  logoStyle?: HeaderLogoStyle
  logoHref?: string
}
