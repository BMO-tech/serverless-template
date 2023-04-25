import { IDataModel } from "../types";
import { NewExample, UpdateExample } from "./schema";
import { Example } from "./model";

export const useExampleService = (
  model: IDataModel<NewExample, UpdateExample, Example>
) => ({
  create: (data: NewExample) => model.create(data),
  find: (id: string) => model.find(id),
  remove: (id: string) => model.remove(id),
  search: () => model.search(),
  update: (id: string, data: UpdateExample) => model.update(id, data),
});
