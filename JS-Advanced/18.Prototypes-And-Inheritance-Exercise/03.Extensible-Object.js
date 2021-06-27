function solve() {
    const instance = {};
    const proto = {};

    Object.setPrototypeOf(instance, proto);

    instance.extend = function(templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value == 'function') {
                proto[key] = value;
            } else {
                instance[key] = value;
            }
        })
    }

    return instance;
}