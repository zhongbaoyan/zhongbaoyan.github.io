function initDataFront() {
    let legendData = ['正面主驾25%偏置'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    // addData('奇瑞捷途X70', );
    // addData('奥迪A6L', );
    addData('大众帕萨特', 44);
    addData('大众途观L', 24);
    addData('比亚迪宋MAX', 24);
    addData('别克GL8', 24);
    addData('起亚智跑', 24);
    addData('奔腾T77', 24);
    addData('东风AX7', 23);
    addData('宝骏510', 22);
    addData('奇瑞艾瑞泽5', 18);
    addData('现代菲斯塔', 18);
    addData('绅宝D50', 17);
    addData('江淮瑞风S3', 16);
    addData('日产西玛', 16);
    addData('宝马318i', 14);
    addData('大众迈腾', 12);
    addData('本田凌派', 12);
    addData('别克昂科威', 12);
    addData('吉利星越', 12);
    addData('本田INSPIRE', 12);
    addData('斯柯达柯迪亚克', 9);
    addData('本田思域', 9);
    addData('传祺GS7', 9);
    addData('众泰T600', 8);
    addData('雷诺科雷傲', 8);
    addData('吉普大指挥官', 8);
    addData('小鹏G3', 8);
    addData('本田雅阁', 6);
    addData('凯迪拉克XT4', 6);
    addData('奔驰C200', 6);
    addData('福特福克斯', 5);
    addData('哈弗F5', 4);
    addData('三菱欧蓝德', 4);
    addData('雪佛兰科鲁泽', 4);
    addData('现代领动', 2);
    addData('魏派VV5', 2);
    addData('比亚迪唐', 2);
    addData('长安CS75Plus', 2);
    addData('领克01', 2);
    addData('丰田凯美瑞', 2);
    addData('日产天籁', 0);
    addData('马自达3', 0);
    addData('沃尔沃XC60', 0);
    addData('荣威RX5 MAX', 0);
    addData('丰田雷凌', 0);
    addData('丰田奕泽', 0);
    addData('丰田亚洲龙', 0);
    addData('丰田卡罗拉', 0);
    addData('宝马325Li', 0);
    addData('奔驰GLC260L', 0);
    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10, type: 'bar',
            itemStyle: {
                normal: {
                    show: true, barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value < 4) return "#4CAF50";
                        else if (params.value < 10) return "#FFEB3B";
                        else if (params.value < 20) return "#FF9800";
                        else return "#f44336";
                    }
                }
            }, label: {normal: {show: true, position: 'right'}}, data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailFront', "正面主驾25%偏置碰撞", "（分数越低越好）", legendData, arrayCar, seriesValue);
}


function initDataFrontPeopleHarm() {
    let legendData = ['正面主驾25%偏置 - 假人伤害'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    // addData('奇瑞捷途X70', );
    // addData('奥迪A6L', );
    addData('大众帕萨特', 24);
    addData('大众途观L', 14);
    addData('东风AX7', 7);
    addData('宝骏510', 6);
    addData('比亚迪宋MAX', 4);
    addData('别克GL8', 4);
    addData('起亚智跑', 4);
    addData('奔腾T77', 4);
    addData('江淮瑞风S3', 4);
    addData('宝马318i', 4);
    addData('众泰T600', 4);
    addData('奔驰C200', 4);
    addData('奇瑞艾瑞泽5', 2);
    addData('现代菲斯塔', 2);
    addData('小鹏G3', 2);
    addData('绅宝D50', 1);
    addData('斯柯达柯迪亚克', 1);
    addData('本田思域', 1);
    addData('传祺GS7', 1);
    addData('福特福克斯', 1);
    addData('日产西玛', 0);
    addData('大众迈腾', 0);
    addData('本田凌派', 0);
    addData('别克昂科威', 0);
    addData('吉利星越', 0);
    addData('本田INSPIRE', 0);
    addData('雷诺科雷傲', 0);
    addData('哈弗F5', 0);
    addData('三菱欧蓝德', 0);
    addData('现代领动', 0);
    addData('雪佛兰科鲁泽', 0);
    addData('本田雅阁', 0);
    addData('吉普大指挥官', 0);
    addData('凯迪拉克XT4', 0);
    addData('魏派VV5', 0);
    addData('比亚迪唐', 0);
    addData('长安CS75Plus', 0);
    addData('领克01', 0);
    addData('丰田凯美瑞', 0);
    addData('日产天籁', 0);
    addData('马自达3', 0);
    addData('沃尔沃XC60', 0);
    addData('荣威RX5 MAX', 0);
    addData('丰田雷凌', 0);
    addData('丰田奕泽', 0);
    addData('丰田亚洲龙', 0);
    addData('丰田卡罗拉', 0);
    addData('宝马325Li', 0);
    addData('奔驰GLC260L', 0);
    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10, type: 'bar',
            itemStyle: {
                normal: {
                    show: true, barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value < 1) return "#4CAF50";
                        else if (params.value < 3) return "#FFEB3B";
                        else if (params.value < 5) return "#FF9800";
                        else return "#f44336";
                    }
                }
            }, label: {normal: {show: true, position: 'right'}}, data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailFront', "正面主驾25%偏置碰撞 - 假人伤害", "（伤害越低越好）", legendData, arrayCar, seriesValue);
}

function initDataSide() {
    let legendData = ['侧面碰撞'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    // addData('奇瑞捷途X70', ); //
    // addData('奥迪A6L', ); //
    addData('本田思域', 84); // 8.0
    addData('宝骏510', 80); // 2.5
    addData('比亚迪宋MAX', 60); // 1.0
    addData('奇瑞艾瑞泽5', 58); // 10.5
    addData('江淮瑞风S3', 56); // 4.5
    addData('现代领动', 44); // 11.0
    addData('绅宝D50', 38); // 6.0
    addData('斯柯达柯迪亚克', 34); // 11.5
    addData('哈弗F5', 32); // 17.5
    addData('奔腾T77', 30); // 23.5
    addData('现代菲斯塔', 28); // 10.5
    addData('别克GL8', 26); // 8.0
    addData('本田INSPIRE', 26); // 11.0
    addData('本田凌派', 24); // 12.5
    addData('大众帕萨特', 22); // 13.0
    addData('雪佛兰科鲁泽', 14); // 11.5
    addData('本田雅阁', 14); // 14.5
    addData('三菱欧蓝德', 12); //  9.0
    addData('大众迈腾', 10); // 12.0
    addData('起亚智跑', 10); // 13.0
    addData('别克昂科威', 10); // 13.0
    addData('魏派VV5', 10); // 18.0
    addData('奔驰C200', 10); // 20.0
    addData('传祺GS7', 8); // 14.5
    addData('东风AX7', 8);// 15.0
    addData('小鹏G3', 8); // 17.5
    addData('大众途观L', 8); // 18.0
    addData('比亚迪唐', 8); // 21.5
    addData('雷诺科雷傲', 6); //  4.5
    addData('日产天籁', 6); // 10.5
    addData('吉利星越', 6); // 17.0
    addData('福特福克斯', 4); // 21.0
    addData('日产西玛', 2); //  5.5
    addData('长安CS75Plus', 2); // 17.5
    addData('宝马318i', 2); // 18.5
    addData('马自达3', 2); // 20.5
    addData('众泰T600', 0); // 14.0
    addData('丰田凯美瑞', 0); // 15.5
    addData('吉普大指挥官', 0);  // 16.0
    addData('领克01', 0); // 16.0
    addData('丰田卡罗拉', 0); // 16.5
    addData('丰田亚洲龙', 0); // 16.5
    addData('宝马325Li', 0); // 17.5
    addData('丰田雷凌', 0); // 17.5
    addData('凯迪拉克XT4', 0); // 18.5
    addData('荣威RX5 MAX', 0); // 20.5
    addData('奔驰GLC260L', 0); // 23.0
    addData('沃尔沃XC60', 0); // 26.0
    addData('丰田奕泽', 0); // 31.5
    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10, type: 'bar',
            itemStyle: {
                normal: {
                    show: true, barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value < 7) return "#4CAF50";
                        else if (params.value < 21) return "#FFEB3B";
                        else if (params.value < 33) return "#FF9800";
                        else return "#f44336";
                    }
                }
            }, label: {normal: {show: true, position: 'right'}}, data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailSide', "侧面碰撞", "（分数越低越好）", legendData, arrayCar, seriesValue);
}

function initDataSideLength() {
    let legendData = ['侧面碰撞 - B柱与座椅中线距离'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    // addData('奇瑞捷途X70', );
    // addData('奥迪A6L', );
    addData('比亚迪宋MAX', 1.0);
    addData('宝骏510', 2.5);
    addData('江淮瑞风S3', 4.5);
    addData('雷诺科雷傲', 4.5);
    addData('日产西玛', 5.5);
    addData('绅宝D50', 6.0);
    addData('本田思域', 8.0);
    addData('别克GL8', 8.0);
    addData('三菱欧蓝德', 9.0);
    addData('奇瑞艾瑞泽5', 10.5);
    addData('现代菲斯塔', 10.5);
    addData('日产天籁', 10.5);
    addData('现代领动', 11.0);
    addData('本田INSPIRE', 11.0);
    addData('斯柯达柯迪亚克', 11.5);
    addData('雪佛兰科鲁泽', 11.5);
    addData('大众迈腾', 12.0);
    addData('本田凌派', 12.5);
    addData('大众帕萨特', 13.0);
    addData('起亚智跑', 13.0);
    addData('别克昂科威', 13.0);
    addData('众泰T600', 14.0);
    addData('本田雅阁', 14.5);
    addData('传祺GS7', 14.5);
    addData('东风AX7', 15.0);
    addData('丰田凯美瑞', 15.5);
    addData('吉普大指挥官', 16.0);
    addData('领克01', 16.0);
    addData('丰田卡罗拉', 16.5);
    addData('丰田亚洲龙', 16.5);
    addData('吉利星越', 17.0);
    addData('长安CS75Plus', 17.5);
    addData('小鹏G3', 17.5);
    addData('哈弗F5', 17.5);
    addData('宝马325Li', 17.5);
    addData('丰田雷凌', 17.5);
    addData('魏派VV5', 18.0);
    addData('大众途观L', 18.0);
    addData('宝马318i', 18.5);
    addData('凯迪拉克XT4', 18.5);
    addData('奔驰C200', 20.0);
    addData('马自达3', 20.5);
    addData('荣威RX5 MAX', 20.5);
    addData('福特福克斯', 21.0);
    addData('比亚迪唐', 21.5);
    addData('奔驰GLC260L', 23.0);
    addData('奔腾T77', 23.5);
    addData('沃尔沃XC60', 26.0);
    addData('丰田奕泽', 31.5);
    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10, type: 'bar',
            itemStyle: {
                normal: {
                    show: true, barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value > 16) return "#4CAF50";
                        else if (params.value > 14) return "#FFEB3B";
                        else if (params.value > 9) return "#FF9800";
                        else return "#f44336";
                    }
                }
            }, label: {normal: {show: true, position: 'right'}}, data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailSide', "侧面碰撞 - B柱与座椅中线距离", "（距离越大越好）", legendData, arrayCar, seriesValue);
}

function initDataTop() {
    let legendData = ['车顶强度'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    // addData('奇瑞捷途X70', );
    // addData('奥迪A6L', );
    addData('雷诺科雷傲', 2.70);
    addData('宝骏510', 2.86);
    addData('三菱欧蓝德', 2.89);
    addData('绅宝D50', 3.31);
    addData('东风AX7', 3.42);
    addData('别克GL8', 3.51);
    addData('日产西玛', 3.57);
    addData('魏派VV5', 3.60);
    addData('起亚智跑', 3.70);
    addData('传祺GS7', 3.75);
    addData('众泰T600', 3.79);
    addData('比亚迪宋MAX', 3.85);
    addData('江淮瑞风S3', 3.90);
    addData('比亚迪唐', 4.04);
    addData('本田雅阁', 4.15);
    addData('本田INSPIRE', 4.16);
    addData('现代菲斯塔', 4.17);
    addData('别克昂科威', 4.36);
    addData('雪佛兰科鲁泽', 4.36);
    addData('长安CS75Plus', 4.43);
    addData('大众途观L', 4.44);
    addData('小鹏G3', 4.45);
    addData('本田凌派', 4.49);
    addData('哈弗F5', 4.51);
    addData('吉普大指挥官', 4.52);
    addData('奇瑞艾瑞泽5', 4.53);
    addData('斯柯达柯迪亚克', 4.55);
    addData('凯迪拉克XT4', 4.59);
    addData('日产天籁', 4.73);
    addData('宝马318i', 4.89);
    addData('沃尔沃XC60', 5.06);
    addData('吉利星越', 5.10);
    addData('大众迈腾', 5.12);
    addData('领克01', 5.21);
    addData('现代领动', 5.32);
    addData('本田思域', 5.34);
    addData('大众帕萨特', 5.41);
    addData('荣威RX5 MAX', 5.41);
    addData('福特福克斯', 5.61);
    addData('丰田雷凌', 5.66);
    addData('奔腾T77', 5.74);
    addData('丰田奕泽', 5.75);
    addData('丰田凯美瑞', 5.98);
    addData('丰田亚洲龙', 6.03);
    addData('丰田卡罗拉', 6.04);
    addData('奔驰C200', 6.06);
    addData('宝马325Li', 6.11);
    addData('马自达3', 6.34);
    addData('奔驰GLC260L', 6.75);
    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10, type: 'bar',
            itemStyle: {
                normal: {
                    show: true,//鼠标悬停时显示label数据
                    barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value >= 4.0) return "#4CAF50";
                        else if (params.value >= 3.25) return "#FFEB3B";
                        else if (params.value >= 2.50) return "#FF9800";
                        else return "#f44336";
                    }
                }
            },
            label: {normal: {show: true, position: 'right'}}, data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailTop', "车顶强度", "（分数越高越好）", legendData, arrayCar, seriesValue);
}

function initDataTopWeight() {
    let legendData = ['车顶强度 - 峰值载荷'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    // addData('奇瑞捷途X70', );
    // addData('奥迪A6L', );
    addData('宝骏510', 33686);
    addData('雷诺科雷傲', 40011);
    addData('绅宝D50', 40902);
    addData('三菱欧蓝德', 43344);
    addData('江淮瑞风S3', 49523);
    addData('雪佛兰科鲁泽', 51797);
    addData('起亚智跑', 52579);
    addData('东风AX7', 53085);
    addData('现代菲斯塔', 53681);
    addData('日产西玛', 54581);
    addData('本田凌派', 55294);
    addData('奇瑞艾瑞泽5', 58834);
    addData('众泰T600', 59105);
    addData('本田INSPIRE', 59418);
    addData('本田雅阁', 59598);
    addData('魏派VV5', 60085);
    addData('比亚迪宋MAX', 63299);
    addData('传祺GS7', 63944);
    addData('本田思域', 64661);
    addData('别克GL8', 65275);
    addData('别克昂科威', 67823);
    addData('大众途观L', 67876);
    addData('现代领动', 68056);
    addData('日产天籁', 68241);
    addData('长安CS75Plus', 69240);
    addData('哈弗F5', 69343);
    addData('斯柯达柯迪亚克', 69956);
    addData('小鹏G3', 70428);
    addData('大众迈腾', 71112);
    addData('福特福克斯', 72028);
    addData('宝马318i', 73033);
    addData('凯迪拉克XT4', 73686);
    addData('丰田雷凌', 74473);
    addData('比亚迪唐', 74827);
    addData('大众帕萨特', 76511);
    addData('丰田卡罗拉', 80293);
    addData('马自达3', 80473);
    addData('吉利星越', 80815);
    addData('领克01', 83734);
    addData('丰田奕泽', 83990);
    addData('荣威RX5 MAX', 84042);
    addData('奔腾T77', 84100);
    addData('吉普大指挥官', 87564);
    addData('丰田凯美瑞', 90059);
    addData('沃尔沃XC60', 91677);
    addData('丰田亚洲龙', 93385);
    addData('奔驰C200', 94379);
    addData('宝马325Li', 95952);
    addData('奔驰GLC260L', 122316);
    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10, type: 'bar',
            itemStyle: {
                normal: {
                    show: true,//鼠标悬停时显示label数据
                    barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value >= 60000) return "#4CAF50";
                        else if (params.value >= 50000) return "#FFEB3B";
                        else if (params.value >= 40000) return "#FF9800";
                        else return "#f44336";
                    }
                }
            },
            label: {normal: {show: true, position: 'right'}}, data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailTop', "车顶强度 - 峰值载荷", "（分数越高越好）", legendData, arrayCar, seriesValue);
}

function buildChart(chartId, title, subTitle, legendData, arrayCar, seriesValue) {
    let chart = document.getElementById(chartId);
    let echart = echarts.init(chart);
    let option = {
        title: {
            text: title, x: "center", y: "0", textStyle: {fontSize: 18, fontWeight: 'bold', color: '#DDDDDD'},
            subtext: subTitle, subtextStyle: {fontSize: 12, color: '#DDDDDD'},
        },
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        toolbox: {
            show: true, feature: {saveAsImage: {show: true},},
            iconStyle: {normal: {borderWidth: 1, borderColor: '#ccc'}}
        },
        legend: {show: true, x: 'left', y: 'top', padding: [15, 0, 0, 10]},//图例说明文字设置
        grid: {left: '3%', right: '4%', bottom: '5%', top: '6%', containLabel: true},
        yAxis: [{
            min: 0, type: 'category', data: arrayCar, axisLabel: {color: '#DDDDDD'},// 刻度线标签
            axisLine: {lineStyle: {color: '#DDDDDD'}}// 坐标轴
        }],
        xAxis: [{
            min: 0, type: 'value', splitArea: {show: false}, axisLabel: {color: '#DDDDDD'},// 刻度线标签
            axisLine: {lineStyle: {color: '#DDDDDD'}}// 坐标轴
        }],
        label: {normal: {show: true, position: 'top'}},//显示bar数据
        series: seriesValue, backgroundColor: '#2b3942',
        //graphic: [
        //    {
        //        type: 'group', rotation: 0, bounding: 'raw', left: 70, top: 20, z: 100,
        //        children: [
        //            {
        //                type: 'rect', left: 'center', top: 'center', z: 100, id: 'watermark_back', invisible: false,
        //                shape: {width: 140, height: 40}, style: {fill: 'rgba(34,49,58,1)'}
        //            },
        //            {
        //                type: 'text', left: 'center', top: 'center', z: 100, id: 'watermark_text', invisible: false,
        //                style: {
        //                    fill: '#009688', font: 'normal 13px',
        //                    text: '中    保    研    ·    汇    总 \n ——————————\nzhongbaoyan.github.io'
        //                }
        //            }
        //        ]
        //    }
        //]
    };
    echart.setOption(option);
}

function changeFront(o) {
    if (o.checked) initDataFrontPeopleHarm();
    else initDataFront();
}

function changeSide(o) {
    if (o.checked) initDataSideLength();
    else initDataSide();
}

function changeTop(o) {
    if (o.checked) initDataTopWeight();
    else initDataTop();
}

function getVideoLinkById(id) {
    let prefix = "https://www.bilibili.com/video/";
    switch (id) {
        case 4:
            return prefix + "";
        case 7:
            return prefix + "";
        case 8:
            return prefix + "";
        case 9:
            return prefix + "";
        case 12:
            return prefix + "";
        case 14:
            return prefix + "";
        case 15:
            return prefix + "";
        case 16:
            return prefix + "";
        case 17:
            return prefix + "";
        case 18:
            return prefix + "";
        case 19:
            return prefix + "";
        case 20:
            return prefix + "";
        case 21:
            return prefix + "";
        case 22:
            return prefix + "";
        case 23:
            return prefix + "";
        case 24:
            return prefix + "";
        case 25:
            return prefix + "";
        case 26:
            return prefix + "";
        case 27:
            return prefix + "";
        case 28:
            return prefix + "";
        case 29:
            return prefix + "";
        case 30:
            return prefix + "";
        case 31:
            return prefix + "";
        case 32:
            return prefix + "";
        case 33:
            return prefix + "";
        case 34:
            return prefix + "";
        case 35:
            return prefix + "";
        case 36:
            return prefix + "";
        case 37:
            return prefix + "";
        case 38:
            return prefix + "";
        case 39:
            return prefix + "";
        case 40:
            return prefix + "";
        case 41:
            return prefix + "";
        case 42:
            return prefix + "";
        case 43:
            return prefix + "";
        case 44:
            return prefix + "";
        case 45:
            return prefix + "";
        case 46:
            return prefix + "";
        case 47:
            return prefix + "";
        case 48:
            return prefix + "";
        case 49:
            return prefix + "";
        case 50:
            return prefix + "";
        case 51:
            return prefix + "";
        case 52:
            return prefix + "";
        case 53:
            return prefix + "";
        case 54:
            return prefix + "";
        case 55:
            return prefix + "";
        case 56:
            return prefix + "";
        case 57:
            return prefix + "";
        default:
            return "https://space.bilibili.com/33849760";
    }
}


function getCarSafeDescriptionByWord(word) {
    let SNO = false; // SHOW_NON_OFFICIAL
    switch (word) {
        case 'A':
            return "<span class=\"grade green-bg\">G 优秀</span>";
        case 'A*':
            return SNO ? "<span class=\"grade green-bg not-official\">G 优秀</span>" : "<span class=\"grade grey-bg\"></span>";
        case 'B': // Adequate
            return "<span class=\"grade yellow-bg\">A 良好</span>";
        case 'B*':
            return SNO ? "<span class=\"grade yellow-bg not-official\">A 良好</span>" : "<span class=\"grade grey-bg\"></span>";
        case 'C': // Marginal
            return "<span class=\"grade orange-bg\">M 一般</span>";
        case 'C*':
            return SNO ? "<span class=\"grade orange-bg not-official\">M 一般</span>" : "<span class=\"grade grey-bg\"></span>";
        case 'D': // Poor
            return "<span class=\"grade red-bg\">P 较差</span>";
        case 'D*':
            return SNO ? "<span class=\"grade red-bg not-official\">P 较差</span>" : "<span class=\"grade grey-bg\"></span>";
        case '-': // None
            return "<span class=\"grade grey-bg\">未配置</span>";
        case 'T': // T0D0
            return "<span class=\"grade grey-bg\">...</span>";
        default:
            return "<span class=\"grade grey-bg\">" + word + "</span>";
    }
}

function getTopDescription(top) {
    if (top >= 4.0) return getCarSafeDescriptionByWord('A');
    else if (top >= 3.25) return getCarSafeDescriptionByWord('B');
    else if (top >= 2.50) return getCarSafeDescriptionByWord('C');
    else return getCarSafeDescriptionByWord('D');
}

function getFrontDescription(front) {
    if (front < 4) return getCarSafeDescriptionByWord('A');
    else if (front < 10) return getCarSafeDescriptionByWord('B');
    else if (front < 20) return getCarSafeDescriptionByWord('C');
    else return getCarSafeDescriptionByWord('D');
}

function getSideDescription(side) {
    if (side < 7) return getCarSafeDescriptionByWord('A');
    else if (side < 21) return getCarSafeDescriptionByWord('B');
    else if (side < 33) return getCarSafeDescriptionByWord('C');
    else return getCarSafeDescriptionByWord('D');
}

function getExplorer() {
    let explorer = window.navigator.userAgent,
        compare = function (s) {
            return (explorer.indexOf(s) >= 0);
        },
        ie11 = (function () {
            return ("ActiveXObject" in window)
        })();
    if (compare("MSIE") || ie11) return 'ie';
    else if (compare("Firefox") && !ie11) return 'Firefox';
    else if (compare("Chrome") && !ie11) {
        if (explorer.indexOf("Edge") > -1) return 'Edge';
        else return 'Chrome';
    } else if (compare("Opera") && !ie11) return 'Opera';
    else if (compare("Safari") && !ie11) return 'Safari';
}