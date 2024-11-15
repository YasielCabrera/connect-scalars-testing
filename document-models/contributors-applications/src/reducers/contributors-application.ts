/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ContributorApplication } from "document-models/contributors-applications/gen";
import { ContributorsApplicationsContributorsApplicationOperations } from "../../gen/contributors-application/operations";

export const reducer: ContributorsApplicationsContributorsApplicationOperations =
  {
    addApplicationOperation(state, action, dispatch) {
      state.applications.push({
        id: crypto.randomUUID(),
        ...action.input,
      } as ContributorApplication);
    },
    updateApplicationOperation(state, action, dispatch) {
      const application = state.applications.find(
        (application) => application.id === action.input.id,
      );
      if (!application) {
        throw new Error(`Application with id ${action.input.id} not found`);
      }

      Object.assign(application, action.input);
    },
    deleteApplicationOperation(state, action, dispatch) {
      state.applications = state.applications.filter(
        (application) => application.id !== action.input.id,
      );
    },
  };
