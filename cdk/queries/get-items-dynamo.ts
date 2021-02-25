import {DynamoClient} from "./dynamo-client";

const KEY_CROSSOVER = {
    PK: {S: "COMPANY#crossover"},
    SK: {S: "COMPANY#crossover"}
};

const KEY_EMPLOYEE = {
    PK: {S: "EMPLOYEE#gergo.gera@aurea.com"},
    SK: {S: "COMPANY#crossover"}
};

const KEY_PROJECT = {
    PK: {S: "PROJECT#learn"},
    SK: {S: "COMPANY#crossover"}
};

const KEY_TICKET = {
    PK: {S: "Ticket#11111"},
    SK: {S: "PROJECT#learn"}
};

async function example() {
    let dynamoClient = new DynamoClient();

    console.log("Get Company")
    await dynamoClient.getItem(KEY_CROSSOVER);

    console.log("Get Employee")
    await dynamoClient.getItem(KEY_EMPLOYEE);

    console.log("Get Project")
    await dynamoClient.getItem(KEY_PROJECT);

    console.log("Get Ticket")
    await dynamoClient.getItem(KEY_TICKET);
}

example().then(() => "Finished");
