import { createClient } from 'redis';
import logger from './shared/logger';
import { error } from 'console';

const redisClient = createClient({
  url: 'redis://localhost:6379'
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
