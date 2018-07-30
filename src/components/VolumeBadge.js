import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

export default class VolumeBadge extends Component {
  render() {
    let content = this.props.value.toString() + this.props.units;
    return (
      <Badge badgeContent={content}
        color="secondary">
        
      </Badge>
        //badgeStyle={{top: 12, right: 12}}
    );
  }
}
