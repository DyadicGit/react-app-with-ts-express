import React, { Component } from 'react'
import { hero, isInfo, heroBody, container, title, subtitle} from './bulma.module.scss';
import cx from 'classnames'

export class Header extends Component {
  render() {
    return (
      <header className={cx(hero, isInfo)}>
        <div className={heroBody}>
          <div className={container}>
            <h1 className={title}>
              Ruptela React Test
            </h1>
            <h2 className={subtitle}>
              You can do it!
            </h2>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
