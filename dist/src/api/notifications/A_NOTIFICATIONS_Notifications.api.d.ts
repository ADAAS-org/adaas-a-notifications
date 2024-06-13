import { A_NOTIFICATIONS_TYPES__EmailNotification_APIEntity } from "./types/A_NOTIFICATIONS_NotificationsAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";
export declare class A_NOTIFICATIONSCommonAPIClass extends A_AUTH_APIProvider {
    constructor(baseURL?: string);
    sendEmail(request: A_NOTIFICATIONS_TYPES__EmailNotification_APIEntity): Promise<void>;
}
