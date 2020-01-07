import UsersService from "#root/adapters/UsersService";

const createUser = async (obj, { email, password }) => {
  return await UsersService.createUser({ email, password });
};

export default createUser;