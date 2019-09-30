import { Middleware } from '@nuxt/types'
import { auth } from '~/lib/firebase'

const authMiddleware: Middleware = async (ctx) => {
  if (auth.currentUser) return;
  else ctx.redirect('/auth/login')
}

export default authMiddleware
