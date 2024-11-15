/* eslint-disable react/jsx-max-depth */
import { ContributorApplication } from "document-models/contributors-applications";

type ApplicationProps = {
  readonly application: ContributorApplication;
};

function DataLine({
  label,
  value,
}: {
  readonly label: string;
  readonly value: string;
}) {
  return (
    <div className="flex gap-2">
      <div className="font-medium text-gray-700">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
}
export function Application({ application }: ApplicationProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          {application.profile_picture ? (
            <div>
              <img
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
                src={application.profile_picture}
              />
            </div>
          ) : null}
          <div className="flex flex-col gap-2">
            <DataLine label="Name" value={application.name} />
            <DataLine label="Role" value={application.role} />
            <DataLine label="Age" value={application.age} />
            {application.country ? (
              <DataLine label="Country" value={application.country} />
            ) : null}
          </div>
        </div>

        <DataLine
          label="Date of Birth"
          value={new Date(application.dob).toLocaleDateString()}
        />

        {application.salary_expectation ? (
          <DataLine
            label="Salary Expectation"
            value={application.salary_expectation.toString()}
          />
        ) : null}

        {application.x_url ? (
          <div>
            <h3 className="font-medium text-gray-700">X (Twitter) Profile</h3>
            <a
              className="text-blue-600 hover:underline"
              href={application.x_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {application.x_url}
            </a>
          </div>
        ) : null}

        {application.why_you ? (
          <DataLine label="Why You?" value={application.why_you} />
        ) : null}
      </div>
    </div>
  );
}
