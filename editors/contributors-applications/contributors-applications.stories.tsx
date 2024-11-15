import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as ContributorsApplicationsModule from "../../document-models/contributors-applications";

const { meta, CreateDocumentStory: ContributorsApplications } =
  createDocumentStory(
    Editor,
    ContributorsApplicationsModule.reducer,
    ContributorsApplicationsModule.utils.createDocument(),
  );
export { ContributorsApplications };

export default { ...meta, title: "Contributors Applications" };
