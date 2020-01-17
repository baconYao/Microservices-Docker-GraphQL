import UsersServices from '#root/adapters/UsersService';

const injectSession = async (req, res, next) => {
  // req.cookies.userSessionId 的 userSessionId 是在 mutation createUserSession.js 內時給予的(user登入時)
  if (req.cookies.userSessionId) {
    const userSession = await UsersServices.fetchUserSession({
      sessionId: req.cookies.userSessionId
    });
    // https://expressjs.com/zh-tw/api.html#res.locals
    res.locals.userSession = userSession;
  }

  return next();
};

export default injectSession;