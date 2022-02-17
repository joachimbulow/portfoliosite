import * as React from 'react';
import { Avatar, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface Props {
	image: string;
	text?: string;
}

export function SkillBox(props: Props) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardContent>
				<Grid container justify="center" alignItems="center">
					<Grid item xs={10}>
						<Grid container justify="center">
							<Avatar
								style={{ height: '150px', width: '150px', border: '2px solid' }}
								alt="Framework"
								src={props.image}
							/>
						</Grid>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="subtitle1" style={{color: '#f5f5f5', textAlign: 'center' }}>
							{props.text ? props.text : "Template text"}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

const useStyles = makeStyles({
	card: {
		maxWidth: 345,
		minWidth: '10%',
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        border: "1px solid gray"
	},
});
