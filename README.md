# react-headerok

`react-headerok` is a small React + TypeScript library that provides a customizable website header component with a logo, navigation links, and optional contact links.

## Features

- Ready-to-use `Headerok` React component.
- Custom navigation links and optional contact section.
- Custom logo content: text, image, SVG, icon, or any React node.
- Configurable colors, hover colors, font sizes, font weights, and spacing.
- Optional uppercase navigation/contact text.
- TypeScript types exported from the package.

## Installation

```bash
npm install react-headerok
```

React and React DOM are peer dependencies, so your app should already have them installed:

```bash
npm install react react-dom
```

## Usage

Import the component and the library stylesheet:

```tsx
import { Headerok } from "react-headerok"
import "react-headerok/style.css"

const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Contact", href: "/contact" },
]

const contacts = [
  {
    id: 1,
    email: "hello@example.com",
    phoneNumber: "+380501112233",
  },
]

export function App() {
  return (
    <Headerok
      logo="Headerok"
      logoHref="/"
      links={links}
      contacts={contacts}
      backgroundColor="#111111"
      fontColor="#ffffff"
      hoverColor="#f59e0b"
      gap={48}
      fontSizeNav={16}
      fontSizeContact={14}
      fontWeightNav={600}
      fontWeightContact={400}
      isUpperCase
    />
  )
}
```

## Props

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `links` | `HeaderLinkProps[]` | Yes | Navigation links rendered in the center of the header. |
| `contacts` | `HeaderContactProps[]` | No | Contact items rendered on the right side of the header. |
| `maxLinks` | `number` | No | Maximum number of navigation links to display. Defaults to `5`. |
| `logo` | `ReactNode` | No | Logo content. Can be text, SVG, image, icon, or JSX. |
| `logoStyle` | `HeaderLogoStyle` | No | Width, height, color, and hover color for the logo. |
| `logoHref` | `string` | No | URL for the logo link. If omitted, the first link href is used. |
| `fontColor` | `string` | No | Default color for navigation and contact links. |
| `backgroundColor` | `string` | No | Header background color. |
| `gap` | `number` | No | Gap between navigation links, in pixels. |
| `fontSizeNav` | `number` | No | Navigation font size, in pixels. |
| `fontSizeContact` | `number` | No | Contact font size, in pixels. |
| `fontWeightNav` | `number` | No | Navigation font weight. |
| `fontWeightContact` | `number` | No | Contact font weight. |
| `isUpperCase` | `boolean` | No | Converts link text to uppercase when `true`. |
| `hoverColor` | `string` | No | Hover color for navigation and contact links. |

## Types

```ts
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

export interface HeaderLogoStyle {
  width?: number
  height?: number
  color?: string
  hoverColor?: string
}

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

export interface HeaderProps extends HeaderStyleProps {
  links: HeaderLinkProps[]
  contacts?: HeaderContactProps[]
  maxLinks?: number
  logo?: React.ReactNode
  logoStyle?: HeaderLogoStyle
  logoHref?: string
}
```

You can import the types directly from the package:

```ts
import type {
  HeaderProps,
  HeaderLinkProps,
  HeaderContactProps,
  HeaderLogoStyle,
  HeaderStyleProps,
} from "react-headerok"
```

## SVG Logo Example

```tsx
import { Headerok } from "react-headerok"
import "react-headerok/style.css"

const Logo = (
  <svg viewBox="0 0 32 32" aria-label="Logo">
    <circle cx="16" cy="16" r="14" fill="currentColor" />
  </svg>
)

export function Header() {
  return (
    <Headerok
      logo={Logo}
      logoHref="/"
      logoStyle={{
        width: 32,
        height: 32,
        color: "#ffffff",
        hoverColor: "#38bdf8",
      }}
      links={[
        { id: 1, label: "Docs", href: "/docs" },
        { id: 2, label: "Pricing", href: "/pricing" },
        { id: 3, label: "Support", href: "/support" },
      ]}
      backgroundColor="#020617"
      fontColor="#e2e8f0"
      hoverColor="#38bdf8"
    />
  )
}
```

## Behavior Notes

- `links` is limited by `maxLinks`; when `maxLinks` is not provided, up to `5` links are displayed.
- `contacts` can include `email`, `phoneNumber`, or both.
- Email contacts are rendered as `mailto:` links.
- Phone contacts are rendered as `tel:` links.
- `logoHref` has priority over the first link from `links`.
- If `logoStyle.color` or `logoStyle.hoverColor` is not provided, the logo falls back to `fontColor` and `hoverColor`.
