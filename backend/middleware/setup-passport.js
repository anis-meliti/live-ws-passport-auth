const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const config = require('config');
const secretOrKey = config.get('secretOrKey');

const User = require('../models/User');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const searchUser = await User.findById(jwt_payload.id).select(
        '-password'
      );
      searchUser ? done(null, searchUser) : done(null, false);
    } catch (error) {
      console.error(error);
    }
  })
);

module.exports = isAuth = () =>
  passport.authenticate('jwt', { session: false });
