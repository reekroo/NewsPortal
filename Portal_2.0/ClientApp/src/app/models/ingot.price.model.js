"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IngotPrice = /** @class */ (function () {
    function IngotPrice(date, metalId, name, nominal, certificateRubles, banksRubles, entitiesRubles) {
        this.date = date;
        this.metalId = metalId;
        this.name = name;
        this.nominal = nominal;
        this.certificateRubles = certificateRubles;
        this.banksRubles = banksRubles;
        this.entitiesRubles = entitiesRubles;
    }
    IngotPrice.prototype.getOneGramRate = function () {
        return (this.entitiesRubles);
    };
    return IngotPrice;
}());
exports.IngotPrice = IngotPrice;
//# sourceMappingURL=ingot.price.model.js.map