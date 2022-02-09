const logger = require('./logger')

const loggerDecorator = (fn, fullMessage) => {

  const fnName = fn.name || 'anonymous function'

  const logged = (...args) => {
    const extraFields = { args: JSON.stringify(args), fullMessage }
    logger.info(`calling ${fnName}`, extraFields)

    const start = new Date().getTime()
    const executionTime = () => new Date().getTime() - start

    try {
      const result = fn(...args)
      logger.info(`${fnName} finished`, { extraFields, result: JSON.stringify(result), executionTime: executionTime() })
      return result
    } catch (error) {
      logger.error(`${fnName} crashed`, { extraFields, error: JSON.stringify(error), executionTime: executionTime() })
      throw error
    }
  }

  return logged
}

module.exports = loggerDecorator