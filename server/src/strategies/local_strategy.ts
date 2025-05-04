import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import db from '../db.js'

passport.serializeUser((user, done) => {
  //console.log('Inside Serialize User', user)
  done(undefined, (user as IUser).id)
})

passport.deserializeUser((id, done) => {
  try {
    //console.log('Inside Deserialize User', id)
    const user = db.users.find(user => user.id === id)
    if (!user) throw new Error('User is not found')

    done(undefined, user)
  } catch (err) {
    done(err, undefined)
  }
})

export default passport.use(
  'local',
  new LocalStrategy((username, password, done) => {
    try {
      const user = db.users.find(user => user.username === username)
      if (!user) throw new Error('User is not found')
      if (user.password !== password)
        throw new Error('Your credentials are invalid')

      done(undefined, user)
    } catch (err) {
      done(err, undefined)
    }
  })
)
