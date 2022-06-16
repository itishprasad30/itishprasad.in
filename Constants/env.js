export const isProd = process.env.NODE_ENV === "production";

export const commentFlag = isProd;

export const sayHelloFlag = isProd;
