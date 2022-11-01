import * as React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./todolist.css";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Accordion = styled((props: AccordionProps) => (
  <div>
    <MuiAccordion disableGutters elevation={0} square {...props} />
  </div>
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

type Prop = {
  name: string;
  description: string;
};

export default function Todolist(props: Prop) {
  return (
    <div className="Todo">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Checkbox />
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
