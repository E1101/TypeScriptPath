
import { of, Observable, interval } from "rxjs";
import { map, take } from "rxjs/operators";

const emitter: Observable<number> = of(1, 2, 3, 4);

// The `pipe` function allows us to combine multiple operator functions,
// which will each be applied to the values emitted by an Observable.
// Consider the following code:

const stringMap = <Observable<string>> emitter.pipe(
    map((value: number) => { return value * 2 }),
    map((value: number) => { return `str_${value}` })
);

stringMap.subscribe((value: string) => {
    console.log(`stringMap emitted : ${value}`);
});
/*
stringMap emitted : str_2
stringMap emitted : str_4
stringMap emitted : str_6
stringMap emitted : str_8
 */
