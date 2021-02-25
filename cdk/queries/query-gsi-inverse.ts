import {DynamoClient} from "./dynamo-client";
import {log} from "./util";

const QUERY_TEMPLATE_GSI_INVERSE = {
    TableName: 'learn-dynamodb-companies',
    IndexName: "GSI_Inverse",
    KeyConditionExpression: "SK = :sk and begins_with(PK, :pk)",
    ReturnConsumedCapacity: "INDEXES"
};

const QUERY_EMPLOYEES_BY_COMPANY = {
    ...QUERY_TEMPLATE_GSI_INVERSE,
    ExpressionAttributeValues: {
        ":sk": {S: "COMPANY#crossover"},
        ":pk": {S: "EMPLOYEE#"}
    }
};

const QUERY_PROJECTS_BY_COMPANY = {
    ...QUERY_TEMPLATE_GSI_INVERSE,
    ExpressionAttributeValues: {
        ":sk": {S: "COMPANY#crossover"},
        ":pk": {S: "PROJECT#"}
    }
};

const QUERY_EMPLOYEES_BY_PROJECT = {
    ...QUERY_TEMPLATE_GSI_INVERSE,
    ExpressionAttributeValues: {
        ":sk": {S: "PROJECT#learn"},
        ":pk": {S: "EMPLOYEE#"}
    }
}

const QUERY_TICKETS_BY_PROJECT = {
    ...QUERY_TEMPLATE_GSI_INVERSE,
    ExpressionAttributeValues: {
        ":sk": {S: "PROJECT#learn"},
        ":pk": {S: "TICKET#"}
    }
}

async function example() {
    let dynamoClient = new DynamoClient();

    log("Lookup Employees By Company")
    await dynamoClient.query(QUERY_EMPLOYEES_BY_COMPANY);

    log("Lookup Projects by Company");
    await dynamoClient.query(QUERY_PROJECTS_BY_COMPANY);

    log("Lookup Employees by Project");
    await dynamoClient.query(QUERY_EMPLOYEES_BY_PROJECT);

    log("Lookup Tickets By Project");
    await dynamoClient.query(QUERY_TICKETS_BY_PROJECT);
}

example().then(() => "Finished");
