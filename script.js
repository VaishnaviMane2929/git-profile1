const APIURL = "https://github.com/public-apis/public-apis"

const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    console.log(response);
    
}

getUser("bhagirath-wscube")