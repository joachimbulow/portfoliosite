import { Avatar, Button, Card, CardContent, Divider, Grid, IconButton, Typography } from '@material-ui/core';
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
import 'animate.css/animate.min.css';
import { SkillBox } from '../components/SkillBox';
import '../assets/css/animate.css';

//Images
import react from '../assets/images/react.png';
import angular from '../assets/images/angular.png';
import react_native from '../assets/images/react_native.jpg';
import flutter from '../assets/images/flutter.jpg';
import othersFrontend from '../assets/images/others_frontend.png';
import dotnetcore from '../assets/images/dotnetcore.png';
import mongodb from '../assets/images/mongodb.png';
import spring from '../assets/images/spring.png';
import nestjs from '../assets/images/nestjs.png';
import githubactions from '../assets/images/githubactions.png';
import dockercompose from '../assets/images/dockercompose.jpeg';
import azure from '../assets/images/azure.png';
import { useHistory } from 'react-router-dom';
import { router } from '../Router';
import { useTrackVisibility } from 'react-intersection-observer-hook';



export function HomePage() {
	const classes = useStyles();
	const [boxColor, setBoxColor] = React.useState('red');
	const todoList = useSelector((state: RootState) => state.todoList);
	const history = useHistory();

	//Intersection observers
	const [
		ref1,
		{ isVisible: isVisible1, wasEverVisible: wasEverVisible1},
	  ] = useTrackVisibility();
	  const [
		ref2,
		{  isVisible: isVisible2, wasEverVisible: wasEverVisible2 },
	  ] = useTrackVisibility();
	  const [
		ref3,
		{ isVisible: isVisible3, wasEverVisible: wasEverVisible3 },
	  ] = useTrackVisibility();
	  const [
		ref4,
		{  isVisible: isVisible4, wasEverVisible: wasEverVisible4},
	  ] = useTrackVisibility();
	  const [
		ref5,
		{ isVisible: isVisible5, wasEverVisible: wasEverVisible5 },
	  ] = useTrackVisibility();
	  const [
		ref6,
		{ isVisible: isVisible6, wasEverVisible: wasEverVisible6 },
	  ] = useTrackVisibility();
	  const [
		ref7,
		{   isVisible: isVisible7, wasEverVisible: wasEverVisible7 },
	  ] = useTrackVisibility();
	  const [
		ref8,
		{  isVisible: isVisible8, wasEverVisible: wasEverVisible8 },
	  ] = useTrackVisibility();
	  const [
		ref9,
		{  isVisible: isVisible9, wasEverVisible: wasEverVisible9 },
	  ] = useTrackVisibility();
	  const [
		ref10,
		{   isVisible: isVisible10, wasEverVisible: wasEverVisible10},
	  ] = useTrackVisibility();
	  const [
		ref11,
		{  isVisible: isVisible11, wasEverVisible: wasEverVisible11 },
	  ] = useTrackVisibility();
	  const [
		ref12,
		{  isVisible: isVisible12, wasEverVisible: wasEverVisible12 },
	  ] = useTrackVisibility();

	  //Intersection observers END

	const onButtonClick = () => setBoxColor(boxColor === 'red' ? 'blue' : 'red');

	return (
		<>
			<div className={classes.section} style={{ backgroundColor: '#f5f5f5' }}>
				<Grid container justify="center" alignItems="center">
					<Grid item xs={6} container justify="center" alignItems="center">
						<Typography variant="h3" style={{ textAlign: 'center' }}>
							Joachim Henrik Bülow
						</Typography>
					</Grid>
				</Grid>
				<Grid
					className="animated fadeIn"
					container
					justify="center"
					alignItems="center"
					style={{ marginTop: 20 }}
				>
					<Grid item xs={8}>
						<Card>
							<CardContent>
								<Grid container justify="center" alignItems="center">
									<Grid item xs={12} md={5} lg={4}>
										<Grid container justify="center">
											<Avatar
												style={{ height: '300px', width: '300px', border: '2px solid' }}
												alt="Joachim Bülow"
												src={avatar}
											/>
											<Grid container justify="center" style={{ paddingTop: 20 }}>
												<Button variant="text" onClick={() => history.push(router.cv().$)}>
													<Typography variant="body1">Learn more</Typography>
													<ArrowForwardIcon />
												</Button>
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
						<Typography
							variant="h4"
							style={{ color: '#f5f5f5', textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold' }}
						>
							To create succesful frontend code you have to think like your end user...
						</Typography>
						<Typography variant="h4" style={{ color: '#f5f5f5', marginTop: 40 }}>
							Here are some of my go-to frontend technologies
						</Typography>
					</Grid>
					<Grid
						className={isVisible1 || wasEverVisible1 ? `${classes.skillBoxContainer} animated slideInRight` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref1}
					>
						<div style={{ width: 150 }}></div>
						<SkillBox
							image={react}
							text="React was my first love, and what this site is written in"
						></SkillBox>
					</Grid>
					<Grid
						className={isVisible2 || wasEverVisible2 ? `${classes.skillBoxContainer} animated slideInLeft` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref2}
					>
						<SkillBox
							image={angular}
							text="Angular quickly became my mistress, due to her nice looks and personality"
						></SkillBox>
						<div style={{ width: 150 }}></div>
					</Grid>
					<Grid
						className={isVisible3 || wasEverVisible3 ? `${classes.skillBoxContainer} animated slideInRight` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref3}
					>
						<div style={{ width: 150 }}></div>
						<SkillBox
							image={react_native}
							text="Speedy development and familiarity secures React Native a spot in my heart"
						></SkillBox>
					</Grid>
					<Grid
						className={isVisible4 || wasEverVisible4 ? `${classes.skillBoxContainer} animated slideInLeft` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref4}
					>
						<SkillBox
							image={flutter}
							text="Flutter is to React Native what Angluar is to my React - forbidden but delicious "
						></SkillBox>
						<div style={{ width: 150 }}></div>
					</Grid>
					<Grid
						className={isVisible5 || wasEverVisible5 ? `${classes.skillBoxContainer} animated slideInRight` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref5}
					>
						<div style={{ width: 150 }}></div>
						<SkillBox
							image={othersFrontend}
							text="As well as a special shoutout to the vast ecosystem of frontend tools that we take for granted"
						></SkillBox>
					</Grid>
				</Grid>
				<div className={`${classes.spacer} ${classes.wavesSpacer}`}></div>
			</div>
			<div className={classes.section} style={{ backgroundColor: '#102027' }}>
				<Grid container justify="center" alignItems="center">
					<Grid item container justify="center" alignItems="center" xs={10} lg={8}>
						<Typography
							variant="h4"
							style={{ color: '#f5f5f5', textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold' }}
						>
							“If you can get today’s work done today, but you do it in such a way that you can’t possibly
							get tomorrow’s work done tomorrow, then you lose.” ― Martin Fowler
						</Typography>
						<Typography variant="h4" style={{ color: '#f5f5f5', marginTop: 40 }}>
							Here are some of my go-to backend technologies
						</Typography>
					</Grid>
					<Grid
						className={isVisible6 || wasEverVisible6 ? `${classes.skillBoxContainer} animated slideInRight` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref6}
					>
						<div style={{ width: 150 }}></div>
						<SkillBox
							image={nestjs}
							text="Pioneering the incorporation of true enterprise patterns for Node, what's not to like"
						></SkillBox>
					</Grid>
					<Grid
						className={isVisible7 || wasEverVisible7 ? `${classes.skillBoxContainer} animated slideInLeft` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref7}
					>
						<SkillBox
							image={spring}
							text="Modularity and dependency injection. With the right tools Java can be fun"
						></SkillBox>
						<div style={{ width: 150 }}></div>
					</Grid>
					<Grid
						className={isVisible8 || wasEverVisible8 ? `${classes.skillBoxContainer} animated slideInRight` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref8}
					>
						<div style={{ width: 150 }}></div>
						<SkillBox
							image={dotnetcore}
							text="Better-Java became cross platform. And C# is still slick"
						></SkillBox>
					</Grid>
					<Grid
						className={isVisible9 || wasEverVisible9 ? `${classes.skillBoxContainer} animated slideInLeft` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref9}
					>
						<SkillBox
							image={mongodb}
							text="Still a somewhat disruptive technology when you want to build fault-tolerant and scalable systems in a manner that relational doesn't permit"
						></SkillBox>
						<div style={{ width: 150 }}></div>
					</Grid>
				</Grid>
				<div className={`${classes.spacer} ${classes.wavesSpacer2}`}></div>
			</div>
			<div className={classes.section} style={{ backgroundColor: '#e8f5e9' }}>
				<Grid container justify="center" alignItems="center">
					<Grid item container justify="center" alignItems="center" xs={10} lg={8}>
						<Typography
							variant="h4"
							style={{ textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold' }}
						>
							“The most powerful tool we have as developers is automation.” — Scott Hanselman
						</Typography>
						<Typography variant="h4" style={{ marginTop: 40 }}>
							Here are some of my go-to DevOps technologies
						</Typography>
					</Grid>
					<Grid
						className={isVisible10 || wasEverVisible10 ? `${classes.skillBoxContainer} animated slideInRight` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref10}
					>
						<div style={{ width: 150 }}></div>
						<SkillBox
							image={dockercompose}
							text="Containerization made easy. Strong foundation for any small-to-medium sized setup"
						></SkillBox>
					</Grid>
					<Grid
						className={isVisible11 || wasEverVisible11 ? `${classes.skillBoxContainer} animated slideInLeft` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref11}
					>
						<SkillBox
							image={githubactions}
							text="A CI/CD pipeline service that integrates really well with my favorite version control servers: GitHub."
						></SkillBox>
						<div style={{ width: 150 }}></div>
					</Grid>
					<Grid
						className={isVisible12 || wasEverVisible12 ? `${classes.skillBoxContainer} animated slideInRight` : `${classes.skillBoxContainer}`}
						item
						container
						justify="center"
						alignItems="center"
						xs={12}
						ref={ref12}
					>
						<div style={{ width: 150 }}></div>
						<SkillBox image={azure} text="Cloud by Microsoft. Gates > Bezos ?"></SkillBox>
					</Grid>
				</Grid>
				<Divider></Divider>
			</div>
		</>
	);
}

const useStyles = makeStyles({
	section: {
		minHeight: '100vh',
		paddingTop: 60,
		paddingBottom: 400,
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
	skillBoxContainer: {
		marginTop: 30,
		marginBottom: 30,
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},
});
