import { Button, Grid, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import Resume from "../components/cv/Resume";
import profileImage from '../assets/images/avatar.png'

export function CvPage() {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" justify="center">
            <Resume
                name="Joachim Henrik Bülow"
                firstName="Tony"
                tel="+45 50403935"
                email="joachimbulow@hotmail.dk"
                address="Odense, Denmark"
                linkedInAccount="@joachimbulow"
                githubAccount="@joachimbulow"
                profileImage={profileImage}
                summary="Joachim is a brilliant engineer who strives to success for the benefit of the company and the society"
                profession="Business magnate, playboy and scientist"
                skills={[
                    { name: "Electronics", level: 5 },
                    { name: "Programming", level: 5 },
                    { name: "Machine Learning", level: 5 },
                    { name: "Physics", level: 5 },
                    { name: "Leadeship", level: 4 }
                ]}
                experiences={[
                    {
                        company: "Stark Industries",
                        period: "1971 - present",
                        title: "CEO",
                        description: (
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        )
                    }
                ]}
                education={[
                    {
                        school: "MIT",
                        department: "Electrical engineering",
                        degree: "Master's degree",
                        period: "1970-1971"
                    }
                ]}
            />
        </Grid>

    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {

    }
}));
