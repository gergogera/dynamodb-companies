import {DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb";

export class SeedDynamoCompanies {

    private readonly dbClient: DynamoDBClient;

    constructor() {
        console.log("Init seed");
        this.dbClient = new DynamoDBClient({region: 'us-east-1'});
    }

    public seed() {
        console.log("Run seed");
        const putItemCommand = new PutItemCommand({
            TableName: 'learn-dynamodb-companies',
            Item: {
                pk: {S: "COMPANY#awesome"},
                sk: {S: "COMPANY#awesome"},
                "company location": {S: "US"},
                "company website": {S: "https://awesome.company.com/"},
                "company services": {SS: ["Great Service", "Super Service"]}
            }
        });

        const run = async () => {
            try {
                const data = await this.dbClient.send(putItemCommand);
                console.log("success");
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        };

        run().then(() => "finished");
    }
}
