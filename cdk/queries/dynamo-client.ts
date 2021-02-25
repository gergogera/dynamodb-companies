import {DynamoDBClient, GetItemCommand, QueryCommand, QueryCommandInput} from "@aws-sdk/client-dynamodb";
import {AttributeValue} from "@aws-sdk/client-dynamodb/models/models_0";

export class DynamoClient {

    private readonly dbClient: DynamoDBClient;

    constructor() {
        console.log("Init QueryDynamo");
        this.dbClient = new DynamoDBClient({region: 'us-east-1'});
    }

    public async getItem(Key: { [key: string]: AttributeValue }) {
        const getItemCommand = new GetItemCommand({
            TableName: 'learn-dynamodb-companies',
            Key,
            ReturnConsumedCapacity: "INDEXES"
        });

        try {
            const data = await this.dbClient.send(getItemCommand);
            console.log("GetItem result:");
            console.log(JSON.stringify(data, null, 2));
        } catch (err) {
            console.error(err);
        }
    }

    public async query(queryCommandInput: QueryCommandInput) {
        try {
            const data = await this.dbClient.send(new QueryCommand(queryCommandInput));
            console.log("Query result:");
            console.log(JSON.stringify(data, null, 2));
        } catch (err) {
            console.error(err);
        }
    }
}
