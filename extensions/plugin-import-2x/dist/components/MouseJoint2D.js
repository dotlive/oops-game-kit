'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseJoint2D = exports.MOUSEJOINT2D = void 0;
exports.MOUSEJOINT2D = {
    "__type__": "cc.MouseJoint2D",
    "_name": "",
    "_objFlags": 0,
    "node": null,
    "_enabled": true,
    "__prefab": null,
    "anchor": {
        "__type__": "cc.Vec2",
        "x": 0,
        "y": 0,
    },
    "connectedAnchor": {
        "__type__": "cc.Vec2",
        "x": 0,
        "y": 0,
    },
    "collideConnected": false,
    "connectedBody": null,
    "_maxForce": 1000,
    "_dampingRatio": 0.7,
    "_frequency": 5,
};
class MouseJoint2D {
    static create() {
        return JSON.parse(JSON.stringify(exports.MOUSEJOINT2D));
    }
    static migrate(json2D) {
        return __awaiter(this, void 0, void 0, function* () {
            const source = JSON.parse(JSON.stringify(exports.MOUSEJOINT2D));
            for (const key in json2D) {
                const value = json2D[key];
                if (key === '__type__' || value === undefined || value === null) {
                    continue;
                }
                source[key] = value;
            }
            return source;
        });
    }
    static apply(index, json2D, json3D) {
        return __awaiter(this, void 0, void 0, function* () {
            const source = yield MouseJoint2D.migrate(json2D[index]);
            json3D.splice(index, 1, source);
            return source;
        });
    }
}
exports.MouseJoint2D = MouseJoint2D;
