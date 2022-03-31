import { Grid } from "@mui/material";
import React from "react";
import JobCard from "./JobCard";

function JobList({ data }) {
  return (
    <div>
      <Grid>
        {data &&
          data
            .slice(0, 5)
            .map((job) => <JobCard key={job.id} job={job}></JobCard>)}
      </Grid>
    </div>
  );
}

export default JobList;
