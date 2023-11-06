import { IUser } from "./user";
import { ITheme } from "./theme";

export interface IPost {
  likes: string[];
   _id: string;
   text: string;
   userId: IUser;
   themeId: ITheme;
   created_at: string;
   updatedAt: string;
   __v: number
}
