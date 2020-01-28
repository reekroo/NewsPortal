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
var BasePortalNewsComponent = /** @class */ (function (_super) {
    __extends(BasePortalNewsComponent, _super);
    function BasePortalNewsComponent(dataService, newsType, title) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.title = title;
        _this.newsType = newsType;
        return _this;
    }
    BasePortalNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNews();
        this.interval = setInterval(function () {
            _this.getNews();
        }, 60000);
    };
    BasePortalNewsComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    BasePortalNewsComponent.prototype.getNews = function () {
        var _this = this;
        this.dataService.getNews(this.newsType).subscribe(function (data) { _this.news = data; });
    };
    return BasePortalNewsComponent;
}(base_news_component_1.BaseNewsComponent));
exports.BasePortalNewsComponent = BasePortalNewsComponent;
//# sourceMappingURL=base.news.portal.component.js.map