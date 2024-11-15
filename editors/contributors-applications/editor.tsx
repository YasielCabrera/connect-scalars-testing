/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-max-depth */
import { EditorProps } from "document-model/document";
import {
  ContributorsApplicationsState,
  ContributorsApplicationsAction,
  ContributorsApplicationsLocalState,
  actions,
  ContributorApplication,
  AddApplicationInput,
} from "../../document-models/contributors-applications";
import { utils as documentModelUtils } from "document-model/document";
import { Button, ValidatorHandler } from "@powerhousedao/design-system";
import { Application } from "./application";
import { NewApplicationForm } from "./new-application-form";

import {
  Form,
  StringField,
  NumberField,
  UrlField,
} from "@powerhousedao/design-system";

export type IProps = EditorProps<
  ContributorsApplicationsState,
  ContributorsApplicationsAction,
  ContributorsApplicationsLocalState
>;

export default function Editor({ document, dispatch }: IProps) {
  const applications = document.state.global.applications;
  // const id = documentModelUtils.hashKey();

  function onSubmit(data: AddApplicationInput) {
    dispatch(
      actions.addApplication({
        ...data,
        salary_expectation: Number(data.salary_expectation),
      }),
    );
  }

  function validateUniqueName(value: string) {
    const existingApplication = document.state.global.applications.find(
      (application) => {
        return application.name === value;
      },
    );
    if (existingApplication) {
      return "You have already submitted an application.";
    }
    return true;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-2xl font-bold">Submit Contributor Application</h1>
        {/* <NewApplicationForm /> */}
        <Form defaultValues={{}} onSubmit={onSubmit}>
          <div className="flex flex-col gap-3">
            <StringField
              label="Role"
              name="role"
              placeholder="Developer"
              required
            />
            <UrlField label="Profile Picture (URL)" name="profile_picture" />
            <StringField
              customValidator={validateUniqueName as ValidatorHandler}
              label="Name"
              name="name"
              placeholder="John Doe"
              required
            />
            <NumberField
              label="Age"
              minValue={18}
              name="age"
              placeholder="25"
              required
            />
            <StringField
              label="Country"
              name="country"
              placeholder="US"
              required
            />
            <StringField
              label="Date of Birth"
              name="dob"
              placeholder="1990-01-01"
            />
            <NumberField
              label="Salary Expectation"
              name="salary_expectation"
              placeholder="100000"
            />
            <UrlField label="X (Twitter) URL" name="x_url" />
            <StringField label="Why you?" multiline name="why_you" />

            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Applications</h1>
        <div>
          {applications.length === 0 && (
            <div className="text-gray-500 py-4">No applications yet</div>
          )}
          {applications.map((application) => (
            <Application application={application} key={application.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
