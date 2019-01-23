import React from 'react';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

function PokePanel({ items, title }) {
  return (
    <ExpansionPanel style={{ width: "100%" }}>
  
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
    
      {items.map(item => (
        <ExpansionPanelDetails>
          <Typography>{item}</Typography>
        </ExpansionPanelDetails>
      ))}

    </ExpansionPanel>
  )
}

export default PokePanel;
