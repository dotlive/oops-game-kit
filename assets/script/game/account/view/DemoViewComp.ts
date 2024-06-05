import { _decorator } from "cc";
import { ecs } from "oops/libs/ecs/ECS";
import { CCComp } from "oops/module/common/CCComp";

const { ccclass, property } = _decorator;

/** 视图层对象 */
@ccclass('DemoViewComp')
@ecs.register('DemoView', false)
export class DemoViewComp extends CCComp {
    start() {

    }

    reset() {
        this.node.destroy();
    }
}