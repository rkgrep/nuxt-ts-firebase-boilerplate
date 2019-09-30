import { firestoreAction } from '~/node_modules/vuexfire'
import { MutationTree } from  'vuex'
import { auth, db } from '~/lib/firebase'
import { namespace } from 'vuex-class'

export const Auth = namespace('auth')

export interface User {
  uid: string,
  displayName: string,
}

export interface AuthState {
  user: User|undefined,
}

export const state = () => ({
  user: undefined,
})

export const mutations: MutationTree<AuthState> = {
  USER_SET: (s, v) => s.user = v,
}

export const actions = {
  fetchUser: firestoreAction(async ({ bindFirestoreRef, commit }) => {
    if (!auth.currentUser) return commit('USER_SET', undefined)
    const { displayName, uid } = auth.currentUser
    const doc = db.collection('users').doc(uid)
    const ref = await doc.get()
    if (!ref.exists) {
      await doc.set({ displayName, uid })
    }
    await bindFirestoreRef('user', doc)
  }),
}
