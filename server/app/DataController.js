class DataController {

  constructor(params) {
    this.params = params;
    this.data = new Map();
  };

  add(key, value){
    this.data.set(key, value);
  };

  getByKey(key){
    return this.data.get(key);
  };

  getByValue(searchValue){
    for (let [key, value] of this.data.entries()) {
      if (value === searchValue)
        return key;
    };
    return null;
  };
}