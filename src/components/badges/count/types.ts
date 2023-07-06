export enum EStatusCountNotification {
    danger,
    info,
}

export type ICountNotifProps = {
    status?: EStatusCountNotification;
    text: number;
};