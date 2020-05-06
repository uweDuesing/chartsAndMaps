import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let ChartsAndMapsService = class ChartsAndMapsService {
    constructor() {
    }
};
ChartsAndMapsService.ɵprov = ɵɵdefineInjectable({ factory: function ChartsAndMapsService_Factory() { return new ChartsAndMapsService(); }, token: ChartsAndMapsService, providedIn: "root" });
ChartsAndMapsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ChartsAndMapsService);

let ChartsAndMapsComponent = class ChartsAndMapsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChartsAndMapsComponent = __decorate([
    Component({
        selector: 'lib-chartsAndMaps',
        template: `
    <p>
      charts-and-maps works!
    </p>
  `
    })
], ChartsAndMapsComponent);

let ChartsAndMapsModule = class ChartsAndMapsModule {
};
ChartsAndMapsModule = __decorate([
    NgModule({
        declarations: [ChartsAndMapsComponent],
        imports: [],
        exports: [ChartsAndMapsComponent]
    })
], ChartsAndMapsModule);

/*
 * Public API Surface of charts-and-maps
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartsAndMapsComponent, ChartsAndMapsModule, ChartsAndMapsService };
//# sourceMappingURL=charts-and-maps.js.map
