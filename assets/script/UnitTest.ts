import { _decorator, Component } from 'cc';
import { StringUtil } from 'oops/core/utils/StringUtil';
const { ccclass, menu } = _decorator;

@ccclass('UnitTest')
@menu('gyy/UnitTest')
export class UnitTest extends Component {
    start() {
        console.log(StringUtil.IsEmpty('abc'))
    }

    update(deltaTime: number) {

    }
}
