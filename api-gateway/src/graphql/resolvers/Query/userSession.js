const userSessionResolver = async (obj, args, context) => {
  // me 是定義在 typeDefs.js 的 Query 的 userSession(me: Boolean!)
  if (args.me !== true) throw new Error("Unsupport argument value");
  return context.res.locals.userSession;
}

export default userSessionResolver;