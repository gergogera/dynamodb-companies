import {DynamoClient} from "./dynamo-client";
import {log} from "./util";

const QUERY_TEMPLATE_GSI_OWNER = {
    TableName: 'learn-dynamodb-companies',
    IndexName: "GSI_Owner",
    KeyConditionExpression: "GSI_Owner_PK = :gsi_owner_pk and begins_with(PK, :pk)",
    ReturnConsumedCapacity: "INDEXES"
};

const QUERY_TICKETS_BY_OWNER = {
    ...QUERY_TEMPLATE_GSI_OWNER,
    ExpressionAttributeValues: {
        ":gsi_owner_pk": {S: "EMPLOYEE#gergo.gera@aurea.com"},
        ":pk": {S: "TICKET#"}
    }
};

const QUERY_PROJECTS_BY_OWNER = {
    ...QUERY_TEMPLATE_GSI_OWNER,
    ExpressionAttributeValues: {
        ":gsi_owner_pk": {S: "EMPLOYEE#ionel.cocan@aurea.com"},
        ":pk": {S: "PROJECT#"}
    }
};

async function example() {
    let dynamoClient = new DynamoClient();

    log("Lookup Tickets by Owner")
    await dynamoClient.query(QUERY_TICKETS_BY_OWNER);

    log("Lookup Projects by Owner");
    await dynamoClient.query(QUERY_PROJECTS_BY_OWNER);
}

example().then(() => "Finished");
