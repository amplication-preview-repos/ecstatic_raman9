import { User } from "../user/User";
import { Game } from "../game/Game";

export type CommandQueue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  command: string | null;
  executedAt: Date | null;
  status?: "Option1" | null;
  user?: User | null;
  game?: Game | null;
};
