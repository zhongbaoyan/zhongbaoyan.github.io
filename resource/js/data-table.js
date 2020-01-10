'use strict';

$(document).ready(function () {
    //Basic Example
    $("#data-table-basic").bootgrid({
        //Override default icon classes
        css: {
            icon: 'table-bootgrid__icon zmdi',
            iconSearch: 'zmdi-search',
            iconColumns: 'zmdi-view-column',
            iconDown: 'zmdi-sort-amount-desc',
            iconRefresh: 'zmdi-refresh',
            iconUp: 'zmdi-sort-amount-asc',
            dropDownMenu: 'dropdown form-group--select',
            search: 'table-bootgrid__search',
            actions: 'table-bootgrid__actions',
            header: 'table-bootgrid__header',
            footer: 'table-bootgrid__footer',
            dropDownItem: 'table-bootgrid__label',
            table: 'table table-bootgrid',
            pagination: 'pagination table-bootgrid__pagination'
        },
        //Override default module markups
        templates: {
            actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        }
    });

    //Selection
    $("#data-table-selection").bootgrid({
        //Override default icon classes
        css: {
            icon: 'table-bootgrid__icon zmdi',
            iconSearch: 'zmdi-search',
            iconColumns: 'zmdi-view-column',
            iconDown: 'zmdi-sort-amount-desc',
            iconRefresh: 'zmdi-refresh',
            iconUp: 'zmdi-sort-amount-asc',
            dropDownMenu: 'dropdown form-group--select',
            search: 'table-bootgrid__search',
            actions: 'table-bootgrid__actions',
            header: 'table-bootgrid__header',
            footer: 'table-bootgrid__footer',
            dropDownItem: 'table-bootgrid__label',
            table: 'table table-bootgrid',
            pagination: 'pagination table-bootgrid__pagination'
        },
        //Override default module markups
        templates: {
            actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>",
            select: "<div class='checkbox'><label><input name=\"select\" type=\"{{ctx.type}}\" class=\"{{css.selectBox}}\" value=\"{{ctx.value}}\" {{ctx.checked}} /><i class='input-helper'></i></label></div>"
        },
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true
    });

    //Command Buttons
    $("#data-table-command").bootgrid({
        css: {  //Override default icon classes
            icon: 'table-bootgrid__icon zmdi',
            iconSearch: 'zmdi-search',
            iconColumns: 'zmdi-view-column',
            iconDown: 'zmdi-sort-amount-desc',
            iconRefresh: 'zmdi-refresh',
            iconUp: 'zmdi-sort-amount-asc',
            dropDownMenu: 'dropdown form-group--select',
            search: 'table-bootgrid__search',
            actions: 'table-bootgrid__actions',
            header: 'table-bootgrid__header',
            footer: 'table-bootgrid__footer',
            dropDownItem: 'table-bootgrid__label',
            table: 'table table-bootgrid',
            pagination: 'pagination table-bootgrid__pagination'
        },
        templates: {  //Override default module markups
            actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        },
        formatters: {
            "commands": function (column, row) {
                return "<button type=\"button\" class=\"btn btn-default btn-sm\" data-row-id=\"" + row.id + "\">Edit</button> " +
                    "<button type=\"button\" class=\"btn btn-default btn-sm\" data-row-id=\"" + row.id + "\">Delete</button>";
            }
        }
    });

});

function getClubLogo(club, depth) {
    let imgPath = "";
    switch (depth) {
        case 0:
            imgPath = "resource/img/football_club/";
            break;
        case 1:
            imgPath = "../resource/img/football_club/";
            break;
        case 2:
        default:
            imgPath = "../../resource/img/football_club/";
            break;
    }
    let name = "", title = "";
    switch (club) {
        // 西甲
        case '巴萨':
        case '巴塞罗那':
            name = "Barcelona";
            title = "巴塞罗那";
            break;
        case '皇马':
        case '皇家马德里':
            name = "RealMadrid";
            title = "皇家马德里";
            break;
        case '马竞':
        case '马德里竞技':
            name = "Atletico";
            title = "马德里竞技";
            break;
        case '瓦伦西亚':
            name = "Valencia";
            title = "瓦伦西亚";
            break;
        case '毕尔巴鄂竞技':
            name = "Athletic";
            title = "毕尔巴鄂竞技";
            break;
        case '塞维利亚':
            name = "Sevilla";
            title = "塞维利亚";
            break;
        case '皇家社会':
            name = "RealSociedad";
            title = "皇家社会";
            break;
        case '皇家贝蒂斯':
            name = "RealBetis";
            title = "皇家贝蒂斯";
            break;
        case '比利亚雷亚尔':
            name = "Villarreal";
            title = "比利亚雷亚尔";
            break;
        case '拉科鲁尼亚':
            name = "LaCoruna";
            title = "拉科鲁尼亚";
            break;
        case '格拉纳达':
            name = "Granada";
            title = "格拉纳达";
            break;
        case '希洪竞技':
            name = "Gijon";
            title = "希洪竞技";
            break;
        case '塞尔塔':
            name = "Celta";
            title = "塞尔塔";
            break;
        case '巴拉多利德':
            name = "Valladolid";
            title = "巴拉多利德";
            break;
        case '马略卡':
            name = "Mallorca";
            title = "马略卡";
            break;
        case '埃尔切':
            name = "Elche";
            title = "埃尔切";
            break;
        case '桑坦德竞技':
            name = "Santander";
            title = "桑坦德";
            break;
        case '奥维多':
            name = "RealOviedo";
            title = "奥维多";
            break;
        case '特内里费':
            name = "Tenerife";
            title = "特内里费";
            break;
        case '萨拉戈萨':
            name = "Zaragoza";
            title = "萨拉戈萨";
            break;

        // 英超
        case '利物浦':
            name = "Liverpool";
            title = "利物浦";
            break;
        case '曼联':
            name = "ManchesterUnited";
            title = "曼联";
            break;
        case '曼城':
            name = "ManchesterCity";
            title = "曼城";
            break;
        case '阿森纳':
            name = "Arsenal";
            title = "阿森纳";
            break;
        case '热刺':
            name = "Hotspur";
            title = "热刺";
            break;
        case '切尔西':
            name = "Chelsea";
            title = "切尔西";
            break;
        case '纽卡斯尔联':
            name = "NewcastleUnited";
            title = "纽卡斯尔联";
            break;
        case '桑德兰':
            name = "Sunderland";
            title = "桑德兰";
            break;
        case '利兹联':
            name = "LeedsUnited";
            title = "利兹联";
            break;
        case '布莱克本':
            name = "Blackburn";
            title = "布莱克本";
            break;
        case '考文垂':
            name = "Coventry";
            title = "考文垂";
            break;

        // 意甲
        case '尤文':
        case '尤文图斯':
            name = "Juventus";
            title = "尤文图斯";
            break;
        case '国米':
        case '国际米兰':
            name = "Inter";
            title = "国际米兰";
            break;
        case 'AC米兰':
            name = "ACMilan";
            title = "AC米兰";
            break;
        case '罗马':
            name = "Rome";
            title = "罗马";
            break;
        case '拉齐奥':
            name = "Lazio";
            title = "拉齐奥";
            break;
        case '里昂':
            name = "Lyon";
            title = "里昂";
            break;
        case '那不勒斯':
            name = "Napoli";
            title = "那不勒斯";
            break;
        case '都灵':
            name = "Torino";
            title = "都灵";
            break;
        case '桑普多利亚':
            name = "Sampdoria";
            title = "桑普多利亚";
            break;
        case '乌迪内斯':
            name = "Udinese";
            title = "乌迪内斯";
            break;
        case '佛罗伦萨':
            name = "Fiorentina";
            title = "佛罗伦萨";
            break;

        // 德甲
        case '拜仁':
        case '拜仁慕尼黑':
            name = "Bayern";
            title = "拜仁慕尼黑";
            break;
        case '多特':
        case '多特蒙德':
            name = "BVB";
            title = "多特蒙德";
            break;
        case '沙尔克04':
            name = "Schalke04";
            title = "沙尔克04";
            break;
        case '法兰克福':
            name = "Frankfurt";
            title = "法兰克福";
            break;
        case '勒沃库森':
            name = "Leverkusen";
            title = "勒沃库森";
            break;
        case '沃尔夫斯堡':
            name = "Wolfsburg";
            title = "沃尔夫斯堡";
            break;
        case '不莱梅':
        case '云达不莱梅':
            name = "Bremen";
            title = "云达不莱梅";
            break;
        case '波鸿':
            name = "Bochum";
            title = "波鸿";
            break;

        // 法甲
        case '巴黎':
        case '巴黎圣日耳曼':
            name = "PSG";
            title = "巴黎圣日耳曼";
            break;
        case '蒙彼利埃':
            name = "Montpellier";
            title = "蒙彼利埃";
            break;
        case '里尔':
            name = "Lille";
            title = "里尔";
            break;
        case '马赛':
            name = "Marseille";
            title = "马赛";
            break;
        case '图卢兹':
            name = "Toulouse";
            title = "图卢兹";
            break;

        // 荷甲
        case 'Ajax':
        case '阿贾克斯':
            name = "Ajax";
            title = "阿贾克斯";
            break;
        case 'PSV':
        case '埃因霍温':
            name = "PSV";
            title = "埃因霍温";
            break;
        case 'AZ':
        case "AZ'67":
        case '阿尔克马尔':
            name = "AZ";
            title = "阿尔克马尔";
            break;
        case 'Feyenoord':
        case '费耶诺德':
            name = "Feyenoord";
            title = "费耶诺德";
            break;
        case 'Heerenveen':
        case 'SC Heerenveen':
        case '海伦芬':
            name = "Heerenveen";
            title = "海伦芬";
            break;
        case 'NAC':
        case 'N.A.C':
        case '布雷达':
            name = "NAC";
            title = "布雷达";
            break;
        case 'Vitesse':
        case '维特斯':
            name = "Vitesse";
            title = "维特斯";
            break;
        case 'Twente':
        case '特温特':
            name = "Twente";
            title = "特温特";
            break;
        case 'MVV':
        case '马斯特里赫特':
            name = "MVV";
            title = "马斯特里赫特";
            break;
        case 'NEC':
        case '奈梅亨':
            name = "NEC";
            title = "奈梅亨";
            break;
        case 'FC Volendam':
        case '沃伦达姆':
            name = "Volendam";
            title = "沃伦达姆";
            break;

        default:
            name = "Default";
            title = club;
            break;
    }

    return "<img class='club-logo' title='" + title + "' src='" + imgPath + name + ".png'>";
}

// 品牌
function getLogoByMake(m, depth, size) {
    let imgPath = "";
    switch (depth) {
        case 0:
            imgPath = "resource/img/car/";
            break;
        case 1:
            imgPath = "../resource/img/car/";
            break;
        case 2:
        default:
            imgPath = "../../resource/img/car/";
            break;
    }
    switch (size) {
        case 1: // W:24px H:16px; Small
            imgPath = imgPath + "24x16/";
            break;
        case 0: // W:30px H:20px; Normal
        default:
            imgPath = imgPath + "30x20/";
            break;
    }
    let n = "";
    if (m.indexOf("丰田") != -1 || m.indexOf("Toyota") != -1) n = "Toyota";
    else if (m.indexOf("雷克萨斯") != -1 || m.indexOf("Lexus") != -1) n = "Lexus";
    else if (m.indexOf("斯巴鲁") != -1 || m.indexOf("Subaru") != -1) n = "Subaru";
    else if (m.indexOf("本田") != -1 || m.indexOf("Honda") != -1) n = "Honda";
    else if (m.indexOf("日产") != -1 || m.indexOf("Nissan") != -1) n = "NISSAN";
    else if (m.indexOf("英菲尼迪") != -1 || m.indexOf("Infiniti") != -1) n = "Infiniti";
    else if (m.indexOf("三菱") != -1 || m.indexOf("Mitsubishi") != -1) n = "Mitsubishi";
    else if (m.indexOf("马自达") != -1 || m.indexOf("Mazda") != -1) n = "Mazda";
    else if (m.indexOf("法拉利") != -1 || m.indexOf("Ferrari") != -1) n = "Ferrari";
    else if (m.indexOf("捷豹") != -1 || m.indexOf("Jaguar") != -1) n = "Jaguar";
    else if (m.indexOf("斯柯达") != -1 || m.indexOf("Skoda") != -1) n = "Skoda";
    else if (m.indexOf("宾利") != -1 || m.indexOf("Bentley") != -1) n = "Bentley";
    else if (m.indexOf("保时捷") != -1 || m.indexOf("Porsche") != -1) n = "Porsche";
    else if (m.indexOf("布加迪") != -1 || m.indexOf("Bugatti") != -1) n = "Bugatti";
    else if (m.indexOf("奥迪") != -1 || m.indexOf("Audi") != -1) n = "Audi";
    else if (m.indexOf("大众") != -1 || m.indexOf("Volkswagen") != -1) n = "Volkswagen";
    else if (m.indexOf("宝马") != -1 || m.indexOf("BMW") != -1) n = "BMW";
    else if (m.indexOf("奔驰") != -1 || m.indexOf("Benz") != -1) n = "Benz";
    else if (m.indexOf("现代") != -1 || m.indexOf("Hyundai") != -1) n = "Hyundai";
    else if (m.indexOf("起亚") != -1 || m.indexOf("KIA") != -1) n = "KIA";
    else if (m.indexOf("特斯拉") != -1 || m.indexOf("Tesla") != -1) n = "Tesla";
    else if (m.indexOf("别克") != -1 || m.indexOf("Buick") != -1) n = "Buick";
    else if (m.indexOf("福特") != -1 || m.indexOf("Ford") != -1) n = "Ford";
    else if (m.indexOf("雪佛兰") != -1 || m.indexOf("Chevrolet") != -1) n = "Chevrolet";
    else if (m.indexOf("GMC") != -1) n = "GMC";
    else if (m.indexOf("凯迪拉克") != -1 || m.indexOf("Cadillac") != -1) n = "Cadillac";
    else if (m.indexOf("克莱斯勒") != -1 || m.indexOf("Chrysler") != -1) n = "Chrysler";
    else if (m.indexOf("道奇") != -1 || m.indexOf("Dodge") != -1) n = "Dodge";
    else if (m.indexOf("Alpine") != -1) n = "Alpine";
    else if (m.indexOf("Matra") != -1) n = "Matra";
    else if (m.indexOf("Lorraine-Dietrich") != -1) n = "Lorraine-Dietrich";
    else if (m.indexOf("Delahaye") != -1) n = "Delahaye";
    else if (m.indexOf("阿斯顿马丁") != -1 || m.indexOf("Aston Martin") != -1) n = "AstonMartin";
    else if (m.indexOf("Lagonda") != -1) n = "Lagonda";
    else if (m.indexOf("阿尔法罗密欧") != -1 || m.indexOf("Alfa Romeo") != -1) n = "AlfaRomeo";
    else if (m.indexOf("雷诺") != -1 || m.indexOf("Renault") != -1) n = "RENAULT";
    else if (m.indexOf("标致") != -1 || m.indexOf("Peugeot") != -1) n = "Peugeot";
    else if (m.indexOf("雪铁龙") != -1 || m.indexOf("Citroen") != -1) n = "Citroen";
    else if (m.indexOf("蓝西亚") != -1 || m.indexOf("Lancia") != -1) n = "Lancia";
    else if (m.indexOf("塔伯特") != -1 || m.indexOf("Talbot") != -1) n = "Talbot";
    else if (m.indexOf("菲亚特") != -1 || m.indexOf("Fiat") != -1) n = "Fiat";
    else if (m.indexOf("吉普") != -1 || m.indexOf("Jeep") != -1) n = "Jeep";
    else if (m.indexOf("领克") != -1) n = "LynkCo";
    else if (m.indexOf("沃尔沃") != -1 || m.indexOf("Volvo") != -1) n = "Volvo";
    else if (m.indexOf("吉利") != -1 || m.indexOf("Geely") != -1) n = "Geely";
    else if (m.indexOf("红旗") != -1) n = "HongQi";
    else if (m.indexOf("传祺") != -1) n = "Trumpchi";
    else if (m.indexOf("奇瑞") != -1) n = "Chery";
    else if (m.indexOf("哈弗") != -1 || m.indexOf("HAVAL") != -1) n = "HAVAL";
    else if (m.indexOf("魏派") != -1 || m.indexOf("WEY") != -1) n = "WEY";
    else if (m.indexOf("江淮") != -1) n = "JAC";
    else if (m.indexOf("比亚迪") != -1) n = "BYD";
    else if (m.indexOf("宝骏") != -1) n = "BaoJun";
    else if (m.indexOf("众泰") != -1) n = "Zotye";
    else if (m.indexOf("北京汽车") != -1) n = "Baic";
    else if (m.indexOf("东风") != -1) n = "DongFeng";
    else if (m.indexOf("长安") != -1) n = "ChangAn";
    else if (m.indexOf("奔腾") != -1) n = "BestTune";
    else if (m.indexOf("小鹏") != -1) n = "XiaoPeng";
    else if (m.indexOf("海马") != -1) n = "HaiMa";
    else if (m.indexOf("荣威") != -1) n = "Roewe";
    else n = "Default";
    return "<img class='car-logo' src='" + imgPath + n + ".png'>";
}

// 国家
function getCountryByMake(m, depth) {
    let imgPath = "";
    switch (depth) {
        case 0:
            imgPath = "resource/img/country/";
            break;
        case 1:
            imgPath = "../resource/img/country/";
            break;
        case 2:
        default:
            imgPath = "../../resource/img/country/";
            break;
    }
    let n = "";
    if (m.indexOf("长城") != -1 ||
        m.indexOf("吉利") != -1 ||
        m.indexOf("浙江豪情") != -1 || // 领克
        m.indexOf("比亚迪") != -1 ||
        m.indexOf("奇瑞") != -1 ||
        m.indexOf("传祺") != -1 ||
        m.indexOf("众泰") != -1 ||
        m.indexOf("江淮") != -1 ||
        m.indexOf("五菱") != -1) {
        n = "China";
    } else if (
        m.indexOf("丰田") != -1 ||
        m.indexOf("雷克萨斯") != -1 ||
        m.indexOf("斯巴鲁") != -1 ||
        m.indexOf("本田") != -1 ||
        m.indexOf("讴歌") != -1 ||
        m.indexOf("日产") != -1 ||
        m.indexOf("英菲尼迪") != -1 ||
        m.indexOf("马自达") != -1) {
        n = "Japan";
    } else if (
        m.indexOf("大众") != -1 ||
        m.indexOf("奔驰") != -1 ||
        m.indexOf("宝马") != -1) {
        n = "Germany";
    } else if (
        m.indexOf("现代") != -1 ||
        m.indexOf("起亚") != -1) {
        n = "SouthKorea";
    } else if (m.indexOf("通用") != -1 || m.indexOf("福特") != -1 || m.indexOf("雪佛兰") != -1 || m.indexOf("克莱斯勒") != -1) n = "America";
    else if (m.indexOf("雷诺") != -1) n = "France";
    else if (m.indexOf("捷豹") != -1) n = "England";
    else if (m.indexOf("沃尔沃") != -1) n = "Sweden";
    else return "";
    return "<img class='country-flag' src='" + imgPath + "Country_" + n + ".png'>";
}