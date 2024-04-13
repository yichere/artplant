const login = require("./login")

async function fetchData() {
    try {
        const result = await login.logmain();
        
    } catch (error) {
        console.error(error); // 在这里处理错误
    }
}

fetchData();