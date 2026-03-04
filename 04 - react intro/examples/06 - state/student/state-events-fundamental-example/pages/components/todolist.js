// State import
import { useState } from "react";

// MUI Components
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";

export default function ToDoList() {

    /* [stateVariable, stateVariableSetter] = useState(defaultValue)

      [variable, function] -> think [noun, verb]

      The setter is the *only* thing allowed to change the value of the state variable.

      When the setter function fires (i.e. data in the state variable changes), the component
      automatically re-renders.
  */
    const [todoText, setTodoText] = useState("")

    const onTodoTextChange = (event) => {
        // Call the state variable's setter with a new value to write to that variable.
        setTodoText(event.target.value)
        console.log(event.target.value)
    }

    const onAddTodoClick = () => {
        console.log("clicked")
    }

    return <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h2" component="h2">
                        Our ToDo List
                    </Typography>
                </Grid>

                <Grid item xs ={10}>
                    <TextField
                        id="standard-basic"
                        label="New Todo?"
                        variant="standard"
                        sx={{width: '100%'}}
                        onChange={onTodoTextChange}
                        value={todoText}
                    />
                </Grid>
                
                <Grid item xs ={2}>
                    <Button 
                        variant="contained" 
                        onClick={onAddTodoClick}
                    >Add Todo</Button>
                </Grid>
                
                Our todo text is: {todoText}

            </Grid>
        </Box>
    
}