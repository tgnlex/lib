
struct Post {
    id: u64;
    title: String;
    content: String;
    likes: u32;
}

enum UserKind {
    Admin("admin")
    User("user")
}


struct User {
  email: String;
  username: String;
  password: String;
  kind: UserKind;
}
