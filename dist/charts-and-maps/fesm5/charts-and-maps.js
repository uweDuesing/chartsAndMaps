import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var ChartsAndMapsService = /** @class */ (function () {
    function ChartsAndMapsService() {
    }
    ChartsAndMapsService.ɵprov = ɵɵdefineInjectable({ factory: function ChartsAndMapsService_Factory() { return new ChartsAndMapsService(); }, token: ChartsAndMapsService, providedIn: "root" });
    ChartsAndMapsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ChartsAndMapsService);
    return ChartsAndMapsService;
}());

var ChartsAndMapsComponent = /** @class */ (function () {
    function ChartsAndMapsComponent() {
    }
    ChartsAndMapsComponent.prototype.ngOnInit = function () {
    };
    ChartsAndMapsComponent = __decorate([
        Component({
            selector: 'lib-chartsAndMaps',
            template: "\n    <p>\n      charts-and-maps works!\n    </p>\n  "
        })
    ], ChartsAndMapsComponent);
    return ChartsAndMapsComponent;
}());

var ChartsAndMapsModule = /** @class */ (function () {
    function ChartsAndMapsModule() {
    }
    ChartsAndMapsModule = __decorate([
        NgModule({
            declarations: [ChartsAndMapsComponent],
            imports: [],
            exports: [ChartsAndMapsComponent]
        })
    ], ChartsAndMapsModule);
    return ChartsAndMapsModule;
}());

/*
 * Public API Surface of charts-and-maps
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartsAndMapsComponent, ChartsAndMapsModule, ChartsAndMapsService };
//# sourceMappingURL=charts-and-maps.js.map
