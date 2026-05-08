
spinner() {
  local c 
  while true; do 
    for c in ' / ' ' | ' ' \ ' ' - '; do 
      printf '\r%s' "$c"
      sleep .2
    done 
  done 
}
