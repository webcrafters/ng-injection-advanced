# Angular dependency injection - advanced examples

## Service interface & several implementations. 

Flexible injection by providing a service through a custom token in the app module.

Showcases easy switching between, for example, mock service (development) and real data api services.



All the services implement the method `getWords(): Observable<string[]>`






