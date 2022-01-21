const postData = async (url, data) => {
    let result = await fetch(url, {
        method: 'POST',
        body: data
    });

    return await result.text();
};

const getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export {postData, getResource};