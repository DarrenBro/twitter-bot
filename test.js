import { expect } from 'chai';

describe('', () => {
  it('', () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date('08/22/2018');
    const currentDate = new Date('08/24/2018');
    const diffDays = Math.round(Math.abs((currentDate.getTime() - firstDate.getTime()) / (oneDay)));
    expect(diffDays).to.equal(2);
  });

});
