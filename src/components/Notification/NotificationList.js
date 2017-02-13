import React, {Component} from 'react';

import NotificationItem from './NotoficationItem';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


export default class NotificationList extends Component {
  static propTypes = {
    data: React.PropTypes.array,
    count: React.PropTypes.number,
    setCountBadges: React.PropTypes.func.isRequired
  };
  render() {
    const notification = this.props.data.map(item => {
      if (item.unread) {
        return <NotificationItem {...item} key={item.id}/>;
      }
    }).length = 5;
    return (
      <List>
        <Subheader>Уведомления</Subheader>
        {notification}
        <ListItem
          primaryText={'Показать все уведомления'}
        />
      </List>
    );
  }
}
