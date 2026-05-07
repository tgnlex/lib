

enum UserKind { Admin, User }


struct User {
  email: String;
  username: String;
  password: String;
  kind: UserKind;
}
