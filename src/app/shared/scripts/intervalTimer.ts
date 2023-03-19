import { Observable, take, timer } from "rxjs";

export const intervalTimer$ = (count: number, period: number): Observable<number> => {
  return timer(0, period)
    .pipe(
      take(count)
    )
}