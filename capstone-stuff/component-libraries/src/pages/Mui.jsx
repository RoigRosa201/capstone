import { useState } from 'react'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';


export default function Mui() {
  const [volume, setVolume] = useState(30)
  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };
  return (
    <>
      <Container maxWidth="lg">
        <h1>Mui</h1>
        <Box sx={{ width: 300 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={volume} onChange={handleChange} />
            <VolumeUp />
          </Stack>
          <Slider disabled defaultValue={30} aria-label="Disabled slider" />

          <Button variant="text">Text</Button>
          <Button variant="contained" color="secondary">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Box>
      </Container>
      <Grid mt={10} container spacing={2}>
        <Grid md={8}>
          <div>md=8</div>
        </Grid>
        <Grid md={4}>
          <div>md=4</div>
        </Grid>
        <Grid md={4}>
          <div>md=4</div>
        </Grid>
        <Grid md={8}>
          <div>md=8</div>
        </Grid>
      </Grid>
    </>
  )
}