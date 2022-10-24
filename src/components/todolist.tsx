import * as React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./todolist.css";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

const Accordion = styled((props: AccordionProps) => (
  <div>
    <MuiAccordion disableGutters elevation={0} square {...props} />
  </div>
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
export default function Todolist() {
  return (
    <div className="Todo">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>buy 2 egg</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            buy 2 egg in supermarket
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
