use std::fmt::Debug;

fn debug<T: Debug>(item: &T) {
    println!("{:?}", item);
}

