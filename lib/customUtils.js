var fs = require('fs')
  , customUtils = {}
  ;

/*
 * Parse CSV data using it's first row as headers
 * Able to understand line breaks, whatever OS they come from
 * For now treats everything as text. Later should be able to force a data type according to options
 * For now, an empty field (i.e. ";;") yields an empty string. Later should be able to not define field
 * @param data - Raw CSV data taken from a file
 * @param _fieldOptions - Functions used to treat data during pasing
 */
customUtils.parseCSVData = function (data, _fieldOptions) {
  var lineSeparator = '\n'
    , fieldOptions = _fieldOptions || {}
    , res = []
    , dataTable
    , header
    , i, j, row, datum
    ;

  if (data === null || data === undefined) {
    return [];
  }

  // Reasonable assumptions: \r\n and \r would not be found in a file except to mean a new line
  if (data.indexOf('\r\n') !== -1) {
    lineSeparator = '\r\n';
  } else if (data.indexOf('\r') !== -1) {
    lineSeparator = '\r';
  }

  dataTable = data.split(lineSeparator);

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
          if (fieldOptions[header[j]]) {
            datum[header[j]] = fieldOptions[header[j]](datum[header[j]]);
          }
        }
      }
      res.push(datum);
    }
  }

  return res;
};


// Interface
module.exports = customUtils;
