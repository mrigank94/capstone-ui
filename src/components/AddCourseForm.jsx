import {
  Button,
  Container,
  CssBaseline,
  makeStyles,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useEffect } from "react";
import DatePicker from "./common/DatePicker";
import SelectMentor from "./SelectMentor";
import SelectMentees from "./SelectMentees";
import SelectTopic from "./SelectTopic";
import { toast } from "react-toastify";
import authService from "../service/auth.service";
import xhrService from "../service/xhr.service";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddCourseForm = (props) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [fees, setFees] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const [mentor, setMentor] = React.useState("");
  const [mentees, setMentees] = React.useState([]);
  const [startDate, setStartDate] = React.useState(
    new Date().toISOString().substr(0, 10)
  );
  const [endDate, setEndDate] = React.useState(
    new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10)
  );
  const [submitAction, setSubmitAction] = React.useState(false);

  useEffect(() => {
    async function addCourse() {
      if (!submitAction) {
        return;
      }

      try {
        //console.log(name, fees, startDate, endDate, topic, mentor, mentees);

        const { data } = await xhrService.post(
          "http://localhost:3001/api/courses",
          {
            topic: topic.value,
            name: name,
            startDate: startDate,
            endDate: endDate,
            mentorId: mentor.value,
            menteesId: mentees.map((el) => el.value),
            fees: fees,
          },
          {
            headers: {
              "x-auth-header": authService.getToken(),
            },
          }
        );
        toast.success(`Course ${data.name} created successfully`);
        console.log(data);
      } catch (ex) {
        toast.error(ex.message);
      } finally {
        setSubmitAction(false);
      }
    }

    addCourse();
  }, [submitAction]);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitAction(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h5">Create Course</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Course Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="fees"
                label="Fees"
                type="number"
                id="fees"
                autoComplete="fees"
                value={fees}
                onChange={(event) => setFees(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                label={"Start Date"}
                date={startDate}
                onChange={(event) =>
                  setStartDate(
                    new Date(event.target.value).toISOString().substr(0, 10)
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                label={"End Date"}
                date={endDate}
                onChange={(event) =>
                  setEndDate(
                    new Date(event.target.value).toISOString().substr(0, 10)
                  )
                }
              />
            </Grid>

            <Grid item xs={12}>
              <label>Select Topic</label>
              <SelectTopic value={topic} onChange={(data) => setTopic(data)} />
            </Grid>

            <Grid item xs={12}>
              <label>Select Mentor</label>
              <SelectMentor
                value={mentor}
                onChange={(data) => setMentor(data)}
              />
            </Grid>

            <Grid item xs={12}>
              <label>Select Mentees</label>
              <SelectMentees
                value={mentees}
                onChange={(data) => setMentees(data)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitForm}
          >
            Add Course
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddCourseForm;
