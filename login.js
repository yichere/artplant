const crypto = require('crypto');
const md5 = crypto.createHash('md5');

async function logmain(password , phone ) {
    var cryptostr = md5.update(`${password}`).digest('hex');
    try {
        let re = await fetch("https://app.huashijie.art/api/user/phoneLogin", {
            method: "POST",
            body: JSON.stringify({
                appVer: "",
                device: "Win32_chrome",
                channel: "wap",
                deviceId: "A628D7714BDDC01D",
                password: cryptostr,
                phone: phone,
                plantform: "wap",
                type: 1,
                userId: -1,
                version_code: "118",
                zone: 86
            }),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                Connection: "keep-alive",
                "Content-Type": "application/json;charset=UTF-8",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "Windows"
        }});
    
        // 将响应解析为 JSON 格式并直接返回
        return await re.json();
    
    } catch (error) {
        console.error('请求失败:', error);
        // 返回错误信息或者其他处理方式
        return { error: '请求失败', details: error };
    }
}



module.exports = {
    logmain
}