import { AnyZodObject, z } from "zod";
import {
  bookCreateSchema,
  bookSchema,
  bookUpdateSchema,
} from "../schema/books.schema";

type Books = z.infer<typeof bookSchema>;

type CreateBook = z.infer<typeof bookCreateSchema>;

type UpdateBook = z.infer<typeof bookUpdateSchema>;

interface Requestschema {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export { Books, CreateBook, UpdateBook, Requestschema };
