import React, { useState } from "react";

import { Button } from "@material-ui/core";
import ConfirmDialog from "../../organisms/ConfirmDialog/ConfirmDialog";
import { deleteVehicle } from "../../../../utils/services";

const DeleteRow = ({ row }) => {
    const [open, setOpen]=useState(false)
  const handleReponse = () => {
    console.log(row.values);
    setOpen(true);
  };

  const onConfirm=()=>{
    deleteVehicle(row.values.id);
  }
  return (
    <>
      <ConfirmDialog
        title="Borrar registro"
        children="Esta seguro de querer borrar el registro"
        open={open}
        setOpen={setOpen}
        onConfirm={onConfirm}
      />
      <td>
        <Button onClick={handleReponse}>{"Delete"}</Button>
      </td>
    </>
  );
};

export default DeleteRow;
