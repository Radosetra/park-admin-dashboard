export type MessageType = {
  sender: string;
  date: string;
  status: "Responded" | "Pending";
  content: string;
};
