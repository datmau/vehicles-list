import SaveRow from "../components/ui/atoms/Button/SaveRow";
import { getCompanies, getDrivers, getVehicles } from "./services";

export const fetchColumns = async (columnsType, driverId = undefined) => {
  let data,
    columns = [];
  switch (columnsType) {
    case "company":
      columns = [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "City",
          accessor: "city",
        },
        {
          Header: "Status",
          accessor: "status",
        },
        {
          Header: "Plan Type",
          accessor: "plan_type",
        },
      ];
      data = await getCompanies()
        .then((response) => response.data)
        .catch((error) => error);
      return { data, columns };
    case "driver":
      columns = [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "First Name",
          accessor: "first_name",
        },
        {
          Header: "Last Name",
          accessor: "last_name",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Phone",
          accessor: "phone",
        },
        {
          Header: "Status",
          accessor: "status",
        },
        {
          Header: "Avatar",
          accessor: "avatar_url",
        },
        {
          Header: "Creation Date",
          accessor: "creation_date",
        },
      ];
      data = await getDrivers()
        .then((response) => response.data)
        .catch((error) => error);
      return { data, columns };
    case "vehicle":
      columns = [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Driver ID",
          accessor: "driver_id",
        },
        {
          Header: "Plate",
          accessor: "plate",
        },
        {
          Header: "Model",
          accessor: "model",
        },
        {
          Header: "Type",
          accessor: "type",
        },
        {
          Header: "Capacity",
          accessor: "capacity",
        },
        {
          Header: "Creation Date",
          accessor: "creation_date",
        },
      ];
      data = await getVehicles()
        .then((response) => response.data)
        .catch((error) => error);
      return { data, columns };
    case "byId":
      break;
    default:
      break;
  }
};
