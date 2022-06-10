import axios from "axios";
import { DATA_URL } from "./constants";

const getCompanies = async () => {
  return axios
    .get(`${DATA_URL}/company`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

const getDrivers = () => {
  return axios
    .get(`${DATA_URL}/driver`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

const getVehicles = () => {
  return axios
    .get(`${DATA_URL}/vehicle`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

const getVehiclesByDriver = (driverId) => {
  return axios
    .get(`${DATA_URL}/driver/${driverId}/vehicles`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

const addVehicle = (data) => {
  return axios
    .post(`${DATA_URL}/vehicle`, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

const deleteVehicle = (vehicleId) => {
    return axios
      .delete(`${DATA_URL}/vehicle/${vehicleId}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => response)
      .catch((error) => error);
  };
export {
  getCompanies,
  getDrivers,
  getVehicles,
  getVehiclesByDriver,
  addVehicle,
  deleteVehicle
};
