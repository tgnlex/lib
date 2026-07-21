class KeyValue:
    def __init__(self):
        self.store = {}

    def set(self, key, value):
        self.store[key] = value

    def get(self, key):
        return self.store.get(key)

    def delete(self, key):
        if key in self.store:
            del self.store[key]
    
    def keys(self):
        return list(self.store.keys())
    
    def count(self):
        return len(self.store)
    
    def log(self, key):
        print(self.get(key))
    
    def log_keys(self):
        print(self.keys())
    
    def log_count(self):
        print(self.count())
