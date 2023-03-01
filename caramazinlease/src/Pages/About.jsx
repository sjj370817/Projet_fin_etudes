import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img1 from "../Components/Static/img1.jpg";
import IBS from "../Components/Static/IBS.jpg";


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function About() {
  return (
    <div className='container' style={{ marginTop: '5%', color:"#04024b" }}>
      <h1>About</h1>
      <Accordion style={{color:"#04024b"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={img1} />
            </Stack>
            Me: Jean-jerome
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={IBS} />
            </Stack>
            Ecole:  IBS GLOBAL SERVICES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default About;
