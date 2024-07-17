import { A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailRequest, A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailResponse } from "./A_NOTIFICATIONS_Notification.types";
import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_NOTIFICATIONS_ContextClass } from "../../../global/A_NOTIFICATIONS_Context.class";
export declare class A_NOTIFICATIONS_SERVER_COMMANDS__NotificationAPI extends A_AUTH_ServerCommands_APIProvider<A_NOTIFICATIONS_ContextClass> {
    protected baseURL: string;
    sendEmail<M = any>(request: A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailResponse>;
}
