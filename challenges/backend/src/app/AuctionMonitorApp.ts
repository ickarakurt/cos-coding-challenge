import { inject, injectable } from "inversify";
import { ILogger } from "./services/Logger/interface/ILogger";
import { DependencyIdentifier } from "./DependencyIdentifiers";
import "reflect-metadata";
import { ICarOnSaleClient } from "./services/CarOnSaleClient/interface/ICarOnSaleClient";
@injectable()
export class AuctionMonitorApp {

    public constructor(
        @inject(DependencyIdentifier.LOGGER) private logger: ILogger,
        @inject(DependencyIdentifier.CARONSALECLIENT) private carOnSaleClient: ICarOnSaleClient
        ) {
    }

    public async start(): Promise<void> {
        this.logger.log(`Auction Monitor started.`);
        const runningAuctions = await this.carOnSaleClient.getRunningAuctions();
        this.logger.log(`
            Number Of Running Auctions => ${this.carOnSaleClient.numberOfrunningAuctions(runningAuctions)}
            Average BID => ${this.carOnSaleClient.calculateAverageBid(runningAuctions)}
            Average Process => ${this.carOnSaleClient.calculateAverageProcess(runningAuctions)}
        `)
        process.exit();
    }

}
