Reactive programming is a paradigm of computing that is concerned with how data flows through a system and how the system reacts to changes. 

Reactive programming places asynchronous communications between services front and center, dealing with how and when they respond to changes. Combined with functional programming, you can create composable operators that can be used to build scalable reactive systems.

### Reactive programming:
For example, if one service object queries another service for some data, the response does not happen at the same time. What this means is that the response might be accepted but gets evaluated at a later time. Once the response is ready, then there are several predefined ways (such as callbacks or Futures) to propagate it to consumers.

In practical terms, Reactive programming represents a paradigm where we use declarative code to describe asynchronous communications and events. This means that when we submit a request or a message to a channel, it will be processed or accepted at a later time. As we obtain data as part of the response that we try to build, we send it back asynchronously. It is then the responsibility of the consumer to react based on those changes. The communication format needs to be established beforehand, whether you send the data in chunks or whether you send it back in a single response.
