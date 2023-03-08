// import { Response } from "express";

import { AppError } from "../errors";
import { User } from "../models";
import { IUser } from "../types";

class UserService {
  public async getAll(): Promise<IUser[]> {
    try {
      return User.find();
    } catch (e) {
      throw new AppError(e.message, e.status);
    }
  }

  public async getById(id: string): Promise<IUser> {
    try {
      return User.findById(id);
    } catch (e) {
      throw new AppError(e.message, e.status);
    }
  }

  // public async createNew(data: IUser): Promise<IUser> {
  //   try {
  //     return User.create(data);
  //   } catch (e) {
  //     throw new AppError(e.message, e.status);
  //   }
  // }
}

export const userService = new UserService();
