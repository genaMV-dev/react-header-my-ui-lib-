import React from "react"
import css from "./Headerok.module.css"
import type { HeaderProps } from "../types/types"

const Headerok = ({
  links,
  logo,
  logoStyle,
  maxLinks,
  contacts,
  logoHref,
  ...styleProps
}: HeaderProps) => {
  const defaultMaxLinks: number = 5
  const upperCase: "none" | "uppercase" = styleProps.isUpperCase
    ? "uppercase"
    : "none"
  const limitedLinks = links?.slice(0, maxLinks ? maxLinks : defaultMaxLinks)

  const linkStyle: React.CSSProperties & {
    "--link-color"?: string
    "--hover-color"?: string
  } = {
    textTransform: upperCase,
    ...(styleProps.fontColor ? { "--link-color": styleProps.fontColor } : {}),
    ...(styleProps.hoverColor
      ? { "--hover-color": styleProps.hoverColor }
      : {}),
  }

  const navStyle: React.CSSProperties = {
    ...linkStyle,
    fontSize: styleProps.fontSizeNav,
    fontWeight: styleProps.fontWeightNav,
  }

  const contactStyle: React.CSSProperties = {
    ...linkStyle,
    fontSize: styleProps.fontSizeContact,
    fontWeight: styleProps.fontWeightContact,
  }

  const logoLinkStyle: React.CSSProperties & {
    "--logo-color"?: string
    "--logo-hover-color"?: string
  } = {
    width: logoStyle?.width,
    height: logoStyle?.height,
    "--logo-color": logoStyle?.color || styleProps.fontColor,
    "--logo-hover-color": logoStyle?.hoverColor || styleProps.hoverColor,
  }

  return (
    <header
      className={css.header}
      style={{ backgroundColor: styleProps.backgroundColor }}
    >
      <div className={css.logo}>
        <a href={logoHref || links?.[0]?.href} style={logoLinkStyle}>
          {logo}
        </a>
      </div>
      <nav className={css.nav}>
        <ul className={css.header_list} style={{ gap: styleProps.gap }}>
          {limitedLinks?.map((item) => (
            <li key={item.id} className={css.header_item}>
              <a
                className={`${css.nav_link} ${css.link}`}
                href={item.href}
                style={navStyle}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <address className={css.contacts}>
        <ul className={css.contacts_list}>
          {contacts?.map((item) => (
            <li key={item.id} className={css.contacts_item}>
              {item.email && (
                <a
                  href={`mailto:${item.email}`}
                  className={`${css.contact_link} ${css.link}`}
                  style={contactStyle}
                >
                  {item.email}
                </a>
              )}

              {item.phoneNumber && (
                <a
                  href={`tel:${item.phoneNumber}`}
                  className={`${css.contact_link} ${css.link}`}
                  style={contactStyle}
                >
                  {item.phoneNumber}
                </a>
              )}
            </li>
          ))}
        </ul>
      </address>
    </header>
  )
}

export default Headerok