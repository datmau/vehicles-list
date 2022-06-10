import React, { useMemo, useState } from "react";
import { useTable } from "react-table";

import { Button } from "@material-ui/core";

import AddBoxIcon from "@mui/icons-material/AddCircleRounded";

import "./table.css";
import SaveRow from "../atoms/Button/SaveRow";
import DeleteRow from "../atoms/Button/DeleteRow";

const CustomTable = ({ data, columns, type, handleModal, getData, handleDialog}) => {
  const [selectedRowData, setSelectedRowData] = useState({});

  const handleSelectedData = (row) => {
    setSelectedRowData(row);
    getData(selectedRowData);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const [handleOpen, setHandleOpen] = useState(false);

  return (
    <>
      <table className="table-style" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="head-style" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
              {type === "vehicle" && (
                <Button
                  onClick={() => {
                    setHandleOpen(!handleOpen);
                    handleModal(handleOpen);
                  }}
                  color="primary"
                  size="large"
                  startIcon={<AddBoxIcon />}
                >
                  {"Add new"}
                </Button>
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="head-style" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                {type === "vehicle" && (
                  <>
                    {" "}
                    <div>
                      <SaveRow
                        row={row}
                        handleModal={handleModal}
                        getData={getData(row.values)}
                      />
                    </div>
                    <div>
                      <DeleteRow
                        row={row}
                        handleDialog={getData(true)}
                      />
                    </div>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CustomTable;
