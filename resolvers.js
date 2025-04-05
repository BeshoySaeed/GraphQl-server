const data = {
  books: [
    {
      id: "1",
      title: "The Awakening",
      publishYear: 1899,
      authorId: "1",
    },
    {
      id: "2",
      title: "City of Glass",
      publishYear: 2025,
      authorId: "2",
    },
    {
      id: "3",
      title: "City of Glass 2",
      publishYear: 2025,
      authorId: "2",
    },
  ],
  authors: [
    {
      id: "1",
      name: "Kate Chopin",
      booksId: ["1"],
    },
    {
      id: "2",
      name: "Paulo Coelho",
      booksId: ["2", "3", "1"],
    },

    {
      id: "3",
      name: "J.K. Rowling",
      booksId: ["1"],
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },

  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => book.authorId === parent.id);
    },
  },

  Query: {
    books: () => {
      return data.books;
    },
    authors: () => {
      return data.authors;
    },

    book: (id) => {
      return {
        id: "1",
        title: "The Awakening",
        author: { id: "1", name: "Kate Chopin" },
        publishYear: 1899,
      };
    },
  },
};
