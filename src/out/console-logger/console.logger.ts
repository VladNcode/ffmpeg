import { IStreamLogger } from '../../core/handlers/stream-logger.interface.js';
import { col } from '../../helpers/colorize.js';

export class ConsoleLogger implements IStreamLogger {
	private static logger: ConsoleLogger;
	public static getInstance() {
		if (!ConsoleLogger.logger) {
			ConsoleLogger.logger = new ConsoleLogger();
		}

		return ConsoleLogger.logger;
	}

	log(...args: any[]): void {
		console.log(col.green(...args));
	}

	error(...args: any[]): void {
		console.log(col.cyan(...args));
	}

	end(): void {
		console.log(col.yellow('Finished!'));
	}
}

// const logger = ConsoleLogger.getInstance();

// logger.log('hello', 'test');
// logger.error('hello', 'test');
// logger.end();
