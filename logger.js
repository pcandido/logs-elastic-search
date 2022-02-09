const winston = require('winston')
const { ElasticsearchTransport } = require('winston-elasticsearch')

const esTransport = new ElasticsearchTransport({
  level: 'info',
  dataStream: true,
  clientOpts: {
    node: 'http://localhost:9200',
    maxRetries: 5,
    requestTimeout: 60000
  }
})

const consoleTransport = new winston.transports.Console({
  format: winston.format.simple()
})

const logger = winston.createLogger({
  transports: [esTransport, consoleTransport]
})

module.exports = logger
