import { Avatar, Card, CardContent, Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/index';
import layeredPeaks from '../assets/svgs/layered-peaks.svg';
import cloud from '../assets/svgs/cloud.svg';
import waves from '../assets/svgs/waves.svg';
import waves2 from '../assets/svgs/waves2.svg';
import avatar from '../assets/images/avatar.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../assets/css/animate.css'

export function HomePage() {
	const classes = useStyles();
	const [boxColor, setBoxColor] = React.useState('red');
	const todoList = useSelector((state: RootState) => state.todoList);

	const onButtonClick = () => setBoxColor(boxColor === 'red' ? 'blue' : 'red');

	return (
		<>
			<div className={classes.section} style={{ backgroundColor: '#f5f5f5' }}>
				<Grid container justify="center" alignItems="center">
					<Grid item xs={6} container justify="center" alignItems="center">
						<Typography variant="h3">Joachim Henrik Bülow</Typography>
					</Grid>
				</Grid>
				<Grid className='animated fadeIn' container justify="center" alignItems="center" style={{ marginTop: 20 }}>
					<Grid item xs={8}>
						<Card>
							<CardContent>
								<Grid container justify="center" alignItems="center">
									<Grid item xs={12} lg={4}>
										<Grid container justify="center">
											<Avatar
												style={{ height: '300px', width: '300px', border: '2px solid' }}
												alt="Joachim Bülow"
												src={avatar}
											/>
											<Grid container justify="center" style={{paddingTop: 20}}>
												<ArrowForwardIcon />
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12} lg={6}>
										<Typography color="secondary" gutterBottom>
											Engineer of the Day
										</Typography>
										<Typography variant="h5" component="div">
											Joachim
										</Typography>
										<Typography variant="h5" component="div">
											(/ˈdʒoʊəkɪm/; Hebrew: יְהוֹיָקִים Yəhōyāqīm)
										</Typography>

										<Typography variant="h5" component="div">
											Cand.polyt / M.Sc. Software Engineering
										</Typography>
										<Typography color="secondary" style={{ marginTop: '20px' }}>
											Full Stack Software Engineer
										</Typography>
										<Typography variant="body2">
											ambitious engineer with flair for innovation;
											<br />
											{'"succesful software development requires diligence and creativity"'}
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<div className={`${classes.spacer} ${classes.layeredPeaksSpacer}`}></div>
			</div>
			<div className={classes.section} style={{ backgroundColor: '#75a7ff' }}>
				<Grid container justify="center" alignItems="center">
					<Grid item container justify="center" alignItems="center" xs={10} lg={8}>
						<Typography variant="h4" style={{color: '#f5f5f5', textAlign: "center", fontStyle: "italic"}}>To create succesful frontend code you have to think like your end user...</Typography>
						<Typography variant="h4" style={{color: '#f5f5f5'}}>Here are some of my go-to frameworks</Typography>
					</Grid>
				</Grid>
				<div className={`${classes.spacer} ${classes.wavesSpacer}`}></div>
			</div>
			<div className={classes.section} style={{ backgroundColor: '#102027' }}>
				<Grid container justify="center" alignItems="center">
					<Grid item container justify="center" alignItems="center" xs={6}>
						<Typography variant="h3">3..</Typography>
					</Grid>
				</Grid>
				<div className={`${classes.spacer} ${classes.wavesSpacer2}`}></div>
			</div>
			<div className={classes.section} style={{ backgroundColor: '#e8f5e9' }}>
				<Grid container justify="center" alignItems="center">
					<Grid item container justify="center" alignItems="center" xs={6}>
						<Typography variant="h3">4...</Typography>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

const useStyles = makeStyles({
	section: {
		minHeight: '100vh',
		paddingTop: 60,
		paddingBottom: 150,
		position: 'relative',
	},
	spacer: {
		aspectRatio: '5 / 1',
		width: '100%',
		backgroundRepeat: 'no-repeat!important' as any,
		backgroundPosition: 'center!important' as any,
		backgroundSize: 'cover!important' as any,
		position: 'absolute',
		bottom: '0px',
	},
	layeredPeaksSpacer: {
		background: `url(${layeredPeaks})`,
	},
	wavesSpacer: {
		background: `url(${waves})`,
	},
	wavesSpacer2: {
		background: `url(${waves2})`,
	},
});
