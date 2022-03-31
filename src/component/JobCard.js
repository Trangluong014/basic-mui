import { Grid } from "@mui/material";
import React from "react";

function JobCard(job) {
  return (
    <Grid item xs={4}>
      {job.title}
    </Grid>
  );
}

export default JobCard;
