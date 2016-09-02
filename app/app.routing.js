"use strict";
var router_1 = require('@angular/router');
var crisis_list_component_1 = require('./crisis-list.component');
var hero_list_component_1 = require('./hero-list.component');
var appRoutes = [
    { path: 'crisis-center', component: crisis_list_component_1.CrisisListComponent },
    { path: 'heroes', component: hero_list_component_1.HeroListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map