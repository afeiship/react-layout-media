import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    direction:PropTypes.string,
  };

  static defaultProps = {
    direction:'horizontal'
  };
  /*===properties end===*/

  render(){
    const {className,direction,...props} = this.props;
    return (
      <section {...props} className={classNames('row react-layout-media',`box-${direction}`,className)} />
    );
  }
}
