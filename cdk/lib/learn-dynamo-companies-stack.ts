import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import {ProjectionType} from '@aws-cdk/aws-dynamodb';

export class LearnDynamoCompaniesStack extends cdk.Stack {
    public readonly table: dynamodb.Table;

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.table = new dynamodb.Table(this, 'learn-dynamodb-companies', {
            tableName: 'learn-dynamodb-companies',
            partitionKey: {name: 'PK', type: dynamodb.AttributeType.STRING},
            sortKey: {name: 'SK', type: dynamodb.AttributeType.STRING},
            billingMode: dynamodb.BillingMode.PROVISIONED,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            readCapacity: 5,
            writeCapacity: 5
        });

        this.table.addGlobalSecondaryIndex({
            indexName: 'GSI_Inverse',
            partitionKey: {name: 'SK', type: dynamodb.AttributeType.STRING},
            sortKey: {name: 'PK', type: dynamodb.AttributeType.STRING},
            projectionType: ProjectionType.ALL,
            readCapacity: 5,
            writeCapacity: 5
        });

        this.table.addGlobalSecondaryIndex({
            indexName: 'GSI_StatusCreatedDate',
            partitionKey: {name: 'SK', type: dynamodb.AttributeType.STRING},
            sortKey: {name: 'GSI_StatusCreatedDate_SK', type: dynamodb.AttributeType.STRING},
            projectionType: ProjectionType.ALL,
            readCapacity: 5,
            writeCapacity: 5
        });

        this.table.addGlobalSecondaryIndex({
            indexName: 'GSI_StatusModifiedDate',
            partitionKey: {name: 'SK', type: dynamodb.AttributeType.STRING},
            sortKey: {name: 'GSI_StatusModifiedDate_SK', type: dynamodb.AttributeType.STRING},
            projectionType: ProjectionType.ALL,
            readCapacity: 5,
            writeCapacity: 5
        });

        this.table.addGlobalSecondaryIndex({
            indexName: 'GSI_Owner',
            partitionKey: {name: 'GSI_Owner_PK', type: dynamodb.AttributeType.STRING},
            sortKey: {name: 'PK', type: dynamodb.AttributeType.STRING},
            projectionType: ProjectionType.ALL,
            readCapacity: 5,
            writeCapacity: 5
        });
    }
}
