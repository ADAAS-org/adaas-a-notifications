
// ============ TYPES Export ============

// ============ API TYPES Export ============
export {
    A_NOTIFICATIONS_TYPES__EMAIL_TYPES,
    A_NOTIFICATIONS_TYPES__EmailNotification_APIEntity,
    A_NOTIFICATIONS_TYPES__EmailNotification_SendingConfig
} from './src/api/notifications/types/A_NOTIFICATIONS_NotificationsAPI.types';


// ================== API ==================
// Mainly for BE purposes it uses API paths from ENV Variables
export {
    A_NOTIFICATIONSCommonAPI
} from './src/api';


// ============ API CLASSES Export ============
// Mainly for FE purposes it uses API directly from class constructor
export { A_NOTIFICATIONSCommonAPIClass } from './src/api/notifications/A_NOTIFICATIONS_Notifications.api';
