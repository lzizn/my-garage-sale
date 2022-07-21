import { Product } from "@my-garage-sale/core/product";
import { builder } from "../builder";

const ProductType = builder
  .objectRef<Product.ProductEntityType>("Product")
  .implement({
    fields: (t) => ({
      id: t.exposeID("productID"),
      title: t.exposeID("title"),
      url: t.exposeID("url"),
    }),
  });

builder.queryFields((t) => ({
  products: t.field({
    type: [ProductType],
    resolve: () => Product.list(),
  }),
}));

builder.mutationFields((t) => ({
  createProduct: t.field({
    type: ProductType,
    args: {
      title: t.arg.string({ required: true }),
      url: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => Product.create(args.title, args.url),
  }),
}));
