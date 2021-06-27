function validate(object) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const errors = {
        method: 'Invalid request header: Invalid Method',
        URI: 'Invalid request header: Invalid URI',
        version: 'Invalid request header: Invalid Version',
        message: 'Invalid request header: Invalid Message'
    }

    if (object.method === undefined || !methods.includes(object.method)) {
        throw new Error(errors.method);
    }

    if (object.uri === undefined || !(/^([a-zA-Z0-9\.]+|\*)$/gm.test(object.uri))) {
        throw new Error(errors.URI);
    }
    
    if (object.version === undefined || !versions.includes(object.version)) {
        throw new Error(errors.version);
    }

    if (object.message === undefined || !/^[^<>\\&'"]*$/gm.test(object.message)) {
        throw new Error(errors.message);
    }

    return object;
}

console.log(validate(
        {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        }));