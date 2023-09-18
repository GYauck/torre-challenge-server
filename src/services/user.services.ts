import User from "../models/User";


const create_user = async (user: any) => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (e) {
    return e;
  }
};

const login_user = async (email: string) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (e) {
    return e;
  }
};



export { create_user, login_user };