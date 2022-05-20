const { Date } = require('mssql');
const tb = require('../model');

exports.inserirLicenca = async (req, res) => {
    const data = req.body

    const result = await tb.licenca.inserirLicenca(data) 

    const [ recordObject ] = result.recordset
    const [ fkLicenca ] = Object.values(recordObject)
    
    return fkLicenca
}