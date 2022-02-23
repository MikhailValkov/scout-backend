import { IEntityConfig, ProcessEnv } from '../types/config';

export class EntityConfig implements IEntityConfig {
  private static _instance: EntityConfig;
  public USER_LOGIN_MIN_LENGHT!: number;
  public USER_LOGIN_MAX_LENGHT!: number;
  public USER_PASSWORD_MIN_LENGHT!: number;
  public USER_PASSWORD_MAX_LENGHT!: number;
  constructor(env: ProcessEnv) {
    if (EntityConfig._instance) {
      return EntityConfig._instance;
    }
    this._init(env);
    EntityConfig._instance = this;
  }

  private _init(env: ProcessEnv) {
    this.USER_LOGIN_MIN_LENGHT = Number(env.USER_LOGIN_MIN_LENGHT) || 1;
    this.USER_LOGIN_MAX_LENGHT = Number(env.USER_LOGIN_MAX_LENGHT) || 32;
    this.USER_PASSWORD_MIN_LENGHT = Number(env.USER_PASSWORD_MIN_LENGHT) || 10;
    this.USER_PASSWORD_MAX_LENGHT = Number(env.USER_PASSWORD_MAX_LENGHT) || 128;
  }
}
