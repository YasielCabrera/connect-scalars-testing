import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as ToDoListModule from "../../document-models/to-do-list";

const { meta, CreateDocumentStory: ToDoList } = createDocumentStory(
  Editor,
  ToDoListModule.reducer,
  ToDoListModule.utils.createDocument(),
);
export { ToDoList };

export default { ...meta, title: "To Do List" };
