import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  ToDoListState,
  ToDoListAction,
  ToDoListLocalState,
} from "../../document-models/to-do-list";

export const module: ExtendedEditor<
  ToDoListState,
  ToDoListAction,
  ToDoListLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["powerhouse/todolist"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
  },
};

export default module;
