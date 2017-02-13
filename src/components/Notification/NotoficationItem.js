import React from 'react';

import {ListItem} from 'material-ui/List';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import moment from 'moment';
import 'moment/locale/ru';

export default class NotoficationItem extends React.Component {
  render() {
    const notification = this.props;
    return (
      <ListItem
        primaryText={notification.title}
        secondaryText={<time dateTime={notification.datetime}>{moment(notification.datetime).fromNow()}</time>}
        leftAvatar={<Avatar icon={<NotificationIcon/>}/>}
      />
    );
  }
}