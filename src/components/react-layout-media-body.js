import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    padding:PropTypes.any,
  };

  static defaultProps = {
    padding:'0 0 0 10px'
  };
  /*===properties end===*/


  render(){
    const {className,padding,...props} = this.props;
    return (
      <div {...props} style={{padding}} className={classNames('col react-layout-media-body',className)} />
    );
  }
}
