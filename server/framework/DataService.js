class DataService {

  constructor(params) {
    this.params = params;
    this.data = new Map();
  };

  add(type, key, value){
    this.data.set(type, new Map([[key, value]]));
  };

  getByKey(type, key){
    return this.data.get(type)?.get(key);
  };

  getByValue(type, searchValue){
    const data = this.data.get(type);
    if (data) {
      for (let [key, value] of data.entries()) {
        if (value === searchValue)
          return key;
      };
    }
    return null;
  };
}

module.exports = DataService;