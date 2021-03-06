"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mysql_1 = require("./app/database/mysql");
const app_config_1 = require("./app/app.config");
console.log('-----------------');
app_1.default.listen(app_config_1.APP_PORT, () => {
    console.log('服务器已经启动');
});
mysql_1.connection.connect(error => {
    if (error) {
        console.log('连接数据库失败', error.message);
        return;
    }
    console.log('成功连接数据库');
});
//# sourceMappingURL=main.js.map