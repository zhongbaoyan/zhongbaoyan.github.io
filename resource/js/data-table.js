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
    else {
        //n = "Default";
        return "<i class='btn-detail-link zmdi zmdi-car car-logo' align='center'></i>";
    }
    return "<img class='car-logo' src='" + imgPath + n + ".png'>";
}