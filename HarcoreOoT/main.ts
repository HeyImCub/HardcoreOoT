
import { IPlugin, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IOOTCore } from 'Z64Lib/API/OoT/OOTAPI';
import { InjectCore } from 'modloader64_api/CoreInjection'


export default class main implements IPlugin {
    ModLoader: IModLoaderAPI;
    pluginName?: string | undefined;
    pluginHash?: string | undefined;
    
    

    @InjectCore()
    core!: IOOTCore;

    
    preinit(): void {
        
        
    }
    init(): void {
        
    }
    postinit(): void {
        this.ModLoader.logger.info("Good Luck Have Fun!");
    }
    onTick(frame?: number | undefined): void {
        if(this.core.helper.isSceneNumberValid() && !this.core.helper.isTitleScreen()){
           
            //this.ModLoader.logger.info("Current Health " + this.core.save.health); 
            //this.ModLoader.logger.info(this.core.save.heart_containers.toString());
            
            if(this.core.save.health == 0){
                this.core.save.dd_flag = true;
                this.core.save.entrance_index = 0xFFFFFFFF;
            }
            if(this.core.save.health > 60){
                this.core.save.health = 15;
                this.ModLoader.logger.info("No Max Hearts!");
            }
            
            
        }
    }

}