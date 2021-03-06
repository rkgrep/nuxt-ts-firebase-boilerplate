import * as e from 'envalid'
import dotenv from 'dotenv'

dotenv.config()

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_ID,
  FIREBASE_APP_ID,
  API_PREFIX,
  API_HOST,
  API_PORT,
  API_HTTPS,
} = e.cleanEnv(process.env, {
  FIREBASE_API_KEY: e.str({}),
  FIREBASE_AUTH_DOMAIN: e.str({}),
  FIREBASE_DB_URL: e.str({}),
  FIREBASE_PROJECT_ID: e.str({}),
  FIREBASE_STORAGE_BUCKET: e.str({}),
  FIREBASE_MESSAGING_ID: e.str({}),
  FIREBASE_APP_ID: e.str({}),

  API_PREFIX: e.str({}),
  API_HOST: e.host({}),
  API_PORT: e.port({}),
  API_HTTPS: e.bool({}),
})

export {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_ID,
  FIREBASE_APP_ID,
  API_PREFIX,
  API_HOST,
  API_PORT,
  API_HTTPS,
}
