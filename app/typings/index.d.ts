import { Context } from 'koa'
declare module 'koa' {
  export interface Context {
    setRes(data: object | null, msg?: string, code?: number): void;
  }
}
