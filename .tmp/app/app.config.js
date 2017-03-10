import { Headers } from '@angular/http';
export var AppConfig = (function () {
    function AppConfig() {
    }
    //测试环境URL
    AppConfig.getDebugUrl = function () {
        return "http://127.0.0.1:8000/api/";
    };
    AppConfig.getHeaders = function () {
        return new Headers({ 'Content-Type': 'application/json' });
    };
    //生产环境URL
    AppConfig.getProdUrl = function () {
        return "http://59.110.69.187:5000/api/";
    };
    //获取设备高度
    AppConfig.getWindowHeight = function () {
        return window.screen.height;
    };
    //获取设备宽度
    AppConfig.getWindowWidth = function () {
        return window.screen.width;
    };
    AppConfig.getMap = function () {
        return this.map;
    };
    AppConfig.map = new AMap.Map("container", {
        resizeEnable: true,
        center: [116.33, 40.005],
        zoom: 16
    });
    return AppConfig;
}());
//# sourceMappingURL=app.config.js.map