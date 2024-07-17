import { A_NOTIFICATIONS_Context } from "@adaas/a-sdk/global/A_NOTIFICATIONS_Context.class";
import { A_NOTIFICATIONS_SERVER_COMMANDS__NotificationAPI } from "./notifications/A_NOTIFICATIONS_Notification.api";


export const Notification = new A_NOTIFICATIONS_SERVER_COMMANDS__NotificationAPI(A_NOTIFICATIONS_Context);
