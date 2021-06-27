class sortedList {
    constructor() {
        this.list = [];
        this.size = this.list.length
    }

    add(element) {
        if (isNaN(element)) {
            throw new Error('Input must be a number!');
        }

        this.list.push(element);
        this.size++;
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (this.isValidIndex(this.list, index)) {
            this.list.splice(index, 1);
            this.size--;
            this.list.sort((a, b) => a - b);
        }
    }

    get(index) {
        if (this.isValidIndex(this.list, index)) {
            return this.list[index];
        }
    }

    isValidIndex(list, index) {
        if (index >= 0 && index < list.length) {
            return true;
        } else {
            return false;
        }
    }
}

let list = new sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));