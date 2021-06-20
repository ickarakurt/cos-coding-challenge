/**
 * This service describes an interface to access auction data from the CarOnSale API.
 */
export interface ICarOnSaleClient {

    getRunningAuctions(): Promise<[]>

    numberOfrunningAuctions(runningAuctions:[]):number

    calculateAverageBid(runningAuctions:[]):number

    calculateAverageProcess(runningAuctions:[]):number

}
