export type A_NOTIFICATIONS_TYPES__EmailNotification_SendingConfig = {
    /**
     * ISO string when to send the email
     */
    sendAt: string

    /**
     * Custom email subject
     */
    subject: string,

    /**
     * Custom email sender. MUST be verified in SES through ADAAS A-Notifications Application
     */
    sender: string

    /**
     * Custom email template (A-Folder file identity). If not provided, default template will be used in accordance to the email type
     * To add new email template just upload it to A-Folder via A-Folder UI or via A-Notifications UI.
     */
    emailTemplate: string
};



export enum A_NOTIFICATIONS_TYPES__EMAIL_TYPES {
    OTP = 'OTP',
    INVITATION = 'INVITATION',
    FORGOT_PASSWORD = 'FORGOT_PASSWORD',
    WELCOME = 'WELCOME',
    RECEIPT = 'RECEIPT',

    PROMO = 'PROMO',
    CORPORATE = 'CORPORATE',
    CUSTOM = 'CUSTOM'
}



// =========================  SEND EMAIL REQUEST API TYPES ================================
export type A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailRequest = {
    /**
     * Email type
     */
    type: A_NOTIFICATIONS_TYPES__EMAIL_TYPES,
    /**
     * Email recipient
     */
    to: string,
    /**
     * Email payload for custom emails. Could be parameters for email templates or custom email body
     */
    payload: any,
    /**
     * Email sending configuration
     */
    config?: Partial<A_NOTIFICATIONS_TYPES__EmailNotification_SendingConfig>
}

export type A_NOTIFICATIONS_SERVER_COMMANDS_TYPES__SendEmailResponse = {
    status: 'OK' | 'ERROR',
}