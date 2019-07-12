export const join = (req, res) => res.render("join", { pageTitle: "회원가입" });
export const login = (req, res) => res.render("login", { pageTitle: "로그인" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "로그아웃" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "유저" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "유저 정보 수정" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "비밀번호 변경" });
