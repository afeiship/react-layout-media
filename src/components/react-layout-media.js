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
    padding:0
  };
  /*===properties end===*/

  render(){
    const {padding,className,...props} = this.props;
    return (
      <section {...props} style={{padding}} className={classNames('row react-layout-media',className)} />
    );
  }
}