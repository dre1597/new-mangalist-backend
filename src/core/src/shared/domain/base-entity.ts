import { randomUUID } from 'node:crypto';

export abstract class BaseEntity {
  private readonly _id: string;
  private readonly _createdAt: Date;
  private _updatedAt: Date;

  constructor() {
    this._id = randomUUID();
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public updateUpdateAt(): void {
    this._updatedAt = new Date();
  }
}
