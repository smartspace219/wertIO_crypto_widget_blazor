"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

var widget_initializer_1 = __importDefault(require("../node_modules/@wert-io/widget-initializer"));
var uuid_1 = require("../node_modules/uuid");

window.openwert = function (opt) {
    
    var options = {
        partner_id: opt.partnerId,
        click_id: opt.clickId, // unique id of purсhase in your system
        origin: opt.origin, // this option needed only in sandbox
        currency: opt.currency,
        commodity: opt.commodity,
        network: opt.network,
        currency_amount: opt.currencyAmount,
        commodities: opt.commodities,
        listeners: {
            loaded: function () { return console.log('loaded'); },
        },
    };
    var wertWidget = new widget_initializer_1.default(options);
    wertWidget.open();
    
    return options.click_id;
}
