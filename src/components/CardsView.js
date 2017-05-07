import React from 'react';

import {
  Card, CardHeader, CardMedia, CardActions, CardTitle,
  CardText, FontIcon, IconButton, Divider,
} from 'material-ui';

import FlatButton from '../mui-components/FlatButton';

const styles = {
  cardWithMedia: {
    card: {
      margin: '10px 0',
      width: '372px',
      height: '212px',
    },
    media: {
      backgroundColor: 'rgb(188, 188, 188)',
      height: '120px',
    },
    title: {
      fontSize: '14px',
      fontWeight: '500',
    },
    titleContainer: {
      padding: '4px 16px',
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '44px',
      padding: '8px 16px',
    },
  },
  cardWithHeader: {
    card: {
      margin: '10px 0',
      width: '372px',
      height: '172px',
    },
    text: {
      padding: '4px 16px',
      fontWeight: '500',
    },
    header: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      padding: '8px 4px 4px 16px',
    },
    headerTitle: {
      marginTop: '13px',
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 16px',
    },
  },
  cardWithIconButtons: {
    card: {
      margin: '10px 0',
      width: '372px',
      height: '172px',
    },
    text: {
      padding: '16px 16px 4px',
      fontWeight: '500',
    },
    header: {
      padding: '8px 16px 8px',
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    divider: {
      width: '92%',
      margin: '0 auto',
    },
    icon: {
      padding: '4px 12px',
    },
  },
};

const CardWithIconButtons = () => (
  <Card style={styles.cardWithIconButtons.card}>
    <CardText style={styles.cardWithIconButtons.text}>
      Simple long text Simple long text Simple long text
      Simple long text Simple long text Simple long text
      Simple long text Simple long text Simple long text
    </CardText>

    <CardHeader
      showExpandableButton
      style={styles.cardWithIconButtons.header}
      openIcon={<FontIcon className="material-icons" color="rgba(0, 0, 0, .54)">expand_less</FontIcon>}
      closeIcon={<FontIcon className="material-icons" color="rgba(0, 0, 0, .54)">expand_more</FontIcon>}
    />

    <div style={styles.cardWithIconButtons.divider}><Divider /></div>
    <CardActions style={styles.cardWithHeader.actions}>
      <div>
        <IconButton style={styles.cardWithIconButtons.icon}>
          <FontIcon className="material-icons" color="rgba(0, 0, 0, .54)">favorite</FontIcon>
        </IconButton>
        <IconButton style={styles.cardWithIconButtons.icon}>
          <FontIcon className="material-icons" color="rgba(0, 0, 0, .54)">bookmark</FontIcon>
        </IconButton>
      </div>
      <IconButton style={styles.cardWithIconButtons.icon}>
        <FontIcon className="material-icons" color="rgba(0, 0, 0, .54)">share</FontIcon>
      </IconButton>
    </CardActions>
  </Card>
);

const CardWithHeader = () => (
  <Card style={styles.cardWithHeader.card}>
    <CardHeader
      title="Title"
      avatar=""
      style={styles.cardWithHeader.header}
      titleStyle={styles.cardWithHeader.headerTitle}
    />

    <CardText style={styles.cardWithHeader.text}>
      Simple long text Simple long text Simple long text
      Simple long text Simple long text Simple long text
      Simple long text Simple long text Simple long text
    </CardText>

    <CardActions style={styles.cardWithHeader.actions}>
      <div>
        <FlatButton label="flat buttons" />
        <FlatButton label="colored" primary />
      </div>
      <IconButton>
        <FontIcon className="material-icons" color="rgba(0, 0, 0, .54)">share</FontIcon>
      </IconButton>
    </CardActions>
  </Card>
);

const CardWithMedia = () => (
  <Card style={styles.cardWithMedia.card}>
    <CardMedia style={styles.cardWithMedia.media} />
    <CardTitle
      title="Simple card with buttons"
      style={styles.cardWithMedia.titleContainer}
      titleStyle={styles.cardWithMedia.title}
    />

    <CardActions style={styles.cardWithMedia.actions}>
      <div>
        <FlatButton label="flat buttons" />
        <FlatButton label="colored" primary />
      </div>
      <IconButton>
        <FontIcon className="material-icons" color="rgba(0, 0, 0, .54)">share</FontIcon>
      </IconButton>
    </CardActions>
  </Card>
);

const CardsView = () => (
  <div>
    <CardWithMedia />
    <CardWithHeader />
    <CardWithIconButtons />
  </div>
);

export default CardsView;
