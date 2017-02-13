import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';


import {setOpen, removeNotification, addNotification} from '../../redux/modules/notification';
import {connect} from 'react-redux';

const styleButton = {
  formButton: {
    marginLeft: '10px'
  },
  settingButton: {
    marginTop: '10px'
  }
};

@connect(
  state => ({
    open: state.notification.open,
    data: state.notification.data
  }),
  {setOpen, removeNotification, addNotification})
export default class Home extends Component {
  static propTypes = {
    open: React.PropTypes.bool,
    data: React.PropTypes.array,
    setOpen: React.PropTypes.func.isRequired,
    removeNotification: React.PropTypes.func.isRequired,
    addNotification: React.PropTypes.func.isRequired
  };
  state = {
    titleNotification: ''
  };
  handleRemoveNotification = () => {
    const arr = this.props.data;
    arr.length = 0;
    this.props.removeNotification(arr);
  };
  changeNotificationTitle = (event) => {
    this.setState({titleNotification: event.target.value});
  };
  handleAddNotification = () => {
    const title = this.state.titleNotification;
    const arr = this.props.data;
    arr.push({
      id: 13,
      title: title,
      unread: true,
      datetime: new Date(),
    });
    this.setState({titleNotification: ''});
    this.props.addNotification(arr);
  };
  render() {
    const style = require('./Home.scss');
    const textToggle = this.props.open ? 'Скрыть' : 'Показать';
    return (
      <div className="container" style={{marginTop: '60px'}}>
        <div className="col s12">
          <h1 className="center">Добавление оповещений</h1>
          <div>
            <TextField className={style.inputs}
                       value={this.state.titleNotification}
                       floatingLabelStyle={{fontSize: '18px'}}
                       floatingLabelFocusStyle={{fontSize: '18px'}}
                       onChange={this.changeNotificationTitle}
                       floatingLabelText="Введите название события..."
            />
            <RaisedButton onTouchTap={this.handleAddNotification} style={styleButton.formButton} primary label="Отправить"/>
          </div><br/>
          <div className="row">
            <div className="col s12 m7">
              <RaisedButton style={styleButton.settingButton} fullWidth primary label="Пометить все события прочитанными"/><br/>
              <RaisedButton style={styleButton.settingButton} fullWidth primary onTouchTap={this.handleRemoveNotification} label="Удалить все события"/><br/>
              <Toggle toggled={this.props.open}
                      defaultToggled={this.props.open}
                      onToggle={() => this.props.setOpen(!this.props.open)}
                      style={styleButton.settingButton}
                      labelStyle={{fontSize: '20px'}}
                      labelPosition="right"
                      label={textToggle + ' попап нотификации'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
