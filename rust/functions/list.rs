use std::cmp::PartialOrd;

fn largest<T: PartialOrd>(list: &[T]) -> &T {
  let mut largest_item = &list[0];
  for i in list {
      if i > largest_item {
          largest_item = i
      }
  }
  return largest_item;
}

fn smallest<T: PartialOrd>(list: &[T]) -> &T {
  let mut smallest_item = &list[0];
  for i in list {
      if i < smallest_item {
          smallest_item = i
      }
  }
  return smallest_item;
}


