"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoreInjection_1 = require("modloader64_api/CoreInjection");
class main {
    ModLoader;
    pluginName;
    pluginHash;
    core;
    preinit() {
    }
    init() {
    }
    postinit() {
        this.ModLoader.logger.info("Good Luck Have Fun!");
    }
    onTick(frame) {
        if (this.core.helper.isSceneNumberValid() && !this.core.helper.isTitleScreen()) {
            //this.ModLoader.logger.info("Current Health " + this.core.save.health); 
            //this.ModLoader.logger.info(this.core.save.heart_containers.toString());
            if (this.core.save.health == 0) {
                this.core.save.dd_flag = true;
                this.core.save.entrance_index = 0xFFFFFFFF;
            }
            if (this.core.save.health > 0x30) {
                this.core.save.health = 0x30;
                this.ModLoader.logger.info("No Max Hearts!");
            }
        }
    }
}
__decorate([
    (0, CoreInjection_1.InjectCore)()
], main.prototype, "core", void 0);
exports.default = main;
//# sourceMappingURL=main.js.map