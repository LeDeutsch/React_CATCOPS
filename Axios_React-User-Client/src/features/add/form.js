import React, { useState } from 'react';
import { Button, Form} from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function FormUser() {
    let history = useHistory();
    const [firstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox] = useState(false);
    const [type] = React.useState('');


    console.log(checkbox)
    const postData = () => {
        axios.post(`http://localhost:3004/posts`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')

            
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>identifiant</label>
                    <input placeholder='identifiant' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Entreprise</label>
                    <input placeholder='Entreprise' onChange={(e) =>{}}/>
                </Form.Field>
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={type}
    label="Type"
  >
    <MenuItem value={10}>Cient</MenuItem>
    <MenuItem value={20}>Admin</MenuItem>

  </Select>
  
</FormControl>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
