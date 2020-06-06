import _ from "https://deno.land/x/deno_lodash/mod.ts";

export default class StringBuilder {
  private data: object = {};

  loadDataFromFile(filename: string) {
    this.data = JSON.parse(Deno.readTextFileSync(filename));
  }

  loadDataFromObject(obj: object) {
    this.data = obj;
  }

  assignDataFromObject(obj: object) {
    Object.assign(this.data, obj);
  }

  build(str: string) {
    if (
      Object.keys(this.data).length === 0 && this.data.constructor === Object
    ) {
      return Error("Data not loaded.");
    }
    let result;
    let params = [];
    let reg = /\&{[\W]?([\w\W]+?)[\W]?}/g;
    while ((result = reg.exec(str)) !== null) {
      params.push(
        { raw: result[0], val: _.get(this.data, result[1].trim(), null) },
      );
    }
    params.forEach((p) => {
      str = str.replace(p.raw, p.val);
    });
    return str;
  }
}
