import { createClient } from 'redis';
import logger from './shared/logger';
import { error } from 'console';
import config from './config';

const redisClient = createClient({
  url: config.redis.url
});
redisClient.on('error', () => {
  logger.error('Redis Error', error);
});
redisClient.on('connect', () => {
  logger.error('Redis connected');
});
const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
