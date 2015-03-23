var fs = require('fs')
  , customUtils = {}
  ;

/*
 * Parse CSV data using it's first row as headers
 * Able to understand line breaks, whatever OS they come from
 */
customUtils.parseCSVData = function (data) {
  var separator = '\n'
    , dataTable
    , header
    , i, j, row, datum
    , res = []
    ;

  if (data === null || data === undefined) {
    return [];
  }

  // Reasonable assumptions: \r\n and \r would not be found in a file except to mean a new line
  if (data.indexOf('\r\n') !== -1) {
    separator = '\r\n';
  } else if (data.indexOf('\r') !== -1) {
    separator = '\r';
  }

  dataTable = data.split(separator);

  // No data
  if (dataTable.length <= 1) {
    return [];
  }
 
  header = dataTable[0].split(';');
  for (i = 1; i < dataTable.length; i += 1) {
    row = dataTable[i].split(';');
    if (row.length !== 0) {
      datum = {};
      for (j = 0; j < header.length; j += 1) {
        if (row[j] !== undefined) {
          datum[header[j]] = row[j];
        }
      }
      res.push(datum);
    }
  }

  return res;
};


// Interface
module.exports = customUtils;
