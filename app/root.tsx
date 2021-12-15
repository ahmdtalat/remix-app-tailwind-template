import { Links, LiveReload, Meta, Outlet, Scripts } from 'remix'

import styles from './tailwind.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>Auth</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}
