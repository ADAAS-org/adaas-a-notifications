"use strict";
// ============ TYPES Export ============
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_NOTIFICATIONSCommonAPIClass = exports.A_NOTIFICATIONSCommonAPI = exports.A_NOTIFICATIONS_TYPES__EMAIL_TYPES = void 0;
// ============ API TYPES Export ============
var A_NOTIFICATIONS_NotificationsAPI_types_1 = require("./src/api/notifications/types/A_NOTIFICATIONS_NotificationsAPI.types");
Object.defineProperty(exports, "A_NOTIFICATIONS_TYPES__EMAIL_TYPES", { enumerable: true, get: function () { return A_NOTIFICATIONS_NotificationsAPI_types_1.A_NOTIFICATIONS_TYPES__EMAIL_TYPES; } });
// ================== API ==================
// Mainly for BE purposes it uses API paths from ENV Variables
var api_1 = require("./src/api");
Object.defineProperty(exports, "A_NOTIFICATIONSCommonAPI", { enumerable: true, get: function () { return api_1.A_NOTIFICATIONSCommonAPI; } });
// ============ API CLASSES Export ============
// Mainly for FE purposes it uses API directly from class constructor
var A_NOTIFICATIONS_Notifications_api_1 = require("./src/api/notifications/A_NOTIFICATIONS_Notifications.api");
Object.defineProperty(exports, "A_NOTIFICATIONSCommonAPIClass", { enumerable: true, get: function () { return A_NOTIFICATIONS_Notifications_api_1.A_NOTIFICATIONSCommonAPIClass; } });
//# sourceMappingURL=index.js.map