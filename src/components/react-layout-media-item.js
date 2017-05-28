import React,{PureComponent, cloneElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
  };
  /*===properties end===*/

  get children(){
    const {children} = this.props;
    if(!children.length){
      const {style,...props} = children.props;
      const newStyle = objectAssign({
        height:'100%'
      },style);
      return cloneElement(children,{
        style:newStyle,
        ...props
      });
    }
    return children;
  }
  render(){
    const {className,...props} = this.props;
    return (
      <div {...props} className={classNames('col react-layout-media-item',className)}>
        {this.children}
      </div>
    );
  }
}
