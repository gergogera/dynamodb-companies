import {DynamoClient} from "./dynamo-client";

const QUERY_TEMPLATE_GSI_OWNER = {
    TableName: 'learn-dynamodb-companies',
    IndexName: "GSI_StatusModifiedDate",
    KeyConditionExpression: "SK = :sk and begins_with(GSI_StatusModifiedDate_SK, :gsi_statusmodifieddate_sk)",
    ReturnConsumedCapacity: "INDEXES"
};

const QUERY_ACTIVE_PROJECTS = {
    ...QUERY_TEMPLATE_GSI_OWNER,
    ExpressionAttributeValues: {
        ":sk": {S: "COMPANY#crossover"},
        ":gsi_statusmodifieddate_sk": {S: "PROJECT#ACTIVE#"}
    }
};

const QUERY_DONE_TICKETS = {
    ...QUERY_TEMPLATE_GSI_OWNER,
    ExpressionAttributeValues: {
        ":sk": {S: "PROJECT#learn"},
        ":gsi_statusmodifieddate_sk": {S: "TICKET#DONE#"}
    },
    ScanIndexForward: false
};


async function example() {
    let dynamoClient = new DynamoClient();

    console.log("Lookup ACTIVE Projects by Company, sort by date modified")
    await dynamoClient.query(QUERY_ACTIVE_PROJECTS);

    console.log("Lookup DONE Tickets by Project, sorted by recent modification");
    await dynamoClient.query(QUERY_DONE_TICKETS);
}

example().then(() => "Finished");
