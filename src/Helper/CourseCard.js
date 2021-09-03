import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function CourseCard(props) {

    const Accordion = withStyles({
        root: {
          border: '1px solid rgba(0, 0, 0, .125)',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
      })(MuiAccordion);
      
      const AccordionSummary = withStyles({
        root: {
          backgroundColor: '#dbdbdb',
          borderBottom: '4px solid #8b0000',
          marginBottom: 0,
          minHeight: 30,
          '&$expanded': {
            minHeight: 56,
            borderRadius: '0%',
          },
          height: '45px',
          borderRadius: '0%',
        },
        content: {
          '&$expanded': {
            margin: '12px 0',
            borderRadius: '0%'
          },
          borderRadius: '0%'
        },
        expanded: {},
      })(MuiAccordionSummary);
      
      const AccordionDetails = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiAccordionDetails);

    return (
        <div className='course-card'>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <h3>{props.summary}</h3>
                </AccordionSummary>

                <AccordionDetails>
                    <h4>
                        {props.details}
                    </h4>
                </AccordionDetails>
            </Accordion>
        </div>
        
    )
}
