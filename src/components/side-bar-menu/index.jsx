import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {observable, expr} from 'mobx';
import cn from 'classnames';


@observer
export default class SideBarMenu extends Component{
    render(){
        let sideBarMenuClasses = cn('side-bar-menu', { opened: this.props.menuStore.opened });
        let menuToggleClasses = cn('side-bar-menu-toggle', { opened :this.props.menuStore.opened });

        return (
            <div className={sideBarMenuClasses}>
                <div className={menuToggleClasses} onClick={ this.menuToggle }></div>
                <div className="side-bar-menu-item">Главная</div>
                <div className="side-bar-menu-item">Работы</div>
                <div className="side-bar-menu-item">Отчеты</div>
            </div>
        )
    }

    menuToggle = () => {
        this.props.menuStore.toggle();
    }
}
