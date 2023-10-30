interface Book {
  title: string;
  author: string;
}
const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export default {
  Query: {
    books: () => {
      return books;
    },
  },
  Mutation: {
    addBook: (_: any, { data }: { data: Book }, ctx: any) => {
      // _ UMD
      books.push({ ...data });
      return books;
    },
  },
};
