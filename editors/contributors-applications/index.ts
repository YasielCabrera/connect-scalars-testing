import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  ContributorsApplicationsState,
  ContributorsApplicationsAction,
  ContributorsApplicationsLocalState,
} from "../../document-models/contributors-applications";

export const module: ExtendedEditor<
  ContributorsApplicationsState,
  ContributorsApplicationsAction,
  ContributorsApplicationsLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["powerhouse/contributors"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
  },
};

export default module;
