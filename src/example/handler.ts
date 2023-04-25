import { useExampleModel } from "./model";
import { NewExampleSchema, UpdateExampleSchema } from "./schema";
import { useExampleService } from "./service";

const model = useExampleModel();
const service = useExampleService(model);

// Declare Event Type
export const create = async (event) => {
  try {
    const data = NewExampleSchema.parse("create", event);
    const result = await service.create(data);
    // Do something with result
  } catch (e: any) {
    console.error(e);
  }
};

export const find = async (event) => {
  try {
    const { id } = event.detail;
    const result = await service.find(id);
    // Do something with result
  } catch (e: any) {
    console.error(e);
  }
};

export const remove = async (event) => {
  try {
    const { id } = event.detail;
    const result = await service.remove(id);
    // Do something with result
  } catch (e: any) {
    console.error(e);
  }
};

export const search = async () => {
  try {
    const result = await service.search();
    // Do something with result
  } catch (e: any) {
    console.error(e);
  }
};

export const update = async (event) => {
  try {
    const data = UpdateExampleSchema.parse("update", event);
    const result = await service.update(event.detail.id, data);
    // Do something with result
  } catch (e: any) {
    console.error(e);
  }
};
