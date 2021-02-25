# Implementation of [Learning Plan](https://docs.google.com/document/d/1bGh7I0txCGxFGxNdDqo4q3RHelx88DJlBMdNgYDVwXc/edit#):

## Data Model
![Data Model](/images/data.model.png)

## Sample Data
![Sample Data](/images/companies.png)

## Access Patterns
![Access Patterns](/images/access.patterns.png)

### GSI Inverse
expose access patterns:
* Lookup Employees by Company
* Lookup Projects by Company
* Lookup Employees by Project
* Lookup Tickets By Project

![GSI Inverse](/images/companies.gsi_inverse.png)

### GSI Owner
expose access patterns:
* Lookup Tickets by Owner
* Lookup Projects by Owner

![GSI Inverse](/images/companies.gsi_owner.png)

### GSI StatusCreatedDate
expose access patterns:
* Lookup Projects by Company and filter by Status, Sort by Creation Date
* Lookup Tickets by Project and filter by Status, Sort by Creation Date

![GSI Inverse](/images/companies.gsi_statuscreateddate.png)

### GSI StatusModifiedDate
expose access patterns:
* Lookup Projects by Company and filter by Status, Sort by Modified Date
* Lookup Tickets by Project and filter by Status, Sort by Modified Date

![GSI Inverse](/images/companies.gsi_statusmodifieddate.png)
