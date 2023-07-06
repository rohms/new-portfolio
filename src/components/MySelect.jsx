import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';


const MySelect = ({project, setProject}) => {
    
    const handleChange = (event) => {
        setProject(event.target.value);
    };

    return (
    <div className="select-container">
       <FormControl variant='outlined' fullWidth>
        <InputLabel style={{backgroundColor:'grey', borderRadius: '5px', padding: '2px'}}  id="simple-select-label">Projects</InputLabel>
        <Select
                // labelWidth={180}
                labelId="simple-select-label"
                id="simple-select"
                value={project}
                label="Age"
                onChange={handleChange}
            >
            <MenuItem value="fullstack">FullStack</MenuItem>
            <MenuItem value="widgets">Widgets</MenuItem>
            <MenuItem value="games">Games</MenuItem>
            <MenuItem value="other">Other</MenuItem>
        </Select>
       
        </FormControl>
        <Button variant="contained" id="select-btn" onClick={() => setProject("")}>Clear</Button>
        </div>
    )
}

export { MySelect };