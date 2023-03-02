import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img1 from "../Components/Static/img1.jpg";
import img2 from "../Components/Static/img2.svg";
import IBS from "../Components/Static/IBS.jpg";


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function About() {
  return (
    <div className='container' style={{ marginTop: '5%', color: "#04024b" }}>
      <h1>About</h1>
      <Accordion style={{ color: "#04024b" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={img2} />
            </Stack>
            Agence: Caramazinlease
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p></p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ color: "#04024b" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={img1} />
            </Stack>
            Développeur: Jean-jerome Sical
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Backend: <a href='https://github.com/sjj370817/Server_projet_fin_etudes.git' target="top" >https://github.com/sjj370817/Server_projet_fin_etudes.git</a> </li>
              <li>Frontend: <a href='https://github.com/sjj370817/Projet_fin_etudes.git' target="top">https://github.com/sjj370817/Projet_fin_etudes.git</a></li>
              <li>IBS Global Service @2022 </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ color: "#04024b" }}>
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
            <p>Depuis plus de 10 ans nous vous accompagnons dans la mise en place de formations sur mesure et certifiantes.
              Nous proposons également les certifications des plus grands éditeurs du marché du numérique, dans un centre certifié Datadock.</p>
            <p>Fondée en 2006 à Paris, IBS Global Services est une société spécialisée dans la mise en place de formations sur mesure dans le domaine de l’informatique, dans le consulting auprès des entreprises et l’accompagnement dans la conduite du changement digital plus particulièrement. </p>
            <p>IBS également partenaire de nombreux éditeurs pour les certifications informatiques depuis de nombreuses années. Elle se positionne avec près de 10 000 inscriptions par an, comme le premier centre certifiant d’Ile-de-France.</p>
            <a href='https://www.ibssc.com/' target="top" >En savoir plus</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default About;
