import { Button } from "@material-ui/core";
import Reat from "react";
import ConfirmDialog from "../../organisms/ConfirmDialog/ConfirmDialog";

const SaveRow = ({ row, handleModal, getData }) => {

  const handleReponse = ()=>{
    handleModal(true);
    getData(row.values)
  }
  return (
    <>
      <td>
        <Button onClick={handleReponse} >{"Edit"}</Button>
      </td>
    </>
  );
};

export default SaveRow;
