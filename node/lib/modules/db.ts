
class DB {
  data: any[];
  constructor(data?: any[]) {
    this.data = data || [];
  }
  add(item) {
    this.data.push(item)
  }
  find(id) {
    return this.data[id - 1];
  }
  log(id) {
    console.info(this.data[id - 1])
  }
}

export default DB;
