const fs = require('fs');

const login = require('./login');

const filePath = 'config.json';
const templateData = {
    phonenumber : 111111,
    password : 'your password',
};

// 检查文件是否存在
if (!fs.existsSync(filePath)) {
    // 如果文件不存在，创建模板文件并退出
    fs.writeFileSync(filePath, JSON.stringify(templateData, null, 2)); // 2 是缩进空格数
    console.log(`模板文件已创建: ${filePath},请修改配置后重新登录。`);
    process.exit(0); // 退出脚本
}

// 如果文件存在，读取 JSON 数据
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件时出错:', err);
        process.exit(1); // 退出脚本，1 表示错误退出
    }

    try {
        const jsonData = JSON.parse(data);
        async function fetchData() {
            try {
                const result = await login.logmain(jsonData.password,jsonData.phonenumber);
                console.log(result);
            } catch (error) {
                console.error(error); // 在这里处理错误
            }
       }
         fetchData()
    } catch (parseError) {
        console.error('解析 JSON 数据时出错:', parseError);
        process.exit(1); // 退出脚本，1 表示错误退出
    }
});