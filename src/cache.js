class Cache {

    constructor() {
        this.key_value_map = new Map();
        this.key_hits_map = new Map();
        this.hits = 0;
        this.history = new Array();
    }

    set(key, value, hits = 1) {
        this.key_value_map.set(key, value);
        this.key_hits_map.set(key, hits);
    }

    get(key) {
        if (this.key_hits_map.get(key) < 1)
            return null;
        if (!this.key_hits_map.has(key))
            return null;

        this.key_hits_map.set(key, this.key_hits_map.get(key) - 1);
        let str = key + ' ' + this.key_value_map.get(key) + ' ' + this.key_hits_map.get(key);
        this.history.push(str);
        return this.key_value_map.get(key);
    }

    getHistory() {
        return this.history;
    }

}
export { Cache }