import { take, timer } from "rxjs";

interface AudioSettings {
  infinite?: boolean;
  speed?: number;
}

export class ExtraAudio extends Audio {
  public settings?: AudioSettings;

  constructor(url: string, settings?: AudioSettings) {
    super(url);
    this.settings = settings;
    this.loop = this.settings?.infinite || false;
    this.playbackRate = this.settings?.speed || 1;
  }
  
  public reset(): void {
    this.pause();
    this.currentTime = 0;
  }
  public playWithInterval(count: number, period: number = this.duration * 1000): void {
    timer(0, period)
      .pipe(
        take(count)
      )
      .subscribe(() => {
        console.log('play');
        this.play();
      });
  }
}