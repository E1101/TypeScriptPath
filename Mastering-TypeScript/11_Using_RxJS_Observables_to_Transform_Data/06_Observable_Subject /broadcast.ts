
/**
 we want to keep an Observable stream open and register one or more subscribers that
 will wait around until a new value is emitted? Think in terms of an event bus, where
 multiple subscribers register their interest in a topic on an event bus, and then
 react as and when an event is raised that they are interested in. RxJS provides the
 Subject class for this express purpose.

 What makes a Subject interesting is that has the ability to multicast, which means that
 it allows multiple subscribers to the same stream and will notify all interested
 subscribers when an event happens.
 */

import { map, filter } from 'rxjs/operators';
import { Subject, Observable, Subscription } from "rxjs";
import * as _ from "underscore";

// To illustrate this behavior, let's build a minimal event bus using a `Subject`:

enum EventKeys {
    ALL = "all-events",
    SINGLE = "single-event"
}

export interface IBroadcastEvent {
    key: EventKeys;
    data: string;
}

// Let's now take a look at an implementation of an event bus, as follows:

export class BroadcastService
{
    private _eventBus = new Subject<IBroadcastEvent>();

    // The purpose of the on function is to allow subscribers to register for
    // a particular event. In other words, the subscribers are notified on the
    // emission of an event with a specific key.
    on(key: EventKeys): Observable<string> {
        return this._eventBus.asObservable().pipe(
            filter(event => event.key === key || event.key === EventKeys.ALL),
            map(event => event.data)
        );
    }

    // This function can be called to broadcast an event to
    // any registered listeners.
    broadcast(key: EventKeys, data: string) {
        this._eventBus.next({ key, data });
    }
}

// Let's now look at the implementation of a listener on this event bus, as follows:

class Listener
{
    private eventSubscription: Subscription;

    constructor(
        broadCastService: BroadcastService,
        eventKey: EventKeys,
        private listenerName: string
    ) {
        // when an event is emitted by the Broadcast service, the this variable
        // will be scoped to be this as seen by the BroadcastService class instance,
        // and not this as seen by the instance of the Listener class instance.
        // Calling the bindAll function with this as seen by the Listener class
        // instance, and the name of the function to bind to, "reactToEvent", will
        // ensure that when the reactToEvent is called, this will refer to this as
        // scoped to the Listener class instance.
        _.bindAll(this, "reactToEvent");

        this.eventSubscription = broadCastService
            .on(eventKey)
            .subscribe(this.reactToEvent);
    }

    public unregister() {
        this.eventSubscription.unsubscribe();
    }

    private reactToEvent(event: string) {
        console.log(`Listener [${this.listenerName}]
        received event : ${event}`);
    }
}

// we can now use these classes as follows:

const broadCastService = new BroadcastService();

const listenOne = new Listener(
    broadCastService,
    EventKeys.ALL,
    "first"
);

const listenTwo = new Listener(
    broadCastService,
    EventKeys.SINGLE,
    "second"
);

broadCastService.broadcast(EventKeys.ALL, "ALL event broadcast");
broadCastService.broadcast(EventKeys.SINGLE, "single event broadcast");
broadCastService.broadcast(EventKeys.ALL, "Another ALL event broadcast");

listenOne.unregister();
broadCastService.broadcast(EventKeys.ALL, "final ALL event broadcast");
/*
Listener [first] received event : ALL event broadcast
Listener [second] received event : ALL event broadcast
Listener [second] received event : single event broadcast
Listener [first] received event : Another ALL event broadcast
Listener [second] received event : Another ALL event broadcast
 */
