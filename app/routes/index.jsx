import React from "react";
import Table from "~/components/Table";
import makeData from "~/makeData";
import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  return makeData(20);
};

export default function Index() {
  const data = useLoaderData(); //React.useMemo(() => makeData(20), []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
}
