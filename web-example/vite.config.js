import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const base = '/web-example/demo/'

const redirectBaseWithoutTrailingSlash = () => {
  const baseWithoutTrailingSlash = base.slice(0, -1)

  const middleware = (req, res, next) => {
    const [pathname, query] = req.url.split('?')

    if (pathname !== baseWithoutTrailingSlash) {
      return next()
    }

    res.writeHead(302, { Location: query ? `${base}?${query}` : base })
    res.end()
  }

  return {
    name: 'redirect-base-without-trailing-slash',
    configureServer (server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer (server) {
      server.middlewares.use(middleware)
    }
  }
}

export default defineConfig({
  base,
  plugins: [react(), svgr(), redirectBaseWithoutTrailingSlash()],
  css: {
    transformer: 'lightningcss'
  }
})
