def parse_query(query_string, delimiter):
    """ 
      Parses a query string and returns a dictionary.
      Takes 2 arguments: 
        1. The Query string (a string of key-value pairs),
        2. The delimeter that the string is split by e.g ';' or '&'
    """
    query_list = query_string.split(delimiter)
    query_nest = [v.split('=', 1) for v in query_list if '=' in v]
    return dict(query_nest)

if __name__ == "__main__":
   data = parse_query('key1=value1;key2=value2;key3=value3', ';')
   print(data)
