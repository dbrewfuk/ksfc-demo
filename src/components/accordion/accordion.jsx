import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class MyAccordion extends React.Component {
  render() {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <>
        <div>
          <Accordion
            expanded={expanded === "panel-1"}
            onChange={handleChange("panel-1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-1bh-content"
              id="panel-1bh-header"
            >
              <Typography>Mission and Vision</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is the content for the Mission and Vision section.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Repeat the Accordion component for other sections */}
        </div>
      </>
    );
  }
}

export default MyAccordion;
