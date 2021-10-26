import {
    Button,
    ClickAwayListener,
    Divider,
    Grid,
    InputBase,
    Paper,
    TextField,
    Tooltip,
    Typography
} from "@material-ui/core";
import React, {useRef} from "react";
import IconButton from "@material-ui/core/IconButton";
import {useTranslation} from "react-i18next";
import TakeNoteAreaStyle from "../Styles/TakeNoteAreaStyle";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ImageIcon from "@material-ui/icons/Image";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import GpsFixedSharpIcon from "@material-ui/icons/GpsFixedSharp";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ArchiveIcon from "@material-ui/icons/Archive";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import {ColorSelectorModal} from "../Modals/ColorSelectorModal";
import DefaultTheme from "../Themes/DefaultTheme";
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function TakeNoteArea(props) {
    const classes = TakeNoteAreaStyle();
    const {t} = useTranslation();
    const [openDetail, setOpenDetail] = React.useState(false);
    const [redo, setRedo] = React.useState(true);
    const [undo, setUndo] = React.useState(true);
    const [color, setColor] = React.useState(DefaultTheme.palette.success.contrastText);
    const childRef = useRef();
    const handleOpenColorSelector = (event) => {
        childRef.current.handleClickOpenWithRef();
    };
    const handleOnChangeTakeNote = () => {
        setOpenDetail(true);
    }
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];
    const handleGetDetailedNoteArea = () => {
        if (openDetail) {
            return (
                <ClickAwayListener onClickAway={() => {
                    setOpenDetail(false)
                }}>
                    <Paper className={classes.detailedNoteArea}>
                        <Grid container className={classes.contentGrid} spacing={2}>
                            <Grid item xs={12} className={classes.pinButton}>
                                <Tooltip title={t('Pin')}>
                                    <IconButton
                                        color="inherit"
                                        size={"small"}
                                        onClick={event => {
                                            event.stopPropagation();
                                            event.preventDefault();
                                            alert("Button clicked");
                                        }}
                                    >
                                        <GpsFixedSharpIcon fontSize={"small"}/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.textAreaStyle}
                                    placeholder={t('TakeNote')}
                                    inputProps={{'aria-label': t('TakeNote')}}
                                    onSelect={() => {
                                        handleOnChangeTakeNote()
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Combo box" variant={"standard"} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1} className={classes.iconButtons}>
                                        <Tooltip title={t('Reminder')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={event => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    alert("Button clicked");
                                                }}
                                            >
                                                <AccessAlarmIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1} className={classes.iconButtons}>
                                        <Tooltip title={t('ArchiveNote')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={event => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    alert("Button clicked");
                                                }}
                                            >
                                                <ArchiveIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1} className={classes.iconButtons}>
                                        <Tooltip title={t('AddImage')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    handleOpenColorSelector();
                                                }}
                                            >
                                                <ImageIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1} className={classes.iconButtons}>
                                        <Tooltip title={t('ColorSelect')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    handleOpenColorSelector();
                                                }}
                                            >
                                                <FormatPaintIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1} className={classes.iconButtons}>
                                        <Tooltip title={t('CommonPerson')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={event => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    alert("Button clicked");
                                                }}
                                            >
                                                <PersonAddIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1} className={classes.iconButtons}>
                                        <Tooltip title={t('Options')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={event => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    alert("Button clicked");
                                                }}
                                            >
                                                <MoreVertIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1} className={classes.iconButtons}>
                                        <Tooltip title={t('Options')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={event => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    alert("Button clicked");
                                                }}
                                                disabled={undo}
                                            >
                                                <UndoIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1} className={classes.iconButtons}>
                                        <Tooltip title={t('Options')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={event => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    alert("Button clicked");
                                                }}
                                                disabled={redo}
                                            >
                                                <RedoIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cancelButton}>
                                        <Button onClick={() => {
                                            setOpenDetail(false)
                                        }}>
                                            <Typography className={classes.cancelButtonText}>
                                                {t('Cancel')}
                                            </Typography>
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                    </Paper>
                </ClickAwayListener>
            )
        } else {
            return (
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder={t('TakeNote')}
                        inputProps={{'aria-label': t('TakeNote')}}
                        onSelect={() => {
                            handleOnChangeTakeNote()
                        }}
                    />
                    <IconButton color="primary" className={classes.iconButton} aria-label="search">
                        <FormatListNumberedIcon/>
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical"/>
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                        <BorderColorIcon/>
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical"/>
                    <IconButton color="primary" className={classes.iconButton} aria-label="search">
                        <ImageIcon/>
                    </IconButton>
                </Paper>

            )
        }
    }
    return (
        <Grid container style={{background: color}}>
            <Grid item lg={4} md={3} sm={2} xs={0}/>
            <Grid item lg={4} md={6} sm={8} xs={12}>
                {handleGetDetailedNoteArea()}
            </Grid>
            <Grid item lg={4} md={3} sm={2} xs={0}/>
            <ColorSelectorModal ref={childRef} setColor={setColor}/>
        </Grid>
    );

}