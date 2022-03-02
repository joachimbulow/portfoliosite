import { Grid } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import Resume from "../components/cv/Resume";
import profileImage from '../assets/images/avatar.png'

export function CvPage() {

    return (
        <Grid container alignItems="center" justify="center">
            <Resume
                name="Joachim Henrik Bülow"
                firstName="Joachim"
                tel="+45 50403935"
                email="joachimbulow@hotmail.dk"
                address="Odense, Denmark"
                linkedInAccount="@joachimbulow"
                githubAccount="@joachimbulow"
                profileImage={profileImage}
                summary="Joachim is an ambitious and energetic software engineer who strives to engineer and innovate scalable and maintainable software products that are in alignment with end user requirements."
                profession="Software Engineer"
                skills={[
                    { name: "Java", level: 5 },
                    { name: "TypeScript", level: 5 },
                    { name: "Python", level: 4 },
                    { name: "Databases", level: 4 },
                    { name: "Frontend frameworks", level: 4 },
                    { name: "Backend frameworks", level: 4 },
                    { name: "Software design", level: 4 },
                    { name: "Scalability and DevOps", level: 3 },


                ]}
                experiences={[
                    {
                        company: "Doubble",
                        period: "Oct 2021 - present",
                        title: "Fullstack Developer",
                        description: (
                            <div>
                                <p>
                                Doing development in a startup on a full stack including Flutter connected via GraphQL to a Nest.js backend, storing data through MongoDB
                                </p>
                            </div>
                        )
                    },
                    {
                        company: "University of Southern Denmark",
                        period: "Jan 2020 - present",
                        title: "Student Instructor / TA",
                        description: (
                            <div>
                                <p>
                                Teacher's assistant in the course Data Management at University of Southern Denmark. The course introduces students to the foundations of SQL, NoSQL, normalization, ER diagramming, and touches upon RDF.
                                </p>
                            </div>
                        )
                    },
                    {
                        company: "Stark Industries",
                        period: "Nov 2020 - Oct 2021",
                        title: "Student Software Developer",
                        description: (
                            <div>
                                <p>
                                Worked with enterprise grade React and Angular applications supported by a microservice based Java Spring architecture to deliver customized marketing to real estate agencies through social media and newsoutlets. Also did my Bachelor thesis in collaboration with Esoft, researching and developing a platform for automatic Spring based microservice communication tracing and visualization.
                                </p>
                            </div>
                        )
                    },
                    {
                        company: "CYBOT (Now Usercentrics)",
                        period: "Oct 2019 - Nov 2020",
                        title: "Student Software Developer",
                        description: (
                            <div>
                                <p>
                                On my 3rd, 4th, and 5th semester of university I worked with Cybot to develop and maintain a support platform based on .NET Core MVC with Microsoft SQL Server database hosted on Azure. Utilized Knockout.js to develop a component based frontend.
                                </p>
                            </div>
                        )
                    },
                ]}
                education={[
                    {
                        school: "Univeristy of Southern Denmark",
                        department: "Software Engineering",
                        degree: "Masters's degree",
                        period: "2021-2022"
                    },
                    {
                        school: "Univeristy of Southern Denmark",
                        department: "Software Engineering",
                        degree: "Bachelors's degree",
                        period: "2018-2021"
                    },
                    {
                        school: "Sct. Knuds Gymnasium",
                        department: "Biotechnology, 11.1 GPA",
                        degree: "Higher Secondary Education",
                        period: "2015-2018"
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
