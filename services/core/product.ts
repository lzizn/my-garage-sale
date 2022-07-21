export * as Product from "./product";

import { Dynamo } from "./dynamo";
import { Entity, EntityItem } from "electrodb";
import { ulid } from "ulid";

export const ProductEntity = new Entity(
  {
    model: {
      version: "1",
      entity: "Product",
      service: "scratch",
    },
    attributes: {
      productID: {
        type: "string",
        required: true,
        readOnly: true,
      },
      title: {
        type: "string",
        required: true,
      },
      url: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          composite: [],
        },
        sk: {
          field: "sk",
          composite: ["productID"],
        },
      },
    },
  },
  Dynamo.Configuration
);

export type ProductEntityType = EntityItem<typeof ProductEntity>;

export function create(title: string, url: string) {
  return ProductEntity.create({
    productID: ulid(),
    title,
    url,
  }).go();
}

export async function list() {
  return ProductEntity.query.primary({}).go();
}

