import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function BasicSwitches() {
  return (
    <div className='container-switch'>
      <span style={{fontSize: '13px'}}>Estado activo</span>
      <Switch {...label} disabled defaultChecked />
    </div>
  );
}

export default BasicSwitches