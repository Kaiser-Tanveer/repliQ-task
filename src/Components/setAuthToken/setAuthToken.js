const setAuthToken = user => {
    const currUser = {
        email: user.email,
    };

    // token posting 
    fetch("http://localhost:5000/jwt", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Setup token on localStorage 
            localStorage.setItem("my-token", data.token);
        });
};

export default setAuthToken;