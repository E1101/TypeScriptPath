/**
 Quite often, when working with Observables, we need to return a new Observable stream
 while already dealing with an Observable stream. In other words, for each Observable
 value in a stream, create a new Observable stream. While this might sound complicated,
 in the real world, it can happen fairly regularly.

 Suppose that we are working with a REST API that tells us what products are sold within
 a sales catalog. This particular API call returns an array of product IDs that are
 associated with a particular catalog. For each of these product IDs, we then need to
 initiate a new REST API call to retrieve the information for this particular product,
 such as its name and description.
 */

import { of, from, Observable } from "rxjs";
import { map, mergeMap, delay, concatMap } from "rxjs/operators";

// To illustrate this concept, consider the following interfaces:

interface IProductId {
    id: number;
}

interface IProductDescription {
    name: string;
    description: string;
}

const productList = <Observable<IProductId>> from(
    [{ id: 1 }, { id: 2 }, { id: 3 }]
);

function getProductName(id: number): Observable<IProductDescription> {
    return of(
        {
            id: id,
            name: `Product_${id}`,
            description: `Description_${id}`
        }
    );
}

// We can now use these two Observable streams as follows:

productList.pipe(
    map((value: IProductId) => {
        console.log(`Product id: ${value.id}`);
        return getProductName(value.id);
    })
).subscribe((value: Observable<IProductDescription>) => {
    value.subscribe((value: IProductDescription) => {
        console.log(`product name : ${value.name}`);
        console.log(`product desc : ${value.description}`);
    });
});

// The use of inner Observables can be optimized, however,
// by using another operator function named mergeMap.
// The mergeMap operator is used to return a single value from an
// Observable stream, so that we do not need to subscribe to the
// inner Observable.
// The mergeMap function is used to flatten an inner Observable.

productList.pipe(
    mergeMap((value: IProductId): Observable<IProductDescription> => {
        console.log(`Product id: ${value?.id}`);
        return getProductName(value.id);
    })
).subscribe((value: IProductDescription) => {
    console.log(`product name : ${value.name}`)
    console.log(`product desc : ${value.description}`)
});
