import { FileMode } from '../../types';
import { guessFileMode } from '.';

describe('guessFileMode', () => {
  it('guesses file mode for .cs files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.cs');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .js files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.js');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .ts files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.ts');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .json files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.json');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .yaml files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.yaml');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .xml files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.xml');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .html files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.html');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .htm files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.htm');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .txt files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.txt');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .java files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.java');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .py files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.py');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .go files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.go');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .md files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.md');

    expect(fileMode).toEqual(FileMode.TEXT);
  });

  it('guesses file mode for .jpg files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.jpg');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .jpeg files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.jpeg');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .png files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.png');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .gif files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.gif');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .gifv files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.gifv');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .mp3 files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.mp3');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .mp4 files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.mp4');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .mkv files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.mkv');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .mov files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.mov');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .wav files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.wav');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .wmv files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.wmv');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .zip files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.zip');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .tar files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.tar');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .tgz files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.tgz');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .tar.gz files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.tar.gz');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .gz files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.gz');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for .7z files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.7z');

    expect(fileMode).toEqual(FileMode.BINARY);
  });

  it('guesses file mode for unknown files correctly', () => {
    const fileMode: FileMode = guessFileMode('foo.blah');

    expect(fileMode).toEqual(FileMode.BINARY);
  });
});
