import "reflect-metadata";
import { expect } from 'chai';
import { CarOnSaleClient } from './CarOnSaleClient';

const client = new CarOnSaleClient()


const runningAuctions = [
    {
        "id": 16474,
        "label": "BMW S5",
        "endingTime": "2021-06-15T09:10:00.000Z",
        "state": 5,
        "minimumRequiredAsk": null,
        "currentHighestBidValue": 12000,
        "numBids": 4
    },
    {
        "id": 16475,
        "label": "BMW S6",
        "endingTime": "2021-06-15T09:10:00.000Z",
        "state": 5,
        "minimumRequiredAsk": null,
        "currentHighestBidValue": 12000,
        "numBids": 3
    },
    {
        "id": 16476,
        "label": "BMW S7",
        "endingTime": "2021-06-15T09:10:00.000Z",
        "state": 5,
        "minimumRequiredAsk": 12000,
        "currentHighestBidValue": 1200,
        "numBids": 5
    }
]

describe('getRunningAuctions', () => {
    it('it should return object', async () => {
      const result = await client.getRunningAuctions()
      expect(typeof(result)).to.equal('object');
    });
});


describe('numberOfrunningAuctions', () => {
    it('it should return number of running auction', async () => {
      const result = await client.numberOfrunningAuctions(runningAuctions)
      expect(result).to.equal(3);
    });
});


describe('calculateAverageBid', () => {
    it('it should return average of bid', async () => {
      const result = await client.calculateAverageBid(runningAuctions)
      expect(result).to.equal(4);
    });
});


describe('calculateAverageProcess', () => {
    it('it should average of process', async () => {
      const result = await client.calculateAverageProcess(runningAuctions)
      expect(result).to.equal(10);
    });
});