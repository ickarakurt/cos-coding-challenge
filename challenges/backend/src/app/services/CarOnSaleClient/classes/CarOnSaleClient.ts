import { ICarOnSaleClient } from "../interface/ICarOnSaleClient";
import { injectable } from "inversify";
import { getRunningAuctionsRequest } from "../helpers/RequestHelper";


@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {


    public async getRunningAuctions(): Promise<any> {
        return await getRunningAuctionsRequest()
    }

    public numberOfrunningAuctions(runningAuctions:any):number {
        return runningAuctions.length
    }

    public calculateAverageBid(runningAuctions:any):number {
        return runningAuctions.reduce((sum: any, elem: any): number => sum + elem.numBids, 0) / runningAuctions.length;
    }

    public calculateAverageProcess(runningAuctions:any):number {
        runningAuctions = runningAuctions.filter((elem:any) => elem.minimumRequiredAsk)
        return runningAuctions.reduce((sum: number, elem: any) =>  sum + (elem.currentHighestBidValue * 100  / elem.minimumRequiredAsk )
        , 0) / runningAuctions.length;
    }

}