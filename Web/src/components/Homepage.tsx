import { useState } from 'react';
import React from 'react';

// import { BowlpoolTabs } from "./BowlpoolTabs";
import { Grid, Switch, Tooltip } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { BowlpoolTable } from '../components/table/BowlpoolTable';

export function Homepage() {
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem('checked') || '{}';
    const initialValue = JSON.parse(saved);
    return initialValue;
  });

  const switchHandler = (e: React.ChangeEvent<any>) => {
    setChecked(e.target.checked);
    localStorage.setItem('checked', JSON.stringify(e.target.checked));
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <h3 className="m-2">Harry's Bowlpool</h3>
      </Grid>
      <Grid item xs={6}>
        <Tooltip title="Enable this slider to hide the bowl game name, date and each team's record">
          <FormControlLabel
            control={<Switch checked={checked} onChange={switchHandler} />}
            label="Hide bowl game details"
          />
        </Tooltip>
      </Grid>
      <Grid item xs={12}>
        <BowlpoolTable year={2022} hideBowlData={checked} />
      </Grid>
      {/* <BowlpoolTabs hideBowlData={checked} /> */}
    </Grid>
  );
}