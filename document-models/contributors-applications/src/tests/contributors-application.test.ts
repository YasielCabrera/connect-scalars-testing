/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import {
  z,
  AddApplicationInput,
  UpdateApplicationInput,
  DeleteApplicationInput,
} from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/contributors-application/creators";
import { ContributorsApplicationsDocument } from "../../gen/types";

describe("ContributorsApplication Operations", () => {
  let document: ContributorsApplicationsDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addApplication operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddApplicationInput = generateMock(
      z.AddApplicationInputSchema(),
    );

    const updatedDocument = reducer(document, creators.addApplication(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_APPLICATION");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle updateApplication operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateApplicationInput = generateMock(
      z.UpdateApplicationInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.updateApplication(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "UPDATE_APPLICATION",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle deleteApplication operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: DeleteApplicationInput = generateMock(
      z.DeleteApplicationInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.deleteApplication(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "DELETE_APPLICATION",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
