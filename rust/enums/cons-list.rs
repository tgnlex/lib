enum List {
  Cons(i32, Box<List>),
  Nil,
}

impl std::fmt::Display for List {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    match self{
      List::Cons(head, tail) => {
          println!("Head: {}, Tail: {:?}", head, tail)
      } List::Nil => println!(f, "Empty")
    }
  }
}
