import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Dialog, TextField } from "@material-ui/core";
import { addVehicle } from "../../../../utils/services";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px",
  },
}));

const VehiclesModal = ({ handleOp, data }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    driver_id: "",
    plate: "",
    type: "",
    capacity: "",
    creation_date: new Date().toISOString()
  });

  useEffect(() => {
    handleOpen();
  }, [handleOp]);

  const handleOpen = () => {
    setOpen(handleOp);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleData = () => {
    addVehicle(formData);
  };

  return (
    <>
      <Dialog open={open}>
        <Box className={classes.paper}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleData(e);
              handleClose();
            }}
          >
            <div>
              <TextField
                type="number"
                name="driver_id"
                placeholder="Driver Id"
                defaultValue={data ? data.model : ""}
                onChange={(e) =>
                  setFormData({ ...formData, driver_id: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                name="plate"
                placeholder="Plate"
                onChange={(e) =>
                  setFormData({ ...formData, plate: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                name="type"
                placeholder="Type"
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                name="capacity"
                placeholder="Capacity"
                onChange={(e) =>
                  setFormData({ ...formData, capacity: e.target.value })
                }
              />
            </div>
            <div>
              <button type="submit">Submit</button>
              <button onClick={handleClose} type="cancel">
                Close
              </button>
            </div>
          </form>
        </Box>
      </Dialog>
    </>
  );
};

export default VehiclesModal;
