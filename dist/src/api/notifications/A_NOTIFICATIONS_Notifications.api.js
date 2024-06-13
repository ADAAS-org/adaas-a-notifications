"use strict";
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
exports.A_NOTIFICATIONSCommonAPIClass = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_NOTIFICATIONSCommonAPIClass extends a_auth_1.A_AUTH_APIProvider {
    constructor(baseURL) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_NOTIFICATIONS_API_LOCATION || 'https://api.notifications.adaas.org';
        this.init();
    }
    sendEmail(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post('/api/v1/email/send', {
                request
            });
            return response.data;
        });
    }
}
exports.A_NOTIFICATIONSCommonAPIClass = A_NOTIFICATIONSCommonAPIClass;
//# sourceMappingURL=A_NOTIFICATIONS_Notifications.api.js.map