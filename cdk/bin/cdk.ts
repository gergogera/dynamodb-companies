#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {LearnDynamoCompaniesStack} from '../lib/learn-dynamo-companies-stack';
import {SeedDynamoCompaniesStack} from "../lib/seed-dynamo-companies-stack";

const app = new cdk.App();
const dynamoStack = new LearnDynamoCompaniesStack(app, 'learn-dynamo-companies-stack');
new SeedDynamoCompaniesStack(app, 'learn-dynamo-companies-seeder-stack', {tableStack: dynamoStack});
