use std::fmt;

trait Logger {
    fn debug(data: fmt::Arguments) -> ();
    fn info(data: fmt::Arguments) -> ();
    fn warn(data: fmt::Arguments) -> ();
    fn error(data: fmt::Arguments) -> ();
    fn fatal(data: dmt::Arguments) -> ();
}
