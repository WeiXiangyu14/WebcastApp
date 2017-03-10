import { Headers } from '@angular/http';

export class AppConfig {

    private static map = new AMap.Map("container", {
      resizeEnable: true,
      center: [116.33, 40.005],
      zoom: 16
    });

    //测试环境URL
    public static getDebugUrl() {
        return "http://127.0.0.1:8000/api/";
    }
    public static getHeaders() {
        return new Headers({'Content-Type': 'application/json'});
    }
    //生产环境URL
    public static getProdUrl() {
        return "http://59.110.69.187:5000/api/";
    }
    //获取设备高度
    public static getWindowHeight() {
        return window.screen.height;
    }
    //获取设备宽度
    public static getWindowWidth() {
        return window.screen.width;
    }

    public static getMap() {
        return this.map;
    }

}
