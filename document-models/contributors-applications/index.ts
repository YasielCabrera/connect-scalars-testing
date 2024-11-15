/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import {
  actions as ContributorsApplicationsActions,
  ContributorsApplications,
} from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  ContributorsApplicationsState,
  ContributorsApplicationsAction,
  ContributorsApplicationsLocalState,
} from "./gen/types";

const Document = ContributorsApplications;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...ContributorsApplicationsActions };

export const module: DocumentModel<
  ContributorsApplicationsState,
  ContributorsApplicationsAction,
  ContributorsApplicationsLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export {
  ContributorsApplications,
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export * from "./gen/types";
export * from "./src/utils";
