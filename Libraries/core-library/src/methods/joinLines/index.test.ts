import { joinLines } from '.';

describe('joinLines', () => {
  it('joins lines correctly', () => {
    const lines: string[] = [
      'alpha bravo charlie',
      'golf mother tango',
      'xray yankee zulu'
    ];

    const line: string = joinLines(',', ...lines);

    expect(line).toEqual('alpha bravo charlie,golf mother tango,xray yankee zulu');
  });

  it('joins lines correctly where a line is blank', () => {
    const lines: string[] = [
      'alpha bravo charlie',
      '',
      'golf mother tango',
      'xray yankee zulu'
    ];

    const line: string = joinLines(',', ...lines);

    expect(line).toEqual('alpha bravo charlie,golf mother tango,xray yankee zulu');
  });
});
