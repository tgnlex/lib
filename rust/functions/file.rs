
fn read_file(filename: String) -> String {
    let _contents = fs::read_to_string(filename).expect("Should be able to read file.");
    return String::from(_contents)
}


