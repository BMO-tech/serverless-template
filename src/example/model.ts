import * as dynamoose from "dynamoose";
import { Item } from "dynamoose/dist/Item";
import { v4 as uuid } from "uuid";
import { IDataModel } from "../types";
import { NewExample, UpdateExample } from "./schema";

const EXAMPLE_TABLE = process.env.EXAMPLE_TABLE ?? "Example";

const schema = new dynamoose.Schema(
  {
    id: { type: String, hashKey: true, default: () => uuid() },
    name: String,
  },
  { timestamps: true }
);

export class Example extends Item {
  id!: string;
  name!: string;
  createdAt!: string;
  updatedAt!: string;
}

const model = dynamoose.model<Example>(EXAMPLE_TABLE, schema);

export const useExampleModel = (): IDataModel<
  NewExample,
  UpdateExample,
  Example
> => {
  return {
    create: (data: NewExample): Promise<Example> => model.create(data),
    find: (id: string): Promise<Example> => model.get(id),
    remove: (id: string): Promise<void> => model.delete(id),
    search: (): Promise<Example[]> => model.scan().exec(),
    update: (id: string, data: UpdateExample): Promise<Example> =>
      model.update({ id }, data),
  };
};
