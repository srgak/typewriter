export class ExtraAudio extends Audio {
  constructor(url: string) {
    super(url);
  }

  public stop(): void {
    this.pause();
    this.currentTime = 0;
  }

  public playAndStop(timeout: number): void {
    this.play();
    setTimeout(() => {
      this.stop();
    }, timeout);
  }
}