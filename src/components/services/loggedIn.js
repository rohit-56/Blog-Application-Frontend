// is logged in
export const isLoggedIn = () => {
  let data = localStorage.getItem("info");
  if (data == null) {
    return false;
  } else {
    return true;
  }
};

// do logout
export const doLogOut = (next) => {
  localStorage.removeItem("info");
  next();
};

//do login
export const doLogin = (data, next) => {
  localStorage.setItem("info", JSON.stringify(data));
  next();
};

export const getUserDetails = () => {
  if (isLoggedIn) {
    return localStorage.getItem("info");
  } else {
    return false;
  }
};
