// State import
import { useState } from "react";

// MUI Components
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {ListItemText} from "@mui/material";

export default function ToDoList() {

    /* [stateVariable, stateVariableSetter] = useState(defaultValue)

      [variable, function] -> think [noun, verb]

      The setter is the *only* thing allowed to change the value of the state variable.

      When the setter function fires (i.e. data in the state variable changes), the component
      automatically re-renders.
  */
    const [todoText, setTodoText] = useState("")
    const [todoList, setTodoList] = useState([])

    const onTodoTextChange = (event) => {
        // Call the state variable's setter with a new value to write to that variable.
        setTodoText(event.target.value)
        console.log(event.target.value)
        
    }

    const onAddTodoClick = () => {
        console.log("clicked")
        // Take the existing todo list and sppend the new item to it
        // We can't just e.g. push to the array because state variables are immutable
        // and the setter just iverwrites the value of the variable so wee need to prepare the array instead

        // create a new list that has allTodos and the new todos.
        const newTodos = [...todoList, todoText]
        console.log(newTodos)
        // set the todoList
        setTodoList(newTodos)
        // reset the value of the todo text.
        setTodoText("")
    }

    return <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>

                {/* Updating Grid to the new component API:
                    - We don't need to specify an 'item' prop, Grids are items by default 
                    - Don't use 'item xs' old method, we just use 'size'
                */}

                <Grid size={12}>
                    <Typography variant="h2" component="h2">
                        Our To-Do List
                    </Typography>
                </Grid>

                <Grid size ={10}>
                    <TextField
                        id="standard-basic"
                        label="New Todo?"
                        variant="standard"
                        sx={{width: '100%'}}
                        onChange={onTodoTextChange}
                        value={todoText}
                    />
                </Grid>
                
                <Grid size ={2}>
                    <Button 
                        variant="contained" 
                        onClick={onAddTodoClick}
                    >Add Todo</Button>
                </Grid>
                
                {/* <Grid size={12}>
                    <Typography>
                        Current input text: {todoText} <br/>
                        Current Todos: {todoList.toString()}
                    </Typography>
                </Grid> */}

                <Grid size={4}>
                    <List sx={{width: `75%`}}>
                        {todoList.map((todoItem, index)=> {
                        return <ListItem key={index}>
                            <ListItemText>
                            <Typography variant="p" component="div" sx={{ fontFamily: 'default' }}>
                                {index +1}. {todoItem}
                            </Typography>
                            </ListItemText>
                        </ListItem>
                        })}
                    </List>    
                </Grid>
                

            </Grid>
        </Box>
    
}