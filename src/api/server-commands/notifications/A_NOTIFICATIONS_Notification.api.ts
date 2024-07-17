import { A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailRequest, A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailResponse } from "./A_NOTIFICATIONS_Notification.types";
import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_NOTIFICATIONS_ContextClass } from "@adaas/a-sdk/global/A_NOTIFICATIONS_Context.class";

export class A_NOTIFICATIONS_SERVER_COMMANDS__NotificationAPI extends A_AUTH_ServerCommands_APIProvider<A_NOTIFICATIONS_ContextClass> {


    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');


    async sendEmail<M = any>(
        request: A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>

    ) {
        return await this
            .post<A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailResponse, M>(
                '/-s-cmd-/emails/send',
                request,
                config
            );
    }
}
