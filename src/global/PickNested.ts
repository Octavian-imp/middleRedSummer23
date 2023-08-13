
export type PickNested<T, K extends keyof T> = {
    [key in K]: T[key];
};
