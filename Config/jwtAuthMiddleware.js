const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { jwtSecret } = require('../Config/config');
const users = require('../Config/users');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

const jwtAuthMiddleware = passport.authenticate('jwt', { session: false });

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      const user = users.find((u) => u.id === payload.id);

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error, false);
    }
  })
);

module.exports = jwtAuthMiddleware;
