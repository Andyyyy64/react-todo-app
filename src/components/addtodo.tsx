import * as React from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function Addbtn(props) {
  const [state, setState] = React.useState({
    bottomlay: false,
  });

  const [name, setName] = React.useState("");
  const [docs, setDocs] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name, docs);
    setName("");
    setDocs("");
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDocsChange(v) {
    setDocs(v.target.value);
  }

  const toggle =
    (anchor: string, isopen: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: isopen });
    };

  const list = (anchor: string) => (
    <form onSubmit={handleSubmit}>
      <Box sx={{ height: 500 }} role="presentation">
        <h1 className="newtodotitle"># new todo</h1>
        <div className="newtodowrapper">
          <TextField
            className="newtodo"
            id="outlined-required"
            label="todos name"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            className="newtodo"
            id="outlined-required"
            label="description"
            value={docs}
            onChange={handleDocsChange}
          />
        </div>
        <div className="addbtnwrapper">
          <IconButton
            type="submit"
            className="addbtn"
            onClick={toggle(anchor, false)}
          >
            <AddIcon />
          </IconButton>
        </div>
      </Box>
    </form>
  );

  return (
    <div className="addtodo">
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggle(anchor, true)}>
            <AddIcon />
            Add todo
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggle(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
