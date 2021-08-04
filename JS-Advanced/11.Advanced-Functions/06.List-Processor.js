function listProcessor(input) {
    let list = [];

    function listCreator() {  
        return {
            add: (el) => {
                list.push(el);
            },
            remove: (el) => {
                list = list.filter((x) => x !== el);
            },
            print: function() {
                console.log(list.join(','));
            },
        };
    };

    const listHandler = listCreator();

    input.map((x) => x.split(' '))
         .map(([arg, string]) => listHandler[arg](string));
}

result = listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log(result);