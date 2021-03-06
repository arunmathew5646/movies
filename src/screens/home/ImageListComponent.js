import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateX(2)',
    },
    
}));

export default function ImageListComponent(props) {
    const classes = useStyles();
    const {movies}  = props  ;
    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={6} cellHeight={250}>
                {movies.map((item) => (
                    <ImageListItem key={item.id} rows={1} >
                        <img src={item.poster_url} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
