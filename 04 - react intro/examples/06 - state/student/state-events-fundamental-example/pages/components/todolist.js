import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";

export default function ToDoList() {

    const onTodoTextChange = (event) => {
        console.log(event.target.value)
    }

    const onAddTodoClick = () => {
        console.log("clicked")
    }

    return <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h2" component="h2">Our ToDo List</Typography>
                </Grid>

                <Grid item xs ={10}>
                    <TextField
                        id="standard-basic"
                        label="New Todo?"
                        variant="standard"
                        sx={{width: '100%'}}
                        onChange={onTodoTextChange}
                    />
                </Grid>
                
                <Grid item xs ={2}>
                    <Button variant="contained" onClick={onAddTodoClick}>Add Todo</Button>
                </Grid>
                

            </Grid>
        </Box>
    
}