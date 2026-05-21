log-command() {
  echo "[DEBUG] runnung: $BASH_COMMAND"
}

debug() {
  trap log-command debug 
}
