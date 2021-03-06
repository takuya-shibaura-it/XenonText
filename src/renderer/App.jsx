import React, { Component } from 'react';
import { remote } from 'electron';
import Footer from './components/Footer';
import Body from './components/Body';
import TitleBar from './components/TitleBar';
import AppMenu from './menus/AppMenu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
    };

    const currentWindow = remote.getCurrentWindow();

    currentWindow.on('enter-full-screen', () => {
      this.setState({ isFullScreen: true });
    });

    currentWindow.on('leave-full-screen', () => {
      this.setState({ isFullScreen: false });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isFullScreen } = this.state;

    if (isFullScreen !== nextState.isFullScreen) {
      return true;
    }

    return false;
  }

  render() {
    const { isFullScreen } = this.state;

    return (
      <div className="flex flex-col h-screen">
        {!isFullScreen && <TitleBar />}
        <Body />
        <Footer />
        <AppMenu />
      </div>
    );
  }
}
