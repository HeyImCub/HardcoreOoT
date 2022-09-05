import { IPlugin, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IOOTCore } from 'Z64Lib/API/OoT/OOTAPI';
export default class main implements IPlugin {
    ModLoader: IModLoaderAPI;
    pluginName?: string | undefined;
    pluginHash?: string | undefined;
    core: IOOTCore;
    preinit(): void;
    init(): void;
    postinit(): void;
    onTick(frame?: number | undefined): void;
}
//# sourceMappingURL=main.d.ts.map