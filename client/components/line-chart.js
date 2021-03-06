'use strict'

var React = require('react')
var ReactD3 = require('react-d3-components')
var LineChart = ReactD3.LineChart

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      margin: {top: 30, bottom: 30, left: 30, right: 30},
      data: {label: 'default', values: {x:0, y:0}},
      xAxis: {label: 'x-axis'},
      yAxis: {label: 'y-axis'}
    }
  },

  getInitialState: function () {
    return {
      height: 0,
      width: 0
    }
  },

  componentWillReceiveProps: function (nextProps) {
    this.fitToParent()
  },

  componentDidMount: function () {
    this.fitToParent()
  },

  fitToParent: function () {
    var node = this.getDOMNode()
    var nodeWidth = node.parentNode.offsetWidth
    var nodeHeight = node.parentNode.offsetHeight
    var currentWidth = this.state.width
    var currentHeight = this.state.height

    if (nodeHeight !== currentHeight || nodeWidth !== currentWidth) {
      this.setState({
        height: nodeHeight,
        width: nodeWidth
      })
    }
  },

  render () {
    const {state, props} = this
    const {margin} = props

    let width = state.width - margin.right
    let height = state.height - (margin.bottom + margin.top)

    if (props.width) width = props.width
    if (props.height) height = props.height

    if (height < 0) height = 200
    if (width < 0) width = 400

    return (
      <LineChart
        data={props.data}
        width={width}
        height={height}
        margin={props.margin}
        xAxis={props.xAxis}
        yAxis={props.yAxis}
        stroke={props.stroke}
        tooltipHtml={props.tooltipHtml}
      />
    )
  }
})
