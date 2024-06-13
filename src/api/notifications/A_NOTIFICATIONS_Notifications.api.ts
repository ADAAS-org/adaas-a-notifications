import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { AxiosResponse } from "axios";
import { A_NOTIFICATIONS_TYPES__EmailNotification_APIEntity } from "./types/A_NOTIFICATIONS_NotificationsAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";

export class A_NOTIFICATIONSCommonAPIClass extends A_AUTH_APIProvider {

    constructor(baseURL?: string) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_NOTIFICATIONS_API_LOCATION || 'https://api.notifications.adaas.org';
        this.init();
    }

    async sendEmail(
        request: A_NOTIFICATIONS_TYPES__EmailNotification_APIEntity,
    ): Promise<void> {
        const response = await this.axiosInstance.post('/api/v1/email/send', {
            request
        });

        return response.data;
    }
}
