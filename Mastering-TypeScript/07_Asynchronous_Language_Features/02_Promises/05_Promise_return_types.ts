
// Suppose we wanted to create a Promise that connects to
// a database, and returns some data. We might start with a
// few interfaces as follows:

interface IConnection {
    server: string;
    port: number;
}

interface IError {
    code: number;
    message: string;
}

interface IDataRow {
    id: number;
    name: string;
    surname: string;
}

// We can now write a Promise using these types as follows:

function complexPromise(
    connection: IConnection,
    accessKey: string
): Promise<IDataRow[]> {
    return new Promise<IDataRow[]>(
        (
            resolve: (results: IDataRow[]) => void,
            reject: (results: IError) => void
        ) => {
            // check the connection properties
            // connect to the database
            // retrieve data, or
            // reject with an error 
        }

    );
}

// we are able to handle any sort of data structure, either being input to
// the function returning a Promise, or being output from the Promise.
// Let's see how we would use this Promise, as follows:

complexPromise({
    server: "test",
    port: 4200
}, "abcd")
    .then((rows: IDataRow[]) => {
        // do something with rows
    })
    .catch((error: IError) => {
        // do something with error
    });
