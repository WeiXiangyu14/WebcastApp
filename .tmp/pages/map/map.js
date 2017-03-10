import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskDetailPage } from '../task-detail/task-detail';
import { TaskData } from '../../providers/task-data';
import { Storage } from '../../providers/storage';
export var MapPage = (function () {
    function MapPage(navCtrl, taskService, storageService) {
        this.navCtrl = navCtrl;
        this.taskService = taskService;
        this.storageService = storageService;
        this.markers = [];
        this.taskDetailPage = TaskDetailPage;
        this.taskType = 'doing';
        this.selectDoing();
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.map = new AMap.Map("container", {
            resizeEnable: true,
            center: [116.33, 40.005],
            zoom: 16
        });
        var clickEventListener = this.map.on('click', function (e) {
            _this.map.clearInfoWindow();
        });
        var zoomchangeEventListener = this.map.on('zoomchange', function (e) {
            _this.addAllMarkers();
        });
    };
    MapPage.prototype.addAllMarkers = function () {
        var lat = this.storageService.read('lat');
        var long = this.storageService.read('long');
        if (lat != null && long != null) {
            this.map.setCenter(new AMap.LngLat(long, lat));
        }
        this.map.clearInfoWindow();
        this.map.clearMap();
        this.markers.splice(0, this.markers.length);
        for (var i = 0; i < this.tasks.length; i++) {
            var overLap = new Boolean();
            overLap = false;
            for (var j = 0; j < i; j++) {
                if (this.tasks[i].taskLongitude == this.tasks[j].taskLongitude && this.tasks[i].taskLatitude == this.tasks[j].taskLatitude) {
                    overLap = true;
                    break;
                }
            }
            console.log(overLap);
            if (!overLap) {
                this.addMarker(this.tasks[i].taskRecipient.image, this.tasks[i].taskLongitude, this.tasks[i].taskLatitude, this.tasks[i].taskName, this.tasks[i].taskRecipient.image, this.tasks[i].taskRecipient.name, this.tasks[i].taskRecipient.title, this.tasks[i]);
            }
            else {
                var randomdis = 0.0002;
                var tmpzoom = this.map.getZoom();
                console.log("tmpzoom");
                console.log(tmpzoom);
                for (var l = tmpzoom; l < 16; l++) {
                    randomdis = randomdis * 2;
                }
                this.addMarker(this.tasks[i].taskRecipient.image, this.tasks[i].taskLongitude + Math.random() * 2 * randomdis - randomdis, this.tasks[i].taskLatitude + Math.random() * 2 * randomdis - randomdis, this.tasks[i].taskName, this.tasks[i].taskRecipient.image, this.tasks[i].taskRecipient.name, this.tasks[i].taskRecipient.title, this.tasks[i]);
            }
        }
    };
    MapPage.prototype.addMarker = function (userIcon, pLng, pLat, infoTaskDescription, infoUserFace, infoUserName, infoUserDescription, task) {
        // AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
        var _this = this;
        //   var marker = new SimpleMarker({
        //     //前景文字
        //     iconLabel: '',
        //     //背景图标样式
        //     iconStyle: '<img src="'+userIcon+'" style="border-radius:50%;height:28px"/>',
        //     //...其他Marker选项...，不包括content
        //     map: this.map,
        //     position: [pLng, pLat]
        //   });
        //   AMap.event.addListener(marker, 'click', () => {
        //     var infoWindow = new AMap.InfoWindow({
        //       isCustom: true,  //使用自定义窗体
        //       content: this.createInfoWindow(infoTaskDescription,infoUserFace,infoUserName,infoUserDescription, task),
        //       offset: new AMap.Pixel(16, -45)
        //     });
        //     infoWindow.open(this.map, marker.getPosition());
        //   });
        // });
        var marker = new AMap.Marker({
            content: ' <img src="' + userIcon + '" style="border-radius:50%;height:28px"/>',
            map: this.map,
            position: [pLng, pLat]
        });
        //鼠标点击marker弹出自定义的信息窗体
        AMap.event.addListener(marker, 'click', function () {
            var infoWindow = new AMap.InfoWindow({
                isCustom: true,
                content: _this.createInfoWindow(infoTaskDescription, infoUserFace, infoUserName, infoUserDescription, task),
                offset: new AMap.Pixel(16, -45)
            });
            infoWindow.open(_this.map, marker.getPosition());
        });
    };
    MapPage.prototype.createInfoWindow = function (taskDescription, userFace, userName, userDescription, task) {
        var _this = this;
        var info = document.createElement("div");
        info.style.width = "285px";
        info.style.height = "93px";
        info.style.border = "solid 1px";
        info.style.borderColor = "#CCC";
        info.style.borderRadius = "5px";
        info.style.backgroundColor = 'white';
        var middle = document.createElement("div");
        middle.style.marginLeft = "8px";
        middle.style.marginTop = "13px";
        middle.innerHTML = "<span background-color='white' style='font-family:Microsoft YaHei UI; font-size:18px;color:#114;'>" + taskDescription + "</span>";
        middle.onclick = function () {
            _this.map.clearInfoWindow();
            // alert("task description");
            _this.navCtrl.push(_this.taskDetailPage, { 'task': task, 'taskType': _this.taskType });
        };
        var partLine = document.createElement("img");
        partLine.src = "assets//img//line.bmp";
        partLine.width = 285;
        info.appendChild(middle);
        info.appendChild(partLine);
        var bottom = document.createElement("div");
        bottom.className = "info-top";
        bottom.style.height = "30px";
        var usericon = document.createElement("img");
        usericon.src = userFace;
        usericon.width = 26;
        usericon.style.marginLeft = "7px";
        usericon.style.marginBottom = "18px";
        usericon.onclick = function () {
            _this.map.clearInfoWindow();
            // alert("user face");
            _this.navCtrl.push(_this.taskDetailPage, { 'task': task, 'taskType': _this.taskType });
        };
        var userinfo = document.createElement("textarea");
        userinfo.style.width = "160px";
        userinfo.style.height = "30px";
        userinfo.value = userName + " | " + userDescription;
        userinfo.style.fontFamily = "Microsoft YaHei UI";
        userinfo.style.fontSize = "10px";
        userinfo.style.color = "grey";
        userinfo.style.background = "transparent";
        userinfo.style.border = "none";
        userinfo.style.marginLeft = "5px";
        userinfo.style.marginBottom = "9px";
        userinfo.onclick = function () {
            _this.map.clearInfoWindow();
            // alert("user description");
            _this.navCtrl.push(_this.taskDetailPage, { 'task': task, 'taskType': _this.taskType });
        };
        var buttonView = document.createElement("img");
        buttonView.src = "assets//img//viewbutton.svg";
        buttonView.width = 75;
        buttonView.style.marginLeft = "5px";
        buttonView.style.marginBottom = "15px";
        buttonView.onclick = function () {
            _this.map.clearInfoWindow();
            // alert("button");
            _this.navCtrl.push(_this.taskDetailPage, { 'task': task, 'taskType': _this.taskType });
        };
        bottom.appendChild(usericon);
        bottom.appendChild(userinfo);
        bottom.appendChild(buttonView);
        info.appendChild(bottom);
        return info;
    };
    MapPage.prototype.selectDoing = function () {
        this.taskType = 'doing';
        this.selected();
    };
    MapPage.prototype.selectToDo = function () {
        this.taskType = 'toDo';
        this.selected();
    };
    MapPage.prototype.selected = function () {
        var _this = this;
        // var token = this.storageService.read('token');
        this.taskService.getTasksByState({ 'token': '121212121', 'state': this.taskType })
            .subscribe(function (data) {
            console.log(data);
            if (data['succeed']) {
                switch (_this.taskType) {
                    case 'doing':
                        _this.tasks = data['info'];
                        break;
                    case 'toDo':
                        _this.tasks = data['info'];
                        break;
                    case 'waiting':
                        // this.tasksWaiting = data['info'];
                        break;
                    default:
                        break;
                }
                _this.addAllMarkers();
                var maxd = 0;
                for (var i = 0; i < _this.tasks.length; i++) {
                    var tmpd = Math.sqrt(((_this.tasks[i].taskLongitude - _this.map.getCenter().lng) * 111) * ((_this.tasks[i].taskLongitude - _this.map.getCenter().lng) * 111) + ((_this.tasks[i].taskLatitude - _this.map.getCenter().lat) * 100) * ((_this.tasks[i].taskLatitude - _this.map.getCenter().lat) * 100));
                    if (tmpd > maxd) {
                        maxd = tmpd;
                    }
                }
                var zoomnow = 0;
                if (maxd < 0.5) {
                    zoomnow = 16;
                }
                else {
                    var tp = 0.5;
                    var k = 0;
                    for (k = 0; k < 11; k++) {
                        tp = tp * 2;
                        if (tp > maxd) {
                            break;
                        }
                    }
                    zoomnow = 14 - k;
                }
                _this.map.setZoom(zoomnow);
                console.log("now zoom is ");
                console.log(zoomnow);
            }
        });
    };
    MapPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-map',
                    templateUrl: 'map.html',
                    providers: [TaskData, Storage]
                },] },
    ];
    /** @nocollapse */
    MapPage.ctorParameters = [
        { type: NavController, },
        { type: TaskData, },
        { type: Storage, },
    ];
    return MapPage;
}());
//# sourceMappingURL=map.js.map