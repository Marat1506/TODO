import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext, useMemo, useState } from "react";
import { TaskDispatchContext } from "../../context/taskContext";
import { PlusIcon, TASK__TYPE } from "../../utils/variables";

export default function AddTask() {
  const defaultText = "";
  const [text, setText] = useState(defaultText);
  const dispatch = useContext(TaskDispatchContext);

  const title = useMemo(() => {
    return (
      <Typography
        component="h2"
        color={"#2196F3"}
        fontSize={"34px"}
        paddingBottom={"15px"}
      >
        TODO
      </Typography>
    );
  }, []);

  function addTaskClick(event) {
    event.preventDefault();
    setText(defaultText);
    dispatch({
      type: TASK__TYPE.added,
      name: text,
    });
  }

  return (
    <Box>
      {title}
      <form onSubmit={addTaskClick}>
        <TextField
          value={text}
          onChange={(event) => setText(event.target.value)}
          id="standard-basic"
          label="Имя новой задачи"
          variant="standard"
          sx={{ width: "100%" }}
          InputProps={{
            endAdornment: (
              <Button disabled={!text.trim()} onClick={addTaskClick}>
                <PlusIcon />
              </Button>
            ),
          }}
        ></TextField>
      </form>
    </Box>
  );
}
