import React, { useEffect, useMemo, useState } from "react";
import { fetchColumns } from "../../../utils/columnsMapper";
import { getCompanies } from "../../../utils/services";
import CustomDropDown from "../../ui/atoms/DropDown/DropDown";
import CustomTable from "../../ui/molecules/Table";
import LayoutContainer from "../../ui/organisms/container";
import VehiclesModal from "../../ui/organisms/Modal/modal";

const CompanyTemplate = () => {
  const [companies, setCompanies] = useState([]);
  const [companieColumns, setCompanieColumns] = useState([])
  const [driverId, setDriverId] = useState('');
  const [tableType, setTableType] = useState('company');
  const [open, setOpen] = useState(false);
  const [renew,setRenew] = useState(false);

  useEffect(() => {
    fetchColumns(tableType).then((response) => {
      setCompanies(response.data);
      setCompanieColumns(response.columns)
    });
  }, [tableType]);

  useEffect(()=>{
    fetchColumns(tableType).then((response) => {
      setCompanies(response.data);
      setCompanieColumns(response.columns)
      setRenew(!renew)
    });
   
  }, [renew]);

  const getType = (event)=>{
    setTableType(event.target.value);
  }

  const selectedRowData=(data)=>{
    if(data){
      setRenew(true);
    }
  }


  return (
    <LayoutContainer>
      <CustomDropDown getType={getType}/>
      <VehiclesModal handleOp={open}/>
      <CustomTable data={companies} columns={companieColumns} type={tableType} handleModal={(e)=>setOpen(e)} getData={(data)=>selectedRowData(data)} />
    </LayoutContainer>
  );
};

export default CompanyTemplate;
