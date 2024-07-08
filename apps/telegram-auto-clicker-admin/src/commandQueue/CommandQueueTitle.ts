import { CommandQueue as TCommandQueue } from "../api/commandQueue/CommandQueue";

export const COMMANDQUEUE_TITLE_FIELD = "command";

export const CommandQueueTitle = (record: TCommandQueue): string => {
  return record.command?.toString() || String(record.id);
};
