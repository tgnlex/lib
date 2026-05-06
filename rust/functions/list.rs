fn largest(list: &[i32]) -> &i32 {
  let mut largest_item = &list[0];
  for i in list {
      if i > largest_item {
          largest_item = i
      }
  }
  return largest_item;
}


