import React, {useState} from "react";
import { PopUpPassword } from "../PopupPassword";


export const PasswordCell =(props)=>{
    const { id, api, field, row } = props.params;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleChange =(newPassword)=>{
      api.setCellMode(id, field, 'edit');
      api.setEditCellValue({ id, field, value: newPassword });
      api.commitCellChange({ row, id, field })
      api.setCellMode(id, field, 'view');
    }
    return (
      <div  onDoubleClick={handleOpen}> 
        <span >****</span>
        <PopUpPassword setOpen={setOpen} isOpen={open} handleChange={handleChange}/>
      </div>
    );
  }