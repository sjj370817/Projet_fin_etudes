import * as React from 'react';
import AuthService from "../services/auth.service";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import EmailIcon from '@mui/icons-material/Email';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className='container' style={{ marginTop: '5%', color: "#04024b" }}>
      <h1>Profile</h1>
      <Accordion style={{ color: "#04024b" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style ={{width:'100%'}}>
            <Stack direction="row" spacing={2} style ={{float:'left', marginRight:"10px"}}>
              <Avatar alt="Remy Sharp" />
            </Stack>
            <h3>
              Nom d'utilsateur : <strong>{currentUser.username}</strong>
            </h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 style ={{marginTop: '10px', marginBottom: '10px'}}>
              <Grid3x3Icon sx={{ display: { md: 'flex' }, mr: 1 }} style ={{float:'left', color:"rgb(221, 150, 8)"}}/><strong>Id:</strong> {currentUser.id}
            </h3>
            <h3 style ={{marginBottom: '10px'}}>
              <EmailIcon sx={{ display: { md: 'flex' }, mr: 1 }} style ={{float:'left', color:"rgb(221, 150, 8)"}}/>
              <strong>Email:</strong> {currentUser.email}
            </h3>
            <h3>
              <AddReactionIcon sx={{ display: { md: 'flex' }, mr: 1 }} style ={{float:'left', color:"rgb(221, 150, 8)"}}/>
              <strong>Authorities:</strong>
              <ul style={{ fontSize: "20px" }}>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
              </ul>
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <h>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p> */}
    </div>
  );
};

export default Profile;
