import { BookStatus } from "./book-status-enum";

export interface Book {
  _id: string,
  ISBN: string,
  name: string,
  author: string,
  status: BookStatus,
  isadded: string
}
