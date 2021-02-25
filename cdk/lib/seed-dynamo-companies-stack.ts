import * as cdk from '@aws-cdk/core';
import {Seeder} from 'aws-cdk-dynamodb-seeder';
import {LearnDynamoCompaniesStack} from "./learn-dynamo-companies-stack";

export interface LearnDynamoCompaniesStackProps {
    tableStack: LearnDynamoCompaniesStack;
}

export class SeedDynamoCompaniesStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: LearnDynamoCompaniesStackProps) {
        super(scope, id);

        new Seeder(this, 'seed-dynamo-companies', {
            table: props.tableStack.table,
            setup: require("./data-to-setup.json"),
            teardown: require("./data-to-teardown.json"),
            refreshOnUpdate: true,
        });

        this.addDependency(props.tableStack);
    }
}
