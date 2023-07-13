const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

const catchAsync = require('./utils/catchAsync');
const { itemsService } = require('./services');
const { hostsService } = require('./services');

let server;
// server = app.listen(config.port, () => {
//   logger.info(`Listening to port ${config.port}`);
// });

mongoose.set('useFindAndModify', false);
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });

  /**
   * Updating items store
   */

  const randomUpdateItems = catchAsync(async () => {
    const items = await itemsService.getItems();

    for (let item of items) {
      let tempGraph = item.itemGraph;
      tempGraph.shift();

      if (Math.random() > 0.2) {
        item.itemStatus = 'true';
        tempGraph.push(1);
      } else {
        item.itemStatus = 'false';
        tempGraph.push(0);
      }

      item.itemGraph = tempGraph;
      await itemsService.updateItem(item._id, item);
    }
    console.log(
      new Date().toLocaleString('ru-RU'),
      ' > All items have been updated ',
    );

    const hosts = await hostsService.getHosts();
    for (let host of hosts) {
      const items = await itemsService.getItemsByHostId(host._id);
      if (items.every((item) => item.itemStatus === 'true'))
        host.hostStatus = 'true';
      else host.hostStatus = 'false';
      const updatedHost = await hostsService.updateHost(host._id, host);
    }
  });

  setInterval(randomUpdateItems, 600000);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
