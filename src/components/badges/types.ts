export type TBadge = {
  text: string;
  status: Statuses;
};
export enum Statuses {
  success,
  warning,
  danger,
  info,
}
