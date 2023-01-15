// const vegaEmbed = require('vega-embed').default;
import vegaEmbed from 'vega-embed';

let spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Add mark and encoding for data",
  "data": {
    "values": [
      {"a": "A", "b": 28},
      {"a": "B", "b": 55},
      {"a": "C", "b": 43},
      {"a": "D", "b": 91},
      {"a": "E", "b": 81},
      {"a": "F", "b": 53},
      {"a": "G", "b": 19},
      {"a": "H", "b": 87},
      {"a": "I", "b": 52}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative"}
  }
}

// Disable control links
let options = {
  "actions": {
    "export": false,
    "source": false,
    "editor": false
  }
}

vegaEmbed("#vis", spec, options); 