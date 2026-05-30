# react-headerok

`react-headerok` - це невелика TypeScript/React бібліотека з готовим компонентом
адаптивної шапки сайту: логотип, навігаційні посилання та контактні дані.

## Можливості

- Готовий компонент `Headerok` для React.
- Налаштування кольорів, hover-станів, розмірів шрифтів і відступів через props.
- Обмеження кількості пунктів меню через `maxLinks`.
- Підтримка кастомного логотипа як `ReactNode`: текст, SVG, іконка або зображення.
- Опціональні контакти з автоматичними `mailto:` і `tel:` посиланнями.
- TypeScript типи для props.

## Встановлення

```bash
npm install react-headerok
```

Бібліотека очікує, що у вашому проекті вже встановлені React і React DOM:

```bash
npm install react react-dom
```

Поточна версія пакета оголошує peer dependencies:

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

## Швидкий старт

Імпортуйте компонент і стилі бібліотеки:

```tsx
import { Headerok } from "react-headerok"
import "react-headerok/dist/react-headerok.css"

const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Contacts", href: "/contacts" },
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

## API

### `Headerok`

```tsx
import { Headerok } from "react-headerok"
```

Компонент приймає об'єкт `HeaderProps`.

| Prop | Тип | Обов'язковий | Опис |
| --- | --- | --- | --- |
| `links` | `HeaderLinkProps[]` | Так | Масив пунктів навігації. |
| `contacts` | `HeaderContactProps[]` | Ні | Масив контактів, які показуються справа. |
| `maxLinks` | `number` | Ні | Максимальна кількість пунктів меню. За замовчуванням показується до `5`. |
| `logo` | `React.ReactNode` | Ні | Вміст логотипа: текст, SVG, іконка, зображення або JSX. |
| `logoStyle` | `HeaderLogoStyle` | Ні | Окремі стилі для логотипа. |
| `logoHref` | `string` | Ні | Посилання логотипа. Якщо не передати, використовується `href` першого пункту з `links`. |
| `fontColor` | `string` | Ні | Колір навігаційних і контактних посилань. |
| `backgroundColor` | `string` | Ні | Колір фону шапки. |
| `gap` | `number` | Ні | Відстань між пунктами меню у пікселях. |
| `fontSizeNav` | `number` | Ні | Розмір шрифту навігації у пікселях. |
| `fontSizeContact` | `number` | Ні | Розмір шрифту контактів у пікселях. |
| `fontWeightNav` | `number` | Ні | Товщина шрифту навігації. |
| `fontWeightContact` | `number` | Ні | Товщина шрифту контактів. |
| `isUpperCase` | `boolean` | Ні | Якщо `true`, текст посилань буде у верхньому регістрі. |
| `hoverColor` | `string` | Ні | Колір посилань при наведенні. |

## Типи

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

Типи можна імпортувати з пакета:

```ts
import type {
  HeaderProps,
  HeaderLinkProps,
  HeaderContactProps,
  HeaderLogoStyle,
  HeaderStyleProps,
} from "react-headerok"
```

## Приклад з SVG логотипом

```tsx
import { Headerok } from "react-headerok"
import "react-headerok/dist/react-headerok.css"

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

## Поведінка компонента

- `links` обрізається до `maxLinks`; якщо `maxLinks` не переданий, показується максимум `5` пунктів.
- `contacts` може містити `email`, `phoneNumber` або обидва значення.
- Для email автоматично створюється посилання `mailto:`.
- Для телефону автоматично створюється посилання `tel:`.
- `logoHref` має пріоритет над першим посиланням з `links`.
- Якщо `logoStyle.color` або `logoStyle.hoverColor` не передані, логотип використовує загальні `fontColor` і `hoverColor`.

## Розробка бібліотеки

Встановити залежності:

```bash
npm install
```

Запустити Vite dev server:

```bash
npm run dev
```

Зібрати бібліотеку:

```bash
npm run build
```

Перевірити ESLint:

```bash
npm run lint
```

Після збірки файли бібліотеки знаходяться у `dist`:

- `dist/react-headerok.es.js` - ES module build.
- `dist/react-headerok.umd.js` - UMD build.
- `dist/react-headerok.css` - стилі компонента.
- `dist/index.d.ts` - TypeScript declarations entry.

## Публікація

Перед публікацією зберіть пакет:

```bash
npm run build
```

Перевірте вміст npm пакета:

```bash
npm pack --dry-run
```

Опублікуйте пакет:

```bash
npm publish
```

## Поточні зауваження для супроводу

- README описує фактичний public API з `src/index.ts`.
- Оскільки стилі збираються в окремий файл, у застосунку потрібно імпортувати
  `react-headerok/dist/react-headerok.css`.
- Варто перевірити declaration-файли перед публікацією: у поточній збірці
  `dist/index.d.ts` порожній, хоча `package.json` вказує його як `types`.
