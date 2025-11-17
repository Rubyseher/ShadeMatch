import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('Bottoms');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="Tops" aria-label="Tops">
        Tops
      </ToggleButton>
      <ToggleButton value="Bottoms" aria-label="Bottoms">
        Bottoms
      </ToggleButton>
      <ToggleButton value="Shoes" aria-label="Shoes">
        Shoes
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
