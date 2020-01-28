"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_news_component_1 = require("./base.news.component");
var BaseSpecificPortalNewsComponent = /** @class */ (function (_super) {
    __extends(BaseSpecificPortalNewsComponent, _super);
    function BaseSpecificPortalNewsComponent(dataService, newsType, title) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.column = 4;
        _this.title = title;
        _this.newsType = newsType;
        return _this;
    }
    BaseSpecificPortalNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNews();
        this.interval = setInterval(function () {
            _this.getNews();
        }, 60000);
    };
    BaseSpecificPortalNewsComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    BaseSpecificPortalNewsComponent.prototype.getNews = function () {
        var _this = this;
        this.dataService.getNews(this.newsType).subscribe(function (data) {
            var newsRows = [];
            for (var i = 0; i < data.length; i += _this.column) {
                newsRows.push({ items: data.slice(i, i + _this.column) });
            }
            _this.news = newsRows;
        });
    };
    return BaseSpecificPortalNewsComponent;
}(base_news_component_1.BaseNewsComponent));
exports.BaseSpecificPortalNewsComponent = BaseSpecificPortalNewsComponent;
//# sourceMappingURL=base.news.specific.portal.component.js.map