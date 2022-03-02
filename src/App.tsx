// prettier-ignore
import { AppBar, IconButton, MenuItem, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { Router } from 'react-router-dom';
import { RouterSwitch } from 'react-typesafe-routes';
import { Drawer } from './components/Drawer';
import { history } from './configureStore';
import { withRoot } from './withRoot';
import { useSelector } from 'react-redux';
import { useActions } from './actions';
import * as ConfigActions from './actions/config';
import { RootState } from './reducers';
import { router } from './Router';

import { Snackbar } from './components/Snackbar';

function App() {
	const classes = useStyles();
	const drawerOpen: boolean = useSelector((state: RootState) => state.drawerOpen);
	const configActions: typeof ConfigActions = useActions(ConfigActions);
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	const handleDrawerToggle = () => {
		configActions.setDrawerOpen(!drawerOpen);
	};

	return (
		<Router history={history}>
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<Snackbar />
					<AppBar className={classes.appBar}>
						<Toolbar className={classes.appToolbar}>
							<IconButton className={classes.iconButton} color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
								<MenuIcon />
							</IconButton>
							<MenuItem className={classes.menuItem} onClick={() => history.push(router.home().$)}>
								<Typography>HOME</Typography>
							</MenuItem>
							<MenuItem className={classes.menuItem} onClick={() => history.push(router.cv().$)}>
								<Typography>CV</Typography>
							</MenuItem>
							<MenuItem className={classes.menuItem} onClick={() => history.push(router.home().$)}>
								<Typography>BLOG</Typography>
							</MenuItem>
						</Toolbar>
					</AppBar>
					<Drawer />
					<div className={classes.content}>
						<RouterSwitch router={router} />
					</div>
				</div>
			</div>
		</Router>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		height: '100%',
		zIndex: 1,
		overflowX: 'hidden',
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: 'absolute',
		backgroundColor: '#131F30',
	},
	menuItem: {
		justifyContent: 'center',
		minWidth: 200,
		"&:hover": {
			background: "#455a64"
		  },
	},
	appToolbar: {
		justifyContent: "center"
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: '100%',
		height: 'calc(100% - 56px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64,
		},
	},
	iconButton: {
		position: "absolute",
		left: 0
	}
}));

export default withRoot(App);
