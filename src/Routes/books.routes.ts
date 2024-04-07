import { Router, query } from "express";
import { BookControllers } from "../controllers/Books.controlles";
import { BookMiddlewares } from "../middlewares/books.middlewares";
import { GlobalErrors } from "../errors/error.middleware";
import {
  bookCreateSchema,
  bookUpdateSchema,
  querySchema,
} from "../schema/books.schema";

export const booksRouter = Router();

const bookController = new BookControllers();
const bookMiddlewares = new BookMiddlewares();
const globalErrors = new GlobalErrors();

booksRouter.post(
  "/",
  globalErrors.validBody({ body: bookCreateSchema }),
  bookMiddlewares.verifyBooks,
  bookController.createBook
);
booksRouter.get(
  "/",
  globalErrors.validBody({ query: querySchema }),
  bookController.getBooks
);

booksRouter.use("/:id", bookMiddlewares.Books);

booksRouter.get("/:id", bookController.retriveBook);
booksRouter.patch(
  "/:id",
  globalErrors.validBody({ body: bookUpdateSchema }),
  bookMiddlewares.verifyBooks,
  bookController.updateBook
);
booksRouter.delete("/:id", bookController.deleteBook);
